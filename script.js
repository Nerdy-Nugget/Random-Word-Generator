// TODO read from a word list in a .txt file
var items = Array("random", "words", "go", "here");

function PickRandomWord(frm) {
// Generate a random number between 1 and NumberOfWords
var item = items[Math.floor(Math.random()*items.length)];

// Display the word inside the text box
frm.WordBox.value = item
}