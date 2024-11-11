<template>
    <div ref="header" class="sticky-header"
        :class="[
            bgTheme,
            isScrolling ? 'scroll-active' : null,
            layout === 'dark' ? 'dark' : null,
            scrollUp || ($refs.select && $refs.select.isOpened) ? 'sticky-visible' : null,
        ]"
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave"
        
    >
        <div class="sticky-header__wrap container" >
            <div class="sticky-header__btn-wrap">
                <ButtonMenu class="sticky-header__btn" :icon="{ name: 'subjects' }" @click="openMenu" >
                    Рубрики
                </ButtonMenu>
            </div>

            <nav class="sticky-header__nav">
                <ButtonMenu v-for="(item, i) in nav" :key="i" :url="item.url">
                    {{ item.label }}
                </ButtonMenu>
            </nav>

            <FieldSelect ref="select"
                        class="sticky-header__select"
                        :params="{
                            ...navMenuParams,
                            items: nav,
                        }"
                        @change="$router.push($event.url)"
            />

            <div class="sticky-header__btn-wrap">
                <ButtonMenu class="sticky-header__btn" :icon="{ name: 'search', position: 'append'}" @click="openSearch">
                    Поиск
                </ButtonMenu>
            </div>
        </div>
    </div>
</template>

<script>
import FieldSelect from '../../ui/FieldSelect/FieldSelect.vue'
import ButtonMenu from '../ButtonMenu/ButtonMenu.vue'


export default {
    name: 'AppHeaderSticky',

    components: {
        ButtonMenu,
        FieldSelect
    },

    props: {
        layout: String,
    },

    data: () => ({
        coverBlock: null,
        bgTheme: '',

        lastScrollTop: null,
        scrollUp: null,
        isScrolling: false,
        hovered: false,

        delayTimer: 3000,

        navMenuParams: {
            staticTitle: 'Меню',
            theme: 'white',
            menuWidth: '200px',
        },

        nav: [
            {
                url: '/news',
                label: 'Новости',
                id: 'news',
            },
            {
                url: '/components',
                label: 'Материалы',
                id: 'materials',
            },
            {
                url: '/components',
                label: 'Календарь событий',
                id: 'calendar',
            },
            {
                url: '/components',
                label: 'Книги',
                id: 'books',
            },
            {
                url: '/components',
                label: 'Научные инструменты',
                id: 'science',
            },
            {
                url: '/components',
                label: 'О нас',
                id: 'about',
            },
        ]
    }),

    watch: {
        layout(val) {
            this.bgTheme = '';

            if(val !== 'dark') {
                this.coverBlock = document.querySelector('.cover-block');
            }
        },
    },

    methods: {
        openMenu(){
            alert('Функционал находится в разработке');
        },

        openSearch(){
            alert('Функционал находится в разработке');
        },

        scrollHandler(){
            window.clearTimeout(this.isScrolling);

            const currentScrollTop = window.scrollY;

            // Determine scrolling direction
            if (currentScrollTop < this.lastScrollTop) {
                // Scrolling up
                this.scrollUp = true
                this.isScrolling = setTimeout(() => {
                    if (!this.hovered) this.scrollUp = false;
                }, this.delayTimer);
            } else if (currentScrollTop > this.lastScrollTop && !this.hovered) {
                // Scrolling down, hide header after delay if not hovered
                this.isScrolling = setTimeout(() => {
                    if (!this.hovered) this.scrollUp = false;
                }, this.delayTimer);
            }

            this.lastScrollTop = currentScrollTop;

            let coverBlockRect;

            if(this.layout !== 'dark') {
                coverBlockRect = this.coverBlock.getBoundingClientRect();

                if (coverBlockRect.bottom > 0) {
                    this.bgTheme = '';
                    this.navMenuParams.theme = 'white';
                } else {
                    this.bgTheme = 'white';
                    this.navMenuParams.theme = '';
                }
            } else {
                this.bgTheme = 'white';
                this.navMenuParams.theme = '';
            }

        },

        onMouseEnter() {
            this.hovered = true;
            clearTimeout(this.isScrolling);
        },
        onMouseLeave() {
            this.hovered = false;
            this.isScrolling = setTimeout(() => this.scrollUp = false, this.delayTimer);
        }
    },

    mounted() {
        this.coverBlock = document.querySelector('.cover-block');
        window.addEventListener('scroll', this.scrollHandler);
    },
    
    beforeDestroy() {
        window.removeEventListener('scroll', this.scrollHandler);
    }
}
</script>

<style lang="scss" scoped>
@import "AppHeaderSticky.scss"
</style>