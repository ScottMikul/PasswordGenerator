var lowercaseLetters = [];
var uppercaseLetters = [];
for(var i=0;i<26;i++){
    var letter = String.fromCharCode(65+i)
    console.log("letter is "+ letter);
    uppercaseLetters.push(letter);
    console.log("lowercase letter is "+ letter.toLowerCase());
    lowercaseLetters.push(letter.toLowerCase());
    
}

var numbers = "0123456789";
var numbersArr = numbers.split("");
var specialChars = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var specialCharsArr = specialChars.split("");


function generatePassword(){
    var preferedChars = [];
    var resultPass = "";
    var resEl = document.getElementById("copy-button");
    resEl.classList.remove("btn-primary");
    resEl.classList.add("btn-light");
    

    var passLength = prompt("how many characters would you like your password to be?");
    if(passLength <8 || passLength > 128){
        alert("your password must be between 8 and 128 characters long.");
    }
    else{
        if(confirm("would you like your password to have lower case characters?")){
            Array.prototype.push.apply(preferedChars, lowercaseLetters);
        }
        if(confirm("would you like your password to have upper case characters?")){
            Array.prototype.push.apply(preferedChars, uppercaseLetters);
        }
        if(confirm("would you like your password to have numbers?")){
            Array.prototype.push.apply(preferedChars, numbersArr);

        }
        if(confirm("would you like your password to have special characters")){
            Array.prototype.push.apply(preferedChars, specialCharsArr);

        }
        
        if(preferedChars.length===0){
            alert("you must select at least 1 type of characters");
        }
        else{
            for(var i =0;i<passLength;i++){
                var randomIndex = Math.floor(Math.random()*preferedChars.length);
                resultPass += preferedChars[randomIndex];
            }
            resEl.classList.remove("btn-light");
            resEl.classList.add("btn-primary");

        }
       
    }
    document.getElementById("results").innerHTML = resultPass;


}

// creates an input element. stores the value of the results id, copies to clipboard, then removes the input when done
function copyToClipboard(element) {
    var $temp = $("<input>");
    $("#results").append($temp);
    var resultsText =   $("#results").text();
    console.log("resultsText = "+ resultsText);
    $temp.val(resultsText);
    console.log("$temp.val = "+ $temp.val());
    $temp.select();
    document.execCommand("copy");
    alert("you have put the following on your clipboard: \n"+ $temp.val());
    $temp.remove();

  }