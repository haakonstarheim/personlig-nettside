<!--
  DJ-profilside for Dvask — redesignet.
  Minimalistisk mørk stil inspirert av varme oransje/amber toner fra live-bilder.
  Bruker ekte bilder fra Bilder/Dj Dvask.
-->
<svelte:head>
	<title>DVASK — DJ | House · Disco · Allsang</title>
	<meta name="description" content="DVASK — DJ fra Ålesund. House, disco og allsang. Spiller i hele Norge." />
</svelte:head>

<div class="bg-neutral-950 text-white -mt-16">

	<!-- ========== HERO — Fullscreen med action-shot ========== -->
	<section class="relative h-screen flex items-end">
		<!-- Bakgrunnsbilde -->
		<div class="absolute inset-0">
			<img
				src="/images/dvask/hero-action.jpg"
				alt="DJ Dvask i aksjon ved Pioneer DJ-controlleren"
				class="w-full h-full object-cover object-center"
			/>
			<!-- Gradient overlay for lesbarhet -->
			<div class="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent"></div>
		</div>

		<!-- Hero-innhold -->
		<div class="relative z-10 max-w-6xl mx-auto px-6 pb-20 md:pb-28 w-full">
			<p class="text-amber-400/80 text-sm font-medium tracking-[0.3em] uppercase mb-4">
				House · Disco · Allsang
			</p>
			<h1 class="text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-none mb-6">
				DVASK
			</h1>
			<p class="text-lg md:text-xl text-neutral-400 max-w-md leading-relaxed mb-8">
				DJ fra Ålesund, spiller i hele Norge.
			</p>
			<div class="flex gap-4">
				<a href="#musikk" class="inline-flex items-center gap-2 px-6 py-3 bg-white text-neutral-950 font-semibold rounded-full hover:bg-amber-400 transition-colors duration-300">
					<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
					Hør musikk
				</a>
				<a href="#kontakt" class="inline-flex items-center gap-2 px-6 py-3 border border-neutral-600 text-neutral-300 font-medium rounded-full hover:border-amber-400 hover:text-amber-400 transition-colors duration-300">
					Booking
				</a>
			</div>
		</div>

		<!-- Scroll-indikator -->
		<div class="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
			<div class="w-px h-12 bg-gradient-to-b from-transparent to-neutral-500 animate-pulse"></div>
		</div>
	</section>

	<!-- ========== OM DVASK ========== -->
	<section class="py-24 md:py-32">
		<div class="max-w-6xl mx-auto px-6">
			<div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
				<div>
					<p class="text-amber-400/80 text-sm font-medium tracking-[0.2em] uppercase mb-4">Om</p>
					<h2 class="text-4xl md:text-5xl font-bold tracking-tight mb-6">
						Den musikken<br />dere vil ha.
					</h2>
					<p class="text-neutral-400 leading-relaxed mb-4">
						Jeg har brukt de siste årene som DJ og leder for Kultursjokk til å virkelig
						utforske hva som funker — og hva som holder det gående til lysene slås på.
						Med et repertoar som strekker seg fra glinsende disco og tidløs pop til dype
						house-grooves og pulserende tech, tilpasser jeg meg rommet, stemningen og
						menneskene foran meg. Ingen kveld er lik.
					</p>
					<p class="text-neutral-400 leading-relaxed mb-4">
						Men det stopper ikke ved klubbkvelder. Enten det er et bryllupsselskap som trenger
						den perfekte overgangen fra middag til dansegulv, eller en firmafest som skal
						huskes i årevis — jeg har gjort det mange ganger før og vet hva som kreves.
					</p>
					<p class="text-neutral-500 leading-relaxed font-medium">
						Book meg til neste arrangement, så tilpasser jeg meg til nøyaktig det dere trenger.
					</p>
				</div>
				<div class="relative">
					<img
						src="/images/dvask/silhouette.jpg"
						alt="Dvask silhuett i røyk og lys"
						class="rounded-2xl w-full aspect-[4/3] object-cover"
					/>
					<div class="absolute inset-0 rounded-2xl ring-1 ring-white/10"></div>
				</div>
			</div>
		</div>
	</section>

	<!-- ========== MUSIKK / MIXES ========== -->
	<section id="musikk" class="py-24 md:py-32 border-t border-neutral-800/50">
		<div class="max-w-6xl mx-auto px-6">
			<p class="text-amber-400/80 text-sm font-medium tracking-[0.2em] uppercase mb-4">Musikk</p>
			<h2 class="text-4xl md:text-5xl font-bold tracking-tight mb-16">Mixes & Sets</h2>

			<div class="space-y-4">
				{#each [
					{ title: 'Deep House Sessions Vol. 3', venue: 'Studio Mix', date: '2024', duration: '1:15:00' },
					{ title: 'Techno Warehouse Set', venue: 'Live @ Klubb X', date: '2024', duration: '2:00:00' },
					{ title: 'Melodic Journey', venue: 'Podcast Ep. 12', date: '2023', duration: '0:58:00' },
					{ title: 'Peak Time Techno', venue: 'Live @ Festival', date: '2023', duration: '1:30:00' }
				] as mix, i}
					<a href="#" class="group flex items-center gap-6 p-5 rounded-xl hover:bg-neutral-900/80 transition-colors duration-200">
						<span class="text-neutral-600 text-sm font-mono w-8">{String(i + 1).padStart(2, '0')}</span>
						<div class="flex-1 min-w-0">
							<h3 class="font-semibold text-white group-hover:text-amber-400 transition-colors truncate">{mix.title}</h3>
							<p class="text-sm text-neutral-500">{mix.venue}</p>
						</div>
						<span class="text-sm text-neutral-600 hidden sm:block">{mix.duration}</span>
						<span class="text-sm text-neutral-600">{mix.date}</span>
						<svg class="w-5 h-5 text-neutral-600 group-hover:text-amber-400 transition-colors flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
					</a>
				{/each}
			</div>

			<p class="text-neutral-600 text-sm mt-8">
				SoundCloud / Mixcloud-embeds legges til her.
			</p>
		</div>
	</section>

	<!-- ========== BILDEGALLERI ========== -->
	<section class="py-24 md:py-32 border-t border-neutral-800/50">
		<div class="max-w-6xl mx-auto px-6">
			<p class="text-amber-400/80 text-sm font-medium tracking-[0.2em] uppercase mb-4">Galleri</p>
			<h2 class="text-4xl md:text-5xl font-bold tracking-tight mb-16">Live</h2>

			<div class="grid grid-cols-1 md:grid-cols-3 gap-3">
				<!-- Stort bilde til venstre -->
				<div class="md:col-span-2 md:row-span-2">
					<img
						src="/images/dvask/overhead-green.jpg"
						alt="Dvask ovenfra med turkis lys og publikum"
						class="w-full h-full object-cover rounded-xl aspect-[3/4] md:aspect-auto"
					/>
				</div>
				<!-- To mindre bilder til høyre -->
				<div>
					<img
						src="/images/dvask/crowd-red-1.jpg"
						alt="Klubbscene med rødt lys og publikum"
						class="w-full h-full object-cover rounded-xl aspect-[4/3]"
					/>
				</div>
				<div>
					<img
						src="/images/dvask/crowd-red-2.jpg"
						alt="DJ Dvask ved mikserbordet med rødt lys"
						class="w-full h-full object-cover rounded-xl aspect-[4/3]"
					/>
				</div>
			</div>
		</div>
	</section>

	<!-- ========== KOMMENDE EVENTS ========== -->
	<section id="events" class="py-24 md:py-32 border-t border-neutral-800/50">
		<div class="max-w-6xl mx-auto px-6">
			<p class="text-amber-400/80 text-sm font-medium tracking-[0.2em] uppercase mb-4">Events</p>
			<h2 class="text-4xl md:text-5xl font-bold tracking-tight mb-16">Kommende</h2>

			<!-- KORSA plakat og info -->
			<div class="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8 md:gap-12 items-start">
				<!-- Plakat -->
				<div class="rounded-xl overflow-hidden shadow-2xl shadow-black/50">
					<img src="/images/dvask/korsa-plakat.jpg" alt="KORSA – Kultursjokk, 1. og 2. mai" class="w-full" />
				</div>

				<!-- Event-info -->
				<div class="space-y-6">
					<div>
						<p class="text-amber-400/70 text-sm font-medium uppercase tracking-wider mb-2">Kultursjokk presenterer</p>
						<h3 class="text-3xl md:text-4xl font-bold text-white tracking-tight">KORSA</h3>
						<p class="text-neutral-400 mt-2">Keiser Wilhelms Gate 25, Ålesund &middot; ID: 20+</p>
					</div>

					<div class="space-y-4">
						<div class="flex items-start gap-4">
							<div class="w-20 text-center flex-shrink-0">
								<div class="text-amber-400 font-bold text-xl font-mono leading-none">1.</div>
								<div class="text-amber-400/70 text-sm font-medium uppercase">Mai</div>
							</div>
							<div>
								<h4 class="font-semibold text-white">Drum & Bass — Fredag</h4>
								<p class="text-sm text-neutral-500">Dvask · Difee · Simon Peter · Burge</p>
							</div>
						</div>
						<div class="flex items-start gap-4">
							<div class="w-20 text-center flex-shrink-0">
								<div class="text-amber-400 font-bold text-xl font-mono leading-none">2.</div>
								<div class="text-amber-400/70 text-sm font-medium uppercase">Mai</div>
							</div>
							<div>
								<h4 class="font-semibold text-white">Techno — Lørdag</h4>
								<p class="text-sm text-neutral-500">Betong · Bick Dick Bandido · Amnesi · KP</p>
							</div>
						</div>
					</div>

					<a href="https://billetto.no/e/korsa-billetter-1877450" target="_blank" rel="noopener noreferrer"
					   class="inline-block text-sm text-amber-400 border border-amber-400/40 px-6 py-2.5 rounded-full uppercase tracking-wider hover:bg-amber-400/10 transition-colors">
						Kjøp billetter
					</a>
				</div>
			</div>
		</div>
	</section>

	<!-- ========== BOOKING / KONTAKT ========== -->
	<section id="kontakt" class="py-24 md:py-32 border-t border-neutral-800/50">
		<div class="max-w-4xl mx-auto px-6 text-center">
			<p class="text-amber-400/80 text-sm font-medium tracking-[0.2em] uppercase mb-4">Kontakt</p>
			<h2 class="text-4xl md:text-5xl font-bold tracking-tight mb-6">Booking & Forespørsler</h2>
			<p class="text-neutral-400 max-w-lg mx-auto mb-10 leading-relaxed">
				Interessert i å booke Dvask til ditt event?
			</p>

			<a
				href="mailto:haakonstarheim@gmail.com?subject=Booking%20Dvask"
				class="inline-flex items-center gap-2 px-8 py-4 bg-white text-neutral-950 font-semibold rounded-full hover:bg-amber-400 transition-colors duration-300 text-lg"
			>
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
				Send forespørsel
			</a>

			<!-- Sosiale medier -->
			<div class="flex gap-8 justify-center mt-12">
				<a href="#" class="text-neutral-600 hover:text-white transition-colors text-sm tracking-wider uppercase">SoundCloud</a>
				<a href="#" class="text-neutral-600 hover:text-white transition-colors text-sm tracking-wider uppercase">Instagram</a>
				<a href="#" class="text-neutral-600 hover:text-white transition-colors text-sm tracking-wider uppercase">Mixcloud</a>
			</div>
		</div>
	</section>

	<!-- ========== TILBAKE TIL CV ========== -->
	<section class="py-16 border-t border-neutral-800/50">
		<div class="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
			<p class="text-neutral-500 text-sm">Også kjent som Håkon Starheim Breivik</p>
			<a href="/" class="text-neutral-400 hover:text-white transition-colors text-sm font-medium flex items-center gap-2">
				<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
				Se profesjonell CV
			</a>
		</div>
	</section>
</div>
