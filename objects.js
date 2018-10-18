var playlist = { artistNames: "songTitles" }

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[ artistName ] = songTitle
}
function removeFromPlaylist(playlist, artistName) {
var playlist =  delete playlist.artistName
return playlist
}
