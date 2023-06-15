<script lang="ts">
	export let reservations: any;
</script>

<section>
	<div class=" max-w-screen-xl mx-auto px-4 pb-28 gap-12 text-gray-600 md:px-8">
		<div class="max-w-screen-lg mx-auto mb-5">
			<div class="relative">
				<span class="block w-full h-px bg-gray-300" />
				<p class="inline-block w-fit text-sm bg-white px-2 absolute -top-2 inset-x-0 mx-auto">
					Reservations
				</p>
			</div>
		</div>
		<ul class="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{#each reservations as reservation}
				<li class="shadow-md border rounded-lg">
					<div class="flex items-center justify-between p-4">
						<div class="space-y-2">
							<h4 class="text-gray-800 text-2xl font-semibold">
								{reservation.reservedAt.slice(6, 8)} - {reservation.reservedAt.slice(4, 6)} - {reservation.reservedAt.slice(
									0,
									4
								)}
							</h4>
							<h4 class="text-gray-800 text-xl font-bold">
								{reservation.contactName}
							</h4>
							<h4 class="text-gray-800 text-xl">
								{reservation.contactEmail}
							</h4>
							<h4 class="text-blue-300 text-xl font-semibold mt-10">
								<a href="tel: {reservation.contactPhone}">{reservation.contactPhone}</a>
							</h4>
						</div>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</section>
