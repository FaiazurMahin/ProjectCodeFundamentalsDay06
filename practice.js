const introparagraph = document.getElementById("1stpara");
console.log(introparagraph.textContent);

// const bunchoffruits = document.getElementById("fruits");
// console.log(bunchoffruits.textContent);

const understandingqueryselector = document.querySelector(".container p.ditio");
console.log(understandingqueryselector .textContent);


const FOLMUL = document.querySelectorAll(".FOL li");
FOLMUL.forEach((X, index)=>console.log(`Item${index+1}: ${X.textContent}`));

const letsupdatehtmlpara = document.getElementById("1stpara");
letsupdatehtmlpara.textContent= "The Universe Shall know pain!";
console.log(letsupdatehtmlpara.textContent);

letsupdatehtmlpara.style.color = "red";
letsupdatehtmlpara.style.fontSize = "30px";


// letsupdatehtmlpara.classList.add("highlight"); /////Problemmmmmmm
//classlist.list have less priority than style.X...so eta pore use korle kono change ashbe na

const letspressthebutton = document.getElementById("tap");
const buttonpressed = document.getElementById("result");
letspressthebutton.addEventListener("click", () => {buttonpressed.textContent= ("Button was clciked")});
// console.log(letspressthebutton.textContent);

const submit = document.getElementById("test2");
const submtd = document.getElementById("test4");

submit.addEventListener("click",() => {submtd.textContent = ("Submission Completed")});

submit.addEventListener("click",() =>{console.log("Submission Completed")});