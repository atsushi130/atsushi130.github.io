
 /// NavigationMenu
 /// Copyright (c) 2018 Atsushi Miyake. All rights reserved.

<template>
  <div class="navigation__menu">
    <ul>
      <li v-for="item in items">
        <a class="navigation__menu--item" v-bind:href="item.url">{{ item.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue
} from "nuxt-property-decorator"

@Component
export default class NavigationMenu extends Vue {
  name: string = "navigation-item"
  @Prop() items
}
</script>

<style lang="scss" scoped>
.navigation__menu {
  display: inline-block;

  &--item {
    color: white;
    font-size: 20px;
    font-weight: bold;
  }

  a {
    text-decoration: none;
  }

  li {
    display: inline-block;
    list-style: none;
    margin-right: 30px;
    margin-left: 30px;
  }

  ul {
    padding-left: 30px;
  }
}
</style>
