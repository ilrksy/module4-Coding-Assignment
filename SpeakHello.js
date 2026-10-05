// SpeakHello.js
// A small self-contained module (IIFE) that knows how to say "Hello" to someone.
// It exposes itself as a global object called SpeakHello with one method: speak(name).

var SpeakHello = (function () {

    function speak(name) {
        var msg = 'Hello ' + name;
        console.log(msg);
        var list = document.getElementById('output-list');
        if (list) {
            var listItem = document.createElement('li');
            listItem.textContent = msg;
            list.appendChild(listItem);
        }
    }

    // Expose "speak" to the outside world; everything else stays private.
    return {
        speak: speak
    };

})();
