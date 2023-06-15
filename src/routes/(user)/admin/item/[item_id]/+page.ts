import { AppwriteDocumentService } from '$lib/modules/appwrite/AppwriteService';

export const ssr = false;
export const load: PageLoad = async ({ params }) => {
	return {
		fleets: await AppwriteDocumentService.listFleet(),
		item: await AppwriteDocumentService.getItem(params.item_id)
	};
};
