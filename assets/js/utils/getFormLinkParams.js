import reformatDateTime from "assets/js/utils/reformatDateTime";

export const getFormLinkParams = (dateCompare, region, period) => {
	let date;
	const today = reformatDateTime(new Date(), false, false, false)
		.split('.')
		.reverse()
		.join('-');


	if(typeof dateCompare[0] === 'object') {
		// Day
		date = [dateCompare[1][1], dateCompare[1][1]];

	} else if(dateCompare[0].length === 4) {
		// Year
		const currentYear = new Date().getFullYear();

		const periodEnd = +dateCompare[1] === +currentYear ? today : dateCompare[1] + '-12-31';
		date = [dateCompare[1] + '-01-01', periodEnd];
	} else {
		// Month
		const currentMonth = new Date().getMonth() + 1;

		//Get last day of compared month
		const [year, month] = dateCompare[1].split('-').map(Number);
		const lastMonthDay = new Date(year, month, 0).getDate();

		const periodEnd = +dateCompare[1].split('-')[1] === +currentMonth ? today : dateCompare[1] + '-' + lastMonthDay;

		date = [dateCompare[1] + '-01', periodEnd];
	}

	const dt = `dt=${date[0]}|${date[1]}`;
	const regionQuery = region ? `&id_voc_region=${region.id}|${region.label}` : '';
	const periodQuery = period ? `&period=${period.id}|${period.label}` : '';

	return `${dt}${regionQuery}${periodQuery}`;
}
