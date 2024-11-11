import { getPlural } from "assets/js/utils/getPlural";

export const getUpdateDaysCount = (date) => {
	const date1 = new Date(date);
	const date2 = new Date();

	const minutesPass = Math.floor((date2 - date1) / 1000 / 60);
	const hoursPass = Math.floor(minutesPass / 60);
	const daysPass = Math.floor(hoursPass / 24);

	if(minutesPass < 2) return 'только что';

	let count;
	let plural;

	if(minutesPass < 60) {
		count = minutesPass;
		plural = ['минута', 'минуты', 'минут'];
	} else if(minutesPass > 60 && hoursPass < 24) {
		count = hoursPass;
		plural = ['час', 'часа', 'часов'];
	} else {
		count = daysPass;
		plural = ['день', 'дня', 'дней'];
	}

	return `${count} ${getPlural(count, plural)} назад`;
}
