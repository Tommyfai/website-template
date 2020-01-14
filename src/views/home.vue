<template>
  <div class="home">
    <!-- <Sample msg="Welcome to Your Vue.js App" /> -->
    <logo v-for="n in 5">{{ n }}</logo>
    <div style="height: 500px"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import Sample from '@/components/sample.vue'
import logo from '@/components/logo.vue'

export default {
  name: 'home',
  components: {
    Sample,
    logo
  }
}
</script>
