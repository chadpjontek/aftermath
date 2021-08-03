import React, { useEffect, useState } from 'react';
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { useStateValue } from '../helpers/stateManager';
import { getHistory, array_chunks } from '../helpers';

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
  responsive: 'scrollFullHeight'
}

const History = () => {
  const [{ sheetData }, dispatch] = useStateValue();
  const [historyData, setHistoryData] = useState([])
  const formatData = (text) => {
    console.log(`text`, text)
    // Get the history data from the text, located in the third match
    // const regex = /([^"])+/g;
    // const arr = text.match(regex);
    // if(!arr) return;
    // console.log(`arr`, arr)
    const dataArr = text.split(/\n/gm);
    console.log(`dataArr`, dataArr)
    for (const line of dataArr) {
      console.log(line.replace(/"/g,""))
    }
    // Split the array into chunks for each row
    const data = array_chunks(dataArr, 4);
    // console.log(`data`, data)
    // Massage data so it can be consumed by table component
    // data chunk looks like this --> [player, dkp, date, reason]
    // const massagedData = [];
    // for (const chunk of data) {
    //   const firstVal = chunk.slice(0, 1);
    //   const dkpVal = chunk.slice(1, 2);
    //   // Convert dkp values from str to int
    //   const intVal = parseInt(dkpVal[0]);
    //   const finalVals = chunk.slice(2);
    //   const concatVals = firstVal.concat(intVal, finalVals);
    //   massagedData.push(concatVals);
    // }
    // setHistoryData(massagedData);
  }
  // TODO: needs updated 
  // useEffect(() => {
  //   // On first load of component,
  //   // check and see if Google sheet data has previously been downloaded
  //   if (sheetData !== '') {
  //     // it has so format the data
  //     // formatData(sheetData);
  //   } else {
  //     // it hasn't so download the data and store in global state before formating
  //     try {
  //       // eslint-disable-next-line no-unused-vars
  //       const fetchData = async () => {
  //         const response = await getHistory();
  //         const text = await response.text();
  //         dispatch({
  //           type: 'changeSheetData',
  //           newSheetData: text
  //         });
  //         formatData(text);
  //       }
  //       fetchData();

  //     } catch (error) {
  //       throw error;
  //     }
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

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
    }
  })
  return (
    <div className='container'>
      {/* <MuiThemeProvider theme={getMuiTheme()}>
        <MUIDataTable
          className='dkp-table'
          title={"Aftermath DKP"}
          data={historyData}
          columns={columns}
          options={options}
        />
      </MuiThemeProvider> */}
      <div style={{
        color: 'white',
        padding: '30px',
        textAlign: 'center',
        fontSize: '24px'
      }}>UNDER CONSTRUCTION</div>
    </div>
  );
};

export default History;