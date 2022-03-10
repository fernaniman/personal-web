<template>
    <section class="px-8 font-bold text-white">
        <h2 id="projects" class="mb-16 text-2xl text-center md:text-4xl">Projects</h2>
        <div class="justify-center space-y-8 md:space-y-0 md:space-x-8 md:flex" >
          <item-project v-for="(project,index) in getProjects" :key="index" :title="project.name" :description="project.description" :imageUrl="project.image_url" :id="project.id"/>
        </div>
    </section>
</template>

<script>
import projectMixin from '@/mixins/project';
import project from './Projects.vue';

export default {
  name: 'ProjectDetail',
  components: { project },
  mixins: [projectMixin],
};
</script>
