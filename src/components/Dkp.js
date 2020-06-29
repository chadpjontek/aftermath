import React, { useEffect, useState } from 'react';
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { useStateValue } from '../helpers/stateManager';
import { getSheetData } from '../helpers';

const columns = ['player', 'class', 'dkp']

const options = {
  filterType: 'dropdown',
  responsive: 'scrollFullHeight'
}

const Dkp = () => {
  const [{ sheetData }, dispatch] = useStateValue();
  const [dkpData, setDkpData] = useState([]);

  const formatData = (text) => {
    // Get the dkp data from the text, located in the first match
    const regex = /([^"])+/g;
    const arr = text.match(regex);
    // Massage data so it can be consumed by table component
    const dataArr = arr[0].split(/\n/);
    const massagedData = [];
    for (const chunk of dataArr) {
      const re = /([^,])+/g;
      const chunkArr = chunk.match(re);
      const firstVals = chunkArr.slice(0, 2);
      const dkpVal = chunkArr.slice(2);
      // Convert dkp values from str to int
      const intVal = parseInt(dkpVal[0]);
      const concatVals = firstVals.concat(intVal);
      massagedData.push(concatVals);
    }
    setDkpData(massagedData);
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
          console.log(text)
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
    }
  })
  return (
    <div className='container'>
      <MuiThemeProvider theme={getMuiTheme()}>
        <MUIDataTable
          className='dkp-table'
          title={"Aftermath DKP"}
          data={dkpData}
          columns={columns}
          options={options}
        />
      </MuiThemeProvider>
    </div>
  );
};

export default Dkp;