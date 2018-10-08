<template>
  <navigation-menu :items="items"></navigation-menu>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from "nuxt-property-decorator"
import { State } from "vuex-class"
import NavigationMenu from "../components/navigation/NavigationMenu.vue"

@Component({
  components: {
    NavigationMenu
  }
})
export default class extends Vue {
  @State items
}
</script>
<style scoped>
.header {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana,
    sans-serif;
}

.cards {
  display: flex;
  flex-wrap: wrap;
}
</style>
