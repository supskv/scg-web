<template>
  <div class="footer-wrapper">
    <span class="copy-right">{{ msg }}</span>
  </div>
</template>

<script>
export default {
  name: 'footer-horizontal',
  data () {
    return {
      msg: 'Copyright © 2020 Suphawich. All Rights Reserved.'
    }
  }
}
</script>

<style scoped>
  .footer-wrapper {
    padding: 30px 0;
    text-align: center;
  }
  .copy-right {
    font-size: 10px;
  }
</style>
