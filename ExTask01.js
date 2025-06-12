// TASK01
// Create an HTML page with a textarea where users can type text. Display the total number of characters typed below the textarea.

// Requirements:
// Add a textarea element to the page.
// Display a p tag below it that shows the character count.
// Use JavaScript to update the count in real time.

const typebox=document.getElementById("inputbox");
const totalchars=document.getElementById("charcount");
const words=document.getElementById("wordcount");
const wordlimit= document.getElementById("limit");
const maxwords=50;

typebox.addEventListener("input",(e)=>{
totalchars.textContent="Total no of chars:"+typebox.value.length;

let X = typebox.value.trim();
let Y;
if(X===""){
    Y=0;
}else{
    Y=X.split(/\s+/).length
    if(Y>50){
        e.preventDefault();
      wordlimit.textContent="Warning, you've crossed the word limit e.g 50 words:"+Y+"words"
    }else if(Y==50){
        wordlimit.textContent="You've reached the word limit: "+Y+"words!"
    }
    else{
        wordlimit.textContent = "";
    } 
}
words.textContent="Total.no of words:"+Y

});
