<template>
    <div class="field-select"
        ref="fieldSelect"
        :class="[
            isOpened ? '--is-opened' : null,
            params.theme ? '--theme-' + params.theme : null,
            params.menuPos ? '--pos-' + params.menuPos : null,
        ]"
        tabindex="0"
        >
        <!-- v-click-outside="onClickOutside" -->

        <div class="field-select__value" @click="onFieldClick">
            <div class="field-select__title">
                {{ params.staticTitle || value.label }}
            </div>

            <Icon class="field-select__icon" name="caret-down"/>
        </div>

        <Transition name="slide-fade" :duration="200">
            <div class="field-select__options"
                v-if="isOpened"
                :style="{
                    minWidth: this.params.menuWidth || 'min-content',
                }"
            >

                <ul class="field-select__list" ref="list">
                    <li v-for="item in params.items"
                        :key="item[itemValue]"
                        class="field-select__item"
                        :class="[
                        {
                            '--selected': item[itemValue] === value[itemValue],
                        }
                    ]"
                        @click="onSelect(item)"
                    >
                        <span>{{ item.label }}</span>
                    </li>
                </ul>
            </div>
        </Transition>

    </div>
</template>

<script>
import Icon from '../Icon/Icon.vue'

export default {
    name: 'FieldSelect',

    components: {
        Icon
    },

    props: {
        params: {
            type: Object,
            required: true,
        },
        value: {
            type: Object,
            default: () => ({})
        }
    },

    data: () => ({
        isOpened: false,
        itemValue: 'id',
    }),

    methods: {
        onSelect(item) {
            if(item[this.itemValue] === this.value[this.itemValue]) {
                return;
            }
            this.isOpened = false;
            this.$emit('change', item);
            this.$emit('blur');
        },

        async onFieldClick() {
            if(!this.isOpened) {
                this.$emit('focus');
            } else {
                this.$emit('blur');
            }

            this.isOpened = !this.isOpened;
        },
        onClickOutside(e) {
            if(e?.target?.offsetParent?.id !== this.parentId) {
                this.isOpened = false;
                this.$emit('blur');
            }
        },
    },
}
</script>

<style lang="scss" scoped>
@import "FieldSelect.scss"
</style>