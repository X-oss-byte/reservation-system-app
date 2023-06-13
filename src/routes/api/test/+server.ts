import { API_KEY, API_KEY_2 } from '$env/static/private';

export const GET = () => {
	console.log(API_KEY_2);

	const sdk = require('node-appwrite');
	// Init SDK
	const client = new sdk.Client();

	const databases = new sdk.Databases(client);

	client
		.setEndpoint('https://appwrite.bespeak.site/v1') // Your API Endpoint
		.setProject('bespeak') // Your project ID
		.setKey('API_KEY'); // Your secret API key

	const promise = databases.list();

	promise.then(
		function (response) {
			return new Response(JSON.stringify({ api: API_KEY, res: response }), { status: 200 });
		},
		function (error) {
			return new Response(JSON.stringify({ api: API_KEY, res: error }), { status: 200 });
		}
	);
};
