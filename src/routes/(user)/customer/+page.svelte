<script lang="ts">
	import ListReservations from '$lib/components/user/customer/ListReservations.svelte';
	export let data;
</script>

<ListReservations reservations={data.reservations} />
