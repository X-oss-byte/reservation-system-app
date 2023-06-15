import { AppriteReservationService } from '$lib/modules/appwrite/AppwriteService';

export const ssr = false;
export const load: PageLoad = async ({ params }) => {
	return { item: await AppriteReservationService.getItem(params.item_id) };
};
