<script setup lang='ts'>
import Logo from '@/assets/logo.svg';
import arrowUp from '@/assets/icon-arrow-up.svg';
import arrowDown from '@/assets/icon-arrow-down.svg';
import databiz from '@/assets/client-databiz.svg';
import audiophile from '@/assets/client-audiophile.svg';
import meet from '@/assets/client-meet.svg';
import maker from '@/assets/client-maker.svg';
import hero from '@/assets/image-hero-desktop.png';
</script>


<template>
  <header class="flex py-10 text-sm text-custom-gray px-10 justify-between gap-20">
    <div class="flex gap-16">
      <div class="logo">
        <Logo />
      </div>
      <nav class="transition-all">
        <ul class="flex items-center gap-12 font-medium">
          <li class="flex hover:text-almost-black items-center gap-2 cursor-pointer">
            <a href="#">Features</a>
            <arrowDown />
          </li>
          <li class="flex hover:text-almost-black items-center gap-2 cursor-pointer">
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

  <main class="flex items-center space-x-40 px-40">
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start gap-10">
        <h1 class="text-6xl font-bold text-almost-black">Make <br> remote work</h1>
        <p class="w-96 font-medium text-custom-gray">Get your team in sync, no matter your location. Strealine processes, create team rituals, and watch productivity soar.</p>
        <button class="transition-colors bg-gray-black hover:bg-transparent hover:text-almost-black border hover:border-black text-white py-3 px-6 rounded-xl">Learn more</button>
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
