const library = {
  tracks:
  {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three"
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003"
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952"
    }
  },
  playlists:
  {
    p01: {
      id: "p01",
      name: "Coding Music",
      tracks: ["t01", "t02"]
    },
    p02: {
      id: "p02",
      name: "Other Playlist",
      tracks: ["t03"]
    }
    
  },
  printPlaylists : function() {
    const playlistInfo = Object.values(this.playlists).map(callback => (`${callback.id}: ${callback.name} - ${callback.tracks.length} tracks`));
    console.log(playlistInfo);
    return playlistInfo;
  },
  printTracks : function() {
    tracksInfo = Object.values(this.tracks).map(callback => (`${callback.id}: ${callback.name} by ${callback.artist} (${callback.album})`)
    );
    console.log(tracksInfo);
    return tracksInfo;
  },
  printPlaylist : function(obj, playlistId) {
    const playlist = this.playlists[playlistId];
    const trackInfo = playlist.tracks.map(callback => {
      const track = this.tracks[callback];
      return (`${track.id}: ${track.name}`);
    });

    console.log(`${playlist.name} - ${playlist.tracks.length} tracks:`, trackInfo);
  },
  addTrackToPlaylist : function(obj, trackId, playlistId) {
    this.playlists[playlistId].tracks.push(trackId);
    console.log(`Added track ${trackId} - ${this.tracks[trackId].name} to playlist ${playlistId}`);
  },
  addTrack :function(obj, name, artist, album) {
    const trackId = generateUid();
    const newTrack = {
      id: trackId,
      name,
      artist,
      album
    };
    this.tracks[trackId] = newTrack;
    console.log(`New track: ${name} by ${artist} (${album})`);
  },
  addPlaylist : function(obj, name) {
    const playlistId = generateUid();
    const newPlaylist = {
      id: playlistId,
      name,
      tracks: []
    };
    this.playlists[playlistId] = newPlaylist;
    printPlaylists(library);
  }
};
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1); // This one had to stay outside the function for it to work.
};

library.printPlaylist(this, "p01");
library.addTrackToPlaylist(this, "t03", "p01");
library.addTrack(this, "The ABC's", "50 cent", "Songs 4 Kids");
library.printTracks();