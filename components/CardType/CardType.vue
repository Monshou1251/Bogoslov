<template>
    <div class="card-type">
        <Icon name="categories" size="sm" />
        <span>{{ type }}</span>
    </div>
</template>

<script>
import Icon from "@/components/ui/Icon/Icon.vue";
export default {
    components: {
        Icon,
    },
    props: {
        type: {
            type: String,
            default: "Тип контетна",
        },
    },
};
</script>

<style lang="scss" scoped>
@import "CardType.scss";
</style>
