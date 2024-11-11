import { getPlural } from "assets/js/utils/getPlural";

const countdown = (dt, options) => {
	let result = '-';
	let valueData = {};
	let start = new Date(dt);
	let end = new Date();
	let diff = Date.parse(end) - Date.parse(start);
	const params = {
		suffix: options?.suffix ?? 'назад',
		plural: {
			y: ['год', 'года', 'лет'],
			mo: ['мес.', 'мес.', 'мес.'],
			w: ['нед.', 'нед.', 'нед.'],
			d: ['д.', 'д.', 'д.'],
			h: ['ч.', 'ч.', 'ч.'],
			m: ['мин.', 'мин.', 'мин.'],
			...options?.plural || {},
		},
		minMinutes: options?.minMinutes ?? 1,
	}

	if(!dt || !(start instanceof Date) || isNaN(start)) {
		return result;
	}

	let days = Math.floor(diff / (1000 * 3600 * 24));
	let years = Math.floor(days / 365);
	let months = Math.floor((days - (years * 365)) / 30);
	let weeks = Math.floor(days / 7);
	let hours = Math.floor((diff / (1000 * 3600)) % 24);
	let minutes = Math.floor((diff / 1000 / 60) % 60);

	const pass = {
		y: years,
		mo: months,
		w: weeks,
		d: days,
		h: hours,
		m: minutes,
	}

	const attr = ['y','mo','w','d','h','m'].find(el => !!pass[el]) || 'm';

	if(pass[attr] < 0) return result

	if(attr) {
		if(attr === 'm' && pass[attr] < params.minMinutes) {
			return 'только что';
		}

		valueData = {
			value: pass[attr],
			plural: params.plural[attr] || null,
		};
	}

	if(valueData?.value && valueData?.plural) {
		result = `${valueData?.value} ${getPlural(valueData?.value, valueData?.plural)} ${params.suffix}`;
	}

	return result;
}

export { countdown };
