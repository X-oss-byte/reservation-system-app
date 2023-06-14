import { AppwriteDocumentService } from '$lib/modules/appwrite/AppwriteService';

/** @type {import('./$types').PageLoad} */
export const load: PageLoad = async ({ params }) => {
	return { fleet: await AppwriteDocumentService.getFleet(params.fleet_id) };
};
