import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Dkp from './Dkp';
import History from './History';
import Loot from './Loot';
import Home from './Home';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/dkp" component={Dkp} />
      <Route path="/history" component={History} />
      <Route path="/loot" component={Loot} />
      <Route component={Home} />
    </Switch>
  );
}

export default App;
