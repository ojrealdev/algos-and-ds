let checkPass = /(?=\w{3,6})(?=\D*\d)/;
let pass = "pass@1";
console.log(checkPass.test(pass)); //true

/**
    EXPLANATION
    1. (?=\w{3,6}) : 
        checks if the characters ahead in the string
        match the pattern inside the lookahead.
        \w - represents any word (letters, digist,  underscore)
        {3,6} - between 3 and 6 word character.

    2. (?=\D*\d) :
        \D* matches 0 or more non-digit characters.
        \d matches atleast 1 digit in the password.   
*/
