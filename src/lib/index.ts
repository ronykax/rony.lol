import Link from "./Link.svelte";

// Icons
import X from "./assets/X.svg?raw";
import Discord from "./assets/Discord.svg?raw";
import Github from "./assets/Github.svg?raw";
import Linked from "./assets/Linked.svg?raw";

interface Config {
    socials: {
        url: string;
        icon: string;
    }[],
    projects: {
        title: string;
        description: string;
        url: string;
        icon: string;
    }[],
    discordUid: string;
}

const config: Config = {
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
        }
    ],
    projects: [
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
        },
        {
            title: "Math Run",
            description: "Beat the clock or race against it and speedrun through math problems",
            url: "https://github.com/ronykax",
            icon: "MathRun.png"
        },
        {
            title: "ChibeeU",
            description: "Become a chibee-like you! A free and cute avatar editor (soon)",
            url: "https://chibeeu.com",
            icon: "Folio.png"
        },
        {
            title: "Untitled Web",
            description: "A group of creatives offering web and app development services",
            url: "/",
            icon: "Folio.png"
        }
    ],
    discordUid: "791222882499690519"
}

export { Linked, Link, config }