<template>
  <div class="main-header">
    <mainMenu :menus="menus" :mode="mode" :collapsed="menuCollapsed" />
    <div class="colBtn">
      <button class="btnA" @click="menuVerticalAction('vertical')">Vertical</button>
      <button class="btnA" @click="menuVerticalAction('horizontal')">Horizontal</button>
      <button class="btnA" @click="menuVerticalAction('accordion')">Accordion</button>
      <button class="btnA" @click="menuCollapsedAction()">Collapsed ?</button>
    </div>
  </div>
</template>

<script>
import mainMenu from '@/components/menu.vue'

export default {
  name: 'mainHeader',
  components: {
    mainMenu
  },
  data() {
    return {
      menus: [
        {
          text: 'Home',
          icon: 'home',
          url: '/home'
        },
        {
          text: 'About',
          icon: 'settings',
          url: '/about',
          menus: [
            {
              text: 'login1',
              url: '/login',
              menus: [
                {
                  text: 'login1a login1a login1a ',
                  url: '/login',
                  menus: [
                    {
                      text: 'login2a',
                      icon: 'settings',
                      url: '/login'
                    },
                    {
                      text: 'task2b',
                      url: '/task'
                    }
                  ]
                },
                {
                  text: 'task1b',
                  url: '/task'
                }
              ]
            },
            {
              text: 'task1',
              url: '/task',
              menus: [
                {
                  text: 'login2a',
                  icon: 'settings',
                  url: '/login'
                },
                {
                  text: 'task2b',
                  url: '/task'
                }
              ]
            }
          ]
        },
        {
          text: 'Login',
          icon: 'user',
          url: '/login'
        },
        {
          text: 'Task',
          icon: 'write',
          url: '/task',
          menus: [
            {
              text: 'login1',
              url: '/login',
              menus: [
                {
                  text: 'login1a login1a login1a ',
                  url: '/login',
                  menus: [
                    {
                      text: 'login2a',
                      icon: 'settings',
                      url: '/login'
                    },
                    {
                      text: 'task2b',
                      url: '/task'
                    }
                  ]
                },
                {
                  text: 'task1b',
                  url: '/task'
                }
              ]
            },
            {
              text: 'task1',
              url: '/task',
              menus: [
                {
                  text: 'login2a',
                  icon: 'settings',
                  url: '/login'
                },
                {
                  text: 'task2b',
                  url: '/task'
                }
              ]
            }
          ]
        },
        {
          text: 'CSS',
          icon: 'bookmark-alt',
          url: '/css-transition'
        }
      ],
      mode: 'vertical',
      menuCollapsed: false
    }
  },
  props: {
    // msg: String
  },
  methods: {
    menuVerticalAction: function(_type) {
      this.mode = _type
    },
    menuCollapsedAction: function() {
      this.menuCollapsed = !this.menuCollapsed
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/_partial/function';
.main-header {
  .colBtn {
    position: absolute;
    bottom: 0%;
    right: 0%;
    .btnA {
      border: 1px solid #000;
      padding: 5px 10px;
      cursor: pointer;
    }
  }
}
</style>
