import { AppwriteDocumentService } from '$lib/modules/appwrite/AppwriteService';

export const ssr = false;
export const load: PageLoad = async () => {
	return { items: await AppwriteDocumentService.listItem() };
};
