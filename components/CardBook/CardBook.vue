<template>
    <div class="card-book">
        <div v-if="variant === 'full'" class="card-book__subject">
            <span>{{ data.content }}</span>
            <span>{{ data.subject }}</span>
        </div>

        <div class="card-book__cover">
            <img
                :src="data.img"
                :alt="data.title"
                class="card-book__cover-img"
            />
        </div>

        <div class="card-book__content">
            <div v-if="variant === 'full' || 'large'" class="card-book__type">
                <CardType :type="data.type.name" />
            </div>

            <div class="card-book__title">
                <span
                    v-if="data.type.value != 'book'"
                    class="card-book__title-prefix"
                >
                    {{ titlePrefix }}:
                </span>
                <span>{{ data.title }}</span>
            </div>

            <div class="card-book__author">{{ data.author }}</div>
        </div>

        <div class="card-book__bottom">
            <div class="card-book__info">
                <div class="card-book__translate">{{ data.translate }}</div>
                <div class="card-book__prod">{{ data.prod }}</div>
            </div>

            <div class="card-book__action">
                <ButtonUi
                    theme="grand"
                    class="card-book__action-btn"
                    :class="data.hasBookmark ? 'active' : ''"
                    type="secondary"
                    size="md"
                    :iconAppend="
                        data.hasBookmark ? 'favorites-active' : 'favorites'
                    "
                    @click="
                        $emit('toggleBookmarkBook', {
                            id: data.uuid,
                            hasBookmark: data.hasBookmark,
                        })
                    "
                />
            </div>
        </div>
    </div>
</template>

<script>
import ButtonUi from "../ui/ButtonUi/ButtonUi.vue";
import CardType from "@/components/CardType/CardType.vue";

export default {
    components: {
        CardType,
        ButtonUi,
    },

    props: {
        data: {
            type: Object,
            default: () => {},
        },
        variant: {
            type: String,
            default: "full",
        },
    },
    data() {
        return {
            prefixes: {
                book: "",
                "book-critique": "Рецензия",
                "book-review": "Обзор",
            },
        };
    },
    computed: {
        titlePrefix() {
            return this.prefixes[this.data.type.value];
        },
    },
};
</script>

<style lang="scss" scoped>
@import "CardBook.scss";
</style>
