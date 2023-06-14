<script lang="ts">
	import { AppwriteDocumentService } from '$lib/modules/appwrite/AppwriteService';

	let toDelete = false;
	export let fleet: any;
</script>

{#if toDelete}
	<div class="fixed inset-0 z-10 overflow-y-auto">
		<div class="fixed inset-0 w-full h-full bg-black opacity-40" />
		<div class="flex mt-64 items-start min-h-screen px-4 py-8">
			<div class="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
				<div class="mt-3">
					<div class="mt-2 text-center">
						<h4 class="text-lg font-bold text-gray-800">Do you want remove this fleet?</h4>
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
							AppwriteDocumentService.deleteFleet(fleet.$id);
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

<section>
	<div class=" max-w-screen-sm mx-auto px-4 pb-28 gap-12 text-gray-600 md:px-8">
		<div class="max-w-screen-lg mx-auto mb-5">
			<div class="relative">
				<span class="block w-full h-px bg-gray-300" />
				<p class="inline-block w-fit text-sm bg-white px-2 absolute -top-2 inset-x-0 mx-auto">
					Fleets
				</p>
			</div>
		</div>
		<div class="mt-10 max-w-screen-xl mx-auto px-4 gap-12 text-gray-600 md:px-8 w-lg">
			<div class="flex justify-center text-center">
				<div
					class="shadow-3xl p-5 rounded-lg border flex justify-center items-center w-full flex-col gap-6"
				>
					<div class="w-full text-left">
						<label for="" class=" text-sm font-bold text-gray-900">Name fleet</label>

						<input
							bind:value={fleet.name}
							type="text"
							id="input-group-1"
							class="form-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-600 focus:border-black block w-full p-2.5"
							placeholder="Name"
						/>
					</div>
					<div class="w-full block sm:flex gap-x-2">
						<button
							on:click={() => {
								toDelete = true;
							}}
							class="border-2 p-2 w-full rounded-lg px-8 text-white font-bold bg-[#8B0000] hover:-translate-y hover:text-white hover:bg-[#8b0000ab] disabled:border-gray-700 disabled:bg-gray-600 mb-2 sm:mb-0"
							>Remove Fleet
						</button>
						<button
							on:click={() => {
								AppwriteDocumentService.updateFleet(fleet.$id, { name: fleet.name });
							}}
							class="border-2 p-2 w-full rounded-lg px-8 text-white font-bold bg-black hover:-translate-y hover:text-white hover:bg-gray-800 disabled:border-gray-700 disabled:bg-gray-600"
							>Update Fleet
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
