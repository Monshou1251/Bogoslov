
const exportXLSX = async ({ query, type, action = 'print', id = null, baseUrl, isAllCats }) => {
	let ts = Date.now();

	let url =
		baseUrl +
		`/?type=${type}&action=${action}&ts=${ts}&is_long_request=1`;

	if(id) url += '&id=' + id;
	if(isAllCats) url += '&is_all_cats=1';

	const res = await sendExportRequest(url, query);

	if(res.status === 200) {
		const headerLine = res.headers.get("content-disposition");
		const match = headerLine.match(/filename\s*=\s*"(.+)"/i);
		const fileName = decodeURI(match[1]) || `${ts}.xlsx`;

		downloadBuffer(await res.arrayBuffer(), fileName);
	}

	function downloadBuffer(arrayBuffer, fileName) {
		const type =
			"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
		const a = document.createElement("a");

		a.href = URL.createObjectURL(
			new Blob([arrayBuffer], { type })
		);
		a.download = fileName;
		a.click();
	}

	async function sendExportRequest(url, query) {
		try {
			const res = await fetch(url, {
				body: JSON.stringify(query || {}),
				headers: { 'Content-Type': 'application/json' },
				method: 'POST',
			});

			return res.status === 200 || res.status === 401
				? res
				: res.json();
		} catch (error) {
			throw new Error(error);
		}
	}

	return res;
}

export default exportXLSX;
