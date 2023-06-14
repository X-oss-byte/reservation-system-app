<script lang="ts">
	import { goto } from '$app/navigation';
	import { AppwriteAuthServices } from '$lib/modules/appwrite/AppwriteService';
	import { User } from '$lib/stores/AppwriteStore';
	import { navigationStore } from '$lib/stores/PageStore';
	let stateNavbar: boolean = false;
	let user: any;
	User.subscribe((value) => {
		user = value;
	});
	const changeStateNavbar = () => {
		stateNavbar = !stateNavbar;
	};
</script>

<nav class="bg-white w-full border-b md:border-0">
	<div class="items-center px-4 max-w-screen-xl mx-auto flex justify-between py-3 md:py-5">
		<div>
			<button
				on:click={() => {
					goto('/profile');
				}}
			>
				<h1 class="font-extrabold text-2xl">
					<span class="font-extralight">user</span><span
						class="text-transparent bg-clip-text bg-gradient-to-r from-[#8B0000] to-[#000000]"
						>Bespeak</span
					>
				</h1></button
			>
		</div>

		<div class="flex items-center">
			<button
				on:click={() => {
					goto('/profile');
				}}
				class="hidden sm:block font-bold"
				>{user ? (user.name.length == 0 ? user.email : user.name) : 'No name.'}</button
			>
			<div class="hidden sm:block border py-5 mx-3" />
			<button
				on:click={() => {
					AppwriteAuthServices.logout();
				}}
				class="hidden md:block border-2 border-black rounded-lg p-1 px-8 transition duration-500 ease-in-out text-white font-bold bg-black hover:-translate-y hover:bg-gray-900"
				>Logout</button
			>

			<div class="md:hidden flex items-center">
				<!-- {#if stateNavbar}
					<button
						on:click={() => {
							goto('/login');
						}}
						class="border-2 border-black rounded-lg p-1 px-8 transition duration-500 ease-in-out text-black font-bold bg-white hover:-translate-y hover:text-white hover:bg-black"
						>Login</button
					>
				{/if} -->
				<button
					on:click={() => {
						changeStateNavbar();
					}}
					class="border border-white text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
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
	</div>
	{#if stateNavbar}
		<div
			class="sm:hidden items-center px-4 max-w-screen-xl mx-auto flex justify-between py-3 md:py-5"
		>
			<button
				on:click={() => {
					goto('/profile');
				}}
				class=" font-bold">Matus Fercak</button
			>
			<div class="hidden sm:block border py-5 mx-3" />
			<button
				on:click={() => {
					AppwriteAuthServices.logout();
				}}
				class=" border-2 border-black rounded-lg p-1 px-8 transition duration-500 ease-in-out text-white font-bold bg-black hover:-translate-y hover:bg-gray-900"
				>Logout</button
			>
		</div>
	{/if}
</nav>
