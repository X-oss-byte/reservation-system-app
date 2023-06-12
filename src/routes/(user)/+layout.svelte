<script>
	import Footer from '$lib/components/app/Footer.svelte';
	import Header from '$lib/components/user/Header.svelte';
	import UserFooter from '$lib/components/user/UserFooter.svelte';
</script>

<Header />
<slot />
<UserFooter />
