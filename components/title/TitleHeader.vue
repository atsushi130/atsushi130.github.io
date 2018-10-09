
 /// Title
 /// Copyright (c) 2018 Atsushi Miyake. All rights reserved.

<template>
  <div class="title">
    <p align="center">{{ title }}</p>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue
} from "nuxt-property-decorator"

@Component
export default class Title extends Vue {
  name: string = "title"
  @Prop() title: String
}
</script>

<style lang="scss" scoped>
.title {
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  margin: auto;

  p {
    color: white;
    font-size: 50px;
  }
}
</style>
