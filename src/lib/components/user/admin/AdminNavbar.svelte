<script>
	import { goto } from '$app/navigation';
</script>

<section>
	<div class=" max-w-screen-xl mx-auto px-4 pt-10 mb-5 pb-5 gap-12 text-gray-600 md:px-8">
		<div class="space-y-5 max-w-4xl mx-auto text-center">
			<h2 class="text-center text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl mb-10">
				<span>Manage your reservation system</span>
			</h2>
			<div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
				<button
					on:click={() => {
						goto('/admin/fleets');
					}}
					class="transition border ease-in-out delay-150 py-2 w-full shadow-xl rounded-lg hover:-translate-y-1 hover:shadow-2xl duration-300"
				>
					<span class="font-extrabold text-sm sm:text-2xl text-transparent bg-clip-text bg-black">
						Fleets
					</span>
				</button>

				<button
					on:click={() => {
						goto('/admin/items');
					}}
					class="transition border ease-in-out delay-150 py-2 w-full shadow-xl rounded-lg hover:-translate-y-1 hover:shadow-2xl duration-300"
				>
					<span class="font-extrabold text-sm sm:text-2xl text-transparent bg-clip-text bg-black">
						Items
					</span>
				</button>
				<button
					on:click={() => {
						goto('/admin/reservations');
					}}
					class="transition border ease-in-out delay-150 py-2 w-full shadow-xl rounded-lg hover:-translate-y-1 hover:shadow-2xl duration-300 col-span-2 sm:col-span-1"
				>
					<span class="font-extrabold text-sm sm:text-2xl text-transparent bg-clip-text bg-black">
						Reservations
					</span>
				</button>
			</div>
		</div>
	</div>
</section>
