export const getArtists = async () => {
  try {
    const res = await fetch(
      `http://musicbrainz.org/ws/2/artist?query=${search}&fmt=json&limit=25`
    );
    const artists = await res.json();

    return artists.map((artist) => ({
      id: artist.id,
      name: artist.name,
      type: artist.type,
      area: artist.area,
    }));
  } catch (error) {
    return [];
  }
};
