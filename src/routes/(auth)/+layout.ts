import { AppwriteLoginServices } from '$lib/modules/appwrite/AppwriteService';
import { goto } from '$app/navigation';

export const ssr = false;
export const load: PageLoad = async () => {
	if (await AppwriteLoginServices.fetchAccount()) {
		goto('/profile');
	}
	return { check: await AppwriteLoginServices.fetchAccount() };
};