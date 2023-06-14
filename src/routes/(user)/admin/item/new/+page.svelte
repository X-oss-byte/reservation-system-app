<script>
	import AdminItem from '$lib/components/user/admin/create/AdminItem.svelte';
	export let data;
</script>

<AdminItem fleets={data.fleets} />
