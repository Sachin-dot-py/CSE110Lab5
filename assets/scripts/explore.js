// assets/scripts/explore.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth       = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');
  const textArea    = document.getElementById('text-to-speak');
  const speakBtn    = document.querySelector('#explore button');
  const faceImg     = document.querySelector('#explore img');

  let voices = [];

  // Fill the <select> with available voices
  function populateVoiceList() {
    voices = synth.getVoices();
    // reset options (keep the placeholder at index 0)
    voiceSelect.innerHTML = '<option value="" disabled selected>Select Voice:</option>';
    voices.forEach(voice => {
      const opt = document.createElement('option');
      opt.value = voice.name;
      opt.textContent = `${voice.name} (${voice.lang})${voice.default ? ' — default' : ''}`;
      voiceSelect.appendChild(opt);
    });
  }

  // Some browsers (Chrome) load voices asynchronously
  synth.onvoiceschanged = populateVoiceList;
  // initial call in case voices are already loaded
  populateVoiceList();

  // When you click “Press to Talk”…
  speakBtn.addEventListener('click', () => {
    const text = textArea.value.trim();
    if (!text) return; // nothing to say

    const utterance = new SpeechSynthesisUtterance(text);

    // find the selected voice by name
    const selected = voices.find(v => v.name === voiceSelect.value);
    if (selected) {
      utterance.voice = selected;
    }

    // swap to open-mouth while speaking
    utterance.onstart = () => {
      faceImg.src = 'assets/images/smiling-open.png';
    };
    // back to closed-mouth when done
    utterance.onend   = () => {
      faceImg.src = 'assets/images/smiling.png';
    };

    synth.speak(utterance);
  });
}