<!--
  Header-komponent med navigasjon.
  Viser ulik stil avhengig av om bruker er på CV-siden eller DJ-siden.
  Bruker Svelte $page store for å bestemme aktiv side.
-->
<script lang="ts">
	import { page } from '$app/stores';

	// Sjekk om vi er på DJ-seksjonen
	$: isDvask = $page.url.pathname.startsWith('/dvask');

	// Mobil-meny toggle
	let menuOpen = false;
</script>

<header
	class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 {isDvask
		? 'bg-neutral-950/80 backdrop-blur-md'
		: 'bg-warm-50/95 backdrop-blur-sm border-b border-brand-200/30'}"
>
	<nav class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
		<!-- Logo / Navn -->
		<a
			href="/"
			class="font-display font-bold text-xl transition-colors {isDvask
				? 'text-white hover:text-amber-400'
				: 'text-warm-900 hover:text-brand-600'}"
		>
			{isDvask ? 'DVASK' : 'Håkon S. Breivik'}
		</a>

		<!-- Desktop-navigasjon -->
		<div class="hidden md:flex items-center gap-8">
			{#if isDvask}
				<a href="/dvask#musikk" class="text-neutral-400 hover:text-white transition-colors text-sm tracking-wide">Musikk</a>
				<a href="/dvask#events" class="text-neutral-400 hover:text-white transition-colors text-sm tracking-wide">Events</a>
				<a href="/dvask#kontakt" class="text-neutral-400 hover:text-white transition-colors text-sm tracking-wide">Booking</a>
				<a href="/" class="text-neutral-500 hover:text-amber-400 transition-colors text-sm">
					&larr; CV
				</a>
			{:else}
				<a href="/#erfaring" class="text-warm-800/60 hover:text-warm-900 transition-colors text-sm">Erfaring</a>
				<a href="/#ferdigheter" class="text-warm-800/60 hover:text-warm-900 transition-colors text-sm">Ferdigheter</a>
				<a href="/#kontakt" class="text-warm-800/60 hover:text-warm-900 transition-colors text-sm">Kontakt</a>
				<a href="/dvask" class="px-4 py-2 bg-neutral-900 text-amber-400 text-sm font-medium rounded-lg hover:bg-neutral-800 transition-colors">
					DJ Dvask &rarr;
				</a>
			{/if}
		</div>

		<!-- Mobil hamburger -->
		<button
			class="md:hidden p-2 {isDvask ? 'text-white' : 'text-warm-800'}"
			on:click={() => (menuOpen = !menuOpen)}
			aria-label="Meny"
		>
			<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				{#if menuOpen}
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
				{:else}
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
				{/if}
			</svg>
		</button>
	</nav>

	<!-- Mobil-meny (dropdown) -->
	{#if menuOpen}
		<div class="md:hidden border-t {isDvask ? 'bg-neutral-900 border-neutral-800' : 'bg-warm-50 border-brand-200/30'}">
			<div class="px-6 py-4 flex flex-col gap-3">
				{#if isDvask}
					<a href="/dvask#musikk" class="text-neutral-300 hover:text-white py-2" on:click={() => (menuOpen = false)}>Musikk</a>
					<a href="/dvask#events" class="text-neutral-300 hover:text-white py-2" on:click={() => (menuOpen = false)}>Events</a>
					<a href="/dvask#kontakt" class="text-neutral-300 hover:text-white py-2" on:click={() => (menuOpen = false)}>Booking</a>
					<a href="/" class="text-amber-400 py-2" on:click={() => (menuOpen = false)}>&larr; Profesjonell CV</a>
				{:else}
					<a href="/#erfaring" class="text-warm-800/60 hover:text-warm-900 py-2" on:click={() => (menuOpen = false)}>Erfaring</a>
					<a href="/#ferdigheter" class="text-warm-800/60 hover:text-warm-900 py-2" on:click={() => (menuOpen = false)}>Ferdigheter</a>
					<a href="/#kontakt" class="text-warm-800/60 hover:text-warm-900 py-2" on:click={() => (menuOpen = false)}>Kontakt</a>
					<a href="/dvask" class="text-warm-900 font-medium py-2" on:click={() => (menuOpen = false)}>DJ Dvask &rarr;</a>
				{/if}
			</div>
		</div>
	{/if}
</header>
