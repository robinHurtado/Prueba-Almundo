<template>
  <article class="mw7 bg-white pa2 pa3-ns pv1-ns mv0 mv4-ns ml4-ns ba b--black-10 shadow-4">
    <div class="f4 mv2">
      <strong>Filtros</strong>
      <hr class="mw8 bb bw1 b--black-10">
    </div>
    <div class="pb2">
      <span>
        <img src="../assets/icons/filters/search.svg" alt="">
      </span>
      <a href="#" class="center link blue b f6 black-70">Nombre del hotel</a><br>
    </div>
    <input class="pa2"v-model="filter" type="text" name="" value="" placeholder="ingrese el nombre del hotel">
    <a class="f5 link dim br2 ml2 ph3 pv2 mb1 dib white bg-dark-blue" href="#">Aceptar</a>
    <hr class="mw8 bb bw1 b--black-10 mt2">
    <div class="">
      <form class="pt3">
        <fieldset id="favorite_movies" class="bn pa0">
          <div class="flex items-center mb2">
            <input class="mr2" type="checkbox" value="start">
            <label for="spacejam" class="b">Todas las estrellas</label>
          </div>
          <div class="flex items-center mb2">
            <input class="mr2" type="checkbox"  value="start">
            <label for="airbud" class="lh-copy">
              <img class="mw-10 " src="../assets/icons/filters/star.svg" alt="star" />
              <img class="mw-10 " src="../assets/icons/filters/star.svg" alt="star" />
              <img class="mw-10 " src="../assets/icons/filters/star.svg" alt="star" />
              <img class="mw-10 " src="../assets/icons/filters/star.svg" alt="star" />
              <img class="mw-10 " src="../assets/icons/filters/star.svg" alt="star" />
            </label>
          </div>
          <div class="flex items-center mb2">
            <input class="mr2" type="checkbox" value="start">
            <label for="hocuspocus" class="lh-copy">
              <img src="../assets/icons/filters/star.svg" alt="star" />
              <img src="../assets/icons/filters/star.svg" alt="star" />
              <img src="../assets/icons/filters/star.svg" alt="star" />
              <img src="../assets/icons/filters/star.svg" alt="star" />
            </label>
          </div>
          <div class="flex items-center mb2">
            <input class="mr2" type="checkbox" value="start">
            <label for="diehard" class="lh-copy">
              <img class="mw-10 " src="../assets/icons/filters/star.svg" alt="star" />
              <img class="mw-10 " src="../assets/icons/filters/star.svg" alt="star" />
              <img class="mw-10 " src="../assets/icons/filters/star.svg" alt="star" />
            </label>
          </div>
          <div class="flex items-center mb2">
            <input class="mr2 checkbox" type="checkbox" value="start">
            <label for="primer" class="lh-copy">
              <img src="../assets/icons/filters/star.svg" alt="star" />
              <img src="../assets/icons/filters/star.svg" alt="star" />
            </label>
          </div>
          <div class="flex items-center mb2">
            <input class="mr2" type="checkbox" value="start">
            <label for="proxy" class="lh-copy">
              <img src="../assets/icons/filters/star.svg" alt="star" />
            </label>
          </div>
        </fieldset>
      </form>
    </div>
  </article>
</template>

<script>
export default {
  name: 'filters',
  data () {
    return {
      filter: ''
    }
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

</style>
