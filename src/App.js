import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import DkpTable from './DkpTable';
import Home from './Home';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/dkpTable" component={DkpTable} />
    </Switch>
  );
}

export default App;
