import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ArtistSearch from '../../containers/ArtistSearch';
import ArtistDetail from '../../containers/ArtistDetail';
import ReleaseDetail from '../../containers/ReleaseDetail';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <ArtistSearch />
          </Route>
          <Route exact path="/artist/:id">
            <ArtistDetail />
          </Route>
          <Route exact path="/releases/:id">
            <ReleaseDetail />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
