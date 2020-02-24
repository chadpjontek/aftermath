import React from 'react';
import logo from '../images/aftermath-min.jpg';
import rag from '../images/aftermath-one-shot-rag-min.jpg'
import nef from '../images/aftermath-nef-down-min.jpg'

const Home = () => {
  return (
    <div>
      <div className="container">
        <div className='img-container'>
          <img src={logo} className="image" alt="aftermath logo" />
          <p className="h1-desc">Horde - Benediction - PvP - US</p>
        </div>
        <p className='news-date'>Feb 23rd, 2020</p>
      </div >
      <img className='news-img' src={nef} alt='Screenshot of Aftermath posing in front of the corpse of Nefarian' />
      <p className='news-p'>
        The Lord of Blackrock Spire and son of Deathwing has been defeated. Epic cheers arose as his still body lay smoldering at our feet. &lt;Insert more RP text here&gt;
      </p>
      <p className='news-p'>
        Great job everyone! Lot's of hard work put in with many consumes used! Got some great drops these first two weeks and looking forward to many more before Zul'Gurub!
      </p>
      <p className='news-p'>
        We are looking for a few more good players to join our ranks (shaman and warlocks in particular.) Join our discord to find out more!
      </p>
      <div className='empty'></div>
      <p className='news-date'>Oct 27th, 2019</p>
      <img className='news-img' src={rag} alt='Screenshot of Aftermath posing in front of the corpse of Ragnaros' />
      <p className='news-p'>We started the week off right with a little PvP on the alliance boat in Theramore. When Scooty started yelling at us, we knew it was time to put on our game faces. Onyxia didn't stand a chance. One-shot. On to MC...</p>
      <p className='news-p'>Luci, Mag, Gehennas, Garr, Shazz, Baron, Golemagg, Sulfuron, Domo... all one-shots. It was late so we decided to tackle our first Rag kill on Sunday.</p>
      <p className='news-p'>Sunday comes. We roll out to MC. Just for good measure, we kill Domo again (well actually we had to because he somehow came back to life <span role='img' aria-label='confused emoji'>😕</span>)... no problem... one-shot. We are prepared. Rag is not. ONE-SHOT!</p>
      <p className='news-p'>Feeling pretty confident of ourselves we go back to Onyxia to kill her bitch ass one more time this week. You guessed it... one-shot.</p>
      <p className='news-p'>I couldn't be more proud of the team we have built here. Thank you all so much for being amazing! Now time to farm them lootz and get ready for PvP in phase 2!</p>
      <div className='empty'></div>
    </div >
  )
};

export default Home;