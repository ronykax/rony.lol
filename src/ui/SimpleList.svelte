<script lang="ts">
  export let items: Item[];
  import Arrow from "./Arrow.svelte";
</script>

<ul class="ml-4 space-y-6 sm:ml-0">
  {#each items as item}
    <li>
      <div class="flex flex-col sm:flex-row">
        <div class="sm:w-40">
          <h4>{item.yearOrWhatever}</h4>
        </div>
        <div>
          <div class="flex items-center gap-1">
            <h2 class="hover:underline underline-offset-4 decoration-1">
              <a href="{item.link}">{item.title}</a>
            </h2>
            <Arrow />
          </div>
          {#if item.description !== undefined}
            <p>{item.description}</p>
          {/if}
        </div>
      </div>
    </li>
  {/each}
</ul>