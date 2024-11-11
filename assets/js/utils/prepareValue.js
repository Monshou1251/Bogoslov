import { prettyNumber } from "@/assets/js/utils/prettyNumber";
export function prepareValue(value, float = 1) {

	if(value % 1 === 0) {
		float = 0
	}

	if(value && prettyNumber(value, float).includes(',')) {
		return prettyNumber(value, float).replace(/0*$/,"");
	}

	return prettyNumber(value, float);
}
