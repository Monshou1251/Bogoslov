<template>
    <div class="card-media">
        <div v-if="variant === 'full'" class="card-media__subject">
            <span>{{ data.content }}</span>
            <span>{{ data.subject }}</span>
        </div>

        <div class="card-media__cover">
            <img
                :src="data.img"
                :alt="data.title"
                class="card-media__cover-img"
                :class="`card-media__cover-img--${data.type.value}`"
            />
            <p class="card-media__duration">
                <Icon :name="cardIcon" size="sm" />
                <span>{{ data.duration }}</span>
            </p>
        </div>

        <div class="card-media__content">
            <div class="card-media__type">
                <CardType :type="data.type.name" />
            </div>

            <div class="card-media__title">{{ data.title }}</div>
            <div class="card-media__subtitle">{{ data.subtitle }}</div>
        </div>
        <div class="card-media__bottom">
            <div class="card-media__info">
                <div class="card-media__author">{{ data.author }}</div>
                <div class="card-media__date">{{ data.date }}</div>
            </div>
            <div class="card-media__action">
                <ButtonUi
                    theme="grand"
                    class="card-media__action-btn"
                    :class="data.hasBookmark ? 'active' : ''"
                    type="secondary"
                    size="md"
                    :iconAppend="
                        data.hasBookmark ? 'favorites-active' : 'favorites'
                    "
                    @click="
                        $emit('toggleBookmarkMaterial', {
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
import Icon from "../ui/Icon/Icon.vue";

export default {
    components: {
        CardType,
        ButtonUi,
        Icon
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
    computed: {
        cardIcon() {
            return this.data.type.value === "audio"
                ? "mic-active"
                : "video-active";
        },
    },
};
</script>

<style lang="scss" scoped>
@import "CardMedia.scss";
</style>
