<template>
  <div class="sample">
    <div>{{ msg }}</div>
    <div>{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: 'Sample',
  data() {
    return {
      title: 'Title A'
    }
  },
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
.sample {
  border: 1px solid red;
}
</style>
