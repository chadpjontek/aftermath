/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import logo from '../images/aftermath-min.jpg';
import rag from '../images/aftermath-one-shot-rag-min.jpg'
import nef from '../images/aftermath-nef-down-min.jpg'
import cthun from '../images/aftermath-cthun-down-min.jpg'
import tbc from '../images/aftermath-tbc-min.jpg'
import killLogs from '../images/killLogs.JPG'
import nightbane from '../images/nightbaneKill-min.jpg'
import gruul from '../images/gruulKill-min.jpg'
import mag from '../images/magKill-min.jpg'

const Home = () => {
  return (
    <div>
      <div className="container">
        <div className='img-container'>
          <img src={logo} className="image" alt="aftermath logo" />
          <p className="h1-desc">Horde - Benediction - PvP - US</p>
        </div>
      </div >
      <p className='news-date'>July 29th, 2021</p>
      <img className='news-img' src={mag} alt='Aftermath posing in front of the corpse of Magtheridon.' />
      <p className='news-p'>
      <blockquote className='center'>Vermin! Leeches! Take my blood and choke on it!</blockquote>
      </p>
      <p className='news-p'>Phase 1 complete! We couldn't have done it without our level 69 ret paladin, Guldanshwr. Grats on Glaive of the Pit btw. Maybe you'll be able to equip if for our next kill? 😛 Now it's time to prep for Vash and Kael'thas...</p>
      <div className='empty'></div>
      <p className='news-date'>July 5th, 2021</p>
      <img className='news-img' src={gruul} alt='Aftermath posing in front of the corpse of Gruul.' />
      <p className='news-p'>
      <blockquote className='center'>The Dragonkiller has been killed...</blockquote>
      </p>
      <p className='news-p'>Amazing job on Gruul tonight! One more boss to go... Magtheridon, we are coming for you!</p>
      <div className='empty'></div>
      <p className='news-date'>July 1st, 2021</p>
      <img className='news-img' src={nightbane} alt='Aftermath posing in front of the corpse of Nightbane.' />
      <p className='news-p'>
      <blockquote className='center'>You've got my attention, dragon.</blockquote>
      </p>
      <p className='news-p'>Well done on our first Nightbane kill! Not an easy fight in greens 😛  Onward to Gruul and Mag!</p>
      <div className='empty'></div>
      <p className='news-date'>May 31st, 2021</p>
      <a href='https://youtu.be/nmIVwebeOWw'>
        <img className='news-img' src={tbc} alt='TBC Dark Portal login screen with the words "TBC hype! TBC hype!"' />
      </a>
      <p className='news-p'>
      <blockquote className='center'>We're back!</blockquote>
      </p>
      <p className='news-p'>
      Getting the band back together and hopefully some new faces too. Can't wait to go through that portal again! <a href='https://youtu.be/nmIVwebeOWw' className='link'>TBC HYPE! TBC HYPE!</a> 
      </p>
      <div className='empty'></div>
      <p className='news-date'>Sep 11th, 2020</p>
      <img className='news-img' src={cthun} alt="Aftermath guild posing in front of the corpse of C'thun" />
      <p className='news-p'>
      <blockquote className='center'>"Death is close..."- C'Thun's last words</blockquote>
      </p>
      <p className='news-p'>
      39 unlikely heroes of Azeroth charged to their almost certain doom. Leading the charge, Trollgar immediately sacrificed himself to the Old God so that we may bask in the glory of his shiny purple lootz. I'd like to thank all those that believed in our dream and stuck with us through the rough times. Love you all... UwU
      </p>
      <div className='empty'></div>
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