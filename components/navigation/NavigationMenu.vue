
 /// NavigationMenu
 /// Copyright (c) 2018 Atsushi Miyake. All rights reserved.

<template>
  <div class="navigation__menu">
    <ul>
      <li v-for="item in items">
        <a class="navigation__menu--item" href="#{ item.url }">{ item.title }</a>
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

@Component({})
export default class NavigationMenu extends Vue{
  @Prop() items
}
</script>

<style scoped>
.navigation__menu {
  display: inline-block;

  &--item {
    text-decoration: none;
  }

  ul {
    display: inline-block;
    list-style: none;
  }
}
</style>
