// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const jsConfetti = new JSConfetti();
  const hornSelect = document.getElementById('horn-select');
  const hornImg = document.querySelector('#expose img');
  const hornAudio = document.querySelector('audio');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('button');

  hornSelect.addEventListener('change', () => {
    const selectedHorn = hornSelect.value;
    hornImg.src = `assets/images/${selectedHorn}.svg`;
    hornAudio.src = `assets/audio/${selectedHorn}.mp3`;
  });

  volumeSlider.addEventListener('input', (e) => {
    const volume = Number(e.target.value);
    hornAudio.volume = volume / 100;
    let level = 0;
    if (volume > 0 && volume < 33) level = 1;
    else if (volume < 67) level = 2;
    else if (volume >= 67) level = 3;
    volumeIcon.src = `assets/icons/volume-level-${level}.svg`;
    volumeIcon.alt = `Volume level ${level}`;
  });

  playButton.addEventListener('click', () => {
    hornAudio.play();
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}
