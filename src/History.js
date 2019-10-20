import React, { useEffect, useState } from 'react';
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useStateValue } from './stateManager';

const columns = ['players', 'dkp',
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
  },
  'reason']
const options = {
  filterType: 'dropdown',
  responsive: 'scrollFullHeight',
  rowsPerPage: '15'
}

const History = (props) => {
  const [{ sheetData }, dispatch] = useStateValue();
  const [historyData, setHistoryData] = useState([])
  const formatData = (text) => {
    const regex = /([^"])+/g;
    const arr = text.match(regex);
    const dataArr = arr[2].split(',');

    // split array into n array chunks
    const array_chunks = (array, chunk_size) => Array(Math.ceil(array.length / chunk_size)).fill().map((_, index) => index * chunk_size).map(begin => array.slice(begin, begin + chunk_size))

    const data = array_chunks(dataArr, 4);
    // Massage data so it can be consumed by table component
    // data chunk looks like this --> [player, dkp, date, reason]
    // Convert dkp values from str to int
    const massagedData = [];
    for (const chunk of data) {
      const firstVal = chunk.slice(0, 1);
      const dkpVal = chunk.slice(1, 2);
      const intVal = parseInt(dkpVal[0]);
      const finalVals = chunk.slice(2);
      const concatVals = firstVal.concat(intVal, finalVals);
      massagedData.push(concatVals);
    }
    setHistoryData(massagedData);
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
          const response = await fetch(
            'https://docs.google.com/spreadsheets/d/e/2PACX-1vTScmdklpM8HplsoVyZzBgGcZT8LY0Dzw29EduKlZvhbwpmgdb7xjslxgR7xsHPYJlGrSrB7DR4h4Cs/pub?output=csv',
            {
              mode: 'cors',
              method: 'GET'
            }
          );
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
  const goToDkp = () => props.history.push('/dkp');
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
        <Button variant="contained" className='btn-nav' onClick={goToDkp}>
          DKP
      </Button>
        <Button variant="contained" className='btn-nav' onClick={goToLoot}>
          Loot
      </Button>
      </div>
      <MuiThemeProvider theme={getMuiTheme()}>
        <MUIDataTable
          className='dkp-table'
          title={"Aftermath DKP"}
          data={historyData}
          columns={columns}
          options={options}
        />
      </MuiThemeProvider>
    </div>
  );
};

export default History;