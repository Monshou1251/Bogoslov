const downloadFile = async ({ type, part = 'file_body', id = null, baseUrl = process.env.API_URL }) => {

	let url =
		baseUrl +
		`/?type=${type}&part=${part}`;

	if(id) url += '&id=' + id;

	const res = await fetch(url, {
		body: '{}',
		headers: { "Content-Type": "application/json" },
		method: "POST",
	});

	if(res.status === 401 || res.status !== 200) {
		return res;
	}

	const headerLine = res.headers.get("content-disposition");
	const match = headerLine.match(/filename\s*=\s*"(.+)"/i);
	const fileName = decodeURI(match[1]);

	downloadBuffer(await res.arrayBuffer(), fileName);

	function downloadBuffer(arrayBuffer, fileName) {
		const type = "application/octet-stream";
		const a = document.createElement("a");

		a.href = URL.createObjectURL(
			new Blob([arrayBuffer], { type })
		);
		a.download = fileName;
		a.click();
	}

	return true
}

export default downloadFile;
