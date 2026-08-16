// script.js
// Loops over an array of names.
// If a name starts with the letter "j" or "J", say Goodbye to it.
// Otherwise, say Hello to it.

var names = ['John', 'Amy', 'Jenny', 'Carlos', 'Priya', 'Jake', 'Mateo'];

for (var i = 0; i < names.length; i++) {
    var name = names[i];
    var firstLetter = name.charAt(0).toLowerCase();

    if (firstLetter === 'j') {
        SpeakGoodBye.speak(name);
    } else {
        SpeakHello.speak(name);
    }
}
