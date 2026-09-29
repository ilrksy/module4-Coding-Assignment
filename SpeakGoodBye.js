// SpeakGoodBye.js
// A small self-contained module (IIFE) that knows how to say "Goodbye" to someone.
// It exposes itself as a global object called SpeakGoodBye with one method: speak(name).

var SpeakGoodBye = (function () {

    function speak(name) {
        var greeting = 'Goodbye ' + name;
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
