var playlist = { artistNames: "songTitles" }

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[ artistName ] = songTitle
}
function removeFromPlaylist(playlist, artistNames) {
  delete playlist.artistNames
}
