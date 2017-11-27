<template>
  <div>
    <section class="mw9 bg-white pa2 pa3-ns mr4-ns mv3 mv4-ns mh2 mh2-ns shadow-4 " v-for="(hotel, index) of filteredHotels" :key="index">
      <article class="ui stackable three column grid">
        <div class="row" >
          <div class="five wide computer column">
            <img class="mw-10 0" :src="path(hotel.image)" alt="imagen hotel">
          </div>

          <div class="seven wide column">
            <span class="f5 blue b">{{ hotel.name }}</span>
            <div class="rating pt1">
              <img class="mw-10 " src="../assets/icons/filters/star.svg" alt="star" v-for="star in hotel.stars">
            </div>
            <div class="amenities">
              <img
                v-if="hotel.amenities.indexOf('safety-box') !== -1"
                class="mw-10 0 mt2 ph1"
                src="../assets/icons/amenities/safety-box.svg"
                alt="star"
              >
              <img
                v-if="hotel.amenities.indexOf('bathrobes') !== -1"
                class="mw-10 0 mt2 ph1"
                src="../assets/icons/amenities/bathrobes.svg"
                alt="star"
              >
              <img
                v-if="hotel.amenities.indexOf('bathtub') !== -1"
                class="mw-10 0 mt2 ph1"
                src="../assets/icons/amenities/bathtub.svg"
                alt="star"
              >
              <img
                v-if="hotel.amenities.indexOf('beach-pool-facilities') !== -1"
                class="mw-10 0 mt2 ph1"
                src="../assets/icons/amenities/beach-pool-facilities.svg"
                alt="star"
              >
              <img
                v-if="hotel.amenities.indexOf('beach') !== -1"
                class="mw-10 0 mt2 ph1"
                src="../assets/icons/amenities/beach.svg"
                alt="star"
              >
              <img
                v-if="hotel.amenities.indexOf('business-center') !== -1"
                class="mw-10 0 mt2 ph1"
                src="../assets/icons/amenities/business-center.svg"
                alt="star"
              >
              <img
                v-if="hotel.amenities.indexOf('children-club') !== -1"
                class="mw-10 0 mt2 ph1"
                src="../assets/icons/amenities/children-club.svg"
                alt="star"
              >
              <img
                v-if="hotel.amenities.indexOf('coffe-maker') !== -1"
                class="mw-10 0 mt2 ph1"
                src="../assets/icons/amenities/coffe-maker.svg"
                alt="star"
              >
              <img
                v-if="hotel.amenities.indexOf('deep-soaking-bathtub') !== -1"
                class="mw-10 0 mt2 ph1"
                src="../assets/icons/amenities/deep-soaking-bathtub.svg"
                alt="star"
              >
              <img
                v-if="hotel.amenities.indexOf('fitness-center') !== -1"
                class="mw-10 0 mt2 ph1"
                src="../assets/icons/amenities/fitness-center.svg"
                alt="star"
              >
              <img
                v-if="hotel.amenities.indexOf('garden') !== -1"
                class="mw-10 0 mt2 ph1"
                src="../assets/icons/amenities/garden.svg"
                alt="star"
              >
              <img
                v-if="hotel.amenities.indexOf('kitchen-facilities') !== -1"
                class="mw-10 0 mt2 ph1"
                src="../assets/icons/amenities/kitchen-facilities.svg"
                alt="star"
              >
              <img
                v-if="hotel.amenities.indexOf('newspaper') !== -1"
                class="mw-10 0 mt2 ph1"
                src="../assets/icons/amenities/newspaper.svg"
                alt="star"
              >
              <img
                v-if="hotel.amenities.indexOf('nightclub') !== -1"
                class="mw-10 0 mt2 ph1"
                src="../assets/icons/amenities/nightclub.svg"
                alt="star"
              >
              <img
                v-if="hotel.amenities.indexOf('restaurant') !== -1"
                class="mw-10 0 mt2 ph1"
                src="../assets/icons/amenities/restaurant.svg"
                alt="star"
              >
              <img
                v-if="hotel.amenities.indexOf('separate-bredroom') !== -1"
                class="mw-10 0 mt2 ph1"
                src="../assets/icons/amenities/separate-bredroom.svg"
                alt="star"
              >
              <img
                v-if="hotel.amenities.indexOf('sheets') !== -1"
                class="mw-10 0 mt2"
                src="../assets/icons/amenities/sheets.svg"
                alt="star"
              >
            </div>
          </div>

          <div class="four wide column bl  b--light-gray tc">
            <span class="f6">Precio de noche por habitación</span>
            <h4 class="f3 orange">ARS <strong class="f2 dib v-mid">{{ hotel.price }}</strong></h4>
            <a class="w-100 f4 b f6-ns f4-ns link dim br2 ph5 ph4-ns pv2 mb2 dib white bg-dark-blue" href="#">Ver hotel</a>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
const servicios = {
  hotels: axios.create({
    baseURL: 'http://localhost:3001/api/fetchAllHotels'
  })
}

export default {
  name: 'hotel',
  props: {
    filter: String
  },
  data () {
    return {
      hotels: []
    }
  },
  computed: {
    filteredHotels () {
      return this.hotels.filter(({ name }) => {
        return name.toLowerCase().includes(this.filter.toLowerCase())
      })
    }
  },
  created () {
    this.fetchAllHotels()
  },
  methods: {
    path (image) {
      return require(`../assets/images/hotels/${image}`)
    },
    fetchAllHotels () {
      servicios.hotels.get().then(response => {
        this.hotels = response.data
      })
      .catch(e => {
        console.error(e)
      })
    }
  }
}
</script>

<style>
</style>
