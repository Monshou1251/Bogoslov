<template>
  <component
    :is="!!url ? resolveComponent('NuxtLink') : 'button'"
    :to="url"
    :type="type"
    class="button"
    :class="classList"
    :disabled="disabled" :title="title">
    <span v-if="loading" class="button__spinner">Loading...</span>

    <!-- Left content: Icon + Text -->
    <div class="button__content">
      <span v-if="$slots.iconAppend || iconAppend" class="button__icon left">
        <slot name="iconAppend">
          <Icon v-if="iconAppend" :name="iconAppend" />
        </slot>
      </span>

      <span v-if="text" class="button__text">
        {{ text }}
      </span>

      <span v-if="counter" class="button__counter">
        {{ counter }}
      </span>
    </div>

    <!-- Right content: Secondary Text + Icon -->
    <div v-if="secondaryText || $slots.iconPrepend || iconPrepend" class="button__content">
      <span v-if="secondaryText" class="button__secondary-text">
        {{ secondaryText }}
      </span>

      <span v-if="$slots.iconPrepend || iconPrepend" class="button__icon right">
        <slot name="iconPrepend">
          <Icon v-if="iconPrepend" :name="iconPrepend" />
        </slot>
      </span>
    </div>
  </component>
</template>

<script>
import Icon from "../Icon/Icon.vue";
import { NuxtLink } from '#components';

export default {
  components: {
    Icon,
    NuxtLink
  },
  props: {
    url: {
      type: String,
      default: ''
    },
    theme: {
      type: String,
    },
    text: {
      type: String,
    },
    secondaryText: {
      type: String,
      default: null,
    },
    counter: {
      type: String,
      default: null,
    },
    size: {
      type: String,
    },
    iconAppend: {
      type: String,
      default: null,
    },
    iconPrepend: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
    },
    type: {
      type: String,
      default: "button",
    },
    title: {
      type: String,
    },
    loading: {
      type: Boolean,
    },
    color: {
      type: String
    }
  },
  computed: {
    classList() {
      return {
        [`button--${this.theme}`]: this.theme,
        [`button--${this.type}`]: this.type,
        [`button--${this.size}`]: this.size,
        "button--disabled": this.disabled,
        "button--loading": this.loading,
        [`button--${this.color}`]: this.color,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "ButtonUi";
</style>
