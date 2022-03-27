const pwArray = Array.from(Array(92)).map((_, i) => String.fromCharCode(i + 33));
// const pwArray = [
//     '!', '"', '#', '$', '%',  '&', "'", '(', ')', '*', '+',
//     ',', '-', '.', '/', '0',  '1', '2', '3', '4', '5', '6',
//     '7', '8', '9', ':', ';',  '<', '=', '>', '?', '@', 'A',
//     'B', 'C', 'D', 'E', 'F',  'G', 'H', 'I', 'J', 'K', 'L',
//     'M', 'N', 'O', 'P', 'Q',  'R', 'S', 'T', 'U', 'V', 'W',
//     'X', 'Y', 'Z', '[', '\\', ']', '^', '_', '`', 'a', 'b',
//     'c', 'd', 'e', 'f', 'g',  'h', 'i', 'j', 'k', 'l', 'm',
//     'n', 'o', 'p', 'q', 'r',  's', 't', 'u', 'v', 'w', 'x',
//     'y', 'z', '{', '|'
// ];


// After console.log -ing, output is a random numbner between 10 and 18 (10 and 18 included)
function randomNumber10to18(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let pwLength = randomNumber10to18(10,18);


// a for loop thats repeatedly stores a random array element to the password variable. 
/* pwArray[Math.floor(Math.random() * pwArray.length)] - 92 array elements multiplied by a number between 0 (inclusive) and 1 (exclusive). Math.floor rounds down to a whole number. This final number is the array index associated with a character string added to the variable password */
const addNewPassword = () => {
    let password = "";
    for(let i = 0; i < pwLength; i++) {
        password += pwArray[Math.floor(Math.random() * pwArray.length)];
        } 
        return password;
    };
    addNewPassword();  

// ========= ⬇ DO NOT TOUCH THIS CODE ⬇ ======

let genBtn = document.getElementById("btnGen");
let buttonHandler = () => {
    document.getElementById("password").value = addNewPassword();
};
// Event listener for generate PW button
genBtn.addEventListener("click", buttonHandler);

// ========= ⬆ DO NOT TOUCH THIS CODE ⬆ ======


/* Bonus - prompt popup appears, option to choose a customized character length of 10-50 characters (still random), or cancel popup for randomized passowrd between 10-18 characters */

function customPasswordLength() {
    for(let c = 0; c < 2; c++) {
        let customChar = prompt("What is your desired password length? (10-50 characters)\nClick cancel if you'd like a password of 10-18 characters long");
        if (customChar >= "10" && customChar <= "50") {
            pwLength = customChar;
            break;
        } else if (customChar === null) {
            break;
        } else {
            txt = `${customChar} is an invalid password length. Choose a password length between 10 and 50 characters.`
        }
        alert(txt) 
    }
};
customPasswordLength();