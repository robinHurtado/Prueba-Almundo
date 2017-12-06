<template>
  <article class="mw7 pa2 pa3-ns pv1-ns  ml4-ns">
    <div class="ui three columns grid ">
      <div class="sixteen wide column bg-white shadow ba b--black-10 f5 mt2 mb1">
        <strong>Filtros</strong>
      </div>

      <div class="sixteen wide column bg-white shadow ba b--black-10 mb1">
        <div >
          <div class="pb2">
            <img class="star" src="../assets/icons/filters/search.svg" alt="">
            <a href="#" class="center link blue b f6 black-70" @click="toggleHotel">Nombre del hotel</a><br>
          </div>
          <template v-if="openH">
            <input class="pa2" v-model="filter" type="text" name="" value="" placeholder="ingrese el nombre del hotel">
            <a class="f5 link dim br2 ml2 ph3 pv2 mb1 dib white bg-dark-blue" href="#">Aceptar</a>
          </template>
        </div>
      </div>

      <div class="sixteen wide column bg-white shadow ba b--black-10">
        <div class="pb2">
          <img src="../assets/icons/filters/star.svg" alt="start">
          <a href="#" class="center link blue b f6 black-70" @click="toggleStars">Estrellas</a><br>
          <template v-if="openS">
            <form class="pt1">
            <fieldset id="favorite_movies" class="bn pa0">
              <div class="flex items-center mb2">
                <input class="mr2" type="checkbox" v-model="numberStars" :value="stars">
                <label for="spacejam" class="b">Todas las estrellas</label>
              </div>
              <div class="flex items-center mb2">
                <label for="airbud" class="lh-copy">
                  <input class="mr2" name="option"  type="checkbox"  v-model="numberStars" :value="stars">
                  <img class="mw-10 " src="../assets/icons/filters/star.svg" alt="star" />
                  <img class="mw-10 " src="../assets/icons/filters/star.svg" alt="star" />
                  <img class="mw-10 " src="../assets/icons/filters/star.svg" alt="star" />
                  <img class="mw-10 " src="../assets/icons/filters/star.svg" alt="star" />
                  <img class="mw-10 " src="../assets/icons/filters/star.svg" alt="star" />
                </label>
              </div>

              <div class="flex items-center mb2">
                <input class="mr2" name="option"  type="checkbox" v-model="numberStars" :value="stars">
                  <label for="hocuspocus" class="lh-copy" :class="{ active: numberStars.includes( stars ) }">
                    <img src="../assets/icons/filters/star.svg" alt="star" />
                    <img src="../assets/icons/filters/star.svg" alt="star" />
                    <img src="../assets/icons/filters/star.svg" alt="star" />
                    <img src="../assets/icons/filters/star.svg" alt="star" />
                  </label>
              </div>

              <div class="flex items-center mb2">
                <input class="mr2" name="option"  type="checkbox" v-model="numberStars" :value="{ stars }">
                  <label for="diehard" class="lh-copy">
                    <img class="mw-10 " src="../assets/icons/filters/star.svg" alt="star" />
                    <img class="mw-10 " src="../assets/icons/filters/star.svg" alt="star" />
                    <img class="mw-10 " src="../assets/icons/filters/star.svg" alt="star" />
                  </label>
              </div>
              <div class="flex items-center mb2">
                <input class="mr2 checkbox" name="option"  type="checkbox" v-model="numberStars" :value="stars" >
                  <label for="primer" class="lh-copy">
                    <img src="../assets/icons/filters/star.svg" alt="star" />
                    <img src="../assets/icons/filters/star.svg" alt="star" />
                  </label>
              </div>
              <div class="flex items-center mb2">
                <input class="mr2" name="option"  type="checkbox" v-model="numberStars" :value="stars">
                  <label for="proxy" class="lh-copy">
                    <img src="../assets/icons/filters/star.svg" alt="star" />
                  </label>
              </div>
            </fieldset>
          </form>
          </template>
        </div>

      </div>
    </div>
  </article>
</template>

<script>

export default {
  name: 'filters',
  props: {
    value: { type: Array, require: true }
  },
  data () {
    return {
      filter: '',
      openH: true,
      openS: true,
      numberStars: this.value
    }
  },
  watch: {
    filter (filter) {
      this.$emit('update:filter', filter)
    },
    numStars () {
      this.$emit('input', this.numberStars)
    }
  },
  methods: {
    toggleHotel () {
      this.openH = !this.openH
    },
    toggleStars () {
      this.openS = !this.openS
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.star svg{
  fill: blue;
}
</style>
