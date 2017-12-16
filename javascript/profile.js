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

var coverImg = document.getElementById('hero');
coverImg.style.background = "url('" + profil.profilCover + "') center";
coverImg.style.backgroundSize = "cover";

var profilImg = document.getElementById('profile-img');
profilImg.src = profil.profilPhoto;
profilImg.style.width = "200px";
profilImg.style.borderRadius = "50%";

var fullName = document.getElementById('full-name');
fullName.innerHTML = profil.name + " " + profil.surname;

var userName = document.getElementById('user-name');
userName.innerHTML = "<strong>@</strong>" + profil.username;

var twittPlaceholder = document.getElementById('new-twitt');
twittPlaceholder.placeholder = "Шта се дешава?";

var allTwitts = document.getElementById('twitts');

for (var i = profil.status.length - 1; i >= 0; i--) {
	
	var newDiv = document.createElement("div");
	var newP = document.createElement("p");
	var userImg = document.createElement("img");

	userImg.src = profil.profilPhoto;
	userImg.classList.add('user-img');

	newP.innerHTML = "<strong>" + profil.name + "</strong>" + " " + "<strong>" + profil.surname + "</strong>" + " " + "@" + profil.username + "<br>" + profil.status[i];

	newDiv.appendChild(userImg);
	newDiv.appendChild(newP);
	newDiv.classList.add('twitt');

	allTwitts.insertBefore(newDiv, allTwitts.firstChild);
}
