const lang = navigator.language;
function setDate() {
  let date = new Date();
  // calendar
  let month = date.getMonth();
  let num = date.getDate();
  let day = date.toLocaleString(lang, { weekday: "long" });
  let monthName = date.toLocaleString(lang, { month: "long" });
  let year = date.getFullYear();
  // clock
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  document.querySelector("#month").innerHTML = monthName;
  document.querySelector("#day").innerHTML = day;
  document.querySelector("#num").innerHTML = num;
  document.querySelector("#year").innerHTML = year;
  document.querySelector("#h").innerHTML = `${hour} : ${minute} : ${second}`;
}
setInterval(setDate, 1000);
setDate();
// document.getElementById("month").innerHTML = monthName;
