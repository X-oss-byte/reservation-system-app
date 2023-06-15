<script>
	import AdmiItemUpdate from '$lib/components/user/admin/update/AdmiItemUpdate.svelte';
	import { databases } from '$lib/modules/appwrite/AppwriteService';
	export let data;
</script>

<AdmiItemUpdate fleets={data.fleets} item={data.item} />
