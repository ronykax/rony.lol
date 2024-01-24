<script lang="ts">
    import { onMount } from "svelte";
    import { slide, blur } from "svelte/transition";
    import { Linked, Link, config } from "$lib";
    
    import { useLanyard, type LanyardData } from "sk-lanyard";
    import type { Readable } from "svelte/store";
    
    let uid = "791222882499690519";
    let seeMore = false;

    let presence: Readable<LanyardData>;

    onMount(() => {
        setTimeout(() => {
            presence = useLanyard({ method: "ws", id: uid });
        }, 500);
    });
</script>

<div class="max-w-screen-md mx-auto bg-blue.gray px-6 py-6 space-y-12 md:py-20">

    <div class="flex flex-col-reverse gap-6 md:flex-row">
        <div class="flex flex-col gap-2">
            <h1 class="font-bricolage.grotesque">Hi, I'm Rony Kati</h1>
            
            <div>
                <p>
                    I'm 15y/o building cool stuff since 2018. I mainly use <Link href="https://www.google.com/search?q=typescript">TypeScript</Link> and I'm currently learning <Link href="https://www.google.com/search?q=rust+lang">Rust</Link>.
                </p>

                {#if seeMore}
                    <p transition:slide={{ duration: 100 }}>
                        <br>
                        Besides programming, I also enjoy watching anime. Some of my favorite animes are <Link href="https://google.com/search?q=attack+on+titan">Attack On Titan</Link> and <Link href="https://google.com/search?q=demon+slayer">Demon Slayer</Link>. <Link href="https://google.com/search?q=rocket+league">Rocket League</Link> is my ideal game to play and I'm into aviation too!
                    </p>
                {/if}

                <button class="mt-2 font-medium text-white text-opacity-50 underline underline-offset-4 hover:text-opacity-75" on:click={() => seeMore = !seeMore}>{seeMore ? "See less" : "More about me"}</button>
            </div>

            <ul class="flex flex-wrap gap-4 mt-6">
                {#each config.socials as item}
                    <li>
                        <a href="{item.url}" class="{item.url}">
                            <span class="opacity-75 hover:opacity-100">{@html item.icon}</span>
                        </a>
                    </li>
                {/each}
            </ul>
        </div>
        
        <div class="p-1 rounded-full ring-1 ring-white ring-opacity-25 max-w-32 max-h-32">
            <img class="w-full h-full rounded-full" src="chibee.jpg" alt="">
        </div>
    </div>

    <ul class="grid grid-cols-1 gap-4 md:grid-cols-2">
        {#each config.projects as item}
            <li>
                <a href="{item.url}">
                    <div class="h-full p-4 bg-white rounded-[4px] bg-opacity-5 hover:bg-opacity-7 ring-1 ring-white ring-opacity-15 backdrop-blur-sm space-y-1">
                        <h2 class="font-bricolage.grotesque relative">
                            {item.title}
                            <span class="absolute my-2 ml-1">
                                {@html Linked}
                            </span>
                        </h2>
                        <p>{item.description}</p>
                    </div>
                </a>
            </li>
        {/each}
    </ul>

    <div>
        {#if $presence}
            <div transition:slide={{ duration: 500 }}>
                <h2 class="text-opacity-25" transition:blur={{ duration: 500 }}>
                    I'm currently
                    <a href="https://discord.com/users/{uid}">
                        <span class="px-1.5 py-0.5 text-opacity-75 bg-white rounded-md bg-opacity-7 font-mono relative hover:text-opacity-100">
                            {$presence.discord_status}
                        </span>
                    </a>
                    on Discord.
                </h2>
            </div>
        {/if}
        <h2 class="text-opacity-25">© 2024 — All rights reserved</h2>
    </div>
</div>