<script lang="ts">
	import { Bell, House } from 'lucide-svelte';
	import TabButton from './components/tab-button.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>晒你 App</title>
	<meta
		name="viewport"
		content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
	/>
</svelte:head>

<TabButton badgeText="1" text="首页" icon={House} />
<TabButton badgeText="1" text="消息" icon={Bell} />

{@render children()}
