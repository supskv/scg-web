<template>
  <div class="function-wrapper">
    <b-container fluid="sm" class="pt-5 pb-5">
      <b-row class="text-center mt-5">
        <b-col cols="12">
          <h2>Hidden Number</h2>
        </b-col>
      </b-row>
      <b-row class="d-flex justify-content-center mt-5 mb-2">
        <b-col cols="12" md="8" class="question">
          <span>X, Y, 5, 9, 15, 23, Z</span>
          <br /><br />
          <span>finding X, Y, Z value</span>
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
            The number sequence has an increasing distance based on the number of steps.
            The formula is:
          </p>
        </b-col>
        <b-col cols="12" md="8" class="question">
          <span>IF T1 = 3</span><br />
          <span>Tn = Tn-1 + step(n-1)</span><br />
          <span>By step is increasing distance.</span><br />
        </b-col>
        <b-col cols="12" md="8" class="mt-3">
          <p>
            So, In code, We have to find step first, If it cannot find step number, we won’t find actually the number of Tn.
            Then we will recursive for finding the hidden number.
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
      const url = process.env.VUE_APP_API_ENDPOINT + '/calculate/hidden-number?q=X, Y, 5, 9, 15, 23, Z'
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
