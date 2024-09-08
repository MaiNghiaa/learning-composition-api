import { defineStore } from "pinia";

export const useFetchData = defineStore({
  id: "data",
  state: () => ({
    test: 0,
  }),
  getters: {
    doubleCount: (state) => state.test * 2,
  },
  actions: {
    update() {
      this.test += 1;
    },
    reset() {
      this.test = 0;
    },
  },
});
