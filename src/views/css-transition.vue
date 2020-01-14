<template>
  <div class="css-transition">
    <div>
      CSS Transition
    </div>
    <div class="buttons">
      <button class="btn" @click="show = !show">Fade In Out</button>
    </div>
    <transition name="vlogo">
      <div v-if="show">
        <logo></logo>
      </div>
    </transition>
    <div class="selects">
      <div class="ani-number">
        {{ toNumber }}
      </div>
      <select v-model.number="number">
        <option v-for="n in 30">{{ n }}</option>
      </select>
    </div>
  </div>
</template>

<script>
import logo from '@/components/logo.vue'

export default {
  name: 'cssTransition',
  components: {
    logo
  },
  data() {
    return {
      number: 3,
      tweenedNumber: 3,
      show: true
    }
  },
  // mounted: {},
  computed: {
    toNumber: function() {
      return this.tweenedNumber.toFixed(0)
    }
  },
  watch: {
    number: function(newValue) {
      TweenLite.to(this.$data, 0.2, { tweenedNumber: newValue })
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/css/_partial/function';
.css-transition {
  border: 0px solid #000;
  padding: 10px;
}
.ani-number {
  padding: 10px;
}
.selects {
  select {
    @include border-radius(6px);
    @include box-shadow();
    position: relative;
    display: inline-block;
    margin: 0px 5px;
    cursor: pointer;
    padding: 5px 10px;
    border: 1px solid #666;
    line-height: 2em;
    option {
      padding: 15px;
    }
  }
}
.vlogo {
  &-enter,
  &-leave {
    &-active {
      top: 0px;
      left: 0px;
      position: relative;
      display: inline-block;
      transition: all 0.5s;
    }
  }
  &-enter,
  &-leave-to {
    top: 10px;
    opacity: 0;
    @include scale(0);
  }
  &-enter-to,
  &-leave {
    top: 0px;
    opacity: 1;
  }
}
.buttons {
  padding: 20px;
  .btn {
    @include border-radius(6px);
    @include box-shadow();
    @include transition();
    position: relative;
    display: inline-block;
    margin: 0px 5px;
    cursor: pointer;
    padding: 0px 10px;
    border: 1px solid #666;
    line-height: 2em;
    top: 0px;
    left: 0px;
    &:hover {
      top: -2px;
      left: -1px;
    }
  }
}
</style>
