import React from 'react';
import logo from './images/aftermath-min.jpg';
import rag from './images/aftermath-one-shot-rag-min.jpg'

const Home = () => {
  return (
    <div>
      <div className="container">
        <div className='img-container'>
          <img src={logo} className="image" alt="aftermath logo" />

        </div>
        <h2 className="h2">Horde - Benediction - PvP - US</h2>
        <h3 className='h3'>News - Oct 27th, 2019</h3>
      </div >
      <img className='news-img' src={rag} alt='Screenshot of Aftermath posing in front of the corpse of Ragnaros' />
      <p className='news-p'>We started the week off right with a little PvP on the alliance boat in Theramore. When Scooty started yelling at us, we knew it was time to put on our game faces. Onyxia didn't stand a chance. One-shot. On to MC...</p>
      <p className='news-p'>Luci, Mag, Gehennas, Garr, Shazz, Baron, Golemagg, Sulfuron, Domo... all one-shots. It was late so we decided to tackle our first Rag kill on Sunday.</p>
      <p className='news-p'>Sunday comes. We roll out to MC. Just for good measure, we kill Domo again (well actually we had to because he somehow came back to life <span role='img' aria-label='confused emoji'>😕</span>)... no problem... one-shot. We are prepared. Rag is not. ONE-SHOT!</p>
      <p className='news-p'>Feeling pretty confident of ourselves we go back to Onyxia to kill her bitch ass one more time this week. You guessed it... one-shot.</p>
      <p className='news-p'>I couldn't be more proud of the team we have built here. Thank you all so much for being amazing! Now time to farm them lootz and get ready for PvP in phase 2!</p>
      <div className='empty'></div>
    </div>
  )
};

export default Home;