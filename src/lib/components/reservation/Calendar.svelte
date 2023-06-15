<script lang="ts">
	import { dayWeekTranslate, daysConst, monthNames } from '../../modules/constant';
	import { CalendarGenerator } from '../../modules/calendarGenerator';
	import { currentDay } from '../../modules/stores';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	export let item: any;

	let currentStep = 2;
	const steps = [{ item: 'What' }, { item: 'When' }, { item: 'Who' }];
	let month = new Date().getMonth();
	let year = new Date().getFullYear();
	let days: any = CalendarGenerator.getCalendar(year, month);
	let dayToShow: any;

	function nextMonth() {
		month += 1;
		if (month == 12) {
			month = 0;
			year += 1;
		}
	}
	function previusMonth() {
		month -= 1;
		if (month == -1) {
			month = 11;
			year -= 1;
		}
	}

	$: month, (days = CalendarGenerator.getCalendar(year, month));
	$: dayToShow, currentDay.set(dayToShow);
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
		<div class="drop-shadow-2xl">
			<button
				on:click={() => {
					goto(`/calendar/${item.calendarId}`);
				}}
				class="drop-shadow-xl w-full p-2 bg-black rounded-lg text-white font-bold"
				>{item.calendarName} - {item.name}</button
			>
		</div>

		<div
			class="shadow-3xl border border-lg rounded-lg max-w-screen-xl mx-auto container p-4 mb-10 mt-5"
		>
			<div class="flex justify-between">
				<button
					on:click={() => {
						previusMonth();
					}}
				>
					<svg
						class="text-gray-900 hover:text-gray-400"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M16.2426 6.34317L14.8284 4.92896L7.75739 12L14.8285 19.0711L16.2427 17.6569L10.5858 12L16.2426 6.34317Z"
							fill="currentColor"
						/>
					</svg>
				</button>

				<h1 class="text-2xl font-bold text-black">{monthNames[month]} {year}</h1>
				<button
					on:click={() => {
						nextMonth();
					}}
				>
					<svg
						class="text-gray-900 hover:text-gray-400"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M10.5858 6.34317L12 4.92896L19.0711 12L12 19.0711L10.5858 17.6569L16.2427 12L10.5858 6.34317Z"
							fill="currentColor"
						/>
					</svg>
				</button>
			</div>
			<div class="mb-5 mt-10 grid grid-cols-7 gap-0 justify-items-center text-black">
				<div class="font-bold">SU</div>
				<div class="font-bold">MO</div>
				<div class="font-bold">TU</div>
				<div class="font-bold">WE</div>
				<div class="font-bold">TH</div>
				<div class="font-bold">FR</div>
				<div class="font-bold">SA</div>
			</div>
			<div
				class="border border-gray-800 border-spacing-0 rounded-xl grid grid-cols-7 gap-0 justify-items-center"
			>
				{#each days as day, index}
					{@const borderRadius =
						index == 0
							? 'rounded-tl-lg'
							: index == 6
							? 'rounded-tr-lg'
							: index == days.length - 1
							? 'rounded-br-lg'
							: index == days.length - 7
							? 'rounded-bl-lg'
							: ''}
					{#if day.inCurrentMonth}
						{#if !day.past}
							<button
								disabled={true}
								class="font-bold h-12 md:h-16 lg:h-16 hover:bg-[#8080806b] bg-[#80808091] border border-gray-800 flex w-full items-center justify-center {borderRadius}"
							>
								{day.dayNumber}
							</button>
						{:else if item[`${dayWeekTranslate[day.dayIndex]}`]}
							{#if !item.reservedDates.includes(day.daID)}
								<button
									on:click={() => {
										goto(`/calendar/${$page.params.fleet_id}/${$page.params.item_id}/${day.dayID}`);
									}}
									class="font-bold h-12 md:h-16 lg:h-16 hover:bg-[#97bd9d65] bg-[#97bd9d9c] border border-gray-800 flex w-full items-center justify-center {borderRadius}"
								>
									{day.dayNumber}
								</button>
							{:else}
								<button
									disabled={true}
									class="font-bold h-12 md:h-16 lg:h-16 hover:bg-[#89303058] bg-[#89303075] border border-gray-800 flex w-full items-center justify-center {borderRadius}"
								>
									{day.dayNumber}
								</button>
							{/if}
						{:else}
							<button
								disabled={true}
								class="font-bold h-12 md:h-16 lg:h-16 hover:bg-[#80808032] bg-gray-50 border border-gray-800 flex w-full items-center justify-center {borderRadius}"
							>
								{day.dayNumber}
							</button>
						{/if}
					{:else}
						<button
							disabled={true}
							class=" h-12 md:h-24 lg:h-16 hover:bg-gray-700 hover:text-gray-400 bg-gray-800 text-gray-300 font-bold border border-gray-800 flex w-full items-center justify-center {borderRadius}"
						>
							{day.dayNumber}
						</button>
					{/if}
				{/each}
			</div>
		</div>
	</div>
</section>
