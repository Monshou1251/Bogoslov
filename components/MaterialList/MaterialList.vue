<template>
    <div class="material-list">
        <div
            v-for="item in materials"
            :key="item.uuid"
            class="material-list__item"
        >
            <component :is="cardComponent(item.type)" :data="item"></component>
        </div>
    </div>
</template>

<script>
import CardMaterial from "../CardMaterial/CardMaterial.vue";
import CardMedia from "../CardMedia/CardMedia.vue";
import CardOpinion from "../CardOpinion/CardOpinion.vue";

export default {
    components: {
        CardMaterial,
        CardMedia,
        CardOpinion,
    },
    props: {
        materials: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            cardTypes: {
                review: CardMaterial,
                audio: CardMedia,
                video: CardMedia,
                opinion: CardOpinion,
            },
        };
    },
    methods: {
        cardComponent(type) {
            return this.cardTypes[type.value];
        },
    },
};
</script>
<style lang="scss">
@import "MaterialList.scss";
</style>
