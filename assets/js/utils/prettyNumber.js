/**
 * Pretty string number from number
 *
 * @param number { String, * }
 * @param float { Boolean, Number }
 * @param hideZeros
 * @param round
 * @returns { String }
 * */
const prettyNumber = (number, float = null, hideZeros = false, round = false) => {
	if(!number) return number;

	number = String(number).replace(',', '.').replace(/ /g, '');

	if(+number === 0) return '0';

	// To float
	if(float || float === 0) {
		if(round) {
			number = parseFloat(number).toFixed(float);
		}

		const numParts = String(number).split('.');
		const integerPart = numParts[0].replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
		let fractionalPart = numParts[1] || '';

		// Add zeros
		if(
			!fractionalPart && float !== 0 ||
			fractionalPart.length < float
		) {
			fractionalPart = fractionalPart.padEnd(float, '0');
		}

		if(fractionalPart) {
			fractionalPart = fractionalPart.slice(0, float);

			if(
				fractionalPart
					.split('')
					.every(number => number === '0') &&
				integerPart === '0'
			) {
				number = 0;
			} else {
				number = integerPart + (fractionalPart ? '.' + fractionalPart : '');
			}
		}
	}

	if(String(number).indexOf('.') === -1) {
		// int
		return String(number).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
	} else {
		// float
		const numParts = String(number).split('.');
		const integerPart = numParts[0].replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
		const fractionalPart = numParts[1] || '';
		const allZeros = fractionalPart
			.split('')
			.every(char => char === '0');

		if(allZeros && hideZeros) return integerPart;

		return integerPart + ',' + fractionalPart;
	}
}

/**
 * Pretty number string to number
 *
 * @param number { String, * }
 * @returns { Number, * }
 * */
const toNumber = number => {
	if(!number) return number;
	if(number === '0') return +number;
	if(number === '-') return number;

	const toNum = Number(String(number).replace(',', '.').replace(/ /g, ''));

	if(isNaN(toNum)) return number;

	return toNum;
}

const formatLargeNumber = (number, float = 0, hideZeros = false, inline = false) => {
    const suffixes = ['шт.', 'тыс.', 'млн', 'млрд', 'трлн', 'квадр.', 'квинт.'];

    let suffixIndex = 0;

    while (Math.abs(number) >= 1000 && suffixIndex < suffixes.length - 1) {
        number /= 1000;
        suffixIndex++;
    }

	let result = {
        value: prettyNumber(number, float, hideZeros),
		suffix: suffixes[suffixIndex],
    }

	if(inline) {
		result = `${result.value} ${result.suffix}`;
	}

    return result;
}

export { prettyNumber, toNumber, formatLargeNumber };
