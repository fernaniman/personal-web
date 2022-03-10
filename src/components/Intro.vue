<template>
    <section class="items-center justify-around pt-40 mx-8 text-white md:flex home ">
        <div class="ml-4 text-center">
            <center><img src="./../assets/images/photo.jpeg" alt="My-photo" class="pb-8 px-7" height="100" width="150"></center>
            <h2 class="text-lg font-bold md:text-3xl">{{getProfile.name}} </h2>
            <h3 class="pt-3 sm:text-base md:text-2xl">{{getProfile.job}}</h3>
        </div>
    </section>
</template>

<script>
import profileMixin from '@/mixins/profile';

export default {
  name: 'home',
  mixins: [profileMixin],
};
</script>
