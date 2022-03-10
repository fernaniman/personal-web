<template>
    <section class="items-center content-center font-bold text-white md:mx-28">
        <h2 id="aboutme" class="text-lg text-center md:text-4xl ">About me</h2>
        <div class="items-center mt-8 align-middle md:flex">
            <div class="mx-8 mt-8 text-left md:ml-14">
                <h4 class="text-sm md:text-lg">{{getProfile.overview}}</h4>
            </div>
        </div>
    </section>
</template>

<script>
import profileMixin from '@/mixins/profile';

export default {
  name: 'about',
  mixins: [profileMixin],
};

</script>
