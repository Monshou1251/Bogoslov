const replaceDot = (num) => {
	if(+num === 0) {
		return 0
	} else {
		return String(num).indexOf('.') === -1 ? num : String(num).replace('.', ',');
	}
}

export default replaceDot;
