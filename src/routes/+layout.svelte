<!--
  Rot-layout: Importerer globale stiler, header og footer.
  Wrapper rundt alle sider.
-->
<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Header />

<!-- Padding-top for å kompensere for fixed header -->
<main class="pt-16 min-h-screen">
	<slot />
</main>

<Footer />
