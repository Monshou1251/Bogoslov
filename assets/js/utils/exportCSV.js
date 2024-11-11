const exportCSV = async ({ query, type, action = 'print', id = null, baseUrl }) => {
    const timestamp = Date.now();
    const url = constructUrl(baseUrl, type, action, timestamp, id);
    const response = await sendExportRequest(url, query);

	if(response.status === 200) {
		const fileName = extractFileName(response, timestamp);
		await downloadCSV(response, fileName);
	}

    return response;
}

function constructUrl(baseUrl, type, action, timestamp, id) {
    let url = `${baseUrl}/?type=${type}&action=${action}&ts=${timestamp}&is_long_request=1`;

    if(id) url += `&id=${id}`;

    return url;
}

async function sendExportRequest(url, query) {
	try {
		const response = await fetch(url, {
			body: JSON.stringify(query || {}),
			headers: { 'Content-Type': 'application/json' },
			method: 'POST',
		});

		return response.status === 200 || response.status === 401
			? response
			: response.json()
	} catch (error) {
		throw new Error(error);
	}
}

function extractFileName(response, timestamp) {
    const headerLine = response.headers.get('content-disposition');
	const match = headerLine.match(/filename\s*=\s*"(.+)"/i);

    return decodeURI(match[1]) || `${timestamp}.csv`;
}

async function downloadCSV(response, fileName) {
    const arrayBuffer = await response.arrayBuffer();
    const blob = new Blob([arrayBuffer], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
}

export default exportCSV;
