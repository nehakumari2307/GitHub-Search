import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './main';
import Search from './Search';
import UserProfile from './UserProfile';

function routes() {
    return (
      <div>
        <BrowserRouter>
          <Main>
            <Switch>
              <Route 
                component={UserProfile}
                exact
                path="/user/:name" 
              />
              <Route 
                component={Search} 
                exact 
                path="/" 
              />
            </Switch>
          </Main>
        </BrowserRouter>
      </div>
    );
}

export default routes;

