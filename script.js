const from = document.getElementById("from");
const to = document.getElementById("to");
const input = document.getElementById("input");
const result = document.getElementById("res");
const error = document.getElementById("error");

let fromNS = "Binary", toNS = "Binary";

from.addEventListener("change", function () {
   fromNS = from.options[from.selectedIndex].text;
   input.placeholder = fromNS + " Number";
});

to.addEventListener("change", function () {
   toNS = to.options[to.selectedIndex].text;
   result.placeholder = toNS + " Number";
});

input.addEventListener("input", function () {
   error.style.display = "none";
});

let fromValue;
document.getElementById("convert").addEventListener("click", function () {
    switch (fromNS) {
       case "Binary":
          fromValue = input.value;
          if (/^[01]*$/.test(fromValue)) {
             switch (toNS) {
                case "Decimal": result.value = parseInt(fromValue, 2);
                   break;
                case "Hexadecimal": result.value = parseInt(fromValue, 2).toString(16);
                   break;
                case "Octal": result.value = parseInt(fromValue, 2).toString(8);
                   break;
                default: result.value = fromValue;
             }
          } else {
             error.style.display = "inherit";
             error.innerText = "Invalid " + fromNS + " Number";
             result.value = "";
          }
          break;
 
       case "Decimal":
          fromValue = input.value;
          if (/^[0-9]*$/.test(fromValue)) {
             switch (toNS) {
                case "Binary": result.value = parseInt(fromValue).toString(2);
                   break;
                case "Hexadecimal": result.value = parseInt(fromValue).toString(16);
                   break;
                case "Octal": result.value = parseInt(fromValue).toString(8);
                   break;
                default: result.value = fromValue;
             }
          } else {
             error.style.display = "inherit";
             error.innerText = "Invalid " + fromNS + " Number";
             result.value = "";
          }
          break;
 
       case "Hexadecimal":
          fromValue = input.value;
          if (/^[0-9a-fA-F]*$/.test(fromValue)) {
             switch (toNS) {
                case "Binary": result.value = parseInt(fromValue, 16).toString(2);
                   break;
                case "Decimal": result.value = parseInt(fromValue, 16).toString(10);
                   break;
                case "Octal": result.value = parseInt(fromValue, 16).toString(8);
                   break;
                default: result.value = fromValue;
             }
          } else {
             error.style.display = "inherit";
             error.innerText = "Invalid " + fromNS + " Number";
             result.value = "";
          }
          break;
 
       case "Octal":
          fromValue = input.value;
          if (/^[0-7]*$/.test(fromValue)) {
             switch (toNS) {
                case "Binary": result.value = parseInt(fromValue, 8).toString(2);
                   break;
                case "Decimal": result.value = parseInt(fromValue, 8).toString (10);
                   break;
                case "Hexadecimal": result.value = parseInt(fromValue, 8).toString(16);
                   break;
                default: result.value = fromValue;
             }
          } else {
             error.style.display = "inherit";
             error.innerText = "Invalid " + fromNS + " Number";
             result.value = "";
          }
          break;
    }
});
 
document.getElementById("swap").addEventListener("click", function () {
    let x=from.value;
    from.value=to.value;
    to.value=x;
   
    let y=input.value;
    input.value=result.value;
    result.value=y;

});
 