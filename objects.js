var playlist = { artistNames: "songTitles" }

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[ artistName ] = songTitle
}
function removeFromPlaylist(playlist, artistName) {
var playlist = { artistName: "songTitle" }
delete playlist.artistName
return playlist
}
