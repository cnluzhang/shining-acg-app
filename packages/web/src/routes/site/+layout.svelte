<script lang="ts">
	let { children } = $props();
</script>

<svelte:head>
	<title>晒你官网</title>
	<meta
		name="viewport"
		content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
	/>
</svelte:head>

{@render children()}
