<template>
  <div class="function-wrapper">
    <b-container fluid="sm" class="pt-5 pb-5">
      <b-row class="text-center mt-5">
        <b-col cols="12">
          <h2>SCG Bangsue to centralwOrld</h2>
        </b-col>
      </b-row>
      <b-row class="d-flex justify-content-center mt-5 mb-2">
        <b-col cols="12" md="8" class="question">
          <span>
            Please use “Google API” for finding the best way to go to Central World from SCG Bangsue
          </span>
        </b-col>
      </b-row>
      <b-row class="d-flex justify-content-center mt-5">
        <b-col cols="12" md="8">
          <h3>Answer</h3>
          <p>
            Best Time: {{data ? data.routes[0].legs[0].duration.text : 'N/A'}},
            Distance: {{data ? data.routes[0].legs[0].distance.text : 'N/A'}},
            Description: {{data ? data.routes[0].summary : 'N/A'}}
          </p>
          <gmap-map
            ref="map"
            :center="center"
            :zoom="12"
            style="width:100%;  height: 350px;"
          >
            <gmap-marker
              :key="index"
              v-for="(m, index) in markers"
              :position="m.position"
              @click="center=m.position"
            ></gmap-marker>
          </gmap-map>
        </b-col>
      </b-row>
      <b-row class="d-flex justify-content-center mt-5">
        <b-col cols="12" md="8">
          <h3>Description</h3>
          <p>
            Use Google API in SCG-API.
            The page will fetch data from SCG-API instead.
            So we can update format or anything before send back to the page. (SCG-WEB)
          </p>
        </b-col>
        <b-col cols="12" md="8" class="question">
          <span>1. Request to SCG-API</span><br />
          <span>2. API requests to Google API</span><br />
          <span>3. Send data back to website.</span><br />
        </b-col>
        <b-col cols="12" md="8" class="mt-3">
          <p>
            That is it.
          </p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// import {gmapApi} from 'vue2-google-maps'
import axios from 'axios'
export default {
  name: 'google-map',
  data () {
    return {
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      currentPlace: null,
      data: null
    }
  },
  created () {
    this.geolocate()
  },
  methods: {
    setPlace (place) {
      this.currentPlace = place
    },
    addMarker () {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        }
        this.markers.push({ position: marker })
        this.places.push(this.currentPlace)
        this.center = marker
        this.currentPlace = null
      }
    },
    geolocate: function () {
      const url = process.env.VUE_APP_API_ENDPOINT + '/googlemaps/directions?origin=SCG Khwaeng Bang Sue, Khet Bang Sue, Krung Thep Maha Nakhon 10800&destination=centralwOrld, 999/9 Rama I Rd, Pathum Wan, Pathum Wan District, Bangkok 10330'
      const self = this
      axios.get(url).then(function (response) {
        const data = response.data
        if (data.success) {
          self.data = data.data
          self.center = self.data.routes[0].legs[0].start_location
          self.markers.push({ position: self.data.routes[0].legs[0].start_location })
          self.markers.push({ position: self.data.routes[0].legs[0].end_location })
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
