<template>
<div class="about-wrapper">
  <b-container fluid="sm" class="pt-5 pb-5">
    <b-row>
      <b-col cols="12" md="5">
        <img src="../../assets/mark_1.jpg" class="img-about" />
      </b-col>
      <b-col cols="12" md="7" class="pt-lg-5">
        <h2>About Me</h2>
        <p>
          I am a full stack developer with focus on software applications,
          algorithms, development, clean code and ux/ui design.
          Although I have a low vision problem but cannot stop me professional!
        </p>
        <div>
          <b-tabs content-class="mt-3">
            <b-tab title="Main Skills" active>
              <div class="single-tab-content">
                <ul>
                  <li>
                    <a href="#">
                      Improve algorithms <span> - Laravel, ExpressJS, MySQL</span>
                    </a>
                    Query, optimization, ...
                  </li>
                  <li>
                    <a href="#">
                      Web and user interface design <span> - VueJS, NextJS, CSS</span>
                    </a>
                    Websites, web experiences, ...
                  </li>
                </ul>
              </div>
            </b-tab>
            <b-tab title="Experience">
              <div class="single-tab-content">
                <ul>
                  <li>
                    <a href="https://www.dotproperty.co.th" target="__blank">
                      Full Stack Developer <span> - DotProperty</span>
                    </a>
                    2019 - Current
                  </li>
                  <li>
                    <a href="#">
                      Full Stack Developer <span> - Freelance</span>
                    </a>
                    2018 - 2019
                  </li>
                  <li>
                    <a href="https://www.summitthai.com/" target="__blank">
                      Back-end Developer (Intern.) <span> - Summit Computer</span>
                    </a>
                    2018 - 2018
                  </li>
                </ul>
              </div>
            </b-tab>
            <b-tab title="Education">
              <div class="single-tab-content">
                <ul>
                  <li>
                    <a href="https://www.ku.ac.th/" target="__blank">
                      Computer Science (GPA 3.01) <span> - Kasetsart University</span>
                    </a>
                    2019
                  </li>
                  <li>
                    <a href="#">
                      Develop front-end with ReactJS <span> - Certificate</span>
                    </a>
                    2018
                  </li>
                  <li>
                    <a href="#">
                      KU Startup Boost Camp <span> - Kasetsart Certificate</span>
                    </a>
                    2018
                  </li>
                </ul>
              </div>
            </b-tab>
          </b-tabs>
        </div>
      </b-col>
    </b-row>
  </b-container>
</div>
</template>

<script>
export default {
  name: 'about-section',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .about-wrapper {
    background: #191919;
  }
  .img-about {
    border-radius: 8px;
    width: 100%;
    box-shadow: 0 25px 65px rgba(0, 0, 0, 0.1);
  }
  >>> .nav-tabs {
    border: none;
  }
  >>> .nav-link {
    color: #fff;
    padding: 0;
    position: relative;
    margin: 0 20px;
    display: inline-block;
    padding-bottom: 4px;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    outline: none;
    &.active {
      color: #f9004d;
      background: transparent;
      border: none;
      &::before {
        width: 0;
      }
      &::after {
        width: 100%;
      }
    }
    &:first-child {
      margin-left: 0;
    }
    &:hover {
      border: none;
    }
    &::before {
      position: absolute;
      content: "";
      width: 30px;
      background: #fff;
      -webkit-transition: all 0.7s cubic-bezier(0.19, 1, 0.22, 1) 0s;
      transition: all 0.7s cubic-bezier(0.19, 1, 0.22, 1) 0s;
      height: 2px;
      bottom: 0;
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
    p {
      font-size: 18px;
      line-height: 30px;
    }
  }
  .single-tab-content {
    & ul {
      padding: 0;
      margin: 0;
      list-style: none;
      & li {
        color: #7e7e7e;
        font-size: 16px;
        line-height: inherit;
        margin-bottom: 15px;
        font-weight: 300;
        & a {
          color: rgba(198,201,216,.75);
          font-weight: 500;
          display: block;
          text-decoration: none;
          & span {
            font-weight: 300;
          }
        }
      }
    }
  }
</style>
