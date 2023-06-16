import { AppwriteAuthServices } from '$lib/modules/appwrite/AppwriteService';
import { goto } from '$app/navigation';

export const ssr = false;
export const load: PageLoad = async ({ params }) => {
	if (await AppwriteAuthServices.fetchAccount()) {
		goto(`/calendar/${params.fleet_id}`);
	}
};
