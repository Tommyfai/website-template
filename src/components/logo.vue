<template>
  <div class="logo">
    <img
      ref="box"
      class="logo-img"
      :src="require('@/assets/img/' + image)"
      @click="clickAction()"
      @mouseover="mouseoverAction()"
      @mouseout="mouseoutAction()"
      :class="{ active: isActive, transformed: transformed }"
      :style="{
        borderWidth: borderWidith + 'px',
        width: width + 'px',
        opacity: opacity,
        borderRadius: borderRadius + '%'
      }"
    />
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { TimelineLite, Back, TweenLite } from 'gsap'

export default {
  name: 'logo',
  data() {
    return {
      width: 100,
      height: 100,
      borderWidith: 1,
      borderRadius: 0,
      opacity: 1,
      isActive: false,
      transformed: false,
      image: 'profile-icon-0.png'
    }
  },
  props: {
    msg: String
  },
  mounted() {
    // const { box } = this.$refs
    // const timeline = new TimelineLite()
  },
  methods: {
    clickAction: function() {
      if (!this.isActive) {
        this.image = 'profile-icon-1.png'
        TweenLite.to(this.$data, 0.2, {
          borderRadius: 50,
          borderWidith: 5,
          opacity: 1,
          width: 150
        })
      } else {
        this.image = 'profile-icon-0.png'
        TweenLite.to(this.$data, 0.2, {
          borderRadius: 0,
          borderWidith: 1,
          opacity: 0.3,
          width: 100
        })
      }
      this.isActive = !this.isActive
    },
    mouseoverAction: function() {
      console.log('mouseoverAction')
      const { box } = this.$refs
      const timeline = new TimelineLite()
      timeline
        .to(box, 2, { x: 0, rotation: 290, opacity: 0.2, ease: Back.easeInOut })
        .to(box, 1, { x: 100 })
        .to(box, 2, { x: 250, rotation: 560, opacity: 1, ease: Back.easeInOut })
    },
    mouseoutAction: function() {
      console.log('mouseoutAction')
      const { box } = this.$refs
      const timeline = new TimelineLite()
      timeline.to(box, 2, { x: 0, rotation: 0, opacity: 1 }, 5)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/_partial/function';

.transformed {
  border: 1px solid #000;
}

.active {
  // @include border-radius(50%);
  @include box-shadow();
}

.logo {
  display: inline-block;
  vertical-align: middle;
  position: relative;
  // @include border-radius(0%);
  // border: 1px solid #000;
  .logo-img {
    // position: absolute;
    // top: 0px;
    // left: 0px;
    border: 1px solid #8c8c8c;
    // @include float(centerMiddle);
    // @include transition();
    cursor: pointer;
    vertical-align: middle;
  }
}
</style>
