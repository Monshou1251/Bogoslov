<template>
    <div class="card-partner">
        <div class="card-partner__wrap">
            <img :src="data.img" alt="" />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            required: true,
        }
    }
};
</script>
<style lang="scss" scoped>
@import "CardPartner";
</style>