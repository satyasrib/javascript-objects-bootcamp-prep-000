var playlist = { artistNames: "songTitles" }

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[ artistName ] = songTitle
}

function removeFromPlaylist(playlistObject, artistName) {
delete playlistObject.artistName
}
