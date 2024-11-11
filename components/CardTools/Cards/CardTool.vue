<template>
    <div :class="['card-tool', { 'card-tool--small': size === 'small' }]">
        <div class="card-tool__main">
            <div class="card-tool__main-top">
                <div class="card-tool__title">
                    {{ title }}
                </div>
                <div class="card-tool__body">
                    {{ body }}
                </div>
            </div>
            <div v-if="size === 'large'" class="card-tool__bottom">
                <div class="card-tool__list-heading">
                    ОбновлениЕ: весна 2024
                </div>
                <ul>
                    <li class="card-tool__list-item">
                        <span class="card-tool__list-number">329</span>
                        <span class="card-tool__list-suffix">+8</span>
                        <span class="card-tool__list-text">журналов</span>
                    </li>
                    <li class="card-tool__list-item"><span class="card-tool__list-number">329</span><span
                            class="card-tool__list-suffix">+8</span><span class="card-tool__list-text">авторов</span>
                    </li>
                    <li class="card-tool__list-item"><span class="card-tool__list-number">329</span><span
                            class="card-tool__list-suffix">+8</span><span
                            class="card-tool__list-text">организация</span></li>
                    <li class="card-tool__list-item"><span class="card-tool__list-number">15693</span><span
                            class="card-tool__list-suffix">+8</span><span class="card-tool__list-text">статей</span>
                    </li>
                </ul>
            </div>
            <div class="card-tool__right">
                <ButtonUi v-if="true" color="white" class="" theme="ghost" text="Подробнее" size="lg"
                    iconPrepend="arrow-right" href="" />
            </div>
        </div>
        <div class="card-tool__icon">
            <Icon name="huge/book" :size="size === 'small' ? 'lg' : 'xxl'" />
        </div>
    </div>
</template>

<script setup>
import ButtonUi from '~/components/ui/ButtonUi/ButtonUi.vue';
import Icon from '~/components/ui/Icon/Icon.vue';

const props = defineProps({
    title: String,
    body: String,
    size: {
        type: String,
        default: 'large',
    },
})

</script>

<style lang="scss">
@import "CardTool.scss";
</style>