<template>
  <div>
    <about-section />
    <experience-section />
  </div>
</template>

<script>
import AboutSection from '@/views/sections/AboutSection.vue'
import ExperienceSection from '@/views/sections/ExperienceSection.vue'

export default {
  name: 'portfolio',
  components: {
    AboutSection,
    ExperienceSection
  },
  data () {
    return {
      msg: 'Welcome to Your Portfolio Page'
    }
  }
}
</script>
