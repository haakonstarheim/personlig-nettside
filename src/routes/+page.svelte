<!--
  CV-side (/)
  ===========
  Designet «Skarp»: mørkt sidefelt med portrett, kontaktinfo og
  nummerert navigasjon, og en lys hovedkolonne med seksjonene
  01–05. Ingen avrundede hjørner, ingen skygger — flater skilles
  med linjer, kontrast og 2px-mellomrom.

  Innholdet er CV-en i sin helhet. Rekkefølgen i Arbeidserfaring er
  pågående roller først, deretter avsluttede.
-->
<script>
	// Valgfrie innstillinger fra designprototypen.
	const showReference = true;
	const showDvaskLink = true;

	const nav = [
		{ nr: '01', navn: 'Profil', href: '#profil' },
		{ nr: '02', navn: 'Lederroller', href: '#lederroller' },
		{ nr: '03', navn: 'Arbeidserfaring', href: '#erfaring' },
		{ nr: '04', navn: 'Utdanning', href: '#utdanning' },
		...(showReference ? [{ nr: '05', navn: 'Referanse', href: '#referanse' }] : [])
	];

	const lederroller = [
		{
			aar: 'Mai 2026 – d.d.',
			rolle: 'Gründer',
			org: 'ENK Regnskap',
			note: 'Startet eget selskap.'
		},
		{
			aar: '2024 – d.d.',
			rolle: 'Daglig leder',
			org: 'Kultursjokk AS',
			note: 'Driver eventselskapet.'
		},
		{
			aar: '2026 – d.d.',
			rolle: 'Assisterende arbeidsleder',
			org: 'BPA – Mio BPA',
			note: 'Organiserer assistenter rundt bruker.'
		},
		{
			aar: '2021 – 2023',
			rolle: 'Grunnlegger og leder',
			org: 'Bergen Studentfotballforening',
			note: 'Seriespill for over 700 studenter.'
		}
	];

	const erfaring = [
		{
			dato: 'Mai 2026 – d.d.',
			rolle: 'Gründer',
			org: 'ENK Regnskap',
			sted: '',
			lenke: { tekst: 'enkregnskap.no', url: 'https://enkregnskap.no' },
			punkter: []
		},
		{
			dato: '2024 – d.d.',
			rolle: 'Daglig leder',
			org: 'Kultursjokk AS',
			sted: '',
			lenke: { tekst: 'kultursjokk.no', url: 'https://kultursjokk.no' },
			punkter: []
		},
		{
			dato: 'Aug 2019 – d.d.',
			rolle: 'Brukerstyrt personlig assistent (BPA)',
			org: 'Assistermeg, Mio BPA og Prima',
			sted: 'Bergen og Oslo',
			lenke: null,
			punkter: [
				'Assisterende arbeidsleder fra 2026.',
				'Hjelper bruker med funksjonsnedsettelse i hverdagen.',
				'Stillingsprosent 30 %, men i perioder opp mot 80 % etter å ha tatt på meg mye ekstra arbeid. Tall kan fremvises ved ønske.'
			]
		},
		{
			dato: 'Mai 2025 – jul 2026',
			rolle: 'Selger',
			org: 'EGN Executive Network',
			sted: '',
			lenke: null,
			punkter: []
		},
		{
			dato: 'Okt 2021 – 2023',
			rolle: 'Grunnlegger og leder',
			org: 'Bergen Studentfotballforening',
			sted: 'Bergen',
			lenke: null,
			punkter: [
				'Startet og utviklet en fotballorganisasjon for studenter som tilrettelegger seriespill for over 700 studenter.'
			]
		},
		{
			dato: 'Mar 2015 – 2019',
			rolle: 'Lagerarbeider',
			org: 'HI Giørtz Sønner AS',
			sted: 'Ålesund',
			lenke: null,
			punkter: [
				'Arbeidet på tvers av tørrvarer, kjøl, miljøstasjon og varelevering.',
				'Hovedansvar for pallesortering og sortering av papp og plast ved miljøstasjonen.',
				'Stillingsprosent 20 %.'
			]
		}
	];

	const utdanning = [
		{
			dato: 'Jan 2022 – jan 2025',
			tittel: 'Bachelor i økonomi og administrasjon',
			skole: 'UiT, Nettbasert',
			beskrivelse: 'Fullført januar 2025.'
		},
		{
			dato: 'Aug 2020 – sep 2022',
			tittel: 'Grunnskolelærer 5–10',
			skole: 'Høgskulen på Vestlandet, Bergen',
			beskrivelse: 'Fag: engelsk, musikk og kroppsøving.'
		},
		{
			dato: 'Aug 2018 – jun 2019',
			tittel: 'Audiovisuelle medier',
			skole: 'Høgskolen i Innlandet, Lillehammer',
			beskrivelse:
				'Fag: film-, TV- og spillbransjen, filmhistoriens sentrale verker, og analyse i praksis (dramaturgi, konsept, utvikling).'
		},
		{
			dato: 'Aug 2016 – jun 2017',
			tittel: 'Utveksling til USA',
			skole: 'Dysart High School, Phoenix, USA',
			beskrivelse:
				'Fag: Weightlifting, Photography, English, Psychology, Social Studies. Aktiviteter: amerikansk fotball og fotball.'
		},
		{
			dato: 'Aug 2015 – jun 2018',
			tittel: 'Studiespesialiserende linje',
			skole: 'Spjelkavik videregående, Ålesund',
			beskrivelse:
				'Valgfag: økonomi og ledelse, sosiologi og sosialantropologi, og samfunnsfaglig engelsk.'
		}
	];
