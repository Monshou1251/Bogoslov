<template>
    <div>
        <CoverBlock :coverblock="coverblock" />
        <ContentBox class="pt-56 pt-md-40 pt-lg-40 pb-56 pb-md-40 pb-lg-40" title="Новости"
            :link="{ text: 'Все новости', url: '/news' }">
            <div class="container">
                <NewsBlock :data="newsData" @toggleBookmarkNews="onBookmarkToggleNews" />
            </div>
        </ContentBox>

        <ContentBox class="pb-96 pb-md-56" title="Материалы" :link="materials.link">
            <MaterialList :materials="materials.items" />
        </ContentBox>

        <Banner :data="journalData" />

        <ContentBox class="pt-56 pt-md-40 pt-lg-40 pb-56 pb-md-40 pb-lg-40" title="Календарь событий"
            :link="events.link">
            <EventsList :data="events" @toggleBookmark="onBookmarkToggle" />
        </ContentBox>

        <CardTools :cards="cards"/>

        <ContentBox class="pb-96 pb-md-56 pt-md-40" title="Книги" :link="books.link">
            <BookList :books="books.items" />
        </ContentBox>

        <BannerCourse :data="courseData" />

        <ContentBox class="pt-56 pt-md-40 pt-lg-40 pb-56 pb-md-40 pb-lg-40 content-box__no-border-sm" title="Партнеры"
            :link="{ text: '', url: '/' }" :isIcon="false">
            <div class="">
                <PartnersBlock :data="partners.items" />
            </div>
        </ContentBox>


    </div>
</template>

<script>
import ContentBox from '../components/ContentBox/ContentBox.vue'
import EventsList from '../components/EventsList/EventsList.vue'
import NewsBlock from '~/components/NewsBlock/NewsBlock.vue';
import PartnersBlock from '~/components/PartnersBlock/PartnersBlock.vue';
import CoverBlock from '~/components/CoverBlock/CoverBlock.vue';
import MaterialList from '~/components/MaterialList/MaterialList.vue';
import BookList from "~/components/BookList/BookList.vue";
import Banner from '~/components/Banner/Banner.vue';
import CardTools from '~/components/CardTools/CardTools.vue';
import BannerCourse from '~/components/BannerCourse/BannerCourse.vue';

