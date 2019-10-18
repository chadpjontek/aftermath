import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Events from './Events';
import Dkp from './Dkp';
import History from './History';
import Loot from './Loot';
import Home from './Home';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/events" component={Events} />
      <Route exact path="/dkp" component={Dkp} />
      <Route exact path="/history" component={History} />
      <Route exact path="/loot" component={Loot} />
      <Route component={Home} />
    </Switch>
  );
}

export default App;
