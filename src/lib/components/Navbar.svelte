<script lang="ts">
	import { goto } from '$app/navigation';
	import { navigationStore } from '$lib/stores/PageStore';
	let stateNavbar: boolean = false;
	const changeStateNavbar = () => {
		stateNavbar = !stateNavbar;
	};
</script>

<nav class="bg-white w-full border-b md:border-0 md:static">
	<div class="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
		<div class="flex items-center justify-between py-3 md:py-5 md:block">
			<a href="/">
				<h1
					class="font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#8B0000] to-[#000000]"
				>
					Bespeak
				</h1>
			</a>
			<div class="md:hidden flex items-center">
				{#if stateNavbar}
					<button
						on:click={() => {
							goto('/login');
						}}
						class="border-2 border-black rounded-lg p-1 px-8 transition duration-500 ease-in-out text-black font-bold bg-white hover:-translate-y hover:text-white hover:bg-black"
						>Login</button
					>{/if}
				<button
					on:click={() => {
						changeStateNavbar();
					}}
					class="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
				>
					{#if stateNavbar}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
							/>
						</svg>
					{:else}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M4 8h16M4 16h16" />
						</svg>
					{/if}
				</button>
			</div>
		</div>
		{#if true}
			{@const hidden = !stateNavbar ? 'hidden' : ''}
			<div class="{hidden} sm:block flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0">
				<ul class="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
					<li
						class="font-bold transition ease-in-out hover:-translate-y-1 hover:text-transparent bg-clip-text bg-gradient-to-r from-[#8B0000] to-[#000000] duration-500"
					>
						<button
							on:click={() => {
								navigationStore.set({ index: 0, page: 'home' });
								goto('/home');
							}}>Home</button
						>
					</li>
					<li
						class="font-bold transition ease-in-out hover:-translate-y-1 hover:text-transparent bg-clip-text bg-gradient-to-r from-[#8B0000] to-[#8B0000] duration-500"
					>
						<button
							on:click={() => {
								navigationStore.set({ index: 1, page: 'about' });
								goto('/about');
							}}>About</button
						>
					</li>
					<li
						class="font-bold transition ease-in-out hover:-translate-y-1 hover:text-transparent bg-clip-text bg-gradient-to-r from-[#8B0000] to-[#000000] duration-500"
					>
						<button
							on:click={() => {
								navigationStore.set({ index: 2, page: 'vision' });
								goto('/vision');
							}}>Vision</button
						>
					</li>
				</ul>
			</div>
		{/if}

		<button
			on:click={() => {
				goto('/login');
			}}
			class="hidden md:block border-2 border-black rounded-lg p-1 px-8 transition duration-500 ease-in-out text-black font-bold bg-white hover:-translate-y hover:text-white hover:bg-black"
			>Login</button
		>
	</div>
</nav>
