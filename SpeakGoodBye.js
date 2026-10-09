// SpeakGoodBye.js
// A small self-contained module (IIFE) that knows how to say "Goodbye" to someone.
// It exposes itself as a global object called SpeakGoodBye with one method: speak(name).

var SpeakGoodBye = (function () {

    function speak(name) {
        var greeting = 'Goodbye ' + name;
        console.log(greeting);

        var outputList = document.getElementById('output-list');
        if (outputList) {
            var listItem = document.createElement('li');
            listItem.textContent = greeting;
            outputList.appendChild(listItem);
        }
    }

    // Expose "speak" to the outside world; everything else stays private.
    return {
        speak: speak
    };

})();
