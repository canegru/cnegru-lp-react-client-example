import React, { useEffect } from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import { routerConfig } from './@config';


// Components
import Navigation from './@components/layout/Navigation';
import FloatingButton from './@components/layout/FloatingButton';

import { lpTagLoad } from './@utils/LivePerson';

function Layout() {

  useEffect(() => {
    // Load lpTag onpage once
    lpTagLoad();
  }, []);

  return (
    <HashRouter>
      <div className="w-full flex">
        <Navigation />
        <Switch>
          {routerConfig.map(route => <Route key={route.path} {...route} />)}
        </Switch>
        <FloatingButton />
      </div>
    </HashRouter >
  )
}
export default Layout