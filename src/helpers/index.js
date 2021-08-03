// var targetUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTAJN5UbCNe5CxHhtF9rump8-Y-f3DXFQSlwVvjbwvC-l-hzlw5DpbrzHDUQdUdavKNwdGK8Un1LelR/pub?output=csv'
const dkpUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTAJN5UbCNe5CxHhtF9rump8-Y-f3DXFQSlwVvjbwvC-l-hzlw5DpbrzHDUQdUdavKNwdGK8Un1LelR/pub?gid=0&single=true&output=csv'
const lootUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTAJN5UbCNe5CxHhtF9rump8-Y-f3DXFQSlwVvjbwvC-l-hzlw5DpbrzHDUQdUdavKNwdGK8Un1LelR/pub?gid=1655191196&single=true&output=csv'
const historyUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTAJN5UbCNe5CxHhtF9rump8-Y-f3DXFQSlwVvjbwvC-l-hzlw5DpbrzHDUQdUdavKNwdGK8Un1LelR/pub?gid=735447977&single=true&output=csv'

/**
 * Fetch the Google Sheets DKP data
 * @returns a promise for the string data
 */
export const getDkp = () => {
  return fetch(dkpUrl,
    {
      mode: 'cors',
      method: 'GET'
    }
  );
};

/**
 * Fetch the Google Sheets DKP data
 * @returns a promise for the string data
 */
export const getLoot = () => {
  return fetch(lootUrl,
    {
      mode: 'cors',
      method: 'GET'
    }
  );
};

/**
 * Fetch the Google Sheets DKP data
 * @returns a promise for the string data
 */
export const getHistory = () => {
  return fetch(historyUrl,
    {
      mode: 'cors',
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