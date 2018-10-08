<template>
  <navigation-bar :items="items"></navigation-bar>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from "nuxt-property-decorator"
import { State } from "vuex-class"
import NavigationBar from "../components/navigation/NavigationBar.vue"

@Component({
  components: {
    NavigationBar
  }
})
export default class extends Vue {
  @State items
}
</script>
