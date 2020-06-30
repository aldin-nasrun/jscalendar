const lang = navigator.language;
let date = new Date();

let month = date.getMonth();
let num = date.getDate();
let day = date.toLocaleString(lang, { weekday: "long" });
let monthName = date.toLocaleString(lang, { month: "long" });
let year = date.getFullYear();

document.querySelector("#month").innerHTML = monthName;
document.querySelector("#day").innerHTML = day;
document.querySelector("#num").innerHTML = num;
document.querySelector("#year").innerHTML = year;

// document.getElementById("month").innerHTML = monthName;
