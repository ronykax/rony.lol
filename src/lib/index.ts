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
        name: string;
    }[],
    projects: {
        title: string;
        description: string;
        url: string;
    }[],
    discordUid: string;
}

const config: Config = {
    socials: [
        {
            url: "https://x.com/ronykax",
            icon: X,
            name: "Twitter / X"
        },
        {
            url: "https://discord.gg/XbkmqxDvms",
            icon: Discord,
            name: "Discord"
        },
        {
            url: "https://github.com/ronykax",
            icon: Github,
            name: "Github"
        }
    ],
    projects: [
        {
            title: "Netcord",
            description: "Get professional community-building service accross Discord",
            url: "https://netcord.in"
        },
        {
            title: "Reps.bio",
            description: "Link in bio featuring a global and top-notch reputation system",
            url: "https://github.com/ronykax"
        },
        {
            title: "Math Run",
            description: "Beat the clock or race against it and speedrun through math problems",
            url: "https://github.com/ronykax"
        },
        {
            title: "ChibeeU",
            description: "Become a chibee-like you! A free and cute avatar editor (soon)",
            url: "https://chibeeu.com"
        },
        {
            title: "Untitled Web",
            description: "A group of creatives offering web and app development services",
            url: "/"
        }
    ],
    discordUid: "791222882499690519"
}

export { Linked, Link, config }