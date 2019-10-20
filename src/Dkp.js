import React, { useEffect, useState } from 'react';
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useStateValue } from './stateManager';
import { getSheetData, array_chunks } from './helpers';

const columns = ['player', 'class', 'dkp']

const options = {
  filterType: 'dropdown',
  responsive: 'scrollFullHeight',
  rowsPerPage: '15'
}

const Dkp = (props) => {
  const [{ sheetData }, dispatch] = useStateValue();
  const [dkpData, setDkpData] = useState([]);

  const formatData = (text) => {
    // Get the dkp data from the text, located in the first match
    const regex = /([^"])+/g;
    const arr = text.match(regex);
    const dataArr = arr[0].split(',');
    // Split the array into chunks for each row
    const data = array_chunks(dataArr, 6);
    // Massage data so it can be consumed by table component
    // data chunk looks like this --> [player, dkp, date, reason]
    const massagedData = [];
    for (const chunk of data) {
      const firstVals = chunk.slice(0, 2);
      const dkpVal = chunk.slice(2);
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
  const goToHome = () => props.history.push('/');
  const goToHistory = () => props.history.push('/history');
  const goToLoot = () => props.history.push('/loot');

  const getMuiTheme = () => createMuiTheme({
    overrides: {
      MUIDataTableSelectCell: {
        root: {
          backgroundColor: '#000'
        },
        headerCell: {
          backgroundColor: '#f00',
          color: '#000'
        }
      },
      MUIDataTableHeadCell: {
        fixedHeader: {
          fontFamily: 'Work Sans',
          fontWeight: 600,
          fontSize: '1.2rem',
          backgroundColor: '#f00'
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
          backgroundColor: '#f00',
          color: '#FF0000',
          fontWeight: 'bold'
        }
      },
      MUIDataTableBodyCell: {
        root: {
          backgroundColor: '#000',
          color: '#FF0000',
          fontWeight: 'bold'
        }
      },
      MUIDataTableToolbar: {
        root: {
          backgroundColor: '#000',
          color: '#FF0000',
          fontWeight: 'bold'
        }
      },
      MuiSvgIcon: {
        root: {
          color: '#f00',
        }
      },
      MuiSelect: {
        icon: {
          color: '#f00',
        }
      },
      MuiCheckbox: {
        root: {
          color: '#f00',
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
          color: '#FF0000',
          fontWeight: 'bold'
        }
      },
      MuiTablePagination: {
        root: {
          backgroundColor: '#000',
          color: '#FF0000',
          fontWeight: 'bold'
        }
      },
    }
  })
  return (
    <div>
      <div className='buttonNav'>
        <Button variant="contained" className='btn-nav' onClick={goToHome}>
          Home
      </Button>
        <Button variant="contained" className='btn-nav' onClick={goToLoot}>
          Loot
      </Button>
        <Button variant="contained" className='btn-nav' onClick={goToHistory}>
          History
      </Button>
      </div>
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