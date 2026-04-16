<!--
  Footer-komponent — vises på alle sider.
  Inneholder kontaktinfo og lenker.
-->
<script lang="ts">
	import { page } from '$app/stores';
	$: isDvask = $page.url.pathname.startsWith('/dvask');
</script>

<footer class="border-t {isDvask ? 'bg-neutral-950 border-neutral-800/50 text-neutral-500' : 'bg-warm-100 border-brand-200/30 text-warm-800/50'}">
	<div class="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-4">
		<p class="text-sm">
			&copy; {new Date().getFullYear()} Håkon Starheim Breivik. Alle rettigheter reservert.
		</p>
		<div class="flex gap-6 text-sm">
			<a href="/" class="{isDvask ? 'hover:text-white' : 'hover:text-warm-900'} transition-colors">CV</a>
			<a href="/dvask" class="{isDvask ? 'hover:text-amber-400' : 'hover:text-warm-900'} transition-colors">Dvask</a>
			<a href="mailto:haakonstarheim@gmail.com" class="{isDvask ? 'hover:text-white' : 'hover:text-warm-900'} transition-colors">E-post</a>
		</div>
	</div>
</footer>
