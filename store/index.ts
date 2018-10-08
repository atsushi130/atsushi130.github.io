
import Item from "../models/Item"

export const state = () => ({
  items: []
})

export const mutations = {
  setItems(state, items) {
    state.items = items
  }
}

export const actions = {
  async nuxtServerInit({ commit }, { app }) {

    const items = [
      new Item("google", "https://google.com"),
      new Item("Facebook", "https://www.facebook.com"),
      new Item("Instagram", "https://www.instagram.com")
    ]

    commit("setItems", items)
  }
}
