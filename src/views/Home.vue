<template>
  <intro/>
  <div class="mt-20 md:mt-40"/>
  <about-me/>
  <div class="mt-20 md:mt-40"/>
  <projects />
  <div class="mt-20 md:mt-40"/>
  <contact-me/>
</template>

<script>
// @ is an alias to /src
import Intro from '@/components/Intro.vue';
import AboutMe from '@/components/AboutMe.vue';
import Projects from '@/components/Projects.vue';
import ContactMe from '@/components/ContactMe.vue';

export default {
  name: 'Home',
  components: {
    Intro,
    AboutMe,
    Projects,
    ContactMe,
  },
};
</script>
