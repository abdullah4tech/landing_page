<script setup lang='ts'>
import Logo from '@/assets/logo.svg';
import arrowUp from '@/assets/icon-arrow-up.svg';
import arrowDown from '@/assets/icon-arrow-down.svg';
import databiz from '@/assets/client-databiz.svg';
import audiophile from '@/assets/client-audiophile.svg';
import meet from '@/assets/client-meet.svg';
import maker from '@/assets/client-maker.svg';
</script>


<template>
  <header class="flex py-10 text-sm text-custom-gray px-10 justify-between gap-20">
    <div class="flex gap-16">
      <div class="logo">
        <Logo />
      </div>
      <nav>
        <ul class="flex items-center gap-12 font-medium">
          <li class="flex items-center gap-2 cursor-pointer">
            <a href="#">Features</a>
            <arrowDown />
          </li>
          <li class="flex items-center gap-2 cursor-pointer">
            <a href="#">Company</a>
            <arrowDown />
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="ml-[450px] text-custom-gray flex gap-10 items-center">
      <button>Login</button>
      <button class="border border-black py-2 rounded-xl p-4">Register</button>
    </div>
    <div class="hamburger-menu">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </header>

  <main>
    <div>
      <div>
        <h1>Make remote work</h1>
        <p>Get your team in sync, no matter your location. Strealine processes, create team rituals, and watch productivity soar.</p>
        <button>Learn more</button>
      </div>
      <div>

      </div>
    </div>
  </main>
</template>
