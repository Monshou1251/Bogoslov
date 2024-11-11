<template>
    <div class="partners-block">
        <div class="partners-block__el" v-for="(partner, index) in data" :key="index">
            <CardPartner :data="partner" />
        </div>
    </div>
</template>

<script>
import CardPartner from '../CardPartner/CardPartner.vue';

export default {
    components: {
        CardPartner,
    },
    props: {
        data: {
            type: Array,
            required: true,
        }
    },
};
</script>
<style lang="scss" scoped>
@import "PartnersBlock";
</style>