import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';

import Nav from './Nav';
import Loading from './Loading';
import { StateProvider } from '../helpers/stateManager';
import useRouter from '../helpers/useRouter';
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
      case 'changeDkpSheetData':
        return {
          ...state,
          dkpSheetData: action.newDkpSheetData
        };
      case 'changeHistorySheetData':
        return {
          ...state,
          historySheetData: action.newHistorySheetData
        };
      case 'changeLootSheetData':
        return {
          ...state,
          lootSheetData: action.newLootSheetData
        };

      default:
        return state;
    }
  };
  // Store location history
  const { location } = useRouter();
  // Create route page animations
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 1 }
  });
  // return JSX
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <div>
        <Nav />
        {transitions.map(({ item, props, key }) => (
          <animated.div
            key={key}
            style={{ ...props, display: 'flex', justifyContent: 'center' }}>
            <Suspense fallback={<Loading />}>
              <Switch location={item}>
                <Route exact path="/" component={Home} />
                <Route exact path="/events" component={Events} />
                <Route exact path="/dkp" component={Dkp} />
                <Route exact path="/history" component={History} />
                <Route exact path="/loot" component={Loot} />
                <Route component={NoMatch} />
              </Switch>
            </Suspense>
          </animated.div>
        ))}
      </div>
    </StateProvider>
  );
}

export default App;
