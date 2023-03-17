var psw = document.getElementById("pswd");
var length = document.getElementById("characters");
var number = document.getElementById("number");
var capital = document.getElementById("capital");
var symbol = document.getElementById("symbol");
var color = document.getElementsByClassName("black");
var psw1 = document.getElementById("pswd1");
var samepsd = document.getElementById("samepsd");

function showbar() {
  document.getElementById("hide").style.display = "block";
}
function hidebar() {
  document.getElementById("hide").style.display = "none";
}
function password() {
  console.log(psw == "");

  if (psw.value.length >= 6) {
    length.classList.remove("❌");
    length.classList.add("✔️");
    color[0].classList.add("color");
  } else {
    length.classList.remove("✔️");
    length.classList.add("❌");
    color[0].classList.remove("color");
  }
  var Capital = /[A-Z]/g;
  if (psw.value.match(Capital)) {
    capital.classList.remove("❌");
    capital.classList.add("✔️");
    color[1].classList.add("color");
  } else {
    capital.classList.remove("✔️");
    capital.classList.add("❌");
    color[1].classList.remove("color");
  }
  var numbers = /[0-9]/g;
  if (psw.value.match(numbers)) {
    number.classList.remove("❌");
    number.classList.add("✔️");
    color[2].classList.add("color");
  } else {
    number.classList.remove("✔️");
    number.classList.add("❌");
    color[2].classList.remove("color");
  }
  var symbols = /[$&+,:;=?@#]/g;
  if (psw.value.match(symbols)) {
    symbol.classList.remove("❌");
    symbol.classList.add("✔️");
    color[3].classList.add("color");
  } else {
    symbol.classList.remove("✔️");
    symbol.classList.add("❌");
    color[3].classList.remove("color");
  }
  if (psw.value == "" || psw1.value == "") {
    samepsd.classList.add("❌");
    samepsd.classList.remove("✔️");
    color[4].classList.remove("color");
    return;
  }
  if (psw1.value === psw.value) {
    samepsd.classList.remove("❌");
    samepsd.classList.add("✔️");
    color[4].classList.add("color");
  } else {
    samepsd.classList.remove("✔️");
    samepsd.classList.add("❌");
    color[4].classList.remove("color");
  }
}

psw.onkeyup = password;
psw1.onkeyup = password;
psw.onfocus = showbar;
psw1.onfocus = showbar;
psw.onblur = hidebar;
psw1.onblur = hidebar;
