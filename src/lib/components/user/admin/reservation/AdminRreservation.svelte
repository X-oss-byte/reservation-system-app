<script lang="ts">
	import { page } from '$app/stores';
	import { AppriteReservationService } from '$lib/modules/appwrite/AppwriteService';

	export let reservationData: any;
	let toDelete = false;
	console.log(reservationData);
</script>

{#if toDelete}
	<div class="fixed inset-0 z-10 overflow-y-auto">
		<div class="fixed inset-0 w-full h-full bg-black opacity-40" />
		<div class="flex mt-64 items-start min-h-screen px-4 py-8">
			<div class="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
				<div class="mt-3">
					<div class="mt-2 text-center">
						<h4 class="text-lg font-bold text-gray-800">Do you want remove this Reservation?</h4>
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
							AppriteReservationService.removeReservation(
								reservationData.reservation,
								$page.params.reservation_id,
								reservationData.item.$id,
								true
							);
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
	<div class="max-w-screen-xl mx-auto px-4 md:px-8">
		<div class="max-w-screen-lg mx-auto mb-5">
			<div class="relative">
				<span class="block w-full h-px bg-gray-300" />
				<p class="inline-block w-fit text-sm bg-white px-2 absolute -top-2 inset-x-0 mx-auto">
					Reservation
				</p>
			</div>
		</div>
		<div class="mb-10">
			<section>
				<div class=" max-w-screen-sm mx-auto px-4 pb-16 mt-10 gap-12 text-gray-600 md:px-8">
					<div
						class="shadow-2xl max-w-screen-sm mx-auto border rounded-lg p-4 mt-6 mb-20 gap-12 text-gray-600"
					>
						<div class="text-center">
							<h2 class="font-bold text-black text-2xl sm:text-3xl">
								{reservationData.reservation.reservedAt.slice(6, 8)} - {reservationData.reservation.reservedAt.slice(
									4,
									6
								)} - {reservationData.reservation.reservedAt.slice(0, 4)}
							</h2>
						</div>
						<div class="text-center my-1">
							<h2 class="font-md text-gray-500 text-xl sm:text-xl">
								{reservationData.reservation.contactEmail}
							</h2>
						</div>

						<div class="text-center mb-5">
							<h2 class="font-bold text-black text-xl">
								{reservationData.reservation.contactName}
							</h2>
						</div>
						<div class="text-center my-1 mb-10">
							<h2 class="text-blue-400 text-xl">
								<a href="tel:{reservationData.reservation.contactPhone} ">
									{reservationData.reservation.contactPhone}</a
								>
							</h2>
						</div>

						<button
							on:click={() => {
								toDelete = true;
							}}
							class="border-2 w-full border-black rounded-lg p-1 text-white font-bold bg-black hover:-translate-y hover:bg-gray-800 disabled:border-gray-700 disabled:bg-gray-600"
							>Remove reservation</button
						>
					</div>
				</div>
			</section>
		</div>
	</div>
</section>
