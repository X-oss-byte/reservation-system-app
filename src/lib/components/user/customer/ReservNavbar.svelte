<script>
	import { goto } from '$app/navigation';
</script>

<section>
	<div class=" max-w-screen-xl mx-auto px-4 pt-14 gap-12 text-gray-600 md:px-8">
		<div class="space-y-5 max-w-4xl mx-auto text-center">
			<h2 class="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl mb-10">
				<span>Review of your reservations</span>
			</h2>

			<div class="block sm:flex gap-5 gap-y-5 text-center">
				<button
					on:click={() => {
						goto('/customer/account');
					}}
					class="transition ease-in-out delay-150 py-5 w-full shadow-xl border rounded-lg mb-10 hover:-translate-y-1 hover:shadow-3xl duration-300"
				>
					<span
						class="font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#8B0000] to-[#000000]"
					>
						Account
					</span>
					<div class="flex justify-center mt-5">Reservation created with your account</div>
				</button>
				<button
					on:click={() => {
						goto('/customer/email');
					}}
					class="transition ease-in-out delay-150 py-5 w-full shadow-xl border rounded-lg mb-10 hover:-translate-y-1 hover:shadow-3xl duration-300"
				>
					<span
						class="font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#8B0000] to-[#000000] sm:from-[#000000] sm:to-[#8B0000]"
					>
						Email
					</span>
					<div class="flex justify-center mt-5">Reservation created with your email</div>
				</button>
			</div>
		</div>
	</div>
</section>
