<template>
    <div class="banner-course">
        <div class="banner-course__header">
            <div class="banner-course__icon">
                <img :src="data.icon" alt="" class="banner-course__icon">
            </div>

            <div class="banner-course__title">
                <div class="banner-course__title-header">
                    {{ data.header }}
                </div>
            </div>
        </div>

        <div class="banner-course__center">
            <div class="banner-course__slogan">
                {{ data.title }}
            </div>

            <div class="banner-course__text">
                <div class="banner-course__text-body">
                    {{ data.text }}
                </div>

                <div class="banner-course__button">
                    <ButtonUi :type="data.button.type" :text="data.button.buttontext" iconPrepend="arrow-right" />
                </div>
            </div>
        </div>

        <div class="banner-course__right">
            <img :src="data.img" alt="" class="banner-course__img">
        </div>
    </div>
</template>

<script>
import ButtonUi from '../ui/ButtonUi/ButtonUi.vue';

export default {
    components: {
        ButtonUi,
    },
    props: {
        data: Object,
    }
}
</script>

<style lang="scss" scoped>
@import "BannerCourse";
</style>