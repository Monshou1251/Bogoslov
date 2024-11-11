const formatToLocalISOString = date => {
	let result = date;

    if(date instanceof Date && !isNaN(date)) {
		const tzOffset = date.getTimezoneOffset() * 60000;
		const localTime = new Date(date - tzOffset);
		const isoString = localTime.toISOString();

		result = isoString.slice(0, 19);
	}

	return result;
}

export default formatToLocalISOString;