export default {
    components: {
        EventsList,
        ContentBox,
        NewsBlock,
        PartnersBlock,
        CoverBlock,
        MaterialList,
        BookList,
        Banner,
        BannerCourse,
        CardTools
    },

    data() {
        return {
            coverblock: [
                {
                    uuid: '1',
                    icon: 'categories',
                    type: 'Научная статья',
                    text: 'Проблема вероучительного развития в паламитском богословии'
                },
                {
                    uuid: '2',
                    icon: 'categories',
                    type: 'Научная статья',
                    text: 'Конференция «Методология современного религиоведения» пройдет в Москве 4-5 октября'
                },
                {
                    uuid: '3',
                    icon: 'categories',
                    type: 'Научная статья',
                    text: 'Проблема зла и теодицеи: метафизика, этика, феноменология'
                },
                {
                    uuid: '4',
                    icon: 'categories',
                    type: 'Научная статья',
                    text: 'Герберт, архиепископ Реймсский'
                },
                {
                    uuid: '5',
                    icon: 'categories',
                    type: 'Научная статья',
                    text: 'Александр Невский: сквозь века в будущее. I. Эпоха'
                },
            ],
            events: {
                dt: "2024-08-13",

                link: {
                    text: "Все события",
                    url: "/",
                },

                items: [
                    {
                        uuid: '1',
                        hasBookmark: false,
                        time: '12:00',
                        img: '/tmp/Events/event-1.svg',
                        category: 'Конференция',
                        location: 'Москва',
                        title: 'Научная конференция «Антиминсы и литургические ткани»',
                        org: 'Церковно-общественный совет при Патриархе Московском и всея Руси по развитию русского церковного пения',
                    },
                    {
                        uuid: '2',
                        hasBookmark: true,
                        time: '16:30',
                        img: '/tmp/Events/event-2.svg',
                        category: 'Открытая лекция',
                        location: 'Москва',
                        title: 'Открытая лекция «Многоликая симметрия»',
                        subtitle: 'Читает Жуковский Марк Сергеевич',
                        org: 'ОЦАД',
                    },
                    {
                        uuid: '3',
                        hasBookmark: false,
                        time: '17:00',
                        img: '/tmp/Events/event-3.svg',
                        category: 'Открытая лекция',
                        location: 'Москва',
                        title: 'Презентация книги трудов А. Ф. Лосева',
                        subtitle: '',
                        org: 'ОЦАД',
                    },
                    {
                        uuid: '4',
                        hasBookmark: true,
                        time: '19:00',
                        img: '/tmp/Events/event-4.svg',
                        category: 'Открытая лекция',
                        location: 'Москва',
                        title: 'Открытая лекция «Византийская икона»',
                        subtitle: 'Читает Жуковский Марк Сергеевич',
                        org: 'ОЦАД',
                    },
                ]
            },
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
                        dt: "2023-08-24",
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
                ]
            },
            materials: {
                link: {
                    text: "Все материалы",
                    url: "/",
                },
                items: [
                    {
                        uuid: "1",
                        hasBookmark: false,
                        type: {
                            value: "review",
                            name: "Аналитический обзор",
                        },
                        content: "Миссия церкви",
                        subject: "Пасторское богословие",
                        title: "Проблема вероучительного развития в паламитском богословии",
                        img: "/tmp/Materials/cover-1.svg",
                        author: "Александр (Голицын), иеромонах",
                        date: "04.12.2023",
                    },
                    {
                        uuid: "2",
                        hasBookmark: false,
                        type: {
                            value: "review",
                            name: "Аналитический обзор",
                        },
                        content: "Миссия церкви",
                        subject: "Пасторское богословие",
                        title: "«Жизнедарные» эпитеты-композиты: к вопросу об атрибуции «Парафразы» Евангелия от Иоанна",
                        img: "/tmp/Materials/cover-2.svg",
                        author: "Александр (Голицын), иеромонах",
                        date: "04.12.2023",
                    },
                    {
                        uuid: "3",
                        hasBookmark: false,
                        type: {
                            value: "review",
                            name: "Аналитический обзор",
                        },
                        content: "Миссия церкви",
                        subject: "Пасторское богословие",
                        title: "Теологический и светский взгляд на феномен одержимости и практику экзорцизма: соотношение подходов",
                        img: "/tmp/Materials/cover-3.svg",
                        author: "Александр (Голицын), иеромонах",
                        date: "04.12.2023",
                    },
                    {
                        uuid: "4",
                        hasBookmark: false,
                        type: {
                            value: "audio",
                            name: "Аудио",
                        },
                        content: "Миссия церкви",
                        subject: "Пасторское богословие",
                        title: "Кто такие пророки и в чём их послание?",
                        subtitle: "Беседа с искусствоведом Ириной Языковой",
                        img: "/images/media-card.png",
                        duration: "45:12",
                        author: "Подкаст Богослов.RU",
                        date: "29.08.2024",
                    },
                    {
                        uuid: "5",
                        hasBookmark: false,
                        type: {
                            value: "opinion",
                            name: "Мнение",
                        },
                        content: "Миссия церкви",
                        subject: "Пасторское богословие",
                        title: "О необходимости проведения границ между религиозными, культурными и философскими убеждениями",
                        img: "/tmp/Materials/userpic.svg",
                        author: "Александр (Голицын), иеромонах",
                        date: "04.12.2023",
                    },
                    {
                        uuid: "6",
                        hasBookmark: false,
                        type: {
                            value: "video",
                            name: "Видео",
                        },
                        content: "Миссия церкви",
                        subject: "Пасторское богословие",
                        title: "Проблема вероучительного развития в паламитском богословии",
                        img: "/tmp/Materials/cover-4.svg",
                        duration: "45:12",
                        author: "Киностудия МДА Богослов",
                        date: "04.12.2023",
                    },
                ],
            },
            journalData: {
                img: '/tmp/BannerJournal/journal.png',
                title: {
                    header: 'Научный журнал',
                    cursive: 'Выпуск'
                },
                number: '№1',
                text: 'Поздравляем вас, дорогие читатели портала, с наступающим Рождеством Христовым и Новым годом!',
                button: {
                    type: 'general',
                    buttontext: 'Перейти в Журнал'
                },
                partners: [
                    {
                        uuid: '1',
                        logo: '/tmp/BannerJournal/partners.svg'
                    },
                    {
                        uuid: '2',
                        logo: '/tmp/BannerJournal/partners-1.svg'
                    },
                    {
                        uuid: '3',
                        logo: '/tmp/BannerJournal/partners-2.svg'
                    },
                    {
                        uuid: '4',
                        logo: '/tmp/BannerJournal/partners-3.svg'
                    },
                    {
                        uuid: '5',
                        logo: '/tmp/BannerJournal/partners-4.svg'
                    },
                ]
            },
            courseData: {
                icon: '/tmp/BannerCourse/skillcup.png',
                img: '/tmp/BannerCourse/course1.png',
                header: 'Курсы модульного обучения',
                title: 'Александр Невский: Сквозь века в будущее. Эпоха',
                text: 'Образовательные курсы от ведущих учёных на платформе Skill Cup',
                button: {
                    type: 'ghost',
                    buttontext: 'Подробнее'
                },
            },
            cards: [
                { id: 1, title: 'Наукометрическая база 1', body: 'Православные теологические журналы: тексты, аналитика, статистика 1' },
                { id: 2, title: 'Наукометрическая база 2', body: 'Православные теологические журналы: тексты, аналитика, статистика 2' },
                { id: 3, title: 'Наукометрическая база 3', body: 'Православные теологические журналы: тексты, аналитика, статистика 3' },
            ],
            books: {
                link: {
                    text: "Все книги",
                    url: "/",
                },

                items: [
                    {
                        uuid: "1",
                        hasBookmark: false,
                        type: {
                            value: "book",
                            name: "Книга",
                        },
                        content: "Миссия церкви",
                        subject: "Пасторское богословие",
                        title: "Теология и социальная теория. По ту сторону секулярного порядка",
                        img: "/images/book-cover.jpg",
                        author: "Джон Милбанк",
                        translate:
                            "Перевод А. Кырлежева, под редакцией А. Гагинского",
                        prod: "Издательство ББИ, 2023",
                    },
                    {
                        uuid: "2",
                        hasBookmark: false,
                        type: {
                            value: "book",
                            name: "Книга",
                        },
                        content: "Миссия церкви",
                        subject: "Пасторское богословие",
                        title: "Метафизика. Современное видение",
                        img: "/images/book-cover.jpg",
                        author: "Майкл Дж. Лакс, Томас М. Крисп",
                        translate:
                            "Перевод М. В. Семилеткиной, под научной редакцией С. М. Левина",
                        prod: "Издательство НИУ ВШЭ, 2024",
                    },
                    {
                        uuid: "3",
                        hasBookmark: false,
                        type: {
                            value: "book-critique",
                            name: "Книжная рецензия",
                        },
                        content: "Миссия церкви",
                        subject: "Пасторское богословие",
                        title: "«Образ, икона, экономика. Византийские истоки современного воображаемого»",
                        img: "/images/book-cover2.jpg",
                        author: "Майкл Дж. Лакс, Томас М. Крисп",
                        prod: "Главин Н. И., 11.06.2024",
                    },
                    {
                        uuid: "4",
                        hasBookmark: false,
                        type: {
                            value: "book",
                            name: "Книга",
                        },
                        content: "Миссия церкви",
                        subject: "Пасторское богословие",
                        title: "Религия в цифровом обществе",
                        img: "/images/book-cover.jpg",
                        author: "Под редакцией Алексей Бодров и Михаила Толстопятенко",
                        prod: "Издательство ББИ, 2024",
                    },
                    {
                        uuid: "5",
                        hasBookmark: false,
                        type: {
                            value: "book",
                            name: "Книга",
                        },
                        content: "Духовная литература",
                        subject: "Духовное наставление",
                        title: "Избранные духовные наставления, утешения и пророчества",
                        img: "/images/book-cover.jpg",
                        author: "Серафим Саровский",
                        translate:
                            "Перевод А. Кырлежева, под редакцией А. Гагинского",
                        prod: "Издательство ББИ, 2023",
                    },
                    {
                        uuid: "6",
                        hasBookmark: false,
                        type: {
                            value: "book",
                            name: "Книга",
                        },
                        content: "Беседы",
                        subject: "Духовная литература",
                        title: "О Боге и человеке: в вопросах и ответах",
                        img: "/images/book-cover.jpg",
                        author: "Протоиерей Андрей Ткачев",
                        prod: "V–A–C Press, 2022",
                    },
                    {
                        uuid: "7",
                        hasBookmark: false,
                        type: {
                            value: "book",
                            name: "Книга",
                        },
                        content: "Вечные вопросы",
                        subject: "Духовные ценности",
                        title: "Апостасия. Отступничество",
                        img: "/images/book-cover.jpg",
                        author: "Людмила Разумовская",
                        translate:
                            "Перевод с английского М. В. Семилеткиной, под научной редакцией С. М. Левина",
                        prod: "Издательство НИУ ВШЭ, 2024",
                    },
                    {
                        uuid: "8",
                        hasBookmark: false,
                        type: {
                            value: "book",
                            name: "Книга",
                        },
                        content: "Богословие",
                        subject: "Вечные вопросы",
                        title: "Жизнь после смерти согласно Православной Традиции",
                        img: "/images/book-cover.jpg",
                        author: "Жан-Клод Ларше",
                        translate:
                            "Под редакцией Алексей Бодров и Михаила Толстопятенко",
                        prod: "Издательство ББИ, 2024",
                    },
                ],
            },
            partners: {
                items: [
                    {
                        uuid: '1',
                        img: "/tmp/PartnersBlock/1.png",
                    },
                    {
                        uuid: '2',
                        img: "/tmp/PartnersBlock/2.png",
                    },
                    {
                        uuid: '3',
                        img: "/tmp/PartnersBlock/3.png",
                    },
                    {
                        uuid: '4',
                        img: "/tmp/PartnersBlock/4.png",
                    },
                    {
                        uuid: '5',
                        img: "/tmp/PartnersBlock/5.png",
                    },
                    {
                        uuid: '6',
                        img: "/tmp/PartnersBlock/6.png",
                    },
                    {
                        uuid: '7',
                        img: "/tmp/PartnersBlock/7.png",
                    },
                    {
                        uuid: '8',
                        img: "/tmp/PartnersBlock/8.png",
                    },
                    {
                        uuid: '9',
                        img: "/tmp/PartnersBlock/9.png",
                    },
                    {
                        uuid: '10',
                        img: "/tmp/PartnersBlock/10.png",
                    },
                    {
                        uuid: '11',
                        img: "/tmp/PartnersBlock/11.png",
                    },
                    {
                        uuid: '12',
                        img: "/tmp/PartnersBlock/12.png",
                    },
                    {
                        uuid: '13',
                        img: "/tmp/PartnersBlock/13.png",
                    },
                    {
                        uuid: '14',
                        img: "/tmp/PartnersBlock/14.png",
                    },
                ]
            }
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
    mounted() { },
};
</script>

<style lang="scss">
//TODO: Temp. Move styles to CoverBlock in relevant task
// .cover {
//     margin-top: rem(-254);
//     padding-bottom: rem(32);
//     height: 100vh;
//     min-height: 600px;
//     background: center / cover no-repeat url('/images/main-page-plug.png');

//     display: flex;
//     align-items: flex-end;
//     color: $color-white;

//     @include media-breakpoint-down(md) {
//         margin-top: rem(-264);
//     }

//     @include media-breakpoint-down(sm) {
//         margin-top: rem(-274);
//     }
// }</style>
