<script lang="ts">
	import AdminListReservations from '$lib/components/user/admin/AdminListReservations.svelte';
	export let data;
</script>

<AdminListReservations reservations={data.reservations} />
