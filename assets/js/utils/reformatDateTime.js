import getMonthName from "@/assets/js/utils/getMonthName";
const reformatDateTime = (dateString, time = true, yearOnly = false, text = false, params = null) => {
	let result = "-";

	if(Array.isArray(dateString)) {
		if(dateString.length === 2) {
			const options = {
				day: 'numeric',
				month: 'numeric',
				year: 'numeric',
			};

			const startDate = new Date(dateString[0]);
			const startDateFormatted = startDate.toLocaleString("ru", options);
			const endDate = new Date(dateString[1]);
			const endDateFormatted = endDate.toLocaleString("ru", options);
			result = `${startDateFormatted} – ${endDateFormatted}`;
		}
	} else {
		let date = new Date(dateString);

		if(date instanceof Date && !isNaN(date)) {
			let year = date.getFullYear();

			if(yearOnly) return year;

			const separatorDate = params && params.monthString ? ' ' : '.';
			const separator = params && params.separator ? params.separator : ' ';

			let month = params && params.monthString ? getMonthName(date) : date.getMonth() + 1;
			let dt = date.getDate();
			let h = date.getHours();
			let m = date.getMinutes();
			let s = date.getSeconds();

			month = month < 10 ? "0" + month : month;
			dt = dt < 10 ? "0" + dt : dt;
			h = h < 10 ? "0" + h : h;
			m = m < 10 ? "0" + m : m;
			s = s < 10 ? "0" + s : s;

			result = `${dt}${separatorDate}${month}${separatorDate}${year}`;

			if(time) {
				const timeRange = params?.timeRange;
				const startTime = params?.startTime || '00:00';
				const showSeconds = params?.showSeconds ? `:${s}` : '';
				const timeFormat = `${h}:${m}${showSeconds}`;
				const timeString = timeRange ? `${startTime} – ${timeFormat}` : timeFormat;

				const formattedTime = text
					? `${separator}${timeString}`
					: `${separator}<span class='--gray --time color-gray'>${timeString}</span>`;

				if(params?.onlyTime) {
					result = formattedTime;
				} else {
					result += formattedTime;
				}
			}
		}
	}

	return result;
};


export default reformatDateTime;
