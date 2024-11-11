import { prettyNumber } from "assets/js/utils/prettyNumber";

export const formatNumber = (data, level, showPcs) => {
	level = (level || 0) + 1
	if(level >= 5) return

	if(Array.isArray(data)) {
		data = data.map(i => formatNumber(i, level))
	} else if(typeof data == 'object' && data) {
		for(let key in data) {
			data[key] = formatNumber(data[key], level)
		}
	} else if(typeof data == 'number' || +data == data) {
		if(data >= 10 ** 9) {
			data = prettyNumber(Math.round(data / 10 ** 8) / 10) + '<span class="h5 ml-1">млрд</span>';
		} else if(data >= 10 ** 6) {
			data = prettyNumber(Math.round(data / 10 ** 5) / 10) + '<span class="h5 ml-1">млн</span>';
		} else if(data >= 10 ** 3) {
			data = prettyNumber(Math.round(data / 10 ** 2) / 10) + '<span class="h5 ml-1">тыс.</span>';
		} else {
			data = prettyNumber(data);

			if(showPcs) data += '<span class="h5 suffix ml-1">шт.</span>';
		}
	}

	return data;
}
