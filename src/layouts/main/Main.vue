<template>
  <div>
    <navbar-horizontal />
    <div class="content-wrapper">
      <router-view></router-view>
    </div>
    <footer-horizontal />
  </div>
</template>

<script>
import NavbarHorizontal from '@/components/navbar/NavbarHorizontal.vue'
import FooterHorizontal from '@/components/footer/FooterHorizontal.vue'

export default {
  components: {
    NavbarHorizontal,
    FooterHorizontal
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
