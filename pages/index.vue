<template>
  <div>
    <navigation-bar :items="items"></navigation-bar>
    <title-header title="PORTFOLIO"></title-header>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from "nuxt-property-decorator"
import { State } from "vuex-class"
import NavigationBar from "../components/navigation/NavigationBar.vue"
import TitleHeader from "../components/title/TitleHeader.vue"

@Component({
  components: {
    NavigationBar,
    TitleHeader
  }
})
export default class extends Vue {
  @State items
}
</script>
