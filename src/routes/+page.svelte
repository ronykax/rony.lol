<script lang="ts">
    interface Item {
        label: string;
        url: string;
        content?: string;
    }

    const stack: Item[] = [
        {
            label: "Svelte + Kit",
            url: "https://svelte.dev/",
            content: "Preferred web framework"
        },
        {
            label: "PocketBase",
            url: "https://pocketbase.io/",
            content: "Backend in one file"
        },
        {
            label: "Godot",
            url: "https://godotengine.org/",
            content: "2D and 3D game engine"
        },
        {
            label: "Blender",
            url: "https://www.blender.org/",
            content: "3D modeling and design"
        },
        {
            label: "Discord API",
            url: "https://discord.com/developers/docs/intro",
            content: "API for Discord"
        },
        {
            label: "Tauri",
            url: "https://tauri.app/",
            content: "Build Rust powered apps"
        }
    ]

    const socials: Item[] = [
        {
            label: "Twitter",
            url: "https://x.com/ronykax"
        },
        {
            label: "Github",
            url: "https://github.com/ronykax"
        },
        {
            label: "Discord",
            url: "https://discord.gg/CU5SUGNvtH"
        },
        {
            label: "Support",
            url: "https://ko-fi.com/ronykax"
        }
    ]
</script>

<div class="max-w-screen-md px-8 py-24 mx-auto space-y-14 font-main">

    <div class="space-y-3.5">
        <h1 class="text-lg font-semibold opacity-30">About</h1>

        <p class="text-lg leading-relaxed">
            Hi! I'm Rony and I'm 16y/o. I enjoy programming and working on cool projects.
            Besides that, I'm super into aviation and a big fan of Attack On Titan.
        </p>
    </div>

    <div class="space-y-3.5">
        <h1 class="text-lg font-semibold opacity-30">Using</h1>

        <div class="grid gap-y-4 md:grid-cols-2 md:gap-y-4 w-fit md:gap-x-12">
            {#each stack as item}

                <a class="space-y-0.5 group" href={item.url}>
                    <span class="text-lg underline underline-offset-1">{item.label}</span>
                    <p class="text-lg opacity-50 group-hover:underline group-hover:underline-offset-1">{item.content}</p>
                </a>
                
            {/each}
        </div>
    </div>

    <div class="space-y-3.5">
        <h1 class="text-lg font-semibold opacity-30">Contact</h1>

        <div class="flex flex-wrap gap-x-5 gap-y-2.5">
            {#each socials as item}

                <a class="flex gap-1 hover:opacity-50" href={item.url}>
                    <span class="text-lg">{item.label}</span>
                    <img src="arrow.svg" alt="">
                </a>
                
            {/each}
        </div>
    </div>

    <div class="flex justify-between w-full">
        <span class="text-sm font-semibold opacity-30">@ronykax</span>
        <span class="text-sm font-semibold opacity-30">2008-2024</span>
    </div>

</div>