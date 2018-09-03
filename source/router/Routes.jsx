import React from 'react';
import {Route} from 'react-router-dom';

import ConnectedSwitch from './ConnectedSwitch';
import Login from '../client/containers/login';

function Routes() {
  return (
    <main role="application">
      <ConnectedSwitch>
        {/* Login */}
        <Route
          path="/"
          exact
          component={Login}
        />
        {/* Error 404 */}
        <Route component={Login} />
      </ConnectedSwitch>
    </main>
  );
}

export default Routes;
