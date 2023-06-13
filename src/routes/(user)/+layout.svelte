<script>
	import Header from '$lib/components/user/Header.svelte';
	import UserFooter from '$lib/components/user/UserFooter.svelte';
	export let data;
</script>

<Header />
<slot />
<UserFooter />
