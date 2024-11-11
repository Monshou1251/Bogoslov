<template>
    <div class="card-news-list">
        <div class="card-news-list__container">
            <div class="card-news-list__left">

                <div class="card-news-list__datecontainer">
                    <div class="card-news-list__date">
                        {{ formattedDate }}
                    </div>

                    <div class="card-news-list__day">
                        {{ formattedDay }}
                    </div>
                </div>

            </div>

            <div class="card-news-list__content">
                <div class="card-news-list__cards" v-for="(item, index) in groupItems" :key="index">
                    <CardNews :data="item" @toggleBookmarkNews="$emit('toggleBookmarkNews', $event)"/>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import CardNews from '~/components/CardNews/CardNews.vue';

export default {

    props: {
        groupItems: {
            type: Array,
            required: true
        },
        date: {
            type: String,
            required: true
        }
    },
    components: {
        CardNews,
    },
    computed: {
        formattedDate() {
            const dateObject = new Date(this.date);

            const day = dateObject.getDate();
            const months = [
                'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
                'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
            ];
            const month = months[dateObject.getMonth()];

            return `${day} ${month}`;
        },
        formattedDay() {
            const dateObject = new Date(this.date);

            const weekday = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
            const dayOfWeek = weekday[dateObject.getDay()];

            const today = new Date();
            const isToday = dateObject.toDateString() === today.toDateString();

            return isToday ? `Сегодня, ${dayOfWeek}` : dayOfWeek;
        }
    }
};
</script>
<style lang="scss" scoped>
@import "CardNewsList";
</style>