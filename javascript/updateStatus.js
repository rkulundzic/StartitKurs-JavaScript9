
var allTwitts = document.getElementById('twitts');
var twittUpdateBtn = document.getElementById('twitt-btn');
var twittUpdate = document.getElementById('new-twitt');
var firstStatus = document.getElementById('twitts').firstChild;

twittUpdate.maxLength = "140";

twittUpdateBtn.onclick = function twitting(e) {

	if (twittUpdate.value.trim() == ""){

		alert('Textfield is empty!')

	}

	else {

		var newDiv = document.createElement("div");
		var newP = document.createElement("p");

		newP.innerHTML = "<strong>" + profil.name + "</strong>" + " " + "<strong>" + profil.surname + "</strong>" + " " + "@" + profil.username + "<br>" + twittUpdate.value;

		newDiv.classList.add('twitt');
		newDiv.appendChild(newP);

		allTwitts.insertBefore(newDiv, allTwitts.firstChild);
	}

}