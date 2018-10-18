var playlist = { artistNames: "songTitles" }

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[ artistName ] = songTitle
}
function removeFromPlaylist(playlist, artistName) {
var newPlaylist = delete playlist.artistName
return newPlaylist
}
