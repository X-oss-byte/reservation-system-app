<script>
	import { page } from '$app/stores';
	import About from '$lib/components/app/About.svelte';
	import HeroSection from '$lib/components/app/HeroSection.svelte';
	import Vision from '$lib/components/app/Vision.svelte';
</script>

{#if $page.params.navSlug == 'home'}
	<HeroSection />
{:else if $page.params.navSlug == 'about'}
	<About />
{:else if $page.params.navSlug == 'vision'}
	<Vision />
{/if}
