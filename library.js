const library = {
  tracks:
  { t01: { id: "t01",
    name: "Code Monkey",
    artist: "Jonathan Coulton",
    album: "Thing a Week Three" },
  t02: { id: "t02",
    name: "Model View Controller",
    artist: "James Dempsey",
    album: "WWDC 2003"},
  t03: { id: "t03",
    name: "Four Thirty-Three",
    artist: "John Cage",
    album: "Woodstock 1952"}
  },
  playlists:
  { p01: { id: "p01",
    name: "Coding Music",
    tracks: ["t01", "t02"]
  },
  p02: { id: "p02",
    name: "Other Playlist",
    tracks: ["t03"]
  }
  }
};

// Change Notes: updated all occurances of "array" to "libraryObject". I was incorrectly naming my arguments "array", but an array and an object are different. Changing the name doesnt affect the code. With an object, you have key-pair values. With an array, they are not key-pair values, they are lists, where the elements names technically are just numbers starting from 0.

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function(libraryObject) {
  const playlistInfo = Object.values(libraryObject.playlists).map(callback => (`${callback.id}: ${callback.name} - ${callback.tracks.length} tracks`));
  console.log(playlistInfo);
  return playlistInfo;
}; // Changelog: instead of "return Object.values..." added a variable playlist info that holdes them instead, then return that variable after, so that I can console.log it within the same function.
printPlaylists(library);

// prints a list of all tracks, using the following format:
// id:, name:, "by", artist:, "(album)"
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

// Original code

// const printTracks = function(libraryObject) {
//   return Object.values(libraryObject.tracks).map(callback => (`${callback.id}: ${callback.name} by ${callback.artist} (${callback.album})`)
//   );
// };
// console.log(printTracks(library));

// Updated

const printTracks = function(libraryObject) {
  tracksInfo = Object.values(libraryObject.tracks).map(callback => (`${callback.id}: ${callback.name} by ${callback.artist} (${callback.album})`)
  );
  console.log(tracksInfo);
  return tracksInfo;
};
//Changelog: same as printPlaylists but saved the code for reference.
printTracks(library);

// // // prints a list of tracks for a given playlist, using the following format:
// // // p01: Coding Music - 2 tracks
// // // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// // // t02: Model View Controller by James Dempsey (WWDC 2003)

const printPlaylist = function(libraryObject, playlistId) {
  const playlist = libraryObject.playlists[playlistId];
  const trackInfo = playlist.tracks.map(callback => {
    const track = libraryObject.tracks[callback];
    return (`${track.id}: ${track.name}`);
  });

  console.log(`${playlist.name} - ${playlist.tracks.length} tracks:`, trackInfo);
};
printPlaylist(library, "p01");
printPlaylist(library, "p02");

// // adds an existing track to an existing playlist
const addTrackToPlaylist = function(libraryObject, trackId, playlistId) {
  libraryObject.playlists[playlistId].tracks.push(trackId); // USE .PUSH BECAUSE THIS IS AN ARRAY
  console.log(`Added track ${trackId} - ${libraryObject.tracks[trackId].name} to playlist ${playlistId}`);
};

addTrackToPlaylist(library, "t03", "p01");
printPlaylist(library, "p01");

// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};


// adds a track to the library
const addTrack = function(libraryObject, name, artist, album) {
  const trackId = generateUid();
  const newTrack = {
    id: trackId,
    name,
    artist,
    album
  };
  libraryObject.tracks[trackId] = newTrack; // CAN NOT USE .PUSH BECAUSE THIS IS NOT AN ARRAY, IT'S AN OBJECT
  console.log(`New track: ${name} by ${artist} (${album})`);
};
addTrack(library, "New Track Name", "Good Artist", "Their Album");
printTracks(library);


// adds a playlist to the library
const addPlaylist = function(libraryObject, name) {
  const playlistId = generateUid();
  const newPlaylist = {
    id: playlistId,
    name,
    tracks: []
  };
  libraryObject.playlists[playlistId] = newPlaylist;
  printPlaylists(library);
};

addPlaylist(library, "my new list");


// // STRETCH:
// // given a query string string, prints a list of tracks
// // where the name, artist or album contains the query string (case insensitive)
// // tip: use "string".search("tri")
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
// const printSearchResults = function(query) {

// };