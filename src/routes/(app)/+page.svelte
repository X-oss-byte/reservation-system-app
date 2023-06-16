<script>
	import HeroSection from '$lib/components/app/HeroSection.svelte';
	import Vision from '$lib/components/app/Vision.svelte';
	import { navigationStore } from '$lib/stores/PageStore';
	navigationStore;
</script>

<HeroSection />
<Vision />