</script>

<svelte:head>
	<title>Håkon Starheim Breivik — Leder · Selger · Gründer</title>
	<meta
		name="description"
		content="CV for Håkon Starheim Breivik — leder, selger og gründer. Erfaring fra ENK Regnskap, Kultursjokk AS, EGN Executive Network og Bergen Studentfotballforening."
	/>
</svelte:head>

<div class="flex min-h-screen flex-wrap bg-paper text-ink">
	<!-- ══════════ SIDEFELT ══════════ -->
	<aside class="flex-[1_1_340px] bg-ink text-paper">
		<div class="sticky top-0 flex min-h-screen flex-col gap-7 p-8">
			<img
				src="/images/proff/portrett.jpg"
				alt="Portrett av Håkon Starheim Breivik"
				class="aspect-square w-full object-cover"
				style="object-position: center 15%; filter: grayscale(1) contrast(1.05);"
			/>

			<div>
				<h1 class="text-[40px] font-extrabold leading-none tracking-[-0.03em]">
					Håkon Starheim Breivik
				</h1>
				<p class="label-mono mt-[10px] text-accent-dark">Leder · Selger · Gründer</p>
			</div>

			<ul class="flex flex-col gap-2 font-mono text-[13px] leading-[1.5]">
				<li>
					<a href="mailto:haakonstarheim@gmail.com" class="text-paper transition-colors hover:text-accent-dark">
						haakonstarheim@gmail.com
					</a>
				</li>
				<li>
					<a href="tel:+4791736795" class="text-paper transition-colors hover:text-accent-dark">
						+47 917 36 795
					</a>
				</li>
				<li class="text-sidebar-muted">Omsens gate 2A, 0478 Oslo</li>
			</ul>

			<div class="flex flex-col gap-[10px]">
				<a
					href="/cv-hakon-starheim-breivik.pdf"
					download
					class="flex items-center justify-between bg-accent-fill px-[18px] py-[14px] text-[15px] font-bold text-ink transition-colors hover:bg-paper"
				>
					<span>Last ned CV</span>
					<span class="font-mono text-[12px]">PDF ↓</span>
				</a>
				<a
					href="https://www.linkedin.com/in/h%C3%A5kon-starheim-breivik-a1b72122a/"
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center justify-between border border-[rgba(250,250,248,0.3)] px-[18px] py-[14px] text-[15px] font-semibold text-paper transition-colors hover:border-paper"
				>
					<span>LinkedIn</span>
					<span class="font-mono text-[12px]">↗</span>
				</a>
			</div>

			<nav>
				<ul>
					{#each nav as item}
						<li class="border-t border-[rgba(250,250,248,0.15)] last:border-b">
							<a
								href={item.href}
								class="flex items-center gap-[14px] py-[10px] text-[15px] text-sidebar-text transition-colors hover:text-accent-dark"
							>
								<span class="font-mono text-[12px] text-sidebar-dim">{item.nr}</span>
								<span>{item.navn}</span>
							</a>
						</li>
					{/each}
				</ul>
			</nav>

			{#if showDvaskLink}
				<a
					href="/dvask"
					class="label-mono mt-auto text-sidebar-dim transition-colors hover:text-accent-dark"
				>
					På fritiden: DJ Dvask →
				</a>
			{/if}
		</div>
	</aside>

	<!-- ══════════ HOVEDKOLONNE ══════════ -->
	<main class="min-w-0 flex-[999_1_560px]">
		<div
			class="flex max-w-[880px] flex-col gap-[88px] pb-24 pt-14"
			style="padding-left: clamp(24px, 5vw, 72px); padding-right: clamp(24px, 5vw, 72px);"
		>
			<!-- 01 — PROFIL -->
			<section id="profil" class="scroll-mt-8">
				<p class="label-mono text-accent">01 — Profil</p>
				<p
					class="mt-6 font-medium leading-[1.3] tracking-[-0.015em]"
					style="font-size: clamp(24px, 2.6vw, 32px);"
				>
					Erfaringsrik leder på leting etter jobb. Jeg har den siste tiden jobbet med egne
					prosjekter og selskaper, men å være selvstendig næringsdrivende er ikke billig, så nå er
					jeg igjen på leting etter fast jobb som passer mine egenskaper og erfaringer. Jeg elsker å
					jobbe med folk og søker arbeid som lar meg jobbe i, og forbedre, team.
				</p>
			</section>

			<!-- 02 — LEDERROLLER -->
			<section id="lederroller" class="scroll-mt-8">
				<p class="label-mono text-accent">02 — Lederroller</p>
				<div
					class="mt-6 grid gap-[2px] border-2 border-ink bg-ink"
					style="grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));"
				>
					{#each lederroller as rolle}
						<div class="flex min-h-[170px] flex-col gap-2 bg-paper p-6">
							<p class="font-mono text-[12px] text-muted">{rolle.aar}</p>
							<p class="text-[26px] font-extrabold leading-[1.05] tracking-[-0.02em]">
								{rolle.rolle}
							</p>
							<p class="text-[16px] font-medium">{rolle.org}</p>
							<p class="mt-auto text-[14px] text-muted">{rolle.note}</p>
						</div>
					{/each}
				</div>
			</section>

			<!-- 03 — ARBEIDSERFARING -->
			<section id="erfaring" class="scroll-mt-8">
				<p class="label-mono text-accent">03 — Arbeidserfaring</p>
				<div class="mt-6">
					{#each erfaring as jobb}
						<!-- To kolonner fra 640px og opp; under det stables
						     dato over innholdet så linjene ikke klemmes. -->
						<div
							class="grid grid-cols-1 gap-y-2 border-t border-line py-[22px] sm:grid-cols-[150px_minmax(0,1fr)] sm:gap-x-7"
						>
							<p class="pt-[5px] font-mono text-[12px] uppercase text-muted">{jobb.dato}</p>
							<div>
								<div class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
									<span class="text-[21px] font-bold">{jobb.rolle}</span>
									<span class="text-[16px] text-ink2">
										{jobb.org}{#if jobb.sted}<span class="text-muted">&nbsp;· {jobb.sted}</span>{/if}
									</span>
									{#if jobb.lenke}
										<a
											href={jobb.lenke.url}
											target="_blank"
											rel="noopener noreferrer"
											class="font-mono text-[12px] text-accent hover:underline"
										>
											{jobb.lenke.tekst} ↗
										</a>
									{/if}
								</div>
								{#if jobb.punkter.length}
									<ul class="mt-3 flex flex-col gap-1 text-[15px] leading-[1.55] text-ink2">
										{#each jobb.punkter as punkt}
											<li class="flex gap-2">
												<span class="text-accent">–</span>
												<span>{punkt}</span>
											</li>
										{/each}
									</ul>
								{/if}
							</div>
						</div>
					{/each}
				</div>
			</section>

			<!-- 04 — UTDANNING -->
			<section id="utdanning" class="scroll-mt-8">
				<p class="label-mono text-accent">04 — Utdanning</p>
				<div class="mt-6">
					{#each utdanning as u}
						<div
							class="grid grid-cols-1 gap-y-2 border-t border-line py-[18px] sm:grid-cols-[150px_minmax(0,1fr)] sm:gap-x-7"
						>
							<p class="pt-[5px] font-mono text-[12px] uppercase text-muted">{u.dato}</p>
							<div>
								<p class="text-[18px] font-bold">
									{u.tittel}<span class="font-normal text-ink2">&nbsp;— {u.skole}</span>
								</p>
								<p class="mt-2 text-[15px] leading-[1.55] text-muted">{u.beskrivelse}</p>
							</div>
						</div>
					{/each}
				</div>
			</section>

			<!-- 05 — REFERANSE -->
			{#if showReference}
				<section id="referanse" class="scroll-mt-8">
					<p class="label-mono text-accent">05 — Referanse</p>
					<div
						class="mt-6 flex flex-wrap items-baseline gap-y-2 border-y border-line py-[22px]"
						style="column-gap: 28px;"
					>
						<span class="text-[21px] font-bold">Nils Hoel</span>
						<span class="text-[16px] text-ink2">Bruker, Mio BPA</span>
						<span class="font-mono text-[13px] text-muted">
							+47 909 26 252 · nils.hoel@yahoo.no
						</span>
					</div>
				</section>
			{/if}

			<!-- KONTAKT -->
			<section id="kontakt" class="scroll-mt-8">
				<h2
					class="font-black leading-[0.95] tracking-[-0.04em]"
					style="font-size: clamp(40px, 6vw, 72px);"
				>
					Klar for neste utfordring.
				</h2>
				<div class="mt-8 flex flex-wrap gap-3">
					<a
						href="mailto:haakonstarheim@gmail.com"
						class="bg-ink px-6 py-4 font-bold text-paper transition-colors hover:bg-accent-fill hover:text-ink"
					>
						Send e-post
					</a>
					<a
						href="tel:+4791736795"
						class="border-2 border-ink px-6 py-4 font-bold text-ink transition-colors hover:bg-ink hover:text-paper"
					>
						Ring +47 917 36 795
					</a>
				</div>
			</section>
		</div>
	</main>
</div>
