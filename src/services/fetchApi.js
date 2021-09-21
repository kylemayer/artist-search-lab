export const getArtists = async (search) => {
  try {
    const res = await fetch(
      `http://musicbrainz.org/ws/2/artist?query=${search}&fmt=json&limit=25`
    );
    const { artists } = await res.json();

    return artists.map((artist) => ({
      id: artist.id,
      name: artist.name
    }));
  } catch (error) {
    console.error(`Error getting artists: ${error.message}`);
  }
};

export const getReleases = async (artistId) => {
  try {
    const res = await fetch(`http://musicbrainz.org/ws/2/release?artist=${artistId}&fmt=json`);
    const { releases } = await res.json();

    return releases.map((release) => ({
      id: release.id,
      title: release.title,
      cover: release['cover-art-archive'].front ? `http://coverartarchive.org/release/${release.id}/front` : 'https://chicagoshadydealer.com/wp-content/uploads/2021/04/fellowkids.jpeg',
    }));
  } catch (error) {
    console.error(`Error getting releases: ${error.message}`);
  }
};



