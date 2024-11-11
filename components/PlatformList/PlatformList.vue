<template>
    <div class="platform-list">
        <div
            v-for="item in platforms"
            :key="item.uuid"
            class="platform-list__item"
        >
            <CardPlatform :data="item" />
        </div>
    </div>
</template>

<script>
import CardPlatform from "../CardPlatform/CardPlatform.vue";

export default {
    components: {
        CardPlatform,
    },
    props: {
        platforms: {
            type: Array,
            default: () => [],
        },
    },
};
</script>

<style lang="scss" scoped>
@import "PlatformList.scss";
</style>
