import React, { useState, useEffect } from 'react';
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import { useStateValue } from './stateManager';
import { getSheetData, array_chunks } from './helpers';

const columns = ['player',
  {
    name: "item",
    options: {
      customBodyRender: (value) => {
        const valArr = value.split('-');
        return (
          <Link href={`https://classic.wowhead.com/item=${valArr[1]}`} data-wowhead={`item=${valArr[1]}`} className=''>
            {`${valArr[0]}`}
          </Link>
        )
      }
    }
  },
  'zone', 'boss',
  {
    name: 'date',
    options: {
      customBodyRender: (value) => {
        const event = new Date(parseInt(value * 1000));
        const date = event.toISOString();
        return (
          <p>{date}</p>
        )
      }
    }
  }, 'cost']
const options = {
  filterType: 'dropdown',
  responsive: 'scrollFullHeight'
}

const Loot = (props) => {
  const [{ sheetData }, dispatch] = useStateValue();
  const [lootData, setLootData] = useState([]);

  const formatData = (text) => {
    // Get the history data from the text, located in the fifth match
    const regex = /([^"])+/g;
    const arr = text.match(regex);
    const dataArr = arr[4].split(',');
    // Split the array into chunks for each row
    const data = array_chunks(dataArr, 7);
    // Massage data so it can be consumed by table component
    // data chunk looks like this --> [player, item name, item number, zone, boss, date, cost]
    const massagedData = [];
    for (const chunk of data) {
      const itemVals = chunk.slice(1, 3);
      // Join item name and item number witj a "-"
      const joinedVal = itemVals.join('-');
      const firstVal = chunk.slice(0, 1);
      const nextVals = chunk.slice(3, 6);
      const finalVal = chunk.slice(6);
      // Convert cost value from str to int
      const intVal = parseInt(finalVal[0]);
      const concatVals = firstVal.concat(joinedVal, nextVals, intVal);
      massagedData.push(concatVals);
    }
    setLootData(massagedData);
  }
  useEffect(() => {
    // On first load of component,
    // check and see if Google sheet data has previously been downloaded
    if (sheetData !== '') {
      // it has so format the data
      formatData(sheetData);
    } else {
      // it hasn't so download the data and store in global state before formating
      try {
        const fetchData = async () => {
          const response = await getSheetData();
          const text = await response.text();
          dispatch({
            type: 'changeSheetData',
            newSheetData: text
          });
          formatData(text);
        }
        fetchData();

      } catch (error) {
        throw error;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMuiTheme = () => createMuiTheme({
    overrides: {
      MUIDataTable: {
        responsiveScrollFullHeight: {
          overflowX: 'scroll'
        }
      },
      MUIDataTableSelectCell: {
        root: {
          backgroundColor: '#000'
        },
        headerCell: {
          backgroundColor: '#c00',
          color: '#000'
        }
      },
      MUIDataTableHeadCell: {
        fixedHeader: {
          fontFamily: 'Work Sans',
          fontWeight: 600,
          fontSize: '1.2rem',
          backgroundColor: '#c00'
        }
      },
      MuiTableCell: {
        root: {
          backgroundColor: '#000',
          borderBottom: '1px solid #6b6b6b',
        },
        head: {
          fontWeight: 'bold'
        }
      },
      MUIDataTableHeadRow: {
        root: {
          backgroundColor: '#c00',
          color: '#c00',
          fontWeight: 'bold'
        }
      },
      MUIDataTableBodyCell: {
        root: {
          backgroundColor: '#000',
          color: '#c00',
          fontWeight: 'bold'
        }
      },
      MUIDataTableToolbar: {
        root: {
          backgroundColor: '#000',
          color: '#c00',
          fontWeight: 'bold'
        }
      },
      MuiSvgIcon: {
        root: {
          color: '#c00',
        }
      },
      MuiSelect: {
        icon: {
          color: '#c00',
        }
      },
      MuiCheckbox: {
        root: {
          color: '#c00',
        }
      },
      MuiInputBase: {
        input: {
          color: '#fff',
        }
      },
      MuiInput: {
        underline: {
          color: '#fff',
        }
      },
      MUIDataTableBodyRow: {
        root: {
          backgroundColor: '#000',
          color: '#c00',
          fontWeight: 'bold'
        }
      },
      MuiTablePagination: {
        root: {
          backgroundColor: '#000',
          color: '#c00',
          fontWeight: 'bold'
        }
      },
      MuiLink: {
        root: {
          color: '#c00',
        }
      },
    }
  })
  return (
    <div className='container'>
      <MuiThemeProvider theme={getMuiTheme()}>
        <MUIDataTable
          className='dkp-table'
          title={"Aftermath DKP"}
          data={lootData}
          columns={columns}
          options={options}
        />
      </MuiThemeProvider>
    </div>
  );
};

export default Loot;