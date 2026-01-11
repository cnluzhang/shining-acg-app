<script lang="ts">
	import './layout.css';
	import {Button} from '$lib/components/ui/button';
	let { children } = $props();
</script>

<Button>adfafa</Button>
<Button variant="destructive">adfafa</Button>
{@render children()}
