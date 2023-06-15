import { AppriteReservationService } from '$lib/modules/appwrite/AppwriteService';

export const ssr = false;
export const load: PageLoad = async ({ params }) => {
	return { data: await AppriteReservationService.getReservation(params.reservation_id) };
};
