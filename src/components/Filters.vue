<template>
  <article class="mw7 pa2 pa3-ns pv1-ns  ml4-ns">
    <div class="ui three columns grid ">
      <div class="sixteen wide column bg-white shadow ba b--black-10 f5 mt2 mb1">
        <strong>Filtros</strong>
      </div>

      <div class="sixteen wide column bg-white shadow ba b--black-10 mb1">
        <div >
          <toggle-filter class="pb2" title >
              <!--<img class="star" src="../assets/icons/filters/search.svg" alt="">
            <a href="#" class="center link blue b f6 black-70">Nombre del hotel</a><br>-->
            <input class="pa2" v-model="filter" type="text" name="" value="" placeholder="ingrese el nombre del hotel">
            <a class="f5 link dim br2 ml2 ph3 pv2 mb1 dib white bg-dark-blue" href="#">Aceptar</a>
          </toggle-filter>
        </div>
      </div>

      <div class="sixteen wide column bg-white shadow ba b--black-10">
        <toggle-filter class="pb2" title>
          <img src="../assets/icons/filters/star.svg" alt="start">
          <a href="#" class="center link blue b f6 black-70">Estrellas</a><br>

          <form class="pt1">
            <fieldset id="favorite_movies" class="bn pa0">
              <div class="flex items-center mb2">
                <input class="mr2" type="checkbox" value="start" v-model="checkedStars">
                <label for="spacejam" class="b">Todas las estrellas</label>
              </div>
              <div class="flex items-center mb2">
                <input class="mr2" type="checkbox"  value="start" v-model="checkedStars">
                <label for="airbud" class="lh-copy">
                  <img class="mw-10 " src="../assets/icons/filters/star.svg" alt="star" />
                  <img class="mw-10 " src="../assets/icons/filters/star.svg" alt="star" />
                  <img class="mw-10 " src="../assets/icons/filters/star.svg" alt="star" />
                  <img class="mw-10 " src="../assets/icons/filters/star.svg" alt="star" />
                  <img class="mw-10 " src="../assets/icons/filters/star.svg" alt="star" />
                </label>
              </div>
              <div class="flex items-center mb2">
                <input class="mr2" type="checkbox" value="start" v-model="checkedStars">
                <label for="hocuspocus" class="lh-copy">
                  <img src="../assets/icons/filters/star.svg" alt="star" />
                  <img src="../assets/icons/filters/star.svg" alt="star" />
                  <img src="../assets/icons/filters/star.svg" alt="star" />
                  <img src="../assets/icons/filters/star.svg" alt="star" />
                </label>
              </div>
              <div class="flex items-center mb2">
                <input class="mr2" type="checkbox" value="start" v-model="checkedStars">
                <label for="diehard" class="lh-copy">
                  <img class="mw-10 " src="../assets/icons/filters/star.svg" alt="star" />
                  <img class="mw-10 " src="../assets/icons/filters/star.svg" alt="star" />
                  <img class="mw-10 " src="../assets/icons/filters/star.svg" alt="star" />
                </label>
              </div>
              <div class="flex items-center mb2">
                <input class="mr2 checkbox" type="checkbox" value="start" v-model="checkedStars" >
                <label for="primer" class="lh-copy">
                  <img src="../assets/icons/filters/star.svg" alt="star" />
                  <img src="../assets/icons/filters/star.svg" alt="star" />
                </label>
              </div>
              <div class="flex items-center mb2">
                <input class="mr2" type="checkbox" value="start" v-model="checkedStars">
                <label for="proxy" class="lh-copy">
                  <img src="../assets/icons/filters/star.svg" alt="star" />
                </label>
              </div>
            </fieldset>
          </form>
        </toggle-filter>

      </div>
    </div>
  </article>
</template>

<script>
import ToggleFilter from './ToggleFilter'

export default {
  name: 'filters',
  data () {
    return {
      filter: '',
      checkedStars: false
    }
  },
  components: {
    ToggleFilter
  },
  watch: {
    filter (filter) {
      this.$emit('update:filter', filter)
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
