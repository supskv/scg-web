<template>
  <b-navbar type="dark" sticky toggleable="md" class="pb-md-0 pb-2">
    <b-navbar-brand to="/">DOSCG</b-navbar-brand>
    <b-navbar-toggle target="navbar-toggle-collapse"> </b-navbar-toggle>
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
  name: "navbar-horizontal",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navbar {
  background: #191919 !important;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
>>> .nav-item {
  position: relative;
  &:first-child {
    margin-left: 0;
  }
}
>>> .nav-link {
  color: #fff !important;
  font-size: 16px;
  font-weight: 500;
  padding: 20px 0;
  text-decoration: none;
  display: inline-block;
  &.router-link-active {
    color: #f9004d !important;
    &::after {
      width: 100%;
    }
  }
  &::after {
    position: absolute;
    content: "";
    left: 0;
    bottom: 0;
    width: 0;
    height: 3px;
    background: #f9004d;
    transition: 0.3s;
    -webkit-transition: 0.3s;
  }
}
</style>
