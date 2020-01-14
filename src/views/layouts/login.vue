<template>
  <div class="login-layout">
    <mainHeader />
    <div>
      login layout
    </div>
    <router-view />
  </div>
</template>

<script>
import mainHeader from '@/components/main-header.vue'

export default {
  name: 'loginLayout',
  components: {
    mainHeader
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/css/_partial/function';
.login-layout {
  border: 0px solid blue;
}
</style>
