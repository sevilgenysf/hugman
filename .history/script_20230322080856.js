const word_el = document.getElementById('word');

function getRandomWord() {
	const words = ['javasciprt', 'java', 'python'];
	return words[Math.floor(Math.random() * words.length)];
}

const correctLetters = ['j', 'a'];
const wrongLetters = [];
