import React from 'react';
import Button from '@material-ui/core/Button';
import Iframe from 'react-iframe'

const Events = (props) => {
  const goToHome = () => props.history.push('/');
  return (
    <div className="Events">
      <Button variant="contained" className='btn-nav' onClick={goToHome}>
        Home
      </Button>
      <div className="iframe-container">
        <Iframe url="https://calendar.google.com/calendar/b/1/embed?height=600&amp;wkst=1&amp;bgcolor=%23e0e0e0&amp;ctz=America%2FNew_York&amp;src=cDBhc3FqaWUzaHVxcTNxb3RuMmVkMTBtbWdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23E4C441&amp;mode=MONTH"
          width="100%"
          height="100%"
          id="myId"
          styles={{ borderWidth: 0 }}
          className="myClassname"
          display="initial"
          position="relative"
          frameBorder="0"
          scrolling="no" />
      </div>
    </div>
  )
};

export default Events;