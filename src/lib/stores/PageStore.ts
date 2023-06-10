import { writable } from 'svelte/store';

export const navigationStore: writable = writable({ index: 1, page: 'about' });
