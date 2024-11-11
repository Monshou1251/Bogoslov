<template>
  <div class="paging-slider">
    <div>
        <ButtonUi
            :color="color"
            theme="icon"
            type="primary"
            size="md"
            iconAppend="caret-left"
            @click="emitPrevious"
            />
    </div>
    <div class="paging-slider__numbers">
        <span>
            {{ current }}
        </span>
        <span class="paging-slider__total">
            <span>
                /
            </span>
            <span>
                {{ total }}
            </span>
        </span>
    </div>
    <div>
        <ButtonUi
        :color="color"
        theme="icon"
        type="primary"
        size="md"
        iconAppend="caret-right"
        @click="emitNext"
        />
    </div>
  </div>
</template>

<script setup>
import ButtonUi from '../ButtonUi/ButtonUi.vue';

const props = defineProps({
    current: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        default: "white",
    }
})

const emit = defineEmits(['previous', 'next']);

function emitPrevious() {
  emit('previous');
}

function emitNext() {
  emit('next');
}

</script>

<style lang="scss">
@import "PagingSlider.scss";
</style>