<script setup lang='ts'>
import { ref } from 'vue'
import Logo from '@/assets/logo.svg';
import small_hero from '@/assets/image-hero-mobile.png';
import arrowDown from '@/assets/icon-arrow-down.svg';
import databiz from '@/assets/client-databiz.svg';
import audiophile from '@/assets/client-audiophile.svg';
import meet from '@/assets/client-meet.svg';
import maker from '@/assets/client-maker.svg';
import hero from '@/assets/image-hero-desktop.png';
import todo from '@/assets/icon-todo.svg';
import reminder from '@/assets/icon-reminders.svg';
import planning from '@/assets/icon-planning.svg';
import calendar from '@/assets/icon-calendar.svg';
import OpenMenu from '@/assets/icon-menu.svg';
import CloseMenu from '@/assets/icon-close-menu.svg';


const dropdown1Visible = ref(false);
const dropdown2Visible = ref(false);
const isSidebarVisible = ref(true);

// Define the dropdowns state type
interface DropdownsState {
  features: boolean;
  company: boolean;
}

// Reactive state for dropdown visibility with proper typing
const dropdowns = ref<DropdownsState>({
  features: false,
  company: false,
});

// Function to toggle dropdown visibility
const toggleDropdown = (menu: keyof DropdownsState): void => {
  dropdowns.value[menu] = !dropdowns.value[menu];
};

// Function to handle closing the sidebar
const closeSidebar = (): void => {
  console.log("Sidebar closed"); // Add your logic to close the sidebar here
};
</script>


<template>

<!-- Sidebar -->
<section v-show="isSidebarVisible" class="md:hidden bg-gray-800 bg-opacity-50 z-50 w-full h-full fixed">
  <Transition name="slide">
    <nav
      v-if="isSidebarVisible"
      class="bg-white h-full w-64 text-custom-gray p-10 fixed -translate-x- flex flex-col gap-7">
      <!-- Close Button -->
      <CloseMenu
        class="ml-36"
        @click.prevent = "isSidebarVisible = !isSidebarVisible"
      />

      <!-- Menu Items -->
      <ul class="flex flex-col gap-5 text-xl font-medium">
        <!-- Features Dropdown -->
        <li>
          <div
            class="flex items-center justify-between hover:text-almost-black cursor-pointer"
            @click="toggleDropdown('features')"
          >
            <span>Features</span>
            <arrowDown />
          </div>
          <ul
            v-if="dropdowns.features"
            class="mt-2 pl-4 space-y-2 text-base text-gray-500"
          >
            <li class="flex items-center gap-2">
              <todo />
              <span>Todo List</span>
            </li>
            <li class="flex items-center gap-2">
              <calendar />
              <span>Calendar</span>
            </li>
            <li class="flex items-center gap-2">
              <reminder />
              <span>Reminders</span>
            </li>
            <li class="flex items-center gap-2">
              <planning />
              <span>Planning</span>
            </li>
          </ul>
        </li>

        <!-- Company Dropdown -->
        <li>
          <div
            class="flex items-center justify-between hover:text-almost-black cursor-pointer"
            @click="toggleDropdown('company')"
          >
            <span>Company</span>
            <arrowDown />
          </div>
          <ul
            v-if="dropdowns.company"
            class="mt-2 pl-4 space-y-2 text-base text-gray-500"
          >
            <li><a href="#">History</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </li>

        <li class="hover:text-almost-black">
          <a href="#">Careers</a>
        </li>
        <li class="hover:text-almost-black">
          <a href="#">About</a>
        </li>
      </ul>

      <!-- Login/Register Buttons -->
      <div class="flex flex-col gap-3">
        <button class="hover:text-almost-black">Login</button>
        <button class="border border-black hover:text-almost-black py-2 rounded-xl p-4">Register</button>
      </div>
    </nav>
  </Transition>
</section>


