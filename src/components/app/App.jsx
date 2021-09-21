import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ArtistSearch from '../../containers/ArtistSearch';
import Artist from '../displays/Artist';
import ArtistList from '../displays/ArtistList';
import Release from '../displays/Release';
import ReleaseList from '../displays/ReleaseList';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <ArtistSearch />
          </Route>
          <Route exact path="/artists/:id">
            <Artist />
          </Route>
          <Route exact path="/artists">
            <ArtistList />
          </Route>
          <Route exact path="/releases/:id">
            <Release />
          </Route>
          <Route exact path="/releases">
            <ReleaseList />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
