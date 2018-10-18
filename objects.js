var playlist = { artistNames: "songTitles" }

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[ artistName ] = songTitle
}
function removeFromPlaylist(playlist, artistName) {
var updatedPlaylist =  delete playlist.artistName
return updatedPlaylist
}
