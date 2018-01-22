{
  $('button#play-pause').on('click', function() {
    player.playPause();
    $(this).attr('playState', player.playState);
  });

  $('button#next').on('click', function() {
    if (player.playState !== 'playing') { return; }

    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const nextSongIndex = currentSongIndex + 1;
    const nextSong = album.songs[nextSongIndex];
    if(nextSongIndex >= album.songs.length) { return; }

    player.playPause(nextSong);
    });

    $('button#previous').on('click', function () {
      if (player.playState !== 'playing') { return; }

      const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
      const previousSongIndex = currentSongIndex - 1;
      const previousSong = album.songs[previousSongIndex];
      if(previousSongIndex <= album.songs.indexOf(0)) { return; }

      player.playPause(previousSong);
    });

    $('#time-control input').on('input', function (event) {
      player.skipTo(event.target.value);
    });

//working with precentages - the time control's range is a bvalue form 0-100, but all songs
//have differewnt durations, so we will need to convert dureation into a percent ((part / whole) * 100)
// 1000 is the number of milliseconds between intervals
    setInterval( () => {
      if (player.playState !== 'playing') { return; }
      const currentTime = player.getTime();
      const duration = player.getDuration();
      const percent = (currentTime / duration) * 100;
      $('#time-control .current-time').text( currentTime );
      $('#time-control input').val(percent);
  }, 1000);

  $('#volume-control input').on('input', function(event) {
    player.setVolume(event.target.value);
  });
}
