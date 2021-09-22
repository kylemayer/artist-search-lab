import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ArtistSearch from '../../containers/ArtistSearch';
import ArtistDetail from '../../containers/ArtistDetail';
import ReleaseDetail from '../../containers/ReleaseDetail';
import SongDetail from '../../containers/SongDetail';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <ArtistSearch />
          </Route>
          <Route exact path="/artists/:artist/:id">
            <ArtistDetail />
          </Route>
          <Route exact path="/releases/:artist/:id">
            <ReleaseDetail />
          </Route>
          <Route exact path="/lyrics/:artist/:title">
            <SongDetail />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
