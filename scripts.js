document.addEventListener('DOMContentLoaded', (event) => {
  const video = document.getElementById('background-video');
  const playButton = document.getElementById('play-button');
  const muteButton = document.getElementById('mute-button');
  const volumeSlider = document.getElementById('volume-slider');

  // Állítsuk be az alapértelmezett hangerőt 10%-ra
  video.volume = 0.1;
  volumeSlider.value = 0.1;

  playButton.addEventListener('click', () => {
      video.play().then(() => {
          playButton.style.display = 'none';
          muteButton.style.display = 'block';
          volumeSlider.style.display = 'inline-flex';
      }).catch(error => {
          console.error('Error attempting to play video:', error);
      });
  });

  muteButton.addEventListener('click', () => {
      if (video.muted) {
          video.muted = false;
          muteButton.innerHTML = '<svg height="32" width="32" viewBox="0 0 512 512">...</svg>';
      } else {
          video.muted = true;
          muteButton.innerHTML = '<svg height="32" width="32" viewBox="0 0 512 512">...</svg>';
      }
  });

  volumeSlider.addEventListener('input', (event) => {
      video.volume = event.target.value;
  });
});
