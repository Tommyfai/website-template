<template>
  <div :class="'main-menu ' + mode">
    <nav id="nav">
      <ul :class="'level-1 ' + mode + (collapsed ? ' collapsed' : '')">
        <li v-for="(menu, index) in menus" :key="`item-${index}`" @mouseover="mouseoverAction(index)" @mouseout="mouseoutAction(index)" @click="clickAction(index)">
          <router-link :to="menu.url" :event="menu.menus ? '' : 'click'" :class="menu.menus ? 'has-child' : ''">
            <template v-if="menu.icon">
              <i :class="'icon ti-' + menu.icon"></i>
            </template>
            <template v-if="!collapsed">
              {{ menu.text }}
            </template>
            <template v-if="menu.menus">
              <template v-if="mode == 'vertical'">
                <i class="arrow ti-angle-right"></i>
              </template>
              <template v-else>
                <i class="arrow hori ti-angle-down"></i>
              </template>
            </template>
          </router-link>
          <template v-if="menu.menus">
            <menuItem :ref="'childMenu' + index" :menus="menu.menus" :level="level + 1" :mode="mode"></menuItem>
          </template>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { TimelineLite, Back, TweenLite } from 'gsap'
import menuItem from '@/components/menu-item.vue'

export default {
  name: 'mainMenu',
  components: {
    menuItem
  },
  data() {
    return {
      level: 1
    }
  },
  props: {
    collapsed: {
      type: Boolean,
      required: true,
      default: false
    },
    mode: {
      type: String,
      required: true,
      default: 'vertical'
    },
    menus: {
      type: Array,
      required: true,
      default: []
    }
  },
  methods: {
    // clickAction: function(_index) {
    //   if (this.$refs['childMenu' + _index]) {
    //     this.$refs['childMenu' + _index][0].showChild()
    //   }
    // },
    clickAction: function(_index) {
      if (this.mode == 'accordion') {
        if (this.$refs['childMenu' + _index]) {
          console.log('accordionclickAction')
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
.main-menu {
  position: relative;
  z-index: 999;
  @include box-shadow();
  &.accordion {
    width: 250px;
  }
  &.vertical {
    // width: 150px;
    @include box-sizing();
    position: absolute;
    top: 0px;
    height: 100%;
  }
  #nav {
    padding: 0px;
    text-align: left;
    background-color: #f5f5f5;
    ul {
      list-style: none;
      margin: 0px;
      padding: 0px 0px;
      li {
        position: relative;
        cursor: pointer;
        a {
          position: relative;
          display: block;
          font-size: 1rem;
          padding: 8px 12px;
          font-weight: normal;
          color: #2c3e50;
          text-decoration: none;
          &.router-link-active,
          &.router-link-exact-active {
            color: lighten(blue, 20%);
          }
          .icon {
            margin-right: 2px;
            pointer-events: none;
          }
          .arrow {
            pointer-events: none;
            position: absolute;
            @include float(rightMiddle);
            right: 5px;
            &.hori {
              right: 8px;
            }
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
      &.vertical,
      &.accordion {
        > li {
          display: block;
        }
      }
      &.horizontal {
        > li {
          display: inline-block;
        }
      }
    }
  }
}
</style>
