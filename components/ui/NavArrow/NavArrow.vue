<template>
    <div class="nav-arrow" :class="`nav-arrow--${type}`">
        <ButtonIcon
            class="nav-arrow__btn"
            icon-name="arrow-left"
            :size="btnSize"
            :disabled="isPrevDisabled"
            @click="prev"
        />

        <span class="nav-arrow__text" @click="prev">
            <span class="nav-arrow__current">{{ currentRange }}</span>
            <span class="nav-arrow__total"> / {{ count }}</span>
        </span>

        <ButtonIcon
            class="nav-arrow__btn"
            icon-name="arrow-right"
            :size="btnSize"
            :disabled="isNextDisabled"
            @click="next"
        />
    </div>
</template>

<script>
import ButtonIcon from "@/components/ui/ButtonIcon/ButtonIcon.vue";

export default {
    components: {
        ButtonIcon,
    },
    props: {
        count: {
            type: Number,
        },
        portion: {
            type: Number,
            default: 1,
        },
        type: {
            type: String,
            default: "pagination",
        },
    },
    emits: ["change"],
    data() {
        return {
            page: 1,
        };
    },
    computed: {
        currentRange() {
            return this.type === "pagination"
                ? `${this.offset + 1} - ${this.lastItemIndex}`
                : this.page;
        },

        isPrevDisabled() {
            return this.type === "pagination" && this.page === 1;
        },

        isNextDisabled() {
            return (
                this.type === "pagination" && this.lastItemIndex >= this.count
            );
        },

        pagesTotal() {
            return Math.ceil(this.count / this.portion);
        },

        lastItemIndex() {
            return this.page * this.portion > this.count
                ? this.count
                : this.page * this.portion;
        },

        btnSize() {
            return this.type === "pagination" ? "lg" : "md";
        },

        offset() {
            return this.page * this.portion - this.portion;
        },
    },
    methods: {
        next() {
            if (this.isNextDisabled) return;
            this.page =
                this.page === this.pagesTotal ? (this.page = 1) : this.page + 1;
            this.changeStep();
        },
        prev() {
            if (this.isPrevDisabled) return;
            this.page =
                this.page === 1 ? (this.page = this.pagesTotal) : this.page - 1;
            this.changeStep();
        },
        changeStep() {
            if (this.type === "pagination") {
                this.$emit("change", this.offset);
            } else {
                this.$emit("change", this.page);
            }
        },
    },
};
</script>

<style scoped>
@import "NavArrow.scss";
</style>
