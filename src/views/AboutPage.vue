<script>
export default {
  data() {
    return {
      activeTab: 1,
      tech: [
        {
          id: 1,
          name: 'Java',
          imageUrl: '/img/001-java.png',
          status: 'Advanced'
        },
        {
          id: 2,
          name: 'Python',
          imageUrl: '/img/002-python.png',
          status: 'Intermediate'
        },
        {
          id: 3,
          name: 'C++',
          imageUrl: '/img/003-c.png',
          status: 'Advanced'
        },
        {
          id: 4,
          name: 'C',
          imageUrl: '/img/004-letter-c.png',
          status: 'Intermediate'
        },
        {
          id: 5,
          name: 'HTML',
          imageUrl: '/img/006-html.png',
          status: 'Advanced'
        },
        {
          id: 6,
          name: 'CSS',
          imageUrl: '/img/007-css-3.png',
          status: 'Advanced'
        },
        {
          id: 7,
          name: 'ReactJS',
          imageUrl: '/img/008-science.png',
          status: 'Intermediate'
        },
        {
          id: 8,
          name: 'NodeJS',
          imageUrl: '/img/009-programing.png',
          status: 'Advanced'
        },
        {
          id: 9,
          name: 'R',
          imageUrl: '/img/010-r.png',
          status: 'Beginner'
        },
        {
          id: 10,
          name: 'Javascript',
          imageUrl: '/img/011-js.png',
          status: 'Advanced'
        },
        {
          id: 11,
          name: 'Bootstrap',
          imageUrl: 'https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png',
          status: 'Intermediate'
        }
      ],
      tools: [
        {
          id: 1,
          name: 'Git',
          imageUrl: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
          status: 'Version Control'
        },
        {
          id: 2,
          name: 'GitHub',
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
          status: 'Git Hosting'
        },
        {
          id: 3,
          name: 'NPM',
          imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-npm-3-1175132.png',
          status: 'Package Manager'
        },
        {
          id: 4,
          name: 'MySQL',
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/5968/5968313.png',
          status: 'Database'
        },
        {
          id: 5,
          name: 'Docker',
          imageUrl: '/img/012-docker.png',
          status: 'Containerization'
        },
        {
          id: 6,
          name: 'Linux',
          imageUrl: '/img/013-linux-logo.png',
        },
        {
          id: 7,
          name: 'AWS',
          imageUrl: '/img/014-aws.png',
          status: 'Cloud Services'
        },
        {
          id: 8,
          name: 'MongoDB',
          imageUrl: '/img/015-database-storage.png',
          status: 'Database'
        }
      ]
    };
  }
}
</script>
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

  <div class="bg-[#dbc1ac] px-5 py-5 md:px-12 md:py-10 text-left border border-[#383838] rounded-3xl text-amber-50 mx-3 mb-5">
      <article data-page="about">
        <header>
          <div class="text-2xl font-bold text-white mb-5 fadein-bot title-section flex items-center">
            Spilling the Beans... About Me!&nbsp;
            <div class="h-[1px] w-32 bg-[#e5ceb7] md:w-96 aos-init aos-animate" data-aos="zoom-in-left" data-aos-duration="600"></div>
          </div>
        </header>
        <section class="text-sm md:text-lg text-justify flex flex-col gap-4 md:flex-row md:gap-8 md:justify-left md:items-center">
          <div class="flex justify-center">
          <img class="w-9/12 rounded-full mb-3 fadein-up border-4px"
            src="img/profile-picture.png" alt="Foto">
        </div>
          <div class="md:w-12/12">
            <p class="mb-3 md:mb-7 fadein-left fadeins-1">
              Hi! My name is Nishtha Dalvi, and I'm a senior at UT Austin, pursuing a double major in Electrical and Computer Engineering Honors 
              with a focus on Software Engineering, and Mathematics. Additionally, I am minoring in Business Administration. I have interned at 
              Boeing on the 737 line, where I programmed test carts for functional plane tests, and this summer, I am a Software Engineering intern
              at Cisco on the CX Cloud Risk Mitigation Check team.
            </p>
            <p class="mb-3 fadein-left fadeins-2">
              At UT Austin, I serve as the Corporate and Conference Chair for UT Women in ECE. I'm deeply passionate about promoting women in tech 
              and advocating for diversity and inclusion in the engineering field. I believe in empowering women to develop their skills and confidence 
              at any stage of their careers, and I'm dedicated to creating opportunities and supportive environments for underrepresented groups in STEM.
              Beyond academics and work, I enjoy cooking, landscape photography, and exploring unique coffee and matcha spots. I'm always eager to connect 
              and chat, so feel free to reach out!
            </p>
          </div>
        </section>
      </article>
    </div>

  <div class="px-5 py-5 md:px-12 md:py-10 text-left text-amber-50 mx-3">
    <article data-page="about">
      <header>
        <div class="text-2xl font-bold text-white mb-5 fadein-bot title-section flex items-center">
          <div class="h-[1px] w-10 bg-[#563517] md:w-20 aos-init aos-animate" data-aos="zoom-in-left"
            data-aos-duration="600"></div>
          &nbsp; Skills
        </div>
      </header>
      <section>
        <div>
          <ul class="flex flex-wrap text-md font-medium text-center text-[#dbc1ac] dark:text-[#dbc1ac] mb-5">
            <li class="mr-2">
              <button class="inline-block px-4 py-3 rounded-lg hover:text-[#563517]"
                :class="{ 'text-[#563517] bg-[#563517] bg-opacity-10': activeTab === 1 }" @click="activeTab = 1">Tech Stack</button>
            </li>
            <li class="mr-2">
              <button class="inline-block px-4 py-3 rounded-lg hover:text-[#563517]"
                :class="{ 'text-[#563517] bg-[#563517] bg-opacity-10': activeTab === 2 }" @click="activeTab = 2">Tools</button>
            </li>
          </ul>
        </div>
        <div v-show="activeTab === 1">
          <div class="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12">
            <div v-for="item in tech" :key="item.id">
              <div
                class="item-tech flex cursor-pointer items-center gap-2 rounded border border-[#563517] px-2 py-2 hover:bg-[#563517] hover:bg-opacity-10 md:gap-3 lg:px-3">
                <div class="flex h-12 w-12 items-center justify-center p-0 lg:h-16 lg:w-16 lg:p-2 zoom-in">
                  <img alt="HTML" loading="lazy" width="32" height="32" decoding="async" data-nimg="1"
                    class="img-tech drop-shadow-xl transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]  "
                    :src="item.imageUrl" style="color: transparent;">
                </div>
                <div class="flex items-center text-sm md:text-base lg:text-lg text-[#563517]">
                  <div class="tech font-medium text-secondary transition-all duration-300 translate-y-0 ">{{ item.name }}
                  </div>
                  <div
                    class="status-tech opacity-0 absolute mt-5 text-[10px] text-[#967259] transition-all duration-300 md:text-xs lg:text-sm">
                    {{ item.status }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-show="activeTab === 2">
          <div class="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12">
            <div v-for="item in tools" :key="item.id">
              <div
                class="item-tech flex cursor-pointer items-center gap-2 rounded border border-[#563517] px-2 py-2 hover:bg-[#563517] hover:bg-opacity-10 md:gap-3 lg:px-3">
                <div class="flex h-12 w-12 items-center justify-center p-0 lg:h-16 lg:w-16 lg:p-2 zoom-in">
                  <img alt="HTML" loading="lazy" width="32" height="32" decoding="async" data-nimg="1"
                    class="img-tech drop-shadow-xl transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]  "
                    :src="item.imageUrl" style="color: transparent;">
                </div>
                <div class="flex items-center text-sm md:text-base lg:text-lg text-[#563517]">
                  <div class="tech font-medium text-secondary transition-all duration-300 translate-y-0 ">{{ item.name }}
                  </div>
                  <div
                    class="status-tech opacity-0 absolute mt-5 text-[10px] text-[#967259] transition-all duration-300 md:text-xs lg:text-sm">
                    {{ item.status }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  </div>
</div>
</template>

<style>
.fadein-left {
  opacity: 0;
  animation: fadeInLeft 0.5s ease-out forwards;
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.fadeins-1 {
  animation-delay: 500ms;
}

.fadeins-2 {
  animation-delay: 800ms;
}

.img-tech,
.tech {
  transition: transform 0.3s ease;
}

.item-tech:hover .img-tech {
  transform: scale(1.3);
}

.item-tech:hover .tech {
  transform: translateY(-12px);
}

.item-tech:hover .status-tech {
  opacity: 1;
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

</style>