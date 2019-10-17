import React from 'react';
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import dkpData from './dkpData';

const dataArr = dkpData.split(',');

// split array into n array chunks
const array_chunks = (array, chunk_size) => Array(Math.ceil(array.length / chunk_size)).fill().map((_, index) => index * chunk_size).map(begin => array.slice(begin, begin + chunk_size))

const data = array_chunks(dataArr, 6);

// Massage data so it can be consumed by table component
// data chunk looks like this --> [player, dkp, date, reason]
// Convert dkp values from str to int
const massagedData = [];
for (const chunk of data) {
  const firstVals = chunk.slice(0, 2);
  const dkpVal = chunk.slice(2);
  const intVal = parseInt(dkpVal[0]);
  const concatVals = firstVals.concat(intVal);
  massagedData.push(concatVals);
}

const columns = ['player', 'class', 'dkp']

const options = {
  filterType: 'dropdown',
  responsive: 'scrollFullHeight',
  rowsPerPage: '15'
}

const Dkp = (props) => {

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
          data={massagedData}
          columns={columns}
          options={options}
        />
      </MuiThemeProvider>
    </div>
  );
};

export default Dkp;