<template>
    <component
        :is="!!url ? resolveComponent('NuxtLink') : 'button'"
        class="button-menu"
        :class="'--' + size"
        @click="$emit('onClick')" :to="url" exact-active-class="active">
        <div v-if="icon.name" class="button-menu__icon-wrap" :class="icon.position === 'append' ? '--append' : ''">
            <Icon class="button-menu__icon" :name="icon.name" />
        </div>

        <div class="button-menu__text" v-if="$slots['default']">
            <slot />
        </div>

    </component>
</template>

<script>
import Icon from '../../ui/Icon/Icon.vue';
import { NuxtLink } from '#components';

export default {
    name: 'ButtonMenu',

    components: {
        Icon,
        NuxtLink
    },

    props: {
        icon: {
            type: Object,
            default: () => ({})
        },

        size: {
            type: String,
            default: 'md',
        },

        url: {
            type: String,
            default: ''
        },
    },
}
</script>

<style lang="scss" scoped>
@import "ButtonMenu.scss"
</style>