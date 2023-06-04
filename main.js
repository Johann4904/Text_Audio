document.getElementById('convert-button').addEventListener('click', function() {
    var text = document.getElementById('text-input').value;
    if (text.trim() !== '') {
        var speech = new SpeechSynthesisUtterance(text);
        speech.lang = 'de-DE'; // Sprache einstellen (Deutsch)
        speechSynthesis.speak(speech);
    }
});
