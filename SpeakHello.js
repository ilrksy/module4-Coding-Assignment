// SpeakHello.js
// A small self-contained module (IIFE) that knows how to say "Hello" to someone.
// It exposes itself as a global object called SpeakHello with one method: speak(name).

var SpeakHello = (function () {

    function speak(name) {
        var msg = 'Hello ' + name;
        console.log(msg);
        var outputElement = document.getElementById('output');
        if (outputElement) {
            var li = document.createElement('li');
            li.textContent = msg;
            outputElement.appendChild(li);
        }
    }

    // Expose "speak" to the outside world; everything else stays private.
    return {
        speak: speak
    };

})();
