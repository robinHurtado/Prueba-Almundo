<template>
  <div>
    <div @click="toggle">
      {{ title }}
      <img :src="image">

      <a href="#" class="center link blue b f6 black-70">Nombre del hotel</a><br>
    </div>

    <div v-show="isVisible">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToggleFilter',
  props: {
    title: { type: String, required: true },
    image: { type: String }
  },
  data () {
    return {
      isVisible: false
    }
  },
  methods: {
    toggle () {
      this.isVisible = !this.isVisible
    }
  }
}
</script>

<style>
</style>
