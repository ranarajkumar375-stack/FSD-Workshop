const http = require('http');
const querystring = require('querystring');

const styles = `
	* { box-sizing: border-box; }
	body {
		margin: 0;
		min-height: 100vh;
		display: grid;
		place-items: center;
		padding: 24px;
		color: #172033;
		background: linear-gradient(135deg, #e7f0ff, #fdf4e8);
		font-family: Georgia, 'Times New Roman', serif;
	}
	.card {
		width: min(100%, 480px);
		padding: 38px;
		background: #ffffff;
		border: 1px solid #dce4f0;
		border-radius: 18px;
		box-shadow: 0 18px 45px rgba(31, 52, 88, 0.14);
	}
	h1 { margin: 0 0 8px; color: #163b70; font-size: 2rem; }
	.intro { margin: 0 0 28px; color: #667085; font-family: Arial, sans-serif; }
	label {
		display: block;
		margin-top: 16px;
		color: #344054;
		font: 600 0.9rem Arial, sans-serif;
	}
	input {
		width: 100%;
		margin-top: 7px;
		padding: 12px 14px;
		border: 1px solid #cbd5e1;
		border-radius: 9px;
		color: #172033;
		font-size: 1rem;
	}
	input:focus { outline: 3px solid #c9dcff; border-color: #3575c8; }
	button {
		width: 100%;
		margin-top: 28px;
		padding: 13px 16px;
		border: 0;
		border-radius: 9px;
		color: #ffffff;
		background: #1f5fae;
		cursor: pointer;
		font: 700 1rem Arial, sans-serif;
	}
	button:hover { background: #174b8c; }
	.result { margin: 24px 0; font: 1rem/1.8 Arial, sans-serif; }
	.result strong { color: #163b70; }
	a { color: #1f5fae; font: 600 0.95rem Arial, sans-serif; }
	@media (max-width: 520px) {
		.card { padding: 28px 22px; }
		h1 { font-size: 1.7rem; }
	}
`;

const form = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Student Average</title>
	<style>${styles}</style>
</head>
<body>
	<main class="card">
		<h1>Student Marks</h1>
		<p class="intro">Enter the details below to calculate the average.</p>
		<form method="POST" action="/average">
			<label>Name <input type="text" name="name" required></label>
			<label>Roll number <input type="text" name="rollNumber" required></label>
			<label>Subject 1 marks <input type="number" name="subject1" min="0" max="100" required></label>
			<label>Subject 2 marks <input type="number" name="subject2" min="0" max="100" required></label>
			<label>Subject 3 marks <input type="number" name="subject3" min="0" max="100" required></label>
			<button type="submit">Calculate average</button>
		</form>
	</main>
</body>
</html>`;

const server = http.createServer((request, response) => {
	if (request.method === 'GET' && request.url === '/') {
		response.writeHead(200, { 'Content-Type': 'text/html' });
		response.end(form);
		return;
	}

	if (request.method === 'POST' && request.url === '/average') {
		let body = '';
		request.on('data', (chunk) => {
			body += chunk;
		});
		request.on('end', () => {
			const data = querystring.parse(body);
			const marks = [data.subject1, data.subject2, data.subject3].map(Number);
			const average = marks.reduce((total, mark) => total + mark, 0) / marks.length;

			response.writeHead(200, { 'Content-Type': 'text/html' });
			response.end(`
				<!DOCTYPE html>
				<html lang="en">
				<head>
					<meta charset="UTF-8">
					<meta name="viewport" content="width=device-width, initial-scale=1.0">
					<title>Student Result</title>
					<style>${styles}</style>
				</head>
				<body>
					<main class="card">
						<h1>Student Result</h1>
						<div class="result">
							<div><strong>Name:</strong> ${data.name}</div>
							<div><strong>Roll number:</strong> ${data.rollNumber}</div>
							<div><strong>Average marks:</strong> ${average.toFixed(2)}</div>
						</div>
						<a href="/">Calculate another average</a>
					</main>
				</body>
				</html>`);
		});
		return;
	}

	response.writeHead(404, { 'Content-Type': 'text/plain' });
	response.end('Not Found');
});

server.listen(3000, () => {
	console.log('Server running at http://localhost:3000/');
});