<header class="flex overflow-visible items-center py-10 text-sm text-custom-gray md:px-10 justify-center md:justify-between md:gap-20 gap-24">
    <div class="logo">
      <Logo />
    </div>
    <div class="flex gap-16 relative">

      <!-- Dropdown 1 -->
      <div
        class="flex flex-col gap-3 rounded-xl absolute left-20 top-8 shadow-lg z-10 p-7 bg-white overflow-hidden transition-all duration-300 ease-in-out opacity-0 scale-95"
        :class="{ 'opacity-100 scale-100': dropdown1Visible, 'opacity-0 scale-95': !dropdown1Visible }"
      >
        <div class="flex space-x-3">
          <todo />
          <span>Todo List</span>
        </div>
        <div class="flex space-x-3">
          <calendar />
          <span>Calendar</span>
        </div>
        <div class="flex space-x-3">
          <reminder />
          <span>Reminders</span>
        </div>
        <div class="flex space-x-3">
          <planning />
          <span>Planning</span>
        </div>
      </div>

      <!-- Dropdown 2 -->
      <div
        class="flex flex-col gap-3 rounded-xl absolute left-[270px] top-8 shadow-lg z-10 p-5 bg-white overflow-hidden transition-all duration-300 ease-in-out opacity-0 scale-95"
        :class="{ 'opacity-100 scale-100': dropdown2Visible, 'opacity-0 scale-95': !dropdown2Visible }"
      >
        <span>History</span>
        <span>Our Team</span>
        <span>Blog</span>
      </div>

      <nav class="transition-all">
        <ul class="hidden md:flex items-center gap-12 font-medium">
          <li
            class="flex hover:text-almost-black items-center gap-2 cursor-pointer"
            @mouseover="dropdown1Visible = true"
            @mouseleave="dropdown1Visible = false"
          >
            <a href="#">Features</a>
            <arrowDown />
          </li>
          <li
            class="flex hover:text-almost-black items-center gap-2 cursor-pointer"
            @mouseover="dropdown2Visible = true"
            @mouseleave="dropdown2Visible = false"
          >
            <a href="#">Company</a>
            <arrowDown />
          </li>
          <li class="hover:text-almost-black">
            <a href="#">Careers</a>
          </li>
          <li class="hover:text-almost-black">
            <a href="#">About</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="hidden md:ml-[450px] text-custom-gray md:flex gap-10 items-center">
      <button class="hover:text-almost-black">Login</button>
      <button class="border border-black hover:text-almost-black py-2 rounded-xl p-4">Register</button>
    </div>

    <OpenMenu @click.prevent = "isSidebarVisible = !isSidebarVisible" />
  </header>

  <main class="flex flex-col-reverse md:gap-0 gap-10 md:flex-row items-center justify-center space-x-0 md:space-x-40 px-40">
    <div class="flex flex-col gap-5 w-auto">
      <div class="flex flex-col md:items-start items-center md:gap-10 gap-5">
        <h1 class="md:text-6xl text-3xl font-bold text-almost-black">Make <br class="hidden md:block"> remote work</h1>
        <p class="md:w-96 w-72 font-medium md:text-left text-center text-custom-gray">Get your team in sync, no matter your location. Strealine processes, create team rituals, and watch productivity soar.</p>
        <button class="transition-colors bg-gray-black hover:bg-transparent hover:text-almost-black border hover:border-black text-white py-3 px-6 rounded-xl font-semibold">Learn more</button>
      </div>
      <div class="flex items-center justify-center space-x-4 md:space-x-6 lg:space-x-10 md:flex-nowrap flex-wrap">
        <databiz />
        <audiophile />
        <meet />
        <maker />
      </div>
    </div>
    <div class="md:w-auto w-72 flex justify-center">
      <img :src="hero" alt="Hero image" />
    </div>
  </main>
</template>


<style scoped>
/* Sidebar slide-in transition */
.slide-in-enter-active,
.slide-in-leave-active {
  transition: transform 0.3s ease;
}
.slide-in-enter-from {
  transform: translateX(-100%);
}
.slide-in-leave-to {
  transform: translateX(-100%);
}

</style>
