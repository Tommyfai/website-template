<template>
  <div class="task">
    <!-- <div>{{ msg }}</div> -->
    <div>{{ title }}</div>
    <ol>
      <li>dynamic import component</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'Task',
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
.task {
  padding: 20px;
  border: 1px solid red;
}
</style>
