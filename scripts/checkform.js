// show the rating value as it is changed 

const rating = document.getElementById("rating");
const rangevalue = document.getElementById("inputrating");

function displayRatingValue() {
    rating.innerHTML = rangevalue.value;
}

rangevalue.addEventListener('change', displayRatingValue);
rangevalue.addEventListener('input', displayRatingValue);


// check if the user names entered are equal 

const username1 = document.querySelector("#username1");
const username2 = document.querySelector("#username2");
const message = document.querySelector("#formmessage");

username2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
	if (username1.value !== username2.value) {
		message.textContent = "User Names DO NO MATCH";
		message.style.display = "block";
		username2.style.backgroundColor = "#aa3333";
		username2.style.color = "#fff";
		username1.focus();
	} else {
		message.style.display = "none";
		username2.style.backgroundColor = "#fff";
		username2.style.color = "#000";
	}
}

// show the table on submission

const tableinfo = document.getElementById("tableinputdata");
const namefield = document.getElementById("namefield");
const emailfield = document.getElementById("emailfield");
const ratingfield = document.getElementById("ratingfield");
const usernamefield = document.getElementById("usernamefield");


function getData() {
	tableinfo.style.display = "table";
	namefield.textContent = document.querySelector('[name="fullname"]').value;
	emailfield.textContent = document.querySelector('[name="email"]').value;
	ratingfield.textContent = document.querySelector('[name="rating"]').value;
	usernamefield.textContent = document.querySelector('[name="username1"]').value;

	return
}
  
  document.getElementById("myform").addEventListener("submit", function (e) {
	e.preventDefault();
	getData();
  });