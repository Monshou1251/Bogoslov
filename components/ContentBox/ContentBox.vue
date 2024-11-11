<template>
    <section class="content-box container">
        <header class="content-box__header">
            <h4 class="content-box__title">{{ title }}</h4>
        </header>

        <slot />


        <div class="content-box__bottom">
            <ButtonUi
                v-if="link.url"
                class="content-box__link"
                theme="ghost"
                :text="link.text"
                size="lg"
                :iconPrepend="isIcon ? 'arrow-right' : ''"
                :url="link.url"
            />
        </div>
    </section>
</template>

<script>
import ButtonUi from '../ui/ButtonUi/ButtonUi.vue'

export default {
    name: "ContentBox",

    components: {
        ButtonUi,
    },

    computed: {
        isInternalLink() {
            return this.link.url && this.link.url.startsWith('/');
        },
    },

    props: {
        title: String,
        link: {
            type: Object,
            default: () => ({}),
        },
        isIcon: {
            type: Boolean,
            default: true
        }
    },
};
</script>

<style lang="scss" scoped>
@import "ContentBox";
</style>
