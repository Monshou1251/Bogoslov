<template>
    <div class="card-opinion">
        <div v-if="variant === 'full'" class="card-opinion__subject">
            <span>{{ data.content }}</span>
            <span>{{ data.subject }}</span>
        </div>

        <div class="card-opinion__type">
            <CardType :type="data.type.name" />
        </div>

        <div class="card-opinion__title">{{ data.title }}</div>
        <div class="card-opinion__divider"></div>

        <div class="card-opinion__cover">
            <img
                :src="data.img"
                :alt="data.title"
                class="card-opinion__cover-img"
            />
        </div>

        <div class="card-opinion__bottom">
            <div class="card-opinion__info">
                <div class="card-opinion__author">{{ data.author }}</div>
                <div class="card-opinion__date">{{ data.date }}</div>
            </div>
            <div class="card-opinion__action">
                <ButtonUi
                    theme="grand"
                    class="card-opinion__action-btn"
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
@import "CardOpinion.scss";
</style>
