const matchLettersAndNumbers = () => {
	let word = "hello world 342";
	let alphabetRegex = /[A-Za-z]/g;
	let alphanumericRegex = /[A-Za-z0-9]/g;
	let alphaShorthandRegex = /\w/g; // use /\w|\s/g if you want to match spaces

	console.log(word.match(alphanumericRegex)); // hello world 342
	console.log(word.match(alphabetRegex)); // hello world
	console.log(alphabetRegex.test(word)); //true
	return word.match(alphanumericRegex).length;
};

console.log(matchLettersAndNumbers())