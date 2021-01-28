SAMPLE EVENT DATA MODEL:
{
	description: '',
	source: '',
	type: '',
	metric_name: '',
	processing_notes: '',
	severity: '1',
	error_msg: '',
	cmdb_ci: '',
	resource: '',
}

axios.get(`${API_URL}?sysparm_limit=1`, {
	headers: request_headers
}).then(response => {
	const result = response.data.result;
	console.log(result[0])
}).catch(error => {
	console.log(error.response.data)
})
