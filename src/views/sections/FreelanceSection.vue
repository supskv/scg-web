<template>
<div class="freelance-wrapper">
  <b-container fluid="sm" class="pt-5 pb-5">
    <b-row>
      <b-col cols="12">
        <h3>FREELANCE</h3>
        <p>
          This is the biggest opportunity to begin in Web Development.
          We start just two persons, but it is interesting because of made us understand and learn new thing.
          There are many projects in there, So I’d like to include all projects in one section.
          Also, I’m a Full Stack Developer. Whole projects use Laravel as the main framework.
        </p>
      </b-col>
      <b-col cols="12" md="3">
        <span>Trendy home</span>
      </b-col>
      <b-col cols="12" md="9">
        <p>
          Good so let’s start with this project because the website has a unique design, so We cannot use frontend library like Bootstrap.
          Therefore We have to use pure CSS but no worries we expert in that.
        </p>
      </b-col>
      <b-col cols="12" md="3">
        <span>Singha Project</span>
      </b-col>
      <b-col cols="12" md="9">
        <p>
          This project about management members in the golf course.
          We use Bootstrap for front-end.
          It easy to develop and beautiful design.
          Also made it in around a month!
        </p>
      </b-col>
      <b-col cols="12" md="6">
        <img src="../../assets/singha_user.png" class="img-about mt-3" />
      </b-col>
      <b-col cols="12" md="6">
        <img src="../../assets/trendyhome_home.png" class="img-about mt-3" />
      </b-col>
      <b-col cols="12">
        <img src="../../assets/trendyhome_structure.png" class="img-about mt-3" />
      </b-col>
    </b-row>
    <b-row class="text-center mb-5">
      <b-col class="d-flex align-items-center justify-content-center mt-5">
        <img src="../../assets/trendyhome_logo.png" class="w-auto" height="50px" />
      </b-col>
      <b-col class="d-flex align-items-center justify-content-center mt-5">
        <img src="../../assets/singha_logo.jpg" class="w-auto" height="100px" />
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" md="3">
        <span>O2E</span>
      </b-col>
      <b-col cols="12" md="9">
        <p>
          Admin dashboard only, There are a lot of complex calculations and processing.
          It quite hard because calculations should not error and many form input type, but it still on our hands.
          moreover, We have to connect with another client site.
        </p>
      </b-col>
      <b-col cols="12" md="3">
        <span>Taxiwell</span>
      </b-col>
      <b-col cols="12" md="9">
        <p>
          Taxi management and monitor by admin.
          It’s similar O2E but fewer calculations and processing.
          Also, It’s the first freelance project for us.
        </p>
      </b-col>
      <b-col cols="12">
        <img src="../../assets/o2e_dashboard.png" class="img-about mt-3" />
      </b-col>
      <b-col cols="12">
        <img src="../../assets/taxiwel_dashboard.png" class="img-about mt-3" />
      </b-col>
    </b-row>
  </b-container>
</div>
</template>

<script>
export default {
  name: 'freelance-section',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .freelance-wrapper {
    background: #191919;
  }
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
