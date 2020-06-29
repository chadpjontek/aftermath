/**
 * Fetch the Google Sheets DKP data
 * @returns a promise for the string data
 */
export const getSheetData = () => {
  return fetch(
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vTScmdklpM8HplsoVyZzBgGcZT8LY0Dzw29EduKlZvhbwpmgdb7xjslxgR7xsHPYJlGrSrB7DR4h4Cs/pub?output=csv',
    {
      mode: 'no-cors',
      method: 'GET'
    }
  );
};

/**
 * Split array into n array chunks
 * @param {arr} array the array you want to split into chunks
 * @param {num} chunk_size the length of each array chunk
 */
export const array_chunks = (array, chunk_size) => Array(Math.ceil(array.length / chunk_size)).fill().map((_, index) => index * chunk_size).map(begin => array.slice(begin, begin + chunk_size));