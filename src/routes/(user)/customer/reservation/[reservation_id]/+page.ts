import { AppriteReservationService } from '$lib/modules/appwrite/AppwriteService';

export const ssr = false;
export const load  = async ({ params }) => {
	return { data: await AppriteReservationService.getReservation(params.reservation_id) };
};
