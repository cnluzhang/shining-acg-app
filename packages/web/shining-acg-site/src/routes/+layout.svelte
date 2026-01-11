<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import {Button} from '$lib/components/ui/button'
	import './layout.css';
	import {ModeWatcher,toggleMode} from 'mode-watcher'
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<ModeWatcher></ModeWatcher>
<Button variant="default" onclick={() => toggleMode()}>确认</Button>
<Button class="bg-yellow-500">删除</Button>
{@render children()}
