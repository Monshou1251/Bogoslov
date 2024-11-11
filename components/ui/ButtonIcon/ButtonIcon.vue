<template>
    <button
        class="button-icon"
        :class="[`button-icon--${size}`, `button-icon--${btnType}`]"
        :disabled="disabled"
    >
        <Icon :name="iconName" />
    </button>
</template>

<script>
import Icon from "../Icon/Icon.vue";
export default {
    components: {
        Icon,
    },
    props: {
        
        btnType: {
            type: String,
            default: "box",
        },
        size: {
            type: String,
            default: "lg",
        },
        iconName: {
            type: String,
            required: true,
        },
        disabled: {
            type: Boolean,
            default: false,
            required: false,
        },
    },
};
</script>

<style lang="scss" scoped>
@import "ButtonIcon.scss";
</style>
