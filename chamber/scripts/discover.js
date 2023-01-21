function diff_days(dt2, dt1) 
 {

  var diff = (dt2 - dt1) / 1000;
  diff /= (60 * 60 * 24);
  return Math.abs(Math.round(diff));
  
 }

const visitsDisplay = document.querySelector(".daysfromlastvisit");

// get the stored value in localStorage
let lastVisit = Number(window.localStorage.getItem("visit-lastdate"));

let thisDate = Date.now();

let days = diff_days(thisDate, lastVisit);
visitsDisplay.textContent = days;

window.localStorage.setItem("visit-lastdate", thisDate);
