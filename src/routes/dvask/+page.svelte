<!--
  Dvask (/dvask)
  ==============
  DJ-profilen i designet «Skarp»: helsvart flate, oransje aksent,
  egen header og footer. Ingen avrundede hjørner og ingen skygger.
  Seksjonene skilles med 1px-linjer.
-->
<script>
	const nav = [
		{ tekst: 'Musikk', href: '#dv-musikk' },
		{ tekst: 'Live', href: '#dv-live' },
		{ tekst: 'Events', href: '#dv-events' }
	];

	// Plassholdere fram til ekte mixer er lagt inn.
	const mixer = [
		{ tittel: 'Deep House Sessions Vol. 3', sted: 'Studio Mix', lengde: '1:15:00', aar: '2024' },
		{ tittel: 'Techno Warehouse Set', sted: 'Live @ Klubb X', lengde: '2:00:00', aar: '2024' },
		{ tittel: 'Melodic Journey', sted: 'Podcast Ep. 12', lengde: '0:58:00', aar: '2023' },
		{ tittel: 'Peak Time Techno', sted: 'Live @ Festival', lengde: '1:30:00', aar: '2023' }
	];

	const datoer = [
		{
			dato: '01.05',
			tittel: 'Drum & Bass — Fredag',
			lineup: 'Dvask · Difee · Simon Peter · Burge'
		},
		{
			dato: '02.05',
			tittel: 'Techno — Lørdag',
			lineup: 'Betong · Bick Dick Bandido · Amnesi · KP'
		}
	];
</script>

<svelte:head>
	<title>DVASK — DJ | House · Disco · Allsang</title>
	<meta
		name="description"
		content="DVASK — DJ fra Ålesund. House, disco og allsang. Spiller i hele Norge."
	/>
</svelte:head>

