<script lang="ts">
  export let link: string;
  export let title: string;
</script>

<h2 class="relative break-words">
  <a class="hover:underline underline-offset-4 decoration-1" href="{link}">{title}</a>
  <span class="absolute py-2 ml-1">
    <svg class="" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.23077 2C2.89091 2 2.61539 2.27552 2.61539 2.61538C2.61539 2.95525 2.89091 3.23077 3.23077 3.23077V2ZM9.38462 2.61538H10C10 2.27552 9.72448 2 9.38462 2V2.61538ZM8.76923 8.76923C8.76923 9.10909 9.04475 9.38461 9.38462 9.38461C9.72448 9.38461 10 9.10909 10 8.76923H8.76923ZM2.18025 8.94947C1.93992 9.18979 1.93992 9.57943 2.18025 9.81975C2.42057 10.0601 2.81021 10.0601 3.05053 9.81975L2.18025 8.94947ZM3.23077 3.23077H9.38462V2H3.23077V3.23077ZM8.76923 2.61538V8.76923H10V2.61538H8.76923ZM8.94948 2.18025L2.18025 8.94947L3.05053 9.81975L9.81975 3.05052L8.94948 2.18025Z" fill="#EEEEEE"/>
    </svg>
  </span>
</h2>