<script lang="ts">
	import CustomerReservation from '$lib/components/user/customer/CustomerReservation.svelte';
	export let data: any;
</script>

<CustomerReservation reservationData={data.data} />
