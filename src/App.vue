<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  /*margin-top: 60px;*/
  background: #101010;
}
*,
:after,
:before {
  box-sizing: border-box;
}
h3 {
  font-size: 24px;
}
p {
  font-weight: 300;
  font-size: 18px;
  line-height: 30px;
  color: rgba(198, 201, 216, 0.75);
}
@media (max-width: 768px) {
  p {
    font-size: 18px;
    line-height: 30px;
  }
}
</style>
