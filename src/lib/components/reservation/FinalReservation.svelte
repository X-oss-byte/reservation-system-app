<script lang="ts">
	import { goto } from '$app/navigation';
	import { AppriteReservationService } from '$lib/modules/appwrite/AppwriteService';
	export let data: any;
	let currentStep = 4;
	const steps = [{ item: 'What' }, { item: 'When' }, { item: 'Who' }];
</script>

<div class="flex justify-center mt-20 mb-10">
	<h1
		class="font-extrabold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#8B0000] to-[#000000]"
	>
		Bespeak
	</h1>
</div>

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
		<div
			class="shadow-2xl max-w-screen-sm mx-auto border rounded-lg p-4 mt-6 mb-20 gap-12 text-gray-600"
		>
			<div class="text-center">
				<h2 class="font-bold text-black text-3xl sm:text-4xl">Your reservation has been created</h2>
			</div>
			<div class="relative my-4">
				<span class="block w-full h-px bg-gray-300" />
				<p class="inline-block w-fit text-sm bg-white px-2 absolute -top-2 inset-x-0 mx-auto">
					info
				</p>
			</div>
			<div class="text-center">
				<h2 class="font-bold text-black text-2xl sm:text-3xl">
					{data.reservation.reservedAt.slice(6, 8)} - {data.reservation.reservedAt.slice(4, 6)} - {data.reservation.reservedAt.slice(
						0,
						4
					)}
				</h2>
			</div>
			<div class="text-center my-1">
				<h2 class="font-md text-gray-500 text-xl sm:text-xl">
					{data.fleet.name}
				</h2>
			</div>

			<div class="text-center">
				<h2 class="font-bold text-black text-xl">{data.item.name}</h2>
			</div>
			<div class="text-center my-1">
				<h2 class="text-blue-400 text-xl">
					<a href="tel:{data.item.phone} "> {data.item.phone}</a>
				</h2>
			</div>

			<button
				on:click={() => {
					AppriteReservationService.reviewRedirect(3);
				}}
				class="border-2 w-full border-black rounded-lg p-1 mt-4 text-white font-bold bg-black hover:-translate-y hover:bg-gray-800 disabled:border-gray-700 disabled:bg-gray-600"
				>Review your reservation</button
			>
		</div>
	</div>
</section>