<div class="min-h-screen bg-dvask-bg text-dvask-text">
	<!-- ══════════ HEADER ══════════ -->
	<header
		class="sticky top-0 z-20 flex h-[60px] items-center justify-between border-b border-dvask-line bg-dvask-bg"
		style="padding-left: clamp(20px, 4vw, 48px); padding-right: clamp(20px, 4vw, 48px);"
	>
		<a href="#dv-topp" class="text-[20px] font-black tracking-[-0.02em]">DVASK</a>
		<nav class="flex items-center gap-6 font-mono text-[12px] uppercase" style="letter-spacing: 0.06em;">
			{#each nav as item}
				<a href={item.href} class="text-dvask-muted transition-colors hover:text-dvask-text">
					{item.tekst}
				</a>
			{/each}
			<a href="#dv-booking" class="text-dvask-accent transition-colors hover:text-dvask-text">
				Booking
			</a>
			<a href="/" class="text-dvask-dim transition-colors hover:text-dvask-text">← CV</a>
		</nav>
	</header>

	<!-- ══════════ HERO ══════════ -->
	<section
		id="dv-topp"
		class="grid border-b border-dvask-line"
		style="grid-template-columns: repeat(auto-fit, minmax(min(100%, 420px), 1fr)); min-height: calc(100vh - 60px);"
	>
		<!-- container-type gjør at DVASK-tittelen skalerer etter
		     kolonnebredden, ikke vindusbredden, så den aldri renner
		     ut av cellen når heroen står i to kolonner. -->
		<div
			class="flex flex-col justify-between"
			style="padding: clamp(24px, 4vw, 48px); container-type: inline-size;"
		>
			<p class="font-mono text-[12px] uppercase text-dvask-accent" style="letter-spacing: 0.08em;">
				House / Disco / Allsang
			</p>

			<div>
				<h1
					class="font-black leading-[0.82] tracking-[-0.06em]"
					style="font-size: clamp(72px, 28cqw, 220px);"
				>
					DVASK
				</h1>
				<p class="mt-6 max-w-[380px] text-[24px] font-medium text-dvask-body">
					DJ fra Ålesund, spiller i hele Norge.
				</p>
				<div class="mt-8 flex flex-wrap gap-3">
					<a
						href="#dv-musikk"
						class="bg-dvask-accent px-6 py-4 font-extrabold text-dvask-bg transition-colors hover:bg-dvask-text"
					>
						▶ Hør musikk
					</a>
					<a
						href="#dv-booking"
						class="border-2 border-dvask-text px-6 py-4 font-extrabold text-dvask-text transition-colors hover:bg-dvask-text hover:text-dvask-bg"
					>
						Booking
					</a>
				</div>
			</div>
		</div>

		<div class="relative min-h-[420px]">
			<img
				src="/images/dvask/hero-action.jpg"
				alt="DJ Dvask i aksjon bak mikseren"
				class="absolute inset-0 h-full w-full object-cover"
			/>
		</div>
	</section>

	<!-- ══════════ OM ══════════ -->
	<section
		class="grid border-b border-dvask-line"
		style="grid-template-columns: repeat(auto-fit, minmax(min(100%, 420px), 1fr));"
	>
		<div class="relative min-h-[360px]">
			<img
				src="/images/dvask/silhouette.jpg"
				alt="Dvask i silhuett, røyk og lys"
				class="absolute inset-0 h-full w-full object-cover"
			/>
		</div>

		<div class="flex flex-col gap-5" style="padding: clamp(24px, 5vw, 72px);">
			<p class="font-mono text-[12px] uppercase text-dvask-accent" style="letter-spacing: 0.08em;">
				Om
			</p>
			<h2 class="font-black leading-[0.95] tracking-[-0.03em]" style="font-size: clamp(40px, 4.5vw, 60px);">
				Den musikken dere vil ha.
			</h2>
			<p class="text-[17px] leading-[1.65] text-dvask-body">
				Jeg har brukt de siste årene som DJ og leder for Kultursjokk til å virkelig utforske hva som
				funker — og hva som holder det gående til lysene slås på. Med et repertoar som strekker seg
				fra glinsende disco og tidløs pop til dype house-grooves og pulserende tech, tilpasser jeg
				meg rommet, stemningen og menneskene foran meg. Ingen kveld er lik.
			</p>
			<p class="text-[17px] leading-[1.65] text-dvask-body">
				Men det stopper ikke ved klubbkvelder. Enten det er et bryllupsselskap som trenger den
				perfekte overgangen fra middag til dansegulv, eller en firmafest som skal huskes i årevis —
				jeg har gjort det mange ganger før og vet hva som kreves.
			</p>
			<p class="text-[17px] font-semibold leading-[1.65] text-dvask-text">
				Book meg til neste arrangement, så tilpasser jeg meg til nøyaktig det dere trenger.
			</p>
		</div>
	</section>

	<!-- ══════════ MIXES & SETS ══════════ -->
	<section
		id="dv-musikk"
		class="border-b border-dvask-line py-[88px]"
		style="padding-left: clamp(20px, 4vw, 48px); padding-right: clamp(20px, 4vw, 48px);"
	>
		<div class="flex flex-wrap items-end justify-between gap-4">
			<h2 class="text-[48px] font-black leading-none tracking-[-0.03em]">Mixes &amp; sets</h2>
			<p class="font-mono text-[12px] uppercase text-dvask-dim" style="letter-spacing: 0.06em;">
				Tittel / Sted / Lengde / År
			</p>
		</div>

		<div class="mt-10">
			{#each mixer as mix, i}
				<a
					href="#dv-musikk"
					class="group grid items-center gap-4 border-t border-dvask-line py-5"
					style="grid-template-columns: 56px minmax(0, 1fr) auto auto 24px;"
				>
					<span class="font-mono text-[13px] text-dvask-dim">
						{String(i + 1).padStart(2, '0')}
					</span>
					<span class="min-w-0">
						<span class="block truncate text-[21px] font-bold transition-colors group-hover:text-dvask-accent">
							{mix.tittel}
						</span>
						<span class="block text-[14px] text-dvask-muted">{mix.sted}</span>
					</span>
					<span class="font-mono text-[13px] text-dvask-muted">{mix.lengde}</span>
					<span class="font-mono text-[13px] text-dvask-muted">{mix.aar}</span>
					<span class="text-dvask-dim transition-colors group-hover:text-dvask-accent">▶</span>
				</a>
			{/each}
		</div>
	</section>

	<!-- ══════════ LIVE ══════════ -->
	<section id="dv-live" class="border-b border-dvask-line">
		<div class="grid grid-cols-3 gap-[2px] bg-dvask-line">
			<div class="relative col-span-2 row-span-2">
				<img
					src="/images/dvask/overhead-green.jpg"
					alt="Dvask ovenfra med turkist lys og fullt gulv"
					class="absolute inset-0 h-full w-full object-cover"
				/>
			</div>
			<img
				src="/images/dvask/crowd-red-1.jpg"
				alt="Publikum i rødt lys"
				class="aspect-[4/3] w-full object-cover"
			/>
			<img
				src="/images/dvask/crowd-red-2.jpg"
				alt="Dvask ved mikseren i rødt lys"
				class="aspect-[4/3] w-full object-cover"
			/>
		</div>
	</section>

	<!-- ══════════ EVENTS ══════════ -->
	<section
		id="dv-events"
		class="grid gap-12 border-b border-dvask-line py-[88px]"
		style="grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr)); padding-left: clamp(20px, 4vw, 48px); padding-right: clamp(20px, 4vw, 48px);"
	>
		<img
			src="/images/dvask/korsa-plakat.jpg"
			alt="Plakat — KORSA, 1. og 2. mai"
			class="w-full max-w-[340px]"
		/>

		<div>
			<p class="font-mono text-[12px] uppercase text-dvask-accent" style="letter-spacing: 0.08em;">
				Kultursjokk presenterer
			</p>
			<h2 class="mt-4 font-black leading-[0.9] tracking-[-0.04em]" style="font-size: clamp(64px, 8vw, 104px);">
				KORSA
			</h2>
			<p class="mt-4 font-mono text-[13px] text-dvask-muted">
				Keiser Wilhelms gate 25, Ålesund · ID: 20+
			</p>

			<div class="mt-8">
				{#each datoer as d}
					<div
						class="grid items-center gap-4 border-t border-dvask-line py-5 last:border-b"
						style="grid-template-columns: 88px minmax(0, 1fr);"
					>
						<span class="text-[28px] font-black leading-none text-dvask-accent">{d.dato}</span>
						<span>
							<span class="block text-[18px] font-bold">{d.tittel}</span>
							<span class="block text-[14px] text-dvask-muted">{d.lineup}</span>
						</span>
					</div>
				{/each}
			</div>

			<a
				href="https://billetto.no/e/korsa-billetter-1877450"
				target="_blank"
				rel="noopener noreferrer"
				class="mt-8 inline-block border-2 border-dvask-accent px-6 py-4 font-extrabold text-dvask-accent transition-colors hover:bg-dvask-accent hover:text-dvask-bg"
			>
				Kjøp billetter ↗
			</a>
		</div>
	</section>

	<!-- ══════════ BOOKING ══════════ -->
	<section
		id="dv-booking"
		class="bg-dvask-accent py-24 text-dvask-bg"
		style="padding-left: clamp(20px, 4vw, 48px); padding-right: clamp(20px, 4vw, 48px);"
	>
		<p class="font-mono text-[12px] uppercase" style="letter-spacing: 0.08em;">
			Booking &amp; forespørsler
		</p>
		<h2 class="mt-6 font-black leading-[0.88] tracking-[-0.04em]" style="font-size: clamp(48px, 8vw, 120px);">
			Interessert i å booke Dvask til ditt event?
		</h2>
		<a
			href="mailto:haakonstarheim@gmail.com?subject=Booking%20Dvask"
			class="mt-10 inline-block bg-dvask-bg px-7 py-[18px] font-extrabold text-dvask-text transition-colors hover:bg-dvask-text hover:text-dvask-bg"
		>
			Send forespørsel →
		</a>
	</section>

	<!-- ══════════ FOOTER ══════════ -->
	<footer
		class="flex flex-wrap items-center justify-between gap-4 py-6 font-mono text-[12px] uppercase text-dvask-dim"
		style="padding-left: clamp(20px, 4vw, 48px); padding-right: clamp(20px, 4vw, 48px); letter-spacing: 0.06em;"
	>
		<span>Også kjent som Håkon Starheim Breivik</span>
		<a href="/" class="transition-colors hover:text-dvask-text">← Se profesjonell CV</a>
	</footer>
</div>
