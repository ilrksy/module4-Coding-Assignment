// SpeakHello.js
// A small self-contained module (IIFE) that knows how to say "Hello" to someone.
// It exposes itself as a global object called SpeakHello with one method: speak(name).

var SpeakHello = (function () {

    function speak(name) {
        var greeting = 'Hello ' + name;
        console.log(greeting);
        var outputDiv = document.getElementById('output');
        if (outputDiv) {
            var p = document.createElement('p');
            p.textContent = greeting;
            outputDiv.appendChild(p);
        }
    }

    // Expose "speak" to the outside world; everything else stays private.
    return {
        speak: speak
    };

})();
