<script lang="ts">
  import DetailedList from "../ui/DetailedList.svelte";
  import SimpleList from "../ui/SimpleList.svelte";

  let projects: Item[] = [
    {
      link: "https://reps.bio",
      title: "Reps.bio",
      description: "Online reputation builder",
      yearOrWhatever: "Ongoing"
    },
    {
      link: "https://qtext.app",
      title: "Quick Text",
      description: "A faster and better alternative to Text Blaze with no paywalls",
      yearOrWhatever: "2023"
    }
  ];

  let experiences: Item[] = [
    {
      link: "https://netcord.in",
      title: "Netcord",
      description: "A creative agency on Discord",
      yearOrWhatever: 2023
    }
  ];

  let socials: Item[] = [
    {
      link: "https://x.com/ronykax",
      title: "ronykax",
      yearOrWhatever: "𝕏"
    },
    {
      link: "https://x.com/ronykax",
      title: "ronykax",
      yearOrWhatever: "Discord"
    },
    {
      link: "mailto:ronykax@gmail.com",
      title: "ronykax@gmail.com",
      yearOrWhatever: "Email"
    }
  ];
</script>

<div class="px-6 py-8 md:py-16 sm:px-12">
  <div class="max-w-lg mx-auto">

    <div class="flex flex-col gap-14">

      <div class="space-y-2">
        <h2>Hi, I'm Rony</h2>
        <p class="ml-4 sm:ml-0">I'm a 15y/o developer building cool stuff since 2018. I also do some UI/UX and write from time to time.</p>
      </div>

      <div class="space-y-6">
        <h2>Projects</h2>
        <DetailedList items={projects} />
      </div>

      <div class="space-y-6">
        <h2>Experience</h2>
        <DetailedList items={experiences} />
      </div>

      <div class="space-y-6">
        <h2>Contact</h2>
        <SimpleList items={socials} />
      </div>

    </div>
    
  </div>
</div>
