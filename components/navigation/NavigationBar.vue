
/// NavigationBar
/// Copyright (c) 2018 Atsushi Miyake. All rights reserved.

<template>
  <nav id="topNav" class="navigation">
    <div class="navigation__bar">
      <navigation-menu></navigation-menu>
    </div>
  </nav>
</template>

<script lang="ts">

import NavigationMenu from './NavigationMenu.vue'
Vue.component("navigation-menu", NavigationMenu)

import {
  Component,
  Prop,
  Vue
} from "nuxt-property-decorator"

@Component({
  components: {
    NavigationMenu
  }
})
export default class NavigationBar extends Vue {
}
</script>

<style scoped>
.navigation {
  position: fixed;
  right: 0px;
  left: 0px;
  border-bottom: 2px;
  border-color: #1c1c1c;

  a {
    font-family: Ubuntu, "Helvetica Neue", Arial, sans-serif;
    text-decoration: none;
    color: #ffffff;
    -webkit-transition: all .35s;
    -moz-transition: all .35s;
    transition: all .35s;

    &:hover, &:focus {
      color: #c93a48;
      outline: 0;
    }
  }
}
</style>
