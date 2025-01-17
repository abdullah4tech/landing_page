<script setup lang='ts'>
import { ref } from 'vue'
import Logo from '@/assets/logo.svg';
import arrowUp from '@/assets/icon-arrow-up.svg';
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


const dropdown1Visible = ref(false);
const dropdown2Visible = ref(false);
</script>


<template>
<header class="flex py-10 text-sm text-custom-gray px-10 justify-between gap-20">
    <div class="flex gap-16 relative">
      <div class="logo">
        <Logo />
      </div>

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
        <ul class="flex items-center gap-12 font-medium">
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
    <div class="ml-[450px] text-custom-gray flex gap-10 items-center">
      <button class="hover:text-almost-black">Login</button>
      <button class="border border-black hover:text-almost-black py-2 rounded-xl p-4">Register</button>
    </div>
    <div class="hamburger-menu">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </header>

  <main class="flex items-end space-x-40 px-40">
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start gap-10">
        <h1 class="text-6xl font-bold text-almost-black">Make <br> remote work</h1>
        <p class="w-96 font-medium text-custom-gray">Get your team in sync, no matter your location. Strealine processes, create team rituals, and watch productivity soar.</p>
        <button class="transition-colors bg-gray-black hover:bg-transparent hover:text-almost-black border hover:border-black text-white py-3 px-6 rounded-xl font-semibold">Learn more</button>
      </div>
      <div class="flex items-center pt-10 space-x-10">
        <databiz />
        <audiophile />
        <meet />
        <maker />
      </div>
    </div>
    <div class="w-[35%]">
      <img :src="hero" alt="Hero image" />
    </div>
  </main>
</template>
