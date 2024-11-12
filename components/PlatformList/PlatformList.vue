<template>
    <div class="platform-list">
        <div
            v-for="item in platforms"
            :key="item.uuid"
            class="platform-list__item"
        >
            <CardPlatform :data="item" @toggleBookmarkPlatform="onBookmarkPlatform"/>
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
    methods: {
        async onBookmarkPlatform({id, hasBookmark}) {
            this.$emit("toggleBookmarkPlatform", {id, hasBookmark})
        }
    }
};
</script>

<style lang="scss" scoped>
@import "PlatformList.scss";
</style>
