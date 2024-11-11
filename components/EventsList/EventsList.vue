<template>
    <div lang="events-list" ref="list">
        <div class="events-list__inner">
            <div class="events-list__date" :class="scrollUp ? 'hidden' : ''">
            <div class="events-list__day">{{ monthDay }}</div>
            <div class="events-list__month">{{ month }}</div>
            <div class="events-list__weekday">{{ weekDay }}</div>
        </div>


        <ul class="events-list__items">
            <li class="events-list__item event"
                v-for="item in data.items"
                :key="item.uuid"
                @click="onEventClick(item)"
            >
                <div class="event__time">{{ item.time }}</div>

                <img :src="item.img" :alt="item.title" class="event__img">

                <div class="event__description">
                    <div class="event-tag">
                        <Icon name="categories" size="sm"/>
                        <span>{{ item.category }}</span>
                        {{ item.location }}
                    </div>

                    <h3 class="event__title">{{ item.title }}</h3>
                    <h4 class="event__subtitle">{{ item.subtitle }}</h4>
                </div>

              <div class="event__org">
                  <div class="event-org__content">
                      <div class="event__org-caption">{{ orgCaption }}</div>
                      <div class="event__org-label">{{ item.org }}</div>
                  </div>

                  <ButtonUi theme="grand"
                            class="event__btn-fav"
                            :class="item.hasBookmark ? 'active' : ''"
                            type= "secondary"
                            size="md"
                            :iconAppend="item.hasBookmark ? 'favorites-active' : 'favorites'"
                            @click.stop="$emit('toggleBookmark', {
                                    id: item.uuid,
                                    hasBookmark: item.hasBookmark
                            })"
                  />
                </div>
            </li>
        </ul>
    </div>
    </div>
</template>

<script>
import Icon from '../ui/Icon/Icon.vue';
import ButtonUi from '../ui/ButtonUi/ButtonUi.vue';

export default {
    name: "EventsList",

    components: {
        Icon,
        ButtonUi,
    },

    props: {
        data: {
            type: Object,
        },
    },

    data: () => ({
        scrollUp: false,
        lastScrollTop: 0,
        isScrolling: null,

        monthDay: "",
        month: "",
        weekDay: "",

        orgCaption: "Организатор",
    }),

    methods: {
        setupDatetime() {
            const dateString = this.data.dt;
            const date = new Date(dateString);

            const months = [
                "января",
                "февраля",
                "марта",
                "апреля",
                "мая",
                "июня",
                "июля",
                "августа",
                "сентября",
                "октября",
                "ноября",
                "декабря",
            ];

            const weekDays = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];

            this.monthDay = date.getDate();
            this.month = months[date.getMonth()];
            this.weekDay = weekDays[date.getDay()];
        },

        scrollHandler() {
            window.clearTimeout(this.isScrolling);

            const currentScrollTop = window.scrollY;
            this.scrollUp = currentScrollTop < this.lastScrollTop;
            this.lastScrollTop = currentScrollTop;

            this.isScrolling = setTimeout(() => (this.scrollUp = false), 500);

            const isListVisible = this.$refs.list?.getBoundingClientRect().top <= 0;
            if(!isListVisible) this.scrollUp = false;
        },

        onEventClick(item){
            this.$router.push( `/events/${item.uuid}`);
        }
    },

    mounted() {
        this.setupDatetime();
        window.addEventListener("scroll", this.scrollHandler);
    },
};
</script>

<style lang="scss" scoped>
@import "EventsList.scss"
</style>
