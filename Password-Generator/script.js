let inputSlider = document.getElementById("inputSlider")
let sliderValue = document.getElementById("sliderValue")
let passBox = document.getElementById("passBox");
let uppercase = document.getElementById("uppercase");
let lowercase = document.getElementById("lowercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");
let copyIcons = document.getElementById("copyIcon");

//sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', ()=>{
    sliderValue.textContent = inputSlider.value;
});

genBtn.addEventListener('click', ()=>{
    passBox.value = generatePassword();
})
let upperChars = "ABCDEFGHIJKLMNOPQRSTVWXYZ"
let lowerChars = upperChars.toLowerCase();
let allNumbers = "0123456789"
let allSymbols = "!@#$%^&*()<>,"

//function to generate password
const generatePassword = () => {
    let genPassword = "";
    let allChars = "";

    allChars += lowercase.checked ? lowerChars : "";
    allChars += uppercase.checked ? upperChars : "";
    allChars += numbers.checked ? allNumbers : "";
    allChars += symbols.checked ? allSymbols : "";

    for(let i=1;i<=inputSlider.value;i++){
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }
    return genPassword;
}

copyIcons.addEventListener('click', () => {
    if(passBox.value != "" || passBox.value.length >=1 ){
        navigator.clipboard.writeText(passBox.value);
        copyIcons.innerText = "check"
        copyIcons.title = "Password Copied"

        setTimeout(()=>{
            copyIcons.innerText = "content_copy";
            copyIcons.title = "";
        },3000)
    }
    
});