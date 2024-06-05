<template>

  <div class="max-w-7xl mx-auto flex flex-col relative">
  <nav class="max-w-7xl px-5 md:fixed top-0 z-[98] w-screen backdrop-blur-md bg-custom-background bg-opacity-80 py-4">
    <div class="container mx-auto flex flex-wrap items-center justify-between">
      <button @click="redirectToHome" class="flex">
        <span class="self-center text-xl text-custom-color font-semibold whitespace-nowrap fadein-bot hover:text-white">nishthaDalvi();</span>
      </button>
      <div class="flex md:order-2 fadein-bot">
        <a href="https://github.com/nishthadalvi"><img class="w-9 rounded-full" src="https://seeklogo.com/images/G/github-logo-2E3852456C-seeklogo.com.png" alt="github"></a>
      </div>
      <div class="hidden md:flex justify-between items-center w-full md:w-auto md:order-1" id="mobile-menu-3">
        <ul class="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
          <li>
            <router-link to="/"
              class="fadein-bot text-xl text-custom-color md:border-0 block pl-3 pr-4 py-2 md:hover:text-white md:p-0"
              aria-current="page">Home</router-link>
          </li>
          <li>
            <router-link to="/about"
              class="fadein-bot text-xl fadein-1 text-custom-color md:border-0 block pl-3 pr-4 py-2 md:hover:text-white md:p-0">About</router-link>
          </li>
          <li>
            <router-link to="/portfolio"
              class="fadein-bot text-xl fadein-1 text-custom-color md:border-0 block pl-3 pr-4 py-2 md:hover:text-white md:p-0">Portfolio</router-link>
          </li>
          <li>
          <router-link to="/contact"
              class="fadein-bot text-xl fadein-1 text-custom-color md:border-0 block pl-3 pr-4 py-2 md:hover:text-white md:p-0">Contact</router-link>
          </li>
          <li>
          <router-link to="/coffee"
              class="fadein-bot text-xl fadein-1 text-custom-color md:border-0 block pl-3 pr-4 py-2 md:hover:text-white md:p-0">Coffee Recs</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="md:mt-[100px]">
    <router-view />
  </div>

  <main class="flex flex-col md:flex-row gap-8 items-center justify-center min-h-screen bg-custom-background p-4">
    <div class="space-y-2 text-center md:text-center px-10">
      <p class="text-2xl text-custom-color">Hello World, I'm</p>
      <h1 class="text-4xl font-bold md:text-5xl text-white fadein-up">Nishtha Dalvi</h1>
      <div class="py-2">
        <h1 class="typewrite text-xl font-semibold bg-clip-text text-custom-color md:text-2xl fadein-up" ref="typewriter">
          <span class="wrap">{{ txt }}</span>
        </h1>
      </div>
      <p class="text-xl text-white fade-in-from-left">Welcome to my personal website. <span class="wave">👋🏼</span></p>
    </div>
    <div class="flex justify-center fadein-right">
      <img alt="profile-picture" fetchpriority="high" class="profile-picture" :src='"/img/profile-picture.png"' />
    </div>
  </main>

  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      toRotate: ["Software Engineer 💻", "ECE/Math Student 📚", "Coffee Enthusiast ☕️"],
      period: 2000,
      txt: '',
      loopNum: 0,
      isDeleting: false,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.tick();
    });
  },
  methods: {
    tick() {
      let typewriter = this.$refs.typewriter;

      if (!typewriter) {
        return;
      }

      let i = this.loopNum % this.toRotate.length;
      let fullTxt = this.toRotate[i];

      this.txt = this.isDeleting ? fullTxt.substring(0, this.txt.length - 1) : fullTxt.substring(0, this.txt.length + 1);
      typewriter.innerHTML = `<span class="wrap">${this.txt}</span>`;

      let that = this;
      let delta = 200 - Math.random() * 100;

      if (this.isDeleting) {
        delta /= 2;
      }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }

      setTimeout(() => {
        that.tick();
      }, delta);
    },
  }
}
</script>

<style>
body, html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 100%;
  background: rgb(236, 224, 209);
}

.bg-custom-background {
  background-color: rgb(236, 224, 209);
}

.text-custom-color {
  color: rgb(150, 114, 89);
}

body {
  overflow-y: scroll;
  overflow-x: hidden;
}

.typewrite>.wrap {
  border-right: 0.08em solid #fff;
}

.wave {
  animation-name: wave-animation;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
}

@keyframes wave-animation {
  0% {
    transform: rotate(0deg);
  }

  10% {
    transform: rotate(14deg);
  }

  20% {
    transform: rotate(-8deg);
  }

  30% {
    transform: rotate(14deg);
  }

  40% {
    transform: rotate(-4deg);
  }

  50% {
    transform: rotate(10deg);
  }

  60% {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(0deg);
  }
}

.profile-picture {
  width: 350px; 
  height: 350px;
  border-radius: 50%;
  border: 4px solid #967259;
  object-fit: cover;
  box-shadow: 0px 0px 73px -9px rgba(255,219,112,0.44);
  -webkit-box-shadow: 0px 0px 73px -9px rgba(255,219,112,0.44);
  -moz-box-shadow: 0px 0px 73px -9px rgba(255,219,112,0.44);
}

.fadein-up {
  opacity: 0;
  animation-name: fadeInUp;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-delay: 500ms;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.fade-in-from-left {
  opacity: 0;
  animation: fadeInLeft 0.5s ease-out forwards;
  animation-delay: 500ms;
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.fadein-right {
  opacity: 0;
  animation: fadeInRight 0.5s ease-out forwards;
  animation-delay: 500ms;
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.fadein-bot {
  opacity: 0;
  animation: fadeInBot 0.5s forwards;
}

@keyframes fadeInBot {
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.fadein-1 {
  animation-delay: 200ms;
}

.fadein-2 {
  animation-delay: 400ms;
}

.fadein-3 {
  animation-delay: 600ms;
}

.fade-500 {
  animation-delay: 500ms;
}
</style>