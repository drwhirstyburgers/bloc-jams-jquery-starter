{
  // the parameters song holds the song object, and index holds the index in the array
  album.songs.forEach( (song, index) => {
    song.element = $(`
      <tr>
        <td>${index + 1}</td>
        <td>${song.title}</td>
        <td>${song.duration}</td>
       </tr>
    `);

    song.element.on('click', event => {
      player.playPause(song);
    });

    $('#song-list').append(song.element);
  });
}
