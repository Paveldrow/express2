const ticket = document.querySelector('.ticket');
const dates = document.querySelectorAll('.date');
const time = document.querySelector('.time');
const changer = document.querySelector('.change');
const pointsFirst = document.querySelectorAll('.point-first');
const pointsSecond = document.querySelectorAll('.point-second');

const trainsList = document.querySelectorAll('.train-item');
const trainsFromMoscow = [
	'08:05',
	'08:22',
	'08:29',
	'09:03',
	'11:00',
	'13:20',
	'14:06',
	'15:02'];

	const trainsToMoscow = [
		'18:45',
		'19:02',
		'19:29',
		'20:03',
		'20:31',
		'13:20',
		'14:06',
		'15:02'];

const monthList = [
	'Января',
	'Февраля',
	'Марта',
	'Апреля',
	'Мая',
	'Июня',
	'Июля',
	'Августа',
	'Сентября',
	'Октября',
	'Ноября',
	'Декабря',
];

function removeActive() {
	ticket.classList.remove('ticket--active');
};

ticket.addEventListener('click', () => {
	if (ticket.classList.contains('ticket--active')) {
		return;
	} else {
		ticket.classList.add('ticket--active');
		setTimeout(removeActive, 1400);
	}
})

const localDate = new Date();
const nowDate = localDate.getDate();
const nowMonth = localDate.getMonth();
const nowYear = localDate.getFullYear();
const nowHour = localDate.getHours();
const nowMinutes = localDate.getMinutes();

for (let i = 0; i < dates.length; i++) {

	// dates[i].textContent = nowDate + ' ' + monthList[nowMonth] + ' ' + nowYear;

	dates[i].textContent = nowDate + ' ' + monthList[nowMonth] + ' ' + nowYear + ' ';
	let minutes = nowMinutes - 12;
	if (minutes < 0) {
		minutes = -(minutes);

	}
	if (minutes < 10) {
		minutes = '0' + (minutes);
	}
	time.textContent = ' в ' + nowHour + ':' + (minutes);
}



function snowTrains() {
	for (let i = 0; i < trainsList.length; i++) {
		trainsList[i].textContent = trainsFromMoscow[i];
	};
}

function chengeTrain() {
	pointsFirst.textContent = "ЖЕЛЕЗНОДОРОЖНАЯ";
	pointsSecond.textContent = "МОСКВА (Курский вокзал)";
}

snowTrains();
console.log(dates)

let trigger = 0;

changer.addEventListener('click', () => {

	if (trigger == 1) {
		for (let i = 0; i < pointsSecond.length; i++) {
			pointsFirst[i].innerHTML = "МОСКВА (Курский вокзал)";
			pointsSecond[i].innerHTML = "ЖЕЛЕЗНОДОРОЖНАЯ";
		}
		
		trigger--;
	} else {
		for (let i = 0; i < pointsSecond.length; i++) {
			pointsSecond[i].innerHTML = "МОСКВА (Курский вокзал)";
			pointsFirst[i].innerHTML = "ЖЕЛЕЗНОДОРОЖНАЯ";
		}
		trigger++;
	}
});

