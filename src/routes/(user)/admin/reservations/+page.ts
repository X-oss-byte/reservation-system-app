import { AppriteReservationService } from '$lib/modules/appwrite/AppwriteService';

export const ssr = false;
export const load: PageLoad = async () => {
	return { reservations: await AppriteReservationService.listAdminReservation() };
};
