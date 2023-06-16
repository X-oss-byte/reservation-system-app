<script lang="ts">
	import AdminRreservation from '$lib/components/user/admin/reservation/AdminRreservation.svelte';
	export let data: any;
</script>

<AdminRreservation reservationData={data.data} />
