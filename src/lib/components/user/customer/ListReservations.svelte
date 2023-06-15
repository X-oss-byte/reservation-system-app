<script lang="ts">
	import { each } from 'svelte/internal';

	export let reservations: any;
	let toDeleteId;
	let toDelete = false;
</script>

{#if toDelete}
	<div class="fixed inset-0 z-10 overflow-y-auto">
		<div class="fixed inset-0 w-full h-full bg-black opacity-40" />
		<div class="flex mt-64 items-start min-h-screen px-4 py-8">
			<div class="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
				<div class="mt-3">
					<div class="mt-2 text-center">
						<h4 class="text-lg font-medium text-gray-800">You want remove reservation ?</h4>
						<!-- <p class="mt-2 text-[15px] leading-relaxed text-gray-500">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Nunc eget lorem dolor sed viverra ipsum
							nunc. Consequat id porta nibh venenatis.
						</p> -->
					</div>
				</div>
				<div class="items-center gap-2 mt-3 sm:flex">
					<button
						on:click={() => {
							toDelete = false;
						}}
						class="w-full mt-2 p-2.5 flex-1 text-gray-800 bg-gray-200 hover:bg-gray-200 rounded-md outline-none border ring-offset-2 ring-gray-600 focus:ring-2"
					>
						No
					</button>
					<button
						on:click={() => {
							toDelete = false;
						}}
						class="w-full mt-2 p-2.5 flex-1 text-white bg-[#8B0000] hover:bg-[#8b0000ab] rounded-md outline-none ring-offset-2 ring-[#8b0000ab] focus:ring-2"
					>
						Yes
					</button>
				</div>
			</div>
		</div>
	</div>
{/if}

<section class="">
	<div class="max-w-screen-xl mx-auto pt-14 px-4 md:px-8">
		<h2 class="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl mb-10 text-center">
			<span>Review of your reservations</span>
		</h2>
		<div class="max-w-screen-lg mx-auto mb-5">
			<div class="relative">
				<span class="block w-full h-px bg-gray-300" />
			</div>
		</div>
		<div class="mb-10">
			<ul class="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
				{#each reservations as reservation}
					<li class="shadow-md border rounded-lg">
						<div class="flex items-center justify-between p-4">
							<div class="space-y-2">
								<h4 class="text-gray-800 text-xl font-semibold">
									{reservation.reservedAt.slice(6, 8)} - {reservation.reservedAt.slice(4, 6)} - {reservation.reservedAt.slice(
										0,
										4
									)}
								</h4>
							</div>
							<!-- <button
								on:click={() => {
									toDelete = true;
									toDeleteId = reservation.$id;
								}}
							>
								<svg
									class="hover:fill-[#8B0000]"
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									viewBox="0 0 24 24"
									><path
										d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"
									/></svg
								></button
							> -->
						</div>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>
