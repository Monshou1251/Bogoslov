<template>
    <div class="card-material">
        <div v-if="variant === 'full'" class="card-material__subject">
            <span>{{ data.content }}</span>
            <span>{{ data.subject }}</span>
        </div>

        <div class="card-material__cover">
            <img
                :src="data.img"
                :alt="data.title"
                class="card-material__cover-img"
            />
        </div>

        <div class="card-material__content">
            <div
                v-if="variant === 'full' || 'large'"
                class="card-material__type"
            >
                <CardType :type="data.type.name" />
            </div>

            <div class="card-material__title">{{ data.title }}</div>
        </div>
        <div class="card-material__bottom">
            <div class="card-material__info">
                <div class="card-material__author">{{ data.author }}</div>
                <div class="card-material__date">{{ data.date }}</div>
            </div>
            <div class="card-material__action">
                <ButtonUi
                    theme="grand"
                    class="card-material__action-btn"
                    :class="data.hasBookmark ? 'active' : ''"
                    type="secondary"
                    size="md"
                    :iconAppend="
                        data.hasBookmark ? 'favorites-active' : 'favorites'
                    "
                    @click="
                        $emit('toggleBookmark', {
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
};
</script>

<style lang="scss" scoped>
@import "CardMaterial.scss";
</style>
