<template>
    <NuxtLink to="/" class="logo">
        <Icon name="logo/logo" :width="width" :height="height"></Icon>
    </NuxtLink>
</template>

<script>
import Icon from "@/components/ui/Icon/Icon.vue";

export default {
    components: {
        Icon,
    },
    props: {
        width: {
            type: Number,
            default: 366,
        },
        height: {
            type: Number,
            default: 36,
        },
    },
};
</script>

<style lang="scss" scoped>
.logo {
    display: inline-block;
    color: $color-white;
}
</style>
