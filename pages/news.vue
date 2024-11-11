<template>
    <div>
        <HeaderBox title="Новости" />
        <div class="pt-48 pt-md-40 pt-lg-40 pb-56 pb-md-40 pb-lg-40 container">
            <NewsBlock :data="newsData" @toggleBookmarkNews="onBookmarkToggleNews"
                :morebutton="$route.name === 'news' ? true : false" />
        </div>
    </div>
</template>

<script>
import ContentBox from '../components/ContentBox/ContentBox.vue'
import NewsBlock from '~/components/NewsBlock/NewsBlock.vue';
import HeaderBox from '~/components/HeaderBox/HeaderBox.vue';


export default {
    components: {
        NewsBlock,
    },

    data() {
        return {
            newsData: {
                important: [
                    {
                        uuid: '1',
                        icon: "lightning",
                        title: "Московская и Санкт-Петербургская духовные академии стали соорганизаторами конференции «Традиционные ценности и образы будущего»",
                        time: "2023-08-28T15:23:00",
                    },
                    {
                        uuid: '2',
                        icon: null,
                        title: "В издательстве ОЦАД вышел в свет сборник материалов конференции «Церковь и время»",
                        time: "2023-08-28T12:17:00",
                    },
                    {
                        uuid: '3',
                        icon: "",
                        title: "Вышел очередной номер журнала «Церковный историк»",
                        time: "2023-08-28T10:45:00",
                        hasBookmark: false,
                    },
                    {
                        uuid: '4',
                        icon: null,
                        title: "Центр христианской психологии открылся в СПбДА",
                        time: "2023-08-28T09:33:00"
                    },
                    {
                        uuid: '5',
                        icon: "info",
                        title: "Вышел в свет очередной выпуск журнала «Вестник Русской христианской гуманитарной академи",
                        time: "2023-08-28T08:14:00",
                    },
                ],
                news: [
                    {
                        dt: "2023-03-15",
                        items: [
                            {
                                uuid: '1',
                                spec: true,
                                img: "/tmp/NewsBlock/newsPage-1.png",
                                title: "Появились новые аргументы против божественной вневременности в современной аналитической теологии и некоторые новые контраргументы",
                                tags: {
                                    category: "Апологетическое богословие",
                                    subcategory: "Философия",
                                },
                                time: "08:10",
                                hasBookmark: false,
                            },
                            {
                                uuid: '2',
                                icon: "",
                                spec: false,
                                img: "/tmp/NewsBlock/newsPage-2.png",
                                title: "Ученых-медиевистов приглашают к Вышел в свет очередной номер журнала «Христианство на Ближнем Востоке»",
                                tags: {
                                    category: "Иконопись",
                                    subcategory: "Пасторское богословие",
                                },
                                time: "08:09",
                                hasBookmark: false,
                            },
                            {
                                uuid: '3',
                                icon: "",
                                spec: false,
                                img: "/tmp/NewsBlock/newsPage-3.png",
                                title: "В издательстве ОЦАД вышел в свет сборник материалов конференции «Церковь и время»",
                                tags: {
                                    category: "Иконопись",
                                    subcategory: "Пасторское богословие",
                                },
                                time: "08:09",
                                hasBookmark: false,
                            },
                        ]
                    },
                    {
                        dt: "2023-03-14",
                        items: [
                            {
                                uuid: '1',
                                spec: false,
                                img: "/tmp/NewsBlock/newsPage-13.svg",
                                title: "Вышел в свет очередной номер журнала «Христианство на Ближнем Востоке»",
                                tags: {
                                    category: "Миссия церкви",
                                    subcategory: "Пасторское богословие",
                                },
                                time: "08:10",
                                hasBookmark: false,
                            },
                            {
                                uuid: '2',
                                icon: "",
                                spec: false,
                                img: "/tmp/NewsBlock/newsPage-11.svg",
                                title: "Ученых-медиевистов приглашают к Вышел в свет очередной номер журнала «Христианство на Ближнем Востоке»",
                                tags: {
                                    category: "Иконопись",
                                    subcategory: "Пасторское богословие",
                                },
                                time: "10:12",
                                hasBookmark: false,
                            },
                        ]
                    },
                    {
                        dt: "2023-03-13",
                        items: [
                            {
                                uuid: '1',
                                spec: false,
                                img: "/tmp/NewsBlock/newsPage-4.svg",
                                title: "Центральный музей древнерусской культуры и искусства имени Андрея Рублёва выпустил каталог выставки «Воссоединение. Деисус XV века»",
                                tags: {
                                    category: "Миссия церкви",
                                    subcategory: "Пасторское богословие",
                                },
                                time: "15:30",
                                hasBookmark: false,
                            },
                        ]
                    },
                    {
                        dt: "2023-02-22",
                        items: [
                            {
                                uuid: '1',
                                spec: false,
                                img: "/tmp/NewsBlock/newsPage-5.svg",
                                title: "Вышел в свет очередной номер журнала «Христианство на Ближнем Востоке»",
                                tags: {
                                    category: "Миссия церкви",
                                    subcategory: "Пасторское богословие",
                                },
                                time: "15:30",
                                hasBookmark: false,
                            },
                            {
                                uuid: '2',
                                spec: true,
                                img: "/tmp/NewsBlock/newsPage-6.svg",
                                title: "Костромская, Рязанская и  Владимирская духовные семинарии преобразованы в Центры подготовки церковных специалистов",
                                tags: {
                                    category: "Миссия церкви",
                                    subcategory: "Пасторское богословие",
                                },
                                time: "15:30",
                                hasBookmark: false,
                            },
                            {
                                uuid: '3',
                                spec: false,
                                img: "/tmp/NewsBlock/newsPage-7.svg",
                                title: "Первая Международная конференция «Халкидонская христология и попытки ее осмысления» пройдет в МДА 30 мая",
                                tags: {
                                    category: "Миссия церкви",
                                    subcategory: "Пасторское богословие",
                                },
                                time: "15:30",
                                hasBookmark: false,
                            },
                            {
                                uuid: '4',
                                spec: false,
                                img: "/tmp/NewsBlock/newsPage-8.svg",
                                title: "В СПбГУ впервые открыт набор абитуриентов на программы бакалавриата Института теологии",
                                tags: {
                                    category: "Миссия церкви",
                                    subcategory: "Пасторское богословие",
                                },
                                time: "15:30",
                                hasBookmark: false,
                            },
                        ]
                    },
                    {
                        dt: "2023-02-12",
                        items: [
                            {
                                uuid: '1',
                                spec: false,
                                img: "/tmp/NewsBlock/newsPage-10.svg",
                                title: "Вышел в свет очередной номер журнала «Христианство на Ближнем Востоке»",
                                tags: {
                                    category: "Миссия церкви",
                                    subcategory: "Пасторское богословие",
                                },
                                time: "15:30",
                                hasBookmark: false,
                            },
                            {
                                uuid: '2',
                                spec: false,
                                img: "/tmp/NewsBlock/newsPage-11.svg",
                                title: "Костромская, Рязанская и  Владимирская духовные семинарии преобразованы в Центры подготовки церковных специалистов",
                                tags: {
                                    category: "Миссия церкви",
                                    subcategory: "Пасторское богословие",
                                },
                                time: "15:30",
                                hasBookmark: false,
                            },
                        ]
                    },
                ]
            },
        }
    },
    methods: {
        async onBookmarkToggle({ id, hasBookmark }) {
            //TODO: save on server
            console.log('onBookmarkToggle')
            const item = this.events.items.find(item => item.uuid === id);
            item.hasBookmark = !hasBookmark;
        },

        async onBookmarkToggleNews({ id, hasBookmark }) {
            const item = this.newsData.news.flatMap(group => group.items).find(item => item.uuid === id);
            if (item) {
                item.hasBookmark = !hasBookmark;
                // TODO: Save updated state to server
            } else {
                console.warn('Item not found with uuid:', id);
            }
        }
    },
    mounted() {

    },
};
</script>

<style></style>