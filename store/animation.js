// store/animation.js
import { defineStore } from 'pinia';

export const useAnimationStore = defineStore('animation', {
  state: () => ({
    hasAnimated: false,
  }),
  actions: {
    markAsAnimated() {
      this.hasAnimated = true;
    },
  },
});
