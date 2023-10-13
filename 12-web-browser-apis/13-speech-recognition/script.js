const body = document.body;

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const rec = new SpeechRecognition();

rec.lang = "en-US";
rec.continuous = true;

rec.onresult = function (e) {
  for (let i = e.resultIndex; i < e.results.length; i++) {
    const color = e.results[i][0]["transcript"].toLowerCase().trim();
    body.style.backgroundColor = color;
  }
};

rec.start();
