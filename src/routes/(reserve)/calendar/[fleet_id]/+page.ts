import { AppriteReservationService } from '$lib/modules/appwrite/AppwriteService';

export const ssr = false;
export const load: PageLoad = async ({ params }) => {
	return { items: await AppriteReservationService.listItem(params.fleet_id) };
};
