<template>
  <div class="about">
    <h1>This is an about pages</h1>
    <logo></logo>
  </div>
</template>

<script>
import logo from '@/components/logo.vue'

export default {
  name: 'about',
  components: {
    logo
  },
  props: {
    msg: String
  }
}
</script>

<style lang="scss">
.about {
  border: 0px solid #000;
}
</style>
