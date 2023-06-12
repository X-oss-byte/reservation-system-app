<script>
	import { goto } from '$app/navigation';
</script>

<section>
	<div class=" max-w-screen-xl mx-auto px-4 pt-14 pb-5 gap-12 text-gray-600 md:px-8">
		<div class="space-y-5 max-w-4xl mx-auto text-center">
			<h2 class="text-center text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl mb-10">
				<span>Manage your reservation system</span>
			</h2>
			<div class="grid grid-cols-3 gap-1">
				<button
					on:click={() => {
						goto('/admin/fleets');
					}}
					class="transition border ease-in-out delay-150 py-2 w-full shadow-xl rounded-lg mb-10 hover:-translate-y-1 hover:shadow-2xl duration-300"
				>
					<span class="font-extrabold text-sm sm:text-2xl text-transparent bg-clip-text bg-black">
						Fleets
					</span>
				</button>

				<button
					on:click={() => {
						goto('/admin/items');
					}}
					class="transition border ease-in-out delay-150 py-2 w-full shadow-xl rounded-lg mb-10 hover:-translate-y-1 hover:shadow-2xl duration-300"
				>
					<span class="font-extrabold text-sm sm:text-2xl text-transparent bg-clip-text bg-black">
						Items
					</span>
				</button>
				<button
					on:click={() => {
						goto('/admin/reservations');
					}}
					class="transition border ease-in-out delay-150 py-2 w-full shadow-xl rounded-lg mb-10 hover:-translate-y-1 hover:shadow-2xl duration-300"
				>
					<span class="font-extrabold text-sm sm:text-2xl text-transparent bg-clip-text bg-black">
						Reservations
					</span>
				</button>
			</div>
			<!-- <div class="block sm:flex gap-5 gap-y-5 text-center">
				<button
					on:click={() => {
						goto('/admin/fleets');
					}}
					class="transition border ease-in-out delay-150 py-5 w-full shadow-xl rounded-lg mb-10 hover:-translate-y-1 hover:shadow-3xl duration-300"
				>
					<span
						class="font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#000000] to-[#8B0000] sm:from-[#000000] sm:to-[#8B0000]"
					>
						Fleets
					</span>
					<div class="flex justify-center mt-5">Effectively oversee your fleets</div>
				</button>
				<button
					on:click={() => {
						goto('/admin/items');
					}}
					class="transition ease-in-out delay-150 py-5 w-full shadow-xl border rounded-lg mb-10 hover:-translate-y-1 hover:shadow-3xl duration-300"
				>
					<span
						class="font-extrabold text-2xl text-transparent bg-clip-text bg-black bg-gradient-to-r from-[#000000] to-[#8B0000] sm:from-[#8B0000] sm:to-[#8B0000]"
					>
						Items
					</span>
					<div class="flex justify-center mt-5">List your items in fleets</div>
				</button>
				<button
					on:click={() => {
						goto('/admin/reservations');
					}}
					class="transition ease-in-out delay-150 py-5 w-full shadow-xl border rounded-lg mb-10 hover:-translate-y-1 hover:shadow-3xl duration-300"
				>
					<span
						class="font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#000000] to-[#8B0000] sm:from-[#8B0000] sm:to-[#000000]"
					>
						Reservations
					</span>
					<div class="flex justify-center mt-5">Overview of reservations</div>
				</button>
			</div> -->
		</div>
	</div>
</section>
