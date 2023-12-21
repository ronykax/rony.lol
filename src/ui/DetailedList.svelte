<script lang="ts">
  export let items: Item[];
  import Link from "./Link.svelte";
</script>

<ul class="ml-4 space-y-12 sm:ml-0">
  {#each items as item}
    <li>
      <div class="flex flex-col sm:flex-row">
        <div class="flex-1">
          <h4>{item.yearOrWhatever}</h4>
        </div>
        <div class="flex-[2_1_0%]">
          <Link link={item.link} title={item.title} />
          {#if item.description !== undefined}
            <p>{item.description}</p>
          {/if}
        </div>
      </div>
    </li>
  {/each}
</ul>