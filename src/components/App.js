import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Loading from './Loading';
import { StateProvider } from '../helpers/stateManager';
import '../styles/App.css';

// lazy load routes
const Home = lazy(() => import(/* webpackChunkName: "Home" */'./Home'));
const Events = lazy(() => import(/* webpackChunkName: "Events" */'./Events'));
const Dkp = lazy(() => import(/* webpackChunkName: "Dkp" */'./Dkp'));
const History = lazy(() => import(/* webpackChunkName: "History" */'./History'));
const Loot = lazy(() => import(/* webpackChunkName: "Loot" */'./Loot'));
const NoMatch = lazy(() => import(/* webpackChunkName: "NoMatch" */'./NoMatch'));

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
      <div>
        <Nav />
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/events" component={Events} />
            <Route exact path="/dkp" component={Dkp} />
            <Route exact path="/history" component={History} />
            <Route exact path="/loot" component={Loot} />
            <Route component={NoMatch} />
          </Switch>
        </Suspense>
      </div>
    </StateProvider>
  );
}

export default App;
