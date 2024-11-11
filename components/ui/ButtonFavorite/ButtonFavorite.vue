<template>
    <div class="button-favorite" @click="toggleActive">
        <Icon :name="isActive ? 'favorites-active' : 'favorites'" size="sm" :class="{ 'icon--active': isActive }" />
    </div>
</template>

<script>
import Icon from '../Icon/Icon.vue';

export default {
    components: {
        Icon,
    },
    data() {
        return {
            isActive: false,
        };
    },
    methods: {
        toggleActive() {
            this.isActive = !this.isActive;
        },
    },
};
</script>

<style lang="scss" scoped>
@import "ButtonFavorite";
</style>