<script lang="ts">
    import "../app.css";
    import { onMount } from "svelte";
    import { blur } from "svelte/transition";

    let ready = false;

    onMount(() => {
        ready = true;
    });
</script>

{#if ready}
    <div transition:blur>
        <slot />
    </div>
{/if}