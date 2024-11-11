const decodeResponseBody = async (body) => {
	const reader = body.getReader();

	const { value } = await reader.read();
	const chunks = [value];

	let chunksAll = new Uint8Array(value.length);
	let position = 0;

	for(let chunk of chunks) {
		chunksAll.set(chunk, position);
		position += chunk.length;
	}

	let result = new TextDecoder("utf-8").decode(chunksAll);

	return JSON.parse(result);
}

export default decodeResponseBody;
