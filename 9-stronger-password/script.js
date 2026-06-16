function generatePassword(length, includeLowercase, includeUppercase, includeNumber, includeSymbol){
    const lowercaseChars = "qwertyuiopasdfghjklzxcvbnm";
    const uppercaseChars = "QWERTYUIOPASDFGHJKLZXCVBNM";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+";

    let allowedChar = "";
    let password ="";

    allowedChar += includeLowercae?lowercaseChars: "";
    allowedChar += includeUppercase?uppercaseChars:"";
    allowedChar += includeNumber?numberChars: "";
    allowedChar += includeSymbol?symbolChars: "";

    if(length <=0 )
        return `(password length must be at laeast 1)`;
    
    if(allowedChar.length === 0 )
        return `(At least 1 set of character needs to be selected)`;

    for(let i = 0 ; i < length; i++){
        const randomIndex = Math.floor(Math.random()* allowedChar.length);
        password += allowedChar[randomIndex]
    }
    return password;

}

const passwordlength = 12;
const includeLowercae = true;
const includeUppercase = true;
const includeNumber = true;
const includeSymbol = true;

const password = generatePassword(passwordlength, includeLowercae, includeUppercase, includeNumber, includeSymbol);

console.log(`Generate password: ${password}`)