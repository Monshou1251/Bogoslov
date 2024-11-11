<template>
    <div class="banner">
        <div class="banner__left">
            <div class="banner__center">
                <div class="banner__title">
                    <div class="banner__subtitle">
                        {{ data.title.header }}
                    </div>
                    <div class="banner__cursive">
                        {{ data.title.cursive }}
                    </div>
                </div>

                <div class="banner__number">
                    {{ data.number }}
                </div>

                <div class="banner__text">
                    <div class="banner__textbody">
                        {{ data.text }}
                    </div>

                    <ButtonUi :type="data.button.type" :text="data.button.buttontext"/>
                </div>
            </div>
            <div class="banner__footer">
                <div class="banner__partners" v-for="(item, index) in data.partners"
                    :key="index"
                    :data="item">
                    <img :src="item.logo" alt="" class="banner__logo" />
                </div>
            </div>
        </div>

        <div class="banner__right">
            <img :src="data.img" alt="" class="banner__img">
        </div>
    </div>
</template>

<script>
import ButtonUi from '../ui/ButtonUi/ButtonUi.vue';
export default {
    components: {
        ButtonUi
    },
    props: {
        data: Object,
    }
}
</script>

<style lang="scss" scoped>
@import "Banner";
</style>