import React from 'react';
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import lootData from './lootData';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

const dataArr = lootData.split(',');

// split array into n array chunks
const array_chunks = (array, chunk_size) => Array(Math.ceil(array.length / chunk_size)).fill().map((_, index) => index * chunk_size).map(begin => array.slice(begin, begin + chunk_size))

const data = array_chunks(dataArr, 7);
// Take each chunk of data, and combine the 1st and 2nd values.
const mergedData = [];
for (const chunk of data) {
  const itemVals = chunk.slice(1, 3);
  const combinedVals = itemVals.join('-');
  const firstVal = chunk.slice(0, 1);
  const endVals = chunk.slice(3);
  const concatVals = firstVal.concat(combinedVals, endVals);
  mergedData.push(concatVals);
}
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
        const date = event.toString();
        return (
          <p>{date}</p>
        )
      }
    }
  }, 'cost']
const options = {
  filterType: 'dropdown',
  responsive: 'scrollFullHeight',
  rowsPerPage: '15'
}

const Loot = (props) => {
  const goToHome = () => props.history.push(`/home`);
  const goToDkp = () => props.history.push(`/dkp`);
  const goToHistory = () => props.history.push(`/history`);

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
      MuiLink: {
        root: {
          color: '#FF0000',
        }
      },
    }
  })
  return (
    <div>
      <div className='buttonNav'>
        <Button variant="contained" href="#contained-buttons" className='btn-nav' onClick={goToHome}>
          Home
      </Button>
        <Button variant="contained" href="#contained-buttons" className='btn-nav' onClick={goToDkp}>
          DKP
      </Button>
        <Button variant="contained" href="#contained-buttons" className='btn-nav' onClick={goToHistory}>
          History
      </Button>
      </div>
      <MuiThemeProvider theme={getMuiTheme()}>
        <MUIDataTable
          className='dkp-table'
          title={"Aftermath DKP"}
          data={mergedData}
          columns={columns}
          options={options}
        />
      </MuiThemeProvider>
    </div>
  );
};

export default Loot;