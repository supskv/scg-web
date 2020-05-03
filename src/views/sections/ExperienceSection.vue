<template>
<div>
  <dot-property-section />
  <freelance-section />
</div>
</template>

<script>
import DotPropertySection from '@/views/sections/DotPropertySection.vue'
import FreelanceSection from '@/views/sections/FreelanceSection.vue'

export default {
  name: 'experience-section',
  components: {
    DotPropertySection,
    FreelanceSection
  },
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .img-about {
    border-radius: 8px;
    width: 100%;
    box-shadow: 0 25px 65px rgba(0, 0, 0, 0.1);
  }
  h2 {
    font-size: 60px;
    font-weight: 700;
    font-family: Poppins, sans-serif;
    line-height: 1.4074;
  }
  @media (max-width: 768px) {
    h2 {
      margin-top: 10px;
      font-size: 36px;
    }
  }
</style>
