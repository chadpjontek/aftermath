import React from 'react';
import logo from '../images/aftermath-min.jpg';
import rag from '../images/aftermath-one-shot-rag-min.jpg'
import nef from '../images/aftermath-nef-down-min.jpg'
import killLogs from '../images/killLogs.JPG'

const Home = () => {
  return (
    <div>
      <div className="container">
        <div className='img-container'>
          <img src={logo} className="image" alt="aftermath logo" />
          <p className="h1-desc">Horde - Benediction - PvP - US</p>
        </div>
      </div >
      <p className='news-date'>Aug 7th, 2020</p>
      <a href='https://www.killlogs.com/'><img className='news-img' src={killLogs} alt='Kill Logs, real-time world PvP statistics for World of Warcraft Classic' /></a>
      <p className='news-p'>
      <a className='link' href='https://www.killlogs.com/'>Kill Logs</a> is a web site that provides real-time world PvP statistics for World of Warcraft Classic. It works much the same way as "Warcraftlogs" does by players uploading their kills through a client app while the site performs the visual display of the data. 
      </p>
      <p className='news-p'>
      Besides statistics, there is a bounty system that promotes both bounty hunters and contractors through a reputation system. Additionally, I am working on <strong>Leaderboards</strong> and a <strong>Conquest</strong> system. This system will allow players to vote on zones to attack. Once a zone is declared attackable, a win condition will be set based on several factors. Guilds and factions will then be able to conquer these zones and place their mark on Azeroth.
      </p>
      <p className='news-p'>
      This site was created out of a passion for the game and love of world PvP. I'm open to further suggestions so reach out if you have any and I'll try to get back with you ASAP! - Bone
      </p>
      <div className='empty'></div>
      <p className='news-date'>Feb 23rd, 2020</p>
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