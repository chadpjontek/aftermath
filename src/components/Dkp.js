import React, { useEffect, useState } from 'react';
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { useStateValue } from '../helpers/stateManager';
import { getDkp } from '../helpers';

const columns = ['player', 'class', 'dkp']

const options = {
  filterType: 'dropdown',
  responsive: 'scrollFullHeight'
}

const Dkp = () => {
  const [{ dkpSheetData }, dispatch] = useStateValue();
  const [dkpData, setDkpData] = useState([]);

  const formatData = (text) => {
    console.log(`text`, text)
    const splitTextArr = text.split(/\r?\n|\r/g);
    const data = [];
    for (let i = 0; i < splitTextArr.length; i++) {
      const line = splitTextArr[i];
      if(i!==0) {
        const arr = line.split(',').splice(0,3)
        data.push(arr);
      }
    }
    setDkpData(data)
  }

  useEffect(() => {
    // On first load of component,
    // check and see if Google sheet data has previously been downloaded
    if (dkpSheetData && dkpSheetData !== '') {
      // it has so format the data
      console.log(`dkpSheetData`, dkpSheetData)
      formatData(dkpSheetData);
    } else {
      // it hasn't so download the data and store in global state before formatting
      try {
        // eslint-disable-next-line no-unused-vars
        const fetchData = async () => {
          const response = await getDkp();
          const text = await response.text();
          dispatch({
            type: 'changeDkpSheetData',
            newDkpSheetData: text
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