<template>
  <b-container fluid="sm" class="pt-5 pb-5">
    <b-row>
      <b-col cols="12">
        <h3>DOT PROPERTY</h3>
        <p>
          My position is Full Stack Developer, prefer in Backend.
          They use Laravel, VueJS and React Native.
          There are six developers for it-team but powerful.
          Agile Methodology is on top whole projects and English for communication.
        </p>
      </b-col>
      <b-col cols="12">
        <img src="../../assets/dotproperty_home.png" class="img-about" />
      </b-col>
    </b-row>
    <b-row class="mt-5 mb-md-5">
      <b-col cols="12" md="6">
        <b-row>
          <b-col class="text-center text-lg-left">
            <img src="../../assets/mysql_logo.png" class="w-auto" height="100px" />
          </b-col>
          <b-col class="text-center text-lg-left">
            <img src="../../assets/laravel_logo.png" class="w-auto" height="100px" />
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="12" md="6" class="mt-3 mt-md-0">
        <p>
          Mostly, I responsible for query improvement and backend tasks.
          And also can make beautiful UX/UI design like a filter or responsive on website.
        </p>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
        <img src="../../assets/dotproperty_search_page.png" class="img-about" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'dotproperty-section',
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
