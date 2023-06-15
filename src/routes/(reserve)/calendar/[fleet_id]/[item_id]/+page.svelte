<script lang="ts">
	import Calendar from '$lib/components/reservation/Calendar.svelte';
	export let data: any;
</script>

<Calendar item={data.item} />
