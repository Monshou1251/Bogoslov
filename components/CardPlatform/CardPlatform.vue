<template>
    <div class="card-platform">
        <div class="card-platform__cover">
            <img
                :src="data.img"
                :alt="data.title"
                class="card-platform__cover-img"
            />
        </div>

        <div class="card-platform__content">
            <div class="card-platform__type">
                <CardType :type="data.type.name" />
            </div>

            <div class="card-platform__title">
                <div class="card-platform__second-title">{{ dates }}</div>
                <div class="card-platform__first-title"></div>
                {{ data.title }}
            </div>

            <div class="card-platform__bottom">
                <div class="card-platform__info">
                    <p class="card-platform__location">{{ data.location }}</p>
                    <p class="card-platform__city">{{ data.city }}</p>
                </div>

                <div class="card-platform__action">
                    <ButtonUi
                        theme="grand"
                        class="card-platform__action-btn"
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
    </div>
</template>

<script>
import ButtonUi from "@/components/ui/ButtonUi/ButtonUi.vue";
import CardType from "@/components/CardType/CardType.vue";

export default {
    components: {
        ButtonUi,
        CardType,
    },

    props: {
        data: {
            type: Object,
            default: () => {},
        },
    },

    computed: {
        dates() {
            const formatDate = (date) =>
                date.toLocaleString("ru", { month: "long", day: "numeric" });
            const formatTime = (date) =>
                date.toLocaleTimeString("ru", {
                    hour: "2-digit",
                    minute: "2-digit",
                });

            const start = new Date(this.data.startDate);
            const end = this.data.endDate ? new Date(this.data.endDate) : null;

            const [startDay, startMonth] = formatDate(start).split(" ");
            const startTimeString = formatTime(start);

            if (!this.data.endDate) {
                return `${startDay} ${startMonth}, ${startTimeString}`;
            }

            const [endDay, endMonth] = formatDate(end).split(" ");
            const endTimeString = formatTime(end);

            if (startMonth === endMonth && startTimeString === endTimeString) {
                return `${startDay} ${startMonth}, ${startTimeString}`;
            }

            if (startDay === endDay && startMonth === endMonth) {
                return `${startDay} ${startMonth}, ${startTimeString} - ${endTimeString}`;
            }

            if (startMonth === endMonth) {
                return `${startDay}-${endDay} ${startMonth}, ${startTimeString}`;
            }

            return `${startDay} ${startMonth}, ${startTimeString} - ${endDay} ${endMonth}, ${endTimeString}`;
        },
    },
};
</script>

<style lang="scss" scoped>
@import "CardPlatform.scss";
</style>
