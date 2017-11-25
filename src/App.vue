<template>
  <div id="app">
    <div class="w-100 pv3 ph4">
      <div class="blue column">
        <img src="./assets/images/logo-almundo.svg">
      </div>
    </div>

    <div class="ui grid">
      <div class="sixteen wide mobile five wide computer column">
        <filters @update:filter="val => filter = val"></filters>
      </div>

      <div class="sixteen wide mobile eleven wide computer column">
        <hotel :filter="filter"></hotel>
      </div>
    </div>

    <!-- <router-view/> -->
  </div>
</template>

<script>
import Filters from './components/Filters'
import Hotel from './components/Hotel'

export default {
  name: 'app',
  data () {
    return {
      filter: ''
    }
  },
  components: {
    Filters,
    Hotel
  }
}
</script>

<style>
.w-100.pv3{
  background-color: #0b3c7c;
}
body{
   font-family: 'roboto';
}

</style>
