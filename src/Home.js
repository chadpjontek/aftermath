import React from 'react';
import logo from './images/aftermath-min.jpg';

const Home = (props) => {
  const goToDkp = () => {
    props.history.push('/dkp');
  }
  const goToEvents = () => {
    props.history.push('/events');
  }
  return (
    <div className="App">
      <img src={logo} className="image" alt="aftermath logo" />
      <h2 className="h2">Horde - Benediction - PvP - US</h2>
      <button className='btn' onClick={goToDkp}>DKP</button>
      <button className='btn' onClick={goToEvents}>Events</button>
      <a href="https://discord.gg/X4kkAHm">
        <button className='btn'>Discord</button>
      </a>
    </div>
  )
};

export default Home;