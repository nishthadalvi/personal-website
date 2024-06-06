<template>
<div class="max-w-7xl mx-auto flex flex-col relative">
    <nav class="max-w-7xl px-5 md:fixed top-0 z-[98] w-screen backdrop-blur-md bg-custom-background bg-opacity-80 py-4">
    <div class="container mx-auto flex flex-wrap items-center justify-between">
      <button class="flex">
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

    <div class="container mx-auto p-3 md:p-8">
      <div class="flex flex-col-reverse md:flex-row relative">
        <div class="w-full md:w-2/3">
          <div class="flex flex-col gap-4 md:px-20 fade-zoom-up">
            <article v-for="article in articles" :key="article.id">
              <router-link :to="`/read/${article.slug}/${article.id}`" class="flex w-full bg-[#1e1e1f] border-[#383838] rounded-xl text-left text-white p-5 md:py-7 md:px-8 cursor-pointer hover:bg-[#282828] items-center">
                <div class="w-full pr-4">
                  <div class="text-xs mb-1 text-slate-400 flex items-center italic">
                    <div class="h-[1px] w-20 bg-amber-200 md:w-5 aos-init aos-animate mr-2"></div> {{ article.date }}
                  </div>
                  <h1 class="text-sm md:text-md text-amber-200 font-bold mb-2 paraf">{{ article.title }}</h1>
                  <div class="text-sm hidden md:block paraf">{{ article.desc }}</div>
                </div>
                <div>
                  <div class="w-20 h-20 md:w-28 flex items-center md:h-28">
                    <img :src="article.image" class="rounded-lg md:rounded-xl" alt="">
                  </div>
                </div>
              </router-link>
            </article>
          </div>
        </div>
        <div class="w-full md:w-1/3 h-fit p-8 md:sticky md:top-24">
          <!-- Sidebar -->
          <div class="flex flex-col text-left">
            <div class="bg-clip-text bg-gradient-to-r from-slate-100 to-amber-300 text-transparent">Let's share experiences,
              stories, and knowledge together.
            </div>
            <div class="h-[1px] mt-7 mb-7 w-20 bg-amber-200 aos-init aos-animate mr-2"></div>
            <div class="hidden md:block">
              <div class="text-white text-md font-semibold">Topics</div>
              <div class="mt-3 flex flex-wrap gap-1">
                <span
                  class="py-2 px-3 rounded-2xl bg-[#1e1e1f] hover:bg-white/20 text-white text-xs cursor-pointer">NodeJS</span>
                <span
                  class="py-2 px-3 rounded-2xl bg-[#1e1e1f] hover:bg-white/20 text-white text-xs cursor-pointer">Technology</span>
              </div>
              <!-- <div class="h-[1px] mt-7 mb-7 w-20 bg-amber-200 aos-init aos-animate mr-2"></div>
              <div class="text-white text-md font-semibold">Popular Articles</div> -->
  
            </div>
          </div>
        </div>
      </div>
    </div>
    <ArticleList />
</div>
  </template>
    
  <script>
  import ArticleList from '@/components/ArticleList.vue';
  import axios from "axios";
  export default {
    data() {
      return {
        articles: []
      }
    },
    components: {
      ArticleList
    },
    mounted() {
      this.getArticles();
    },
    methods: {
      async getArticles() {
        axios.get('https://64a38c9cc3b509573b564183.mockapi.io/api/blog/all')
          .then(response => {
            this.articles = response.data;
          })
      },
  
    }
  }
  
  </script>
  
  <style scoped>
  .paraf {
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  @media (min-width: 768px) { 
    .paraf {
      display: -webkit-box;
    }
  }
  @keyframes fadeZoomUp {
    0% {
      opacity: 0;
      transform: scale(0.5);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
  .fade-zoom-up {
    animation: fadeZoomUp 1s ease-in-out;
    /* animation-delay: 1000ms; */
  }
  </style>