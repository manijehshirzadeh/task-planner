// TASK 5
function today() {
	const event = new Date();
	const options = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	};
	const today = event.toLocaleDateString('en-AU', options);
	return today;
}

function displayDate() {
	const navbarNav = document.querySelectorAll('.navbar-nav');
  const navbarRight = navbarNav[1];
  const profileLi = navbarRight.childNodes[0];

	const liEl = document.createElement('li');
  liEl.classList.add('nav-item');
  liEl.style.transform = 'none';

  const todayDisplay = document.createElement('span');
  todayDisplay.classList.add('nav-link');
  todayDisplay.innerText = today();

	liEl.appendChild(todayDisplay);
	navbarRight.insertBefore(liEl, profileLi);
}

window.addEventListener('DomContentLoaded', displayDate());
