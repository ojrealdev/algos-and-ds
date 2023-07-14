let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // find whitesoaces
let countNonWhiteSpace = /\S/g; 
let result = sample.match(countWhiteSpace);
