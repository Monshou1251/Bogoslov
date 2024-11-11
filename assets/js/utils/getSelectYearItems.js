export const getSelectYearItems = (startYear, endYear, infinity = false) => {
	let items = [];

	if(infinity) {
		items.push({
			id: 9999,
			label: 'Бессрочно'
		});
	}

	for(let i = startYear; i <= endYear; i++) {
		items.push({
			id: i,
			label: i
		});
	}

	return items;
}
