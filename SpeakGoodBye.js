// SpeakGoodBye.js
// A small self-contained module (IIFE) that knows how to say "Goodbye" to someone.
// It exposes itself as a global object called SpeakGoodBye with one method: speak(name).

var SpeakGoodBye = (function () {

    function speak(name) {
        var message = 'Goodbye ' + name;
        console.log(message);

        var outputList = document.getElementById('output');
        if (outputList) {
            var li = document.createElement('li');
            li.textContent = message;
            outputList.appendChild(li);
        }
    }

    // Expose "speak" to the outside world; everything else stays private.
    return {
        speak: speak
    };

})();
