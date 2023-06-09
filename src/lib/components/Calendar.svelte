<script lang="ts">
	import { daysConst, monthNames } from '../modules/constant';
	import { CalendarGenerator } from '../modules/calendarGenerator';
	import { currentDay } from '../modules/stores';
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

<div class="drop-shadow-4xl max-w-screen-xl mx-auto container p-4 rounded-md mt-5">
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

		<h1 class="text-2xl font-bold">{monthNames[month]} {year}</h1>
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
	<div class="mb-5 mt-10 grid grid-cols-7 gap-0 justify-items-center">
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
					<div
						class="font-bold h-12 md:h-24 lg:h-24 hover:bg-slate-300 bg-slate-300 border border-gray-800 flex w-full items-center justify-center {borderRadius}"
					>
						{day.dayNumber}
					</div>
				{:else}
					<div
						class="font-bold h-12 md:h-24 lg:h-24 hover:bg-slate-300 bg-slate-50 border border-gray-800 flex w-full items-center justify-center {borderRadius}"
					>
						{day.dayNumber}
					</div>
				{/if}
			{:else}
				<div
					class=" h-12 md:h-24 lg:h-24 hover:bg-gray-700 hover:text-gray-400 bg-gray-800 text-gray-300 font-bold border border-gray-800 flex w-full items-center justify-center {borderRadius}"
				>
					{day.dayNumber}
				</div>
			{/if}
		{/each}
	</div>
</div>
