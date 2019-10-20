import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Events from './Events';
import Dkp from './Dkp';
import History from './History';
import Loot from './Loot';
import Home from './Home';
import { StateProvider } from './stateManager';

function App() {
  // Set initial global state
  const initialState = {
    sheetData: ''
  };
  // Change the state based on the action
  const reducer = (state, action) => {
    switch (action.type) {
      case 'changeSheetData':
        return {
          ...state,
          sheetData: action.newSheetData
        };

      default:
        return state;
    }
  };
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/dkp" component={Dkp} />
        <Route exact path="/history" component={History} />
        <Route exact path="/loot" component={Loot} />
        <Route component={Home} />
      </Switch>
    </StateProvider>
  );
}

export default App;
