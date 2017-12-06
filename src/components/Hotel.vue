<template>
  <div>
    <section class="mw9 bg-white pa2 p2-ns mt3-ns mr2 mr4-ns ml2 ml0-ns shadow " v-for="(hotel, index) of filteredHotels" :key="index">
      <article class="ui stackable three column grid">
        <div class="row" >
          <div class="five wide computer column">
            <img class="" :src="path(hotel.image)" alt="imagen hotel">
          </div>

          <div class="seven wide column pl5 ">
            <span class="f5 blue b" data-hint="Lorem Ipsum Dolor Sit Amet">{{ hotel.name }}</span>
            <div class="rating pt1">
              <img src="../assets/icons/filters/star.svg" alt="star" v-for="star in hotel.stars">
            </div>
            <div class="amenities">
              <span class="hint--bottom" aria-label="Caja de seguridad">
                <img
                  v-if="hotel.amenities.indexOf('safety-box') !== -1"
                  class="mw-10 0 mt2 ph1 "
                  src="../assets/icons/amenities/safety-box.svg"
                  alt="star"

                />
              </span>

              <span class="hint--bottom" aria-label="batas de baño">
                <img
                  v-if="hotel.amenities.indexOf('bathrobes') !== -1"
                  class="mw-10 0 mt2 ph1"
                  src="../assets/icons/amenities/bathrobes.svg"
                  alt="star"
                />
              </span>

              <span class="hint--bottom" aria-label="Bañera">
                <img
                  v-if="hotel.amenities.indexOf('bathtub') !== -1"
                  class="mw-10 0 mt2 ph1"
                  src="../assets/icons/amenities/bathtub.svg"
                  alt="star"
                />
              </span>

              <span class="hint--bottom" aria-label="Piscina">
                <img
                  v-if="hotel.amenities.indexOf('beach-pool-facilities') !== -1"
                  class="mw-10 0 mt2 ph1"
                  src="../assets/icons/amenities/beach-pool-facilities.svg"
                  alt="star"
                />
              </span>

              <span class="hint--bottom" aria-label="Playa">
                <img
                  v-if="hotel.amenities.indexOf('beach') !== -1"
                  class="mw-10 0 mt2 ph1"
                  src="../assets/icons/amenities/beach.svg"
                  alt="star"
                />
              </span>

              <span class="hint--bottom" aria-label="Centro de negocios">
                <img
                  v-if="hotel.amenities.indexOf('business-center') !== -1"
                  class="mw-10 0 mt2 ph1"
                  src="../assets/icons/amenities/business-center.svg"
                  alt="star"
                />
              </span>

              <span class="hint--bottom" aria-label="Guarderia">
                <img
                  v-if="hotel.amenities.indexOf('children-club') !== -1"
                  class="mw-10 0 mt2 ph1"
                  src="../assets/icons/amenities/children-club.svg"
                  alt="star"
                />
              </span>

              <span class="hint--bottom" aria-label="Cafetera">
                <img
                  v-if="hotel.amenities.indexOf('coffe-maker') !== -1"
                  class="mw-10 0 mt2 ph1"
                  src="../assets/icons/amenities/coffe-maker.svg"
                  alt="star"
                />
              </span>

              <span class="hint--bottom" aria-label="Bañera">
                <img
                  v-if="hotel.amenities.indexOf('deep-soaking-bathtub') !== -1"
                  class="mw-10 0 mt2 ph1"
                  src="../assets/icons/amenities/deep-soaking-bathtub.svg"
                  alt="star"
                />
              </span>

              <span class="hint--bottom" aria-label="Gimnacio">
                <img
                  v-if="hotel.amenities.indexOf('fitness-center') !== -1"
                  class="mw-10 0 mt2 ph1"
                  src="../assets/icons/amenities/fitness-center.svg"
                  alt="star"
                />
              </span>

              <span class="hint--bottom" aria-label="Jardin">
                <img
                  v-if="hotel.amenities.indexOf('garden') !== -1"
                  class="mw-10 0 mt2 ph1"
                  src="../assets/icons/amenities/garden.svg"
                  alt="star"
                />
              </span>

              <span  class="hint--bottom" aria-label="Instalaciones de cocina">
                <img
                  v-if="hotel.amenities.indexOf('kitchen-facilities') !== -1"
                  class="mw-10 0 mt2 ph1"
                  src="../assets/icons/amenities/kitchen-facilities.svg"
                  alt="star"
                />
              </span>

              <span class="hint--bottom" aria-label="Periodico">
                <img
                  v-if="hotel.amenities.indexOf('newspaper') !== -1"
                  class="mw-10 0 mt2 ph1"
                  src="../assets/icons/amenities/newspaper.svg"
                  alt="star"
                />
              </span>

              <span class="hint--bottom" aria-label="Club nocturno">
                <img
                  v-if="hotel.amenities.indexOf('nightclub') !== -1"
                  class="mw-10 0 mt2 ph1"
                  src="../assets/icons/amenities/nightclub.svg"
                  alt="star"
                />
              </span>

              <span class="hint--bottom" aria-label="Restaurante">
                <img
                  v-if="hotel.amenities.indexOf('restaurant') !== -1"
                  class="mw-10 0 mt2 ph1"
                  src="../assets/icons/amenities/restaurant.svg"
                  alt="star"
                />
              </span>

              <span class="hint--bottom" aria-label="Dormitorio separado">
                <img
                  v-if="hotel.amenities.indexOf('separate-bredroom') !== -1"
                  class="mw-10 0 mt2 ph1"
                  src="../assets/icons/amenities/separate-bredroom.svg"
                  alt="star"
                />
              </span>

              <span class="hint--bottom" aria-label="Sabanas">
                <img
                  v-if="hotel.amenities.indexOf('sheets') !== -1"
                  class="mw-10 0 mt2"
                  src="../assets/icons/amenities/sheets.svg"
                  alt="star"
                />
              </span>
            </div>
          </div>

          <div class="ui middle aligned four wide column bl tc">
            <span class="f6">Precio de noche por habitación</span>
            <h4 class="f3 orange mv2">ARS <strong class="f2 dib v-mid">{{ hotel.price }}</strong></h4>
            <a class="w-90 f4 b f6-ns f4-ns link dim br2 ph5 ph4-ns pv2 mb2 dib white bg-dark-blue" href="#">Ver hotel</a>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
import 'hint.css'
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
.shadow{
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.24), 0 0 2px 0 rgba(0,0,0,0.12)
}

.bl{
  border-right: dashed #ccc;
  border-right-width: thin;
}
</style>
