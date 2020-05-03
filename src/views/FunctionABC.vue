<template>
  <div class="function-wrapper">
    <b-container fluid="sm" class="pt-5 pb-5">
      <b-row class="text-center mt-5">
        <b-col cols="12">
          <h2>Hidden ABC</h2>
        </b-col>
      </b-row>
      <b-row class="d-flex justify-content-center mt-5 mb-2">
        <b-col cols="12" md="8" class="question">
          <span>If A = 21, A + B = 23, A + C = 21</span>
          <br /><br />
          <span>finding B and C value</span>
        </b-col>
      </b-row>
      <b-row class="d-flex justify-content-center mt-5">
        <b-col cols="12" md="8">
          <h3>Answer</h3>
          <b-table striped hover :items="items"></b-table>
        </b-col>
      </b-row>
      <b-row class="d-flex justify-content-center mt-5">
        <b-col cols="12" md="8">
          <h3>Description</h3>
          <p>
            Now we know just one value is A.
            So we have to find B and C for solving this question.
            But we can use expression A + B and A + C for getting the result of B and C.
          </p>
        </b-col>
        <b-col cols="12" md="8" class="question">
          <span>IF A = 21</span><br />
          <span>B = 23 - A</span><br />
          <span>C = 21 - A</span><br />
        </b-col>
        <b-col cols="12" md="8" class="mt-3">
          <p>
            So, In code, we have to know A.
            And we have the same formula every time.
            We just get the value of A, results of formula one and two.
            That is it
          </p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'function',
  data () {
    return {
      items: []
    }
  },
  created () {
    this.fetchItems()
  },
  methods: {
    fetchItems: function () {
      const url = process.env.VUE_APP_API_ENDPOINT + '/calculate/find-bnc?a=21&result1=23&result2=21'
      const self = this
      axios.get(url).then(function (response) {
        const data = response.data
        if (data.success) {
          self.items = data.data
        }
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .function-wrapper {
    background: #191919;
  }
  .question {
    background: #101010;
    border-radius: 8px;
    padding: 15px 0;
    text-align: center;
  }
  >>> table {
    color: #fff;
    & th, & td {
      border: 2px solid #f9004d;
      text-align: center;
    }
  }
</style>
