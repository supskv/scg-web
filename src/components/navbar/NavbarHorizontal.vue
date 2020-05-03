<template>
  <b-navbar type="dark" sticky toggleable="md">
    <b-navbar-brand to="/">DOSCG</b-navbar-brand>
    <b-navbar-toggle target="navbar-toggle-collapse">
    </b-navbar-toggle>
    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/DOSCG/function">XYZ</b-nav-item>
        <b-nav-item to="/DOSCG/functionabc">ABC</b-nav-item>
        <b-nav-item to="/DOSCG/googlemap">Google Map</b-nav-item>
        <b-nav-item to="/DOSCG/portfolio">CV</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'navbar-horizontal',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navbar {
    /*padding-left: 50px;*/
    /*padding-right: 50px;*/
    background: #191919 !important;
    box-shadow: 0 0 10px rgba(0,0,0,.1);
  }
</style>
