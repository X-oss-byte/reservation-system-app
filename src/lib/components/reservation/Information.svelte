<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { AppriteReservationService } from '$lib/modules/appwrite/AppwriteService';
	export let item: any;
	let currentStep = 3;
	const steps = [{ item: 'What' }, { item: 'When' }, { item: 'Who' }];
	let information: any = {
		contactName: undefined,
		contactEmail: undefined,
		contactPhone: undefined,
		contactNote: undefined,
		calendarId: $page.params.fleet_id,
		slotTypeId: $page.params.item_id,
		reservedAt: $page.params.day_id,
		userId: item.userId
	};
</script>

<div class="drop-shadow-xl max-w-4xl mx-auto px-0">
	<ul aria-label="Steps" class="items-center text-gray-600 font-medium flex">
		{#each steps as step, idx}
			<li
				aria-current={currentStep == idx + 1 ? 'step' : false}
				class="drop-shadow-xl flex-col flex-1 gap-x-0"
			>
				<div class="flex items-center flex-row flex-1">
					<hr
						class={`w-full border block ${
							idx == 0 ? 'border-none' : '' || currentStep >= idx + 1 ? 'border-gray-900' : ''
						}`}
					/>
					<div
						class={`w-8 h-8 rounded-full border-2 flex-none flex items-center justify-center ${
							currentStep > idx + 1
								? 'bg-gray-900 border-gray-900'
								: '' || currentStep == idx + 1
								? 'border-gray-900'
								: ''
						}`}
					>
						<span
							class={`w-2.5 h-2.5 rounded-full bg-gray-900 ${
								currentStep != idx + 1 ? 'hidden' : ''
							}`}
						/>
						{#if currentStep > idx + 1}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								class="w-5 h-5 text-white"
							>
								<path d="M4.5 12.75l6 6 9-13.5" />
							</svg>
						{/if}
					</div>
					<hr
						class={`border w-full h-auto ${
							idx + 1 == steps.length
								? 'border-none'
								: '' || currentStep > idx + 1
								? 'border-gray-900'
								: ''
						}`}
					/>
				</div>
				<div class=" flex justify-center items-center mt-3 h-auto">
					<h3 class={`text-sm ${currentStep == idx + 1 ? 'text-gray-900' : ''}`}>
						{step.item}
					</h3>
				</div>
			</li>
		{/each}
	</ul>
</div>

<section>
	<div class=" max-w-screen-md mx-auto px-4 pb-16 mt-10 gap-12 text-gray-600 md:px-8">
		<div class="max-w-screen-sm mx-auto drop-shadow-lg mb-2">
			<button
				on:click={() => {
					goto(`/calendar/${item.calendarId}`);
				}}
				class="drop-shadow-xl w-full p-2 bg-black rounded-lg text-white font-bold"
				>{item.calendarName} - {item.name}</button
			>
		</div>
		<div class="max-w-screen-sm mx-auto drop-shadow-lg">
			<button
				on:click={() => {
					goto(`/calendar/${item.calendarId}/${item.$id}`);
				}}
				class="drop-shadow-xl w-full p-2 bg-white border rounded-lg text-black font-bold"
			>
				{$page.params.day_id.slice(6, 8)} - {$page.params.day_id.slice(4, 6)} - {$page.params.day_id.slice(
					0,
					4
				)}</button
			>
		</div>
		<div
			class="shadow-2xl max-w-screen-sm mx-auto border rounded-lg p-4 mt-6 mb-20 gap-12 text-gray-600"
		>
			<div class="flex gap-4">
				<div class="w-full">
					<label for="" class=" text-sm font-bold text-gray-900">Name</label>

					<input
						autocomplete="nope"
						bind:value={information.contactName}
						type="text"
						id="input-group-1"
						class="bg-gray-50 border form-input border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-600 focus:border-black block w-full p-2.5"
						placeholder="John Name"
					/>
				</div>
				<div class="w-full">
					<label for="" class=" text-sm font-bold text-gray-900">Phone number</label>

					<input
						bind:value={information.contactPhone}
						autocomplete="nope"
						type="text"
						id="input-group-1"
						class="bg-gray-50 border form-input border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-600 focus:border-black block w-full p-2.5"
						placeholder="+421948 999 111"
					/>
				</div>
			</div>
			<div class="w-full">
				<label for="" class=" text-sm font-bold text-gray-900">Email</label>

				<input
					bind:value={information.contactEmail}
					autocomplete="nope"
					type="text"
					id="input-group-1"
					class="bg-gray-50 border form-input border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-600 focus:border-black block w-full p-2.5"
					placeholder="john.name@gmail.com"
				/>
			</div>
			<div class="w-full">
				<label for="" class=" text-sm font-bold text-gray-900">Note</label>

				<input
					bind:value={information.contactNote}
					autocomplete="nope"
					type="text"
					id="input-group-1"
					class="bg-gray-50 border form-input border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-600 focus:border-black block w-full p-2.5"
					placeholder="I'm excited"
				/>
			</div>
			<button
				on:click={() => {
					AppriteReservationService.createReservation(information);
				}}
				class="border-2 w-full border-black rounded-lg p-1 mt-4 text-black font-bold bg-white hover:-translate-y hover:bg-gray-200 disabled:border-gray-700 disabled:bg-gray-600"
				>Create reservation</button
			>
		</div>
	</div>
</section>
