import { API_KEY } from '$env/static/private';

export const GET = () => {
	promise.then(
		function (response) {
			return new Response(JSON.stringify({ api: 332, res: response }), { status: 200 });
		},
		function (error) {
			return new Response(JSON.stringify({ api: 333, res: error }), { status: 200 });
		}
	);
};
