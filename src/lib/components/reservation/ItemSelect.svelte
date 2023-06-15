<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	export let items: any = [];
	let currentStep = 1;
	const steps = [{ item: 'What' }, { item: 'When' }, { item: 'Who' }];
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
	<div class=" max-w-screen-md mx-auto px-4 pb-28 mt-10 gap-12 text-gray-600 md:px-8">
		<ul class=" grid gap-4 sm:grid-cols-2">
			{#each items as item}
				<button
					on:click={() => {
						goto(`/calendar/${$page.params.fleet_id}/${item.$id}`);
					}}
					class="transition ease-in-out delay-150 py-5 w-full shadow-xl border rounded-lg hover:-translate-y-1 hover:shadow-3xl duration-300"
				>
					<span class="font-extrabold text-2xl text-transparent bg-clip-text bg-black">
						{item.name}
					</span>
					<div class="flex justify-center mt-4">{item.calendarName}</div>
				</button>
			{/each}
		</ul>
	</div>
</section>
