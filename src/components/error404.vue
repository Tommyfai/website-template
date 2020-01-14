<template>
  <div class="error404">
    <div>{{ msg }}</div>
    <div>{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: 'Error404',
  data() {
    return {
      title: 'error404'
    }
  },
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
.error404 {
  border: 1px solid red;
}
</style>
