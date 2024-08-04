//  const name = prompt(`What is your name?`)
//  alert(`Welcome ${name}!!! I hope you are having a wonderful day!`)
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
