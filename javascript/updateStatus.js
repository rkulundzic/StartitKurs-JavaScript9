var profil = {
	name : 'Radmila',
	surname: 'Kulundžić',
	username: 'Rkulundzic',
	profilPhoto: 'https://pbs.twimg.com/profile_images/269074851/HPIM4989a_400x400.jpg',
	profilCover: 'https://scontent.fbeg4-1.fna.fbcdn.net/v/t31.0-8/1052520_10151685940389655_128670583_o.jpg?oh=8a16adec611587556bc70882a9cbc716&oe=5A8C6782',
	status: [
		'Nego,kako se postavljaju slike ovde?',
		'Morala sam da pravim neke haljine',
		'Twitter kasni'
	]
};

var allTwitts = document.getElementById('twitts');
var twittUpdateBtn = document.getElementById('twitt-btn');
var twittUpdate = document.getElementById('new-twitt');
var firstStatus = document.getElementById('twitts').firstChild;

var twittCount = document.getElementById('twitt-count');
twittCount.innerHTML = allTwitts.children.length - 1;

twittUpdate.maxLength = "140";

var elapsed = new Date().toUTCString();

twittUpdateBtn.onclick = function twitting(e) {

	if (twittUpdate.value.trim() == ""){

		alert('Textfield is empty!')

	}

	else {

		var newDiv = document.createElement("div");
		var newP = document.createElement("p");
		var userImg = document.createElement("img");

		userImg.src = profil.profilPhoto;
		userImg.classList.add('user-img');

		newP.innerHTML = "<strong>" + profil.name + "</strong>" + " " + "<strong>" + profil.surname + "</strong>" + " " + "@" + profil.username + " - " + elapsed + "<br>" + twittUpdate.value;

		newDiv.classList.add('twitt');
		newDiv.appendChild(userImg);
		newDiv.appendChild(newP);

		allTwitts.insertBefore(newDiv, allTwitts.firstChild);

		twittCount.innerHTML ++; 
	}

}