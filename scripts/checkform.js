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
