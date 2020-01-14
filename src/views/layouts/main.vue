<template>
  <div class="main">
    <mainHeader />
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import mainHeader from '@/components/main-header.vue'

export default {
  name: 'mainLayout',
  components: {
    mainHeader
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/css/_partial/function';
.main {
  border: 0px solid #000;
}
</style>
