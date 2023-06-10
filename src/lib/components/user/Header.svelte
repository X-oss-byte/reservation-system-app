<script lang="ts">
	import { goto } from '$app/navigation';
	import { navigationStore } from '$lib/stores/PageStore';
	let stateNavbar: boolean = false;
	const changeStateNavbar = () => {
		stateNavbar = !stateNavbar;
	};
</script>

<nav class="bg-white w-full border-b md:border-0">
	<div class="items-center px-4 max-w-screen-xl mx-auto flex justify-between">
		<div>s</div>
		<div>s</div>
	</div>
</nav>
