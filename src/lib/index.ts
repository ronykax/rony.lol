import Link from "./Link.svelte";

// Icons
import X from "./assets/X.svg?raw";
import Discord from "./assets/Discord.svg?raw";
import Github from "./assets/Github.svg?raw";
import Youtube from "./assets/Youtube.svg?raw";
import Linked from "./assets/Linked.svg?raw";

const config = {
    socials: [
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
    ] as {
        url: string;
        icon: string;
    }[],
    projects: [
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
    ] as {
        title: string;
        description: string;
        url: string;
        icon: string;
    }[]
}

export { X, Discord, Github, Youtube, Linked, Link, config }