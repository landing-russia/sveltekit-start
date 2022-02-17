<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  let scrollNow = 0;
  let isOpen = false;
  let isNav = true;
  let isDark = "";

  onMount(() => {
    window.onscroll = () => {
      if (window.scrollY > scrollNow) {
        isNav = false;
      } else {
        isNav = true;
      }
      scrollNow = window.scrollY;
    };
  });

  if (typeof localStorage !== "undefined") {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      isDark = "dark";
      document.documentElement.classList.add("dark");
    } else {
      isDark = "light";
      document.documentElement.classList.remove("dark");
    }
  }

  function isNavEsc(e) {
    if (e.code === "Escape") {
      isOpen = false;
    }
  }

  function toggleDarkMode() {
    if (isDark === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      isDark = "light";
    } else if (isDark === "light") {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      isDark = "dark";
    }
  }
</script>

<svelte:window on:keydown={isNavEsc} />

<div
  class="fixed w-full backdrop-blur-lg bg-white/30 shadow transform ease-in-out transition-all duration-200 {isNav
    ? 'translate-y-0'
    : '-translate-y-full'} z-40"
>
  <nav class="container-fluid flex justify-between items-center h-16">
    <div class="flex items-center">
      <a href="/" class="py-4 text-xl font-extrabold text-amber-500"
        ><span class="text-gray-800">B</span>RAND</a
      >
      <button
        type="button"
        class="ml-4 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-300"
        on:click={() => (isOpen = !isOpen)}
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-amber-500 hover:text-amber-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg></button
      >
    </div>
    <div class="flex space-x-3">
      <a
        href="/"
        class="py-4 px-2 text-lg font-medium text-gray-500 hover:text-gray-800 transition duration-200"
        >Home</a
      >
      <a
        href="/about"
        class="py-4 px-2 text-lg font-medium text-gray-500 hover:text-gray-800 transition duration-200"
        >About</a
      >
    </div>
  </nav>
</div>

{#if isOpen}
  <div
    transition:fade={{ duration: 200 }}
    class="fixed inset-0 backdrop-blur-sm bg-white/30 z-30"
    aria-hidden="true"
    on:click={() => (isOpen = false)}
  />
{/if}

<aside
  class="transform top-0 left-0 w-64 bg-slate-50 fixed h-full p-6 shadow-lg overflow-auto ease-in-out transition-all duration-200 z-50 {isOpen
    ? 'translate-x-0'
    : '-translate-x-full'}"
>
  aside
</aside>
