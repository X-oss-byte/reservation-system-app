<script>
	import AdminListFleets from '$lib/components/user/admin/AdminListFleets.svelte';
	export let data;
</script>

<AdminListFleets fleets={data.fleets} />
