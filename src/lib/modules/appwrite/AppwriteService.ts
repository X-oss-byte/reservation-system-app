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
		if (redirectUrl.includes('localhost')) {
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
	deleteFleet: async (fleetID) => {
		const promise = await databases.deleteDocument('main', 'calendars', fleetID);
		goto('/admin/fleets');
		return promise;
	},
	updateFleet: async (fleetID, data) => {
		const promise = await databases.updateDocument('main', 'calendars', fleetID, data);
		goto('/admin/fleets');
		return promise;
	}
};
