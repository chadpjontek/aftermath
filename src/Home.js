import React from 'react';
import logo from './images/aftermath-min.jpg';

const Home = (props) => {
  const gotoDkp = () => {
    props.history.push('/dkpTable');
  }
  return (
    <div className="App">
      <img src={logo} className="image" alt="aftermath logo" />
      <h2 className="h2">Horde - Benediction - PvP - US</h2>
      <button className='btn' onClick={gotoDkp}>DKP</button>
      <a href="https://discord.gg/X4kkAHm">
        <button className='btn'>Discord</button>
      </a>
    </div>
  )
};

export default Home;