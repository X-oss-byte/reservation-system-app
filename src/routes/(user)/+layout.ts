import { AppwriteAuthServices } from '$lib/modules/appwrite/AppwriteService';
import { goto } from '$app/navigation';

export const ssr = false;
export const load = async () => {
	if (!(await AppwriteAuthServices.fetchAccount())) {
		goto('/login');
	}
};
