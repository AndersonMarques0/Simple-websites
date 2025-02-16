const checkBtn = document.getElementById("check-btn");
const inputText = document.getElementById("text-input");
const outputText = document.getElementById("result");

// send an alert if the input is empty
checkBtn.addEventListener('click', () => {
    
    if(inputText.value === "") {
        return alert("Please input a value.");
    }
    
})


// check if enter is a palindrome and send the correct message
checkBtn.addEventListener('click', () => {
    
    if(inputText.value !== "") {
        const regex = /[^a-zA-Z0-9]|\s/g;
        const palindrome = inputText.value.replace(regex, '').toLowerCase();
        const reversePalindrome = palindrome.split('').reverse().join('');
        
        if(palindrome === reversePalindrome) {
            outputText.textContent = `${inputText.value} is a palindrome.`;
        } else {
            outputText.textContent = `${inputText.value} is not a palindrome.`;
        }
    }

});