<script lang="ts">
    import { slide } from "svelte/transition";
    import { useLanyard } from "sk-lanyard";

    // Icons
    import X from "../../static/X.svg?raw";
    import Discord from "../../static/Discord.svg?raw";
    import Github from "../../static/Github.svg?raw";
    import Youtube from "../../static/Youtube.svg?raw";
    import Linked from "../../static/Linked.svg?raw";
    
    import Link from "$lib/Link.svelte";

    const socials: {
        url: string;
        icon: string;
    }[] = [
        {
            url: "https://x.com/ronykax",
            icon: X
        },
        {
            url: "https://discord.gg/XbkmqxDvms",
            icon: Discord
        },
        {
            url: "https://github.com/ronykax",
            icon: Github
        },
        {
            url: "/",
            icon: Youtube
        }
    ];

    const projects: {
        title: string;
        description: string;
        url: string;
        icon: string;
    }[] = [
        {
            title: "Math Run",
            description: "Silly game where you speed run through problems math problems",
            url: "https://github.com/ronykax",
            icon: "MathRun.png"
        },
        {
            title: "Netcord",
            description: "Get professional community-building service accross Discord",
            url: "https://netcord.in",
            icon: "Netcord.png"
        },
        {
            title: "Reps.bio",
            description: "Link in bio featuring a global and top-notch reputation system",
            url: "https://github.com/ronykax",
            icon: "Folio.png"
        }
    ];

    const presence = useLanyard({ method: "rest", id: "791222882499690519" });
    let seeMore = false;
</script>

<!-- A group of innovators that offer development services to build websites that are not just good looking but also secure, functional, and most importantly, SEO friendly -->

<!-- {$presence && $presence.discord_status} -->

<div class="max-w-screen-md mx-auto bg-blue.gray px-6 py-6 space-y-12 md:py-20">

    <div class="flex flex-col-reverse gap-6 md:flex-row">
        <div class="flex flex-col gap-2">
            <h1 class="font-bricolage.grotesque">Hi, I'm Rony Kati</h1>
            
            <div>
                <p>I'm 15-years-old building cool stuff since 2018. I primarily use TypeScript but I'm currently learning 🦀Rust.</p>
                {#if seeMore}
                    <p transition:slide={{ duration: 100 }}>
                        <br>
                        Besides programming, I also enjoy watching anime. Some of my favorite animes are <Link href="https://google.com/search?q=attack+on+titan">Attact On Titan</Link> and <Link href="https://google.com/search?q=demon+slayer">Demon Slayer</Link>. <Link href="https://google.com/search?q=rocket+league">Rocket League</Link> is my ideal game to play and I have a passion for aviation too!
                    </p>
                {/if}
                <button class="mt-2 font-medium text-white text-opacity-50 underline underline-offset-4 hover:text-opacity-75" on:click={() => seeMore = !seeMore}>{seeMore ? "See less" : "More about me"}</button>
            </div>

            <ul class="flex flex-wrap gap-4 mt-6">
                {#each socials as item}
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

    <!-- <div>
        <div class="flex gap-2">
            <div class="w-full h-1 bg-white bg-opacity-25 rounded-md"></div>
            <div class="w-full h-1 bg-white bg-opacity-25 rounded-md"></div>
        </div>
    </div> -->

    <ul class="grid grid-cols-1 gap-4 md:grid-cols-2">
        {#each projects as item}
            <li>
                <a href="{item.url}">
                    <div class="h-full p-4 bg-white rounded-[4px] bg-opacity-5 hover:bg-opacity-7 ring-1 ring-white ring-opacity-15 backdrop-blur-sm">
                        <div class="space-y-1">
                            <h2 class="font-bricolage.grotesque relative">
                                {item.title}
                                <span class="absolute my-2 ml-1">
                                    {@html Linked}
                                </span>
                            </h2>
                            <p>{item.description}</p>
                        </div>
                    </div>
                </a>
            </li>
        {/each}
    </ul>

    <div>
        <h2 class="text-opacity-25">Built with Svelte, Tailwind, & Vercel.</h2>
        <h2 class="text-opacity-25">© 2024 — All rights reserved</h2>
    </div>

    <!-- <div class="space-y-2 text-center">
        <h1 class="font-bricolage.grotesque text-2xl md:text-4xl md:w-3/4 md:mx-auto">"Working with Rony has been an absolute pleasure!"</h1>
        <h2 class="text-opacity-75">~ <a class="underline underline-offset-4" href="/">Emilia Petersen</a></h2>
    </div> -->
</div>