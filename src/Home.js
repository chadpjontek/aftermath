import React from 'react';
import logo from './images/aftermath-min.jpg';

const Home = (props) => {
  const goToDkp = () => {
    props.history.push('/dkp');
  }
  return (
    <div className="App">
      <img src={logo} className="image" alt="aftermath logo" />
      <h2 className="h2">Horde - Benediction - PvP - US</h2>
      <button className='btn' onClick={goToDkp}>DKP</button>
      <a href="https://discord.gg/X4kkAHm">
        <button className='btn'>Discord</button>
      </a>
    </div>
  )
};

export default Home;