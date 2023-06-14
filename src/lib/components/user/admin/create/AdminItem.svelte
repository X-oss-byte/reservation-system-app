<script lang="ts">
	export let fleets: any = [];
	let selectFleet: any;
	let data: any = {
		name: undefined,
		allowMon: false,
		allowTue: false,
		allowWed: false,
		allowThu: false,
		allowFri: false,
		allowSat: false,
		allowSun: false,
		calendarId: undefined,
		phone: undefined,
		userId: undefined,
		calendarName: undefined
	};

	$: data.calendarName = selectFleet ? selectFleet.name : undefined;
	$: data.userId = selectFleet ? selectFleet.userId : undefined;
	$: data.calendarId = selectFleet ? selectFleet.$id : undefined;
</script>

<section>
	<div class=" max-w-screen-sm mx-auto px-4 pb-28 gap-12 text-gray-600 md:px-8">
		<div class="max-w-screen-lg mx-auto mb-5">
			<div class="relative">
				<span class="block w-full h-px bg-gray-300" />
				<p class="inline-block w-fit text-sm bg-white px-2 absolute -top-2 inset-x-0 mx-auto">
					Items
				</p>
			</div>
		</div>
		<div class="mt-10 max-w-screen-xl mx-auto px-4 gap-12 text-gray-600 md:px-8 w-lg">
			<div class="flex justify-center">
				<div
					class="shadow-3xl p-5 rounded-lg border flex justify-center items-center w-full flex-col gap-6"
				>
					<div class="w-full">
						<label for="" class=" text-sm font-bold text-gray-900">Name item</label>

						<input
							bind:value={data.name}
							type="text"
							id="input-group-1"
							class="bg-gray-50 border form-input border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-600 focus:border-black block w-full p-2.5"
							placeholder="John Name"
						/>
					</div>
					<div class="w-full">
						<label for="" class=" text-sm font-bold text-gray-900">Phone number</label>

						<input
							bind:value={data.phone}
							type="text"
							id="input-group-1"
							class="bg-gray-50 border form-input border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-600 focus:border-black block w-full p-2.5"
							placeholder="+421948 999 111"
						/>
					</div>
					<div class="w-full">
						<div class="text-r">
							<label for="countries" class=" text-sm font-bold text-gray-900">Select an Fleet</label
							>
							<select
								bind:value={selectFleet}
								id="countries"
								placeholder="sesdd"
								class="bg-gray-50 border form-select border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-gray-400 block w-full p-2.5"
							>
								<option disabled>Choose a country</option>
								{#each fleets as fleet}
									<option value={fleet}>{fleet.name}</option>
								{/each}
							</select>
						</div>
					</div>

					<div class="w-full">
						<div class="grid grid-cols-7 justify-items-center">
							<div class="font-extrabold">SU</div>
							<div class="font-extrabold">MO</div>
							<div class="font-extrabold">TU</div>
							<div class="font-extrabold">WE</div>
							<div class="font-extrabold">TH</div>
							<div class="font-extrabold">FR</div>
							<div class="font-extrabold">SU</div>
						</div>
						<div class="pt-1 grid grid-cols-7 justify-items-center">
							<input
								bind:checked={data.allowMon}
								type="checkbox"
								class="form-checkbox border-2 rounded-md text-black h-5 w-5 focus:outline-black dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2"
							/>
							<input
								bind:checked={data.allowTue}
								type="checkbox"
								class="form-checkbox border-2 rounded-md text-black h-5 w-5 focus:outline-black dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2"
							/><input
								bind:checked={data.allowWed}
								type="checkbox"
								class="form-checkbox border-2 rounded-md text-black h-5 w-5 focus:outline-black dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2"
							/><input
								bind:checked={data.allowThu}
								type="checkbox"
								class="form-checkbox border-2 rounded-md text-black h-5 w-5 focus:outline-black dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2"
							/><input
								bind:checked={data.allowFri}
								type="checkbox"
								class="form-checkbox border-2 rounded-md text-black h-5 w-5 focus:outline-black dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2"
							/><input
								bind:checked={data.allowSat}
								type="checkbox"
								class="form-checkbox border-2 rounded-md text-black h-5 w-5 focus:outline-black dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2"
							/><input
								bind:checked={data.allowSun}
								type="checkbox"
								class="form-checkbox border-2 rounded-md text-black h-5 w-5 focus:outline-black dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2"
							/>
						</div>
					</div>

					<button
						disabled={data.name == undefined ||
							data.name.length == 0 ||
							data.phone == undefined ||
							data.phone.length < 10}
						class="border-2 w-full border-black rounded-lg p-1 px-8 text-white font-bold bg-black hover:-translate-y hover:text-white hover:bg-gray-800 disabled:border-gray-700 disabled:bg-gray-600"
						>Add Item</button
					>
				</div>
			</div>
		</div>
	</div>
</section>
