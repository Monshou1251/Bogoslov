<template>
  <NuxtIcon :name="iconName" class="icon" :class="sizeClass" />
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: String,
    },
  },
  computed: {
    iconName() {
      return this.name.includes("/")
        ? `ci-${this.name.replace("/", ":")}`
        : `ci:${this.name}`;
    },
    sizeClass() {
      return this.size ? `icon--${this.size}` : "";
    },
  },
};
</script>
<style lang="scss" scoped>
@import "Icon.scss";
</style>
