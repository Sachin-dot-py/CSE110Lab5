// assets/scripts/explore.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth       = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');
  const textArea    = document.getElementById('text-to-speak');
  const speakBtn    = document.querySelector('#explore button');
  const faceImg     = document.querySelector('#explore img');

  let voices = [];

  // Populate the <select> with available voices
  function populateVoiceList() {
    voices = synth.getVoices();

    // Reset the dropdown back to only the placeholder option
    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';

    voices.forEach(voice => {
      const opt = document.createElement('option');
      opt.value = voice.name;
      opt.textContent = `${voice.name} (${voice.lang})${voice.default ? ' — default' : ''}`;
      voiceSelect.appendChild(opt);
    });
  }

  // Chrome and some others fire this once voices are loaded
  synth.onvoiceschanged = populateVoiceList;
  // In case voices are already available
  populateVoiceList();

  // When the user clicks “Press to Talk”…
  speakBtn.addEventListener('click', () => {
    const text = textArea.value.trim();
    if (!text) return; // nothing to speak

    const utterance = new SpeechSynthesisUtterance(text);

    // Assign the selected voice
    const selectedVoice = voices.find(v => v.name === voiceSelect.value);
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    // Swap to open-mouth image when speaking starts
    utterance.onstart = () => {
      faceImg.src = 'assets/images/smiling-open.png';
    };

    // Restore closed-mouth when done
    utterance.onend = () => {
      faceImg.src = 'assets/images/smiling.png';
    };

    synth.speak(utterance);
  });
}