

let amountInput = document.querySelector("#amount");
let friendsInput = document.querySelector("#friends");
// let result = ""
let Txt = document.querySelector(".ttmm");
const news = document.createElement("p")
news.setAttribute("class", "ttmmResult")
Txt.appendChild(news)
let resultTxt = document.querySelector(".ttmmResult")
function calc(){
    
    let calculate = eval(amountInput.value/friendsInput.value)
    console.log(calculate)
  
    resultTxt.textContent = `${calculate}   bucks for each person `;
}




// let divElement = document.getElementById("myDiv");

// divElement.addEventListener("click", function() {

//   // Remove the "placeholder" class when the div is clicked
//     divElement.classList.remove("placeholder");
//   // Clear the placeholder text
//   if (divElement.textContent === "Click here to enter text..") {
//     divElement.textContent = ""}
 
// });

// divElement.addEventListener("blur", function() {
//   // Add the "placeholder" class and restore placeholder text if the div is empty
//   if (!divElement.textContent.trim()) {
//     divElement.textContent = "Click here to enter text..";
//     divElement.classList.add("placeholder");
//   }
// });