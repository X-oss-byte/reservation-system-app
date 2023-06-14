import { AppwriteDocumentService } from '$lib/modules/appwrite/AppwriteService';

export const ssr = false;
export const load: PageLoad = async () => {
	return { fleets: await AppwriteDocumentService.listFleet() };
};
