// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synthe = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');
  const textInput = document.getElementById('text-to-speak');
  const speakButton = document.querySelector('button');
  const face = document.querySelector('img');
  let voices = [];

  function populateVoices() {
    voices = synthe.getVoices();
    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.value = index;
      voiceSelect.appendChild(option);
    });
  }
  populateVoices();

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoices;
  }

  speakButton.addEventListener('click', () => {
    const utterance = new SpeechSynthesisUtterance(textInput.value);
    const selectedVoiceIndex = voiceSelect.value;
    if (voices[selectedVoiceIndex]) {
      utterance.voice = voices[selectedVoiceIndex];
    }

    utterance.onstart = () => {
      face.src = 'assets/images/smiling-open.png';
    };

    utterance.onend = () => {
      face.src = 'assets/images/smiling.png';
    };

    synthe.speak(utterance);
  });
}
