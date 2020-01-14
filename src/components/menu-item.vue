<template>
  <ul ref="ChildUL" :class="'menu-item level-' + level + ' ' + mode">
    <li v-for="(menu, index) in menus" :key="menu.text" @mouseover="mouseoverAction(index)" @mouseout="mouseoutAction(index)" @click="clickAction(index)">
      <router-link :to="menu.url" :event="menu.menus ? '' : 'click'" :class="menu.menus ? 'has-child' : ''" :style="'paddingLeft:' + padding + 'px'">
        <template v-if="menu.icon">
          <i :class="'icon ti-' + menu.icon"></i>
        </template>
        {{ menu.text }}
        <template v-if="menu.menus">
          <template v-if="mode == 'accordion'">
            <i class="arrow hori ti-angle-down"></i>
          </template>
          <template v-else>
            <i class="arrow ti-angle-right"></i>
          </template>
        </template>
      </router-link>
      <template v-if="menu.menus">
        <menuItem :ref="'childMenu' + index" :menus="menu.menus" :level="level + 1" :mode="mode"></menuItem>
      </template>
    </li>
  </ul>
</template>

<script>
import { gsap, TimelineLite, Back, TweenLite } from 'gsap'
import menuItem from '@/components/menu-item.vue'

var timeline = new TimelineLite()

export default {
  name: 'menuItem',

  components: {
    menuItem
  },
  data() {
    return {
      speed: 0.4
    }
  },
  props: {
    level: Number,
    mode: {
      type: String,
      required: true,
      default: 'vertical'
    },
    menus: {
      type: Array,
      required: true
    }
  },
  mounted() {},
  watch: {
    mode: function(val) {
      this.hideChild()
    }
  },
  computed: {
    padding: function() {
      if (this.mode == 'accordion') {
        if (this.level == 2) {
          return 30
        }
        if (this.level > 2) {
          return 14 * this.level
        }
      } else {
        return 12
      }
    }
  },
  methods: {
    showChild: function() {
      var tgt = this.$refs.ChildUL
      var tl = new TimelineLite()
      tl.to(tgt, this.speed, { autoAlpha: 1 })
      // tl.delay(1200).to(tgt, this.speed, { autoAlpha: 1 })
      // gsap.fromTo(tgt, { opacity: 0 }, { opacity: 1, duration: 1 })
    },
    hideChild: function() {
      var tgt = this.$refs.ChildUL
      var tl = new TimelineLite()
      tl.to(tgt, this.speed, { autoAlpha: 0 })
      // tl.delay(1200).to(tgt, this.speed, { autoAlpha: 0 })
    },
    clickAction: function(_index) {
      if (this.mode == 'accordion') {
        if (this.$refs['childMenu' + _index]) {
          this.$refs['childMenu' + _index][0].showChild()
        }
      }
    },
    mouseoverAction: function(_index) {
      if (this.mode != 'accordion') {
        if (this.$refs['childMenu' + _index]) {
          this.$refs['childMenu' + _index][0].showChild()
        }
      }
    },
    mouseoutAction: function(_index) {
      if (this.mode != 'accordion') {
        if (this.$refs['childMenu' + _index]) {
          this.$refs['childMenu' + _index][0].hideChild()
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/_partial/function';
.menu-item {
  // display: none;
  vertical-align: top;
  margin: 0px;
  padding: 0px;
  list-style: none;
  z-index: 999;
  // width: 100%;
  min-width: 100px;
  &.vertical,
  &.horizontal {
    opacity: 0;
    position: absolute;
    @include box-shadow();
  }
  &.accordion {
    opacity: 1;
    position: relative;
    @include box-shadow(none);
  }
  @include transform-origin();
  li {
    margin: 0px;
    padding: 0px;
    position: relative;
    a {
      position: relative;
      display: block;
      padding: 8px 12px;
      font-weight: normal;
      color: #2c3e50;
      text-decoration: none;
      background-color: #f6f6f6;
      white-space: nowrap;
      &.router-link-active,
      &.router-link-exact-active {
        color: #000;
      }
      .icon {
        margin-right: 2px;
        pointer-events: none;
      }
      .arrow {
        pointer-events: none;
        position: absolute;
        @include float(rightMiddle);
        right: 8px;
      }
      &.has-child {
        padding-right: 30px;
      }
    }
    &:hover {
      > a {
        color: #fff;
        background-color: #777;
      }
      > ul {
        // display: inline-block;
      }
    }
  }
  &.level-2 {
    top: 100%;
    left: 0%;
    &.accordion {
      position: relative;
    }
    &.vertical {
      top: 0px;
      left: 100%;
    }
    .level-3,
    ul {
      top: 0px;
      left: 100%;
      &.accordion {
        top: auto;
        left: 0%;
      }
    }
  }
}
</style>
