import { Client, Account, Databases, ID, Query } from 'appwrite';
import { User } from '../../stores/AppwriteStore';
import { FleetStore } from '../../stores/AppStore';
import { goto } from '$app/navigation';

const client = new Client().setEndpoint('https://appwrite.bespeak.site/v1').setProject('bespeak');

export const account = new Account(client);
export const databases = new Databases(client);

export const AppwriteAuthServices = {
	login: async (provider: 'google' | 'github', redirectUrl: string) => {
		let letFinalRedirect: string;

		if (redirectUrl.includes('calendar')) {
			letFinalRedirect = redirectUrl.includes(`login`) ? redirectUrl.slice(0, -5) : redirectUrl;
		} else if (redirectUrl.includes('localhost')) {
			letFinalRedirect = `http://${redirectUrl.split('/', 3)[2]}/profile`;
		} else {
			letFinalRedirect = `https://www.bespeak.site/profile`;
		}
		let user = await account.createOAuth2Session(provider, letFinalRedirect);
		User.set(user);
	},
	logout: async () => {
		try {
			const promise = await account.deleteSessions();
			goto('/login');
			User.set(null);
		} catch (err) {
			goto('/login');
			User.set(null);
		}
	},
	fetchAccount: async () => {
		try {
			const promise = await account.get();
			User.set(promise);
			return true;
		} catch (err) {
			User.set(null);
			return false;
		}
	}
};

export const AppwriteDocumentService = {
	createFleet: async (data) => {
		const promise = await databases.createDocument('main', 'calendars', ID.unique(), data);
		goto('/admin/fleets');
		return promise;
	},
	createItem: async (data) => {
		const promise = await databases.createDocument('main', 'calendarSlotTypes', ID.unique(), data);
		goto('/admin/items');
		return promise;
	},
	listFleet: async () => {
		const user = await account.get();
		const promise = await databases.listDocuments('main', 'calendars', [
			Query.equal('userId', user.$id),
			Query.limit(100),
			Query.offset(0)
		]);
		return promise.documents;
	},
	listItem: async () => {
		const user = await account.get();
		const promise = await databases.listDocuments('main', 'calendarSlotTypes', [
			Query.equal('userId', user.$id),
			Query.limit(100),
			Query.offset(0)
		]);
		return promise.documents;
	},
	getFleet: async (fleetID) => {
		const promise = await databases.getDocument('main', 'calendars', fleetID);
		return promise;
	},
	getItem: async (itemID) => {
		const promise = await databases.getDocument('main', 'calendarSlotTypes', itemID);
		return promise;
	},
	deleteFleet: async (fleetID) => {
		const promise = await databases.deleteDocument('main', 'calendars', fleetID);
		goto('/admin/fleets');
		return promise;
	},
	deleteItem: async (itemID) => {
		const promise = await databases.deleteDocument('main', 'calendarSlotTypes', itemID);
		goto('/admin/items');
		return promise;
	},
	updateFleet: async (fleetID, data) => {
		const promise = await databases.updateDocument('main', 'calendars', fleetID, data);
		goto('/admin/fleets');
		return promise;
	},
	updateItem: async (ItemID, data) => {
		const promise = await databases.updateDocument('main', 'calendarSlotTypes', ItemID, data);
		goto('/admin/items');
		return promise;
	}
};

export const AppriteReservationService = {
	listItem: async (calendarId) => {
		const promise = await databases.listDocuments('main', 'calendarSlotTypes', [
			Query.equal('calendarId', calendarId),
			Query.limit(100),
			Query.offset(0)
		]);
		return promise.documents;
	},
	getItem: async (itemID) => {
		const promise = await databases.getDocument('main', 'calendarSlotTypes', itemID);
		return promise;
	},
	createReservation: async (data) => {
		let finalReservationID;
		let slotReservation = await AppriteReservationService.getItem(data.slotTypeId);
		const promise = await databases.updateDocument('main', 'calendarSlotTypes', data.slotTypeId, {
			reservedDates: [...slotReservation.reservedDates, data.reservedAt]
		});
		const reservation = await databases.createDocument(
			'main',
			'calendarSlots',
			`${data.reservedAt}${data.slotTypeId}`,
			data
		);
		goto(`/final/${reservation.$id}`);
	},
	getReservation: async (reservationID) => {
		let reservation = await databases.getDocument('main', 'calendarSlots', reservationID);
		return {
			reservation: reservation,
			fleet: await databases.getDocument('main', 'calendars', reservation.calendarId),
			item: await databases.getDocument('main', 'calendarSlotTypes', reservation.slotTypeId)
		};
	},
	reviewRedirect: async (reservationID) => {
		if (await AppwriteAuthServices.fetchAccount()) {
			goto('/customer');
		} else {
			goto(`/reservation/${reservationID}`);
		}
	},
	listCustomerReservation: async () => {
		const user = await account.get();
		const promise = await databases.listDocuments('main', 'calendarSlots', [
			Query.equal('contactEmail', user.email),
			Query.limit(100),
			Query.offset(0)
		]);
		return promise.documents;
	},
	listAdminReservation: async () => {
		const user = await account.get();
		const promise = await databases.listDocuments('main', 'calendarSlots', [
			Query.equal('userId', user.$id),
			Query.limit(100),
			Query.offset(0)
		]);
		return promise.documents;
	},
	removeReservation: async (reservationOBJ, reservationID, itemID, admin = false) => {
		let slotReservation = await AppriteReservationService.getItem(itemID);
		const promiseItem = await databases.updateDocument('main', 'calendarSlotTypes', itemID, {
			reservedDates: slotReservation.reservedDates.filter((obj) => {
				return obj !== reservationOBJ.reservedAt;
			})
		});
		const promiseReservation = await databases.deleteDocument(
			'main',
			'calendarSlots',
			reservationID
		);
		if (admin) {
			goto('/admin/reservations');
		} else {
			goto('/customer');
		}
	}
};
