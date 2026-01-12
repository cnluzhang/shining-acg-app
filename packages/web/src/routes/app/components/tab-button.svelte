<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import type { ComponentType, SvelteComponent } from 'svelte';

	let {
		badgeText,
		text,
		icon: Icon
	} = $props<{ badgeText?: string; text: string; icon: ComponentType<SvelteComponent> }>();
</script>

<Button class=" h-12 w-46 justify-between rounded-full px-4" variant="ghost">
	<div class="flex items-center gap-3 *:text-zinc-800">
		<Icon class="size-6" strokeWidth={1.8} />
		<span class="text-base font-semibold">{text}</span>
	</div>
	{#if badgeText}
		<Badge>{badgeText}</Badge>
	{/if}
</Button>
