export const getArtists = async (search) => {
  try {
    const res = await fetch(
      `http://musicbrainz.org/ws/2/artist?query=${search}&fmt=json&limit=25`
    );
    const { artists } = await res.json();

    return artists.map(artist => ({
      id: artist.id,
      name: artist.name
    }));
  } catch (error) {
    console.error(`Error getting artists: ${error.message}`);
  }
};

