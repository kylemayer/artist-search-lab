export const getArtists = async (search, offset) => {
  try {
    const res = await fetch(
      `http://musicbrainz.org/ws/2/artist?query=${search}&fmt=json&limit=25&offset=${offset}`
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

// export const getAlbumArt = async (releaseId) => {
//   try {
//     const res = await fetch(`http://coverartarchive.org/release/${releaseId}/front`);
//     const { covers } = await res.json();

//   } catch (error) {

//   }
// };

export const getSongs = async (releaseId) => {
  try {
    const res = await fetch(`http://musicbrainz.org/ws/2/recording?release=${releaseId}&fmt=json`);
    const { recordings } = await res.json();
    return recordings.map((song) => ({
      id: song.id,
      title: song.title
    }));
  } catch (error) {
    console.error(`Error getting songs: ${error.message}`);
  }
};

export const getLyrics = async (artist, title) => {
  try {
    const res = await fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`);
    const { lyrics } = await res.json();
console.log('------', lyrics);
    return lyrics;
  } catch (error) {
    console.error(`Error getting songs: ${error.message}`);
  }
};
