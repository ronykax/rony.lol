<script lang="ts">
    export let href: string;
</script>

<a class="font-medium text-white" href="{href}" target="_blank">
    <slot />
</a>