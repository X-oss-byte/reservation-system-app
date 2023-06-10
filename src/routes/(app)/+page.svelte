<script>
	import About from '$lib/components/About.svelte';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import Vision from '$lib/components/Vision.svelte';
	import { navigationStore } from '$lib/stores/PageStore';
	navigationStore;
</script>

{#if $navigationStore.index == 0}
	<HeroSection />
{:else if $navigationStore.index == 1}
	<About />
{:else if $navigationStore.index == 2}
	<Vision />
{/if}
