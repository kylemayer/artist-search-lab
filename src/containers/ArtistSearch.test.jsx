import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import ArtistSearch from './ArtistSearch';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import dummyData from '../data/dummyData';


const mockServer = setupServer(
  rest.get('http://musicbrainz.org/ws/2/artist', (req, res, ctx) => {
    return res(ctx.json(dummyData));
  })
);

describe('ArtistSearch', () => {
  beforeAll(() => mockServer.listen());
  afterAll(() => mockServer.close());

  it('should display a list of asrtists that match the searched term', async () => {
    const { container } = render(
      <MemoryRouter>
        <ArtistSearch />
      </MemoryRouter>
    );

    const searchBar = await screen.findByRole('searchBar', { name: 'searchBar' });
    userEvent.type(searchBar, '{selectall}{del}butthole');

    return waitFor(() => {
      const list = screen.getAllByText('butthole', { exact: false });

      expect(list.length).toBeGreaterThan(1);
      expect(container).toMatchSnapshot();
    });
  });
});
