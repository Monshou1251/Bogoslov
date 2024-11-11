const getMonthName = date => {
	let dateInst = new Date(date);
	let month = dateInst.getMonth();

	return ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'][month];
}

export default getMonthName;
