<template>
    <div class="news-block">

        <div class="news-block__main">
            <div class="news-block__main-item" v-for="(group, index) in data.news" :key="index">
                <CardNewsList :groupItems="group.items" :date="group.dt"
                    @toggleBookmarkNews="$emit('toggleBookmarkNews', $event)" />

            </div>
            <div v-if="morebutton">
                <ButtonUi size="lg" theme="moredata" text="Загрузить ещё" iconPrepend="arrow-down" />
            </div>
        </div>

        <div class="news-block__right">
            <div class="news-block__stickycontainer">

                <div class="news-block__title">ВАЖНЫЕ НОВОСТИ</div>

                <div v-if="data.important">
                    <CardNews v-for="(item, index) in data.important" :key="index" :data="{ ...item, small: true }"
                        class="news-block__card" />
                </div>
            </div>


        </div>

    </div>
</template>

<script>
import CardNewsList from './Cards/CardNewsList/CardNewsList.vue';
import CardNews from '../CardNews/CardNews.vue';
import ButtonUi from '../ui/ButtonUi/ButtonUi.vue';

export default {
    components: {
        CardNewsList,
        CardNews,
        ButtonUi
    },
    data() {
        return {
            newsMiddleItems: [],
            newsItems: [],
        };
    },
    props: {
        data: {
            type: Object,
        },
        morebutton: {
            type: Boolean,
            default: false
        }
    },
    mounted() {
        console.log(this.morebutton)
    },
    computed: {
    },
    methods: {
    },
};
</script>

<style lang="scss" scoped>
@import "NewsBlock";
</style>