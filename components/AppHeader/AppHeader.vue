<template>
    <header class="header">
        <div class="header__top container">
            <div class="header__side-wrap --left">
                <ul class="header__socials">
                    <li class="header__socials-icon" v-for="(icon, i) in socials" :key="i">
                        <ButtonMenu size="sm" :icon="{ name: icon.name }" :url="icon.url" target="_blank" />
                    </li>
                </ul>
            </div>

            <ul class="header__links">
                <li class="header__link" v-for="(link, i) in links" :key="i">
                    <component :is="link.url ? 'a' : 'div'" :href="link.url">
                        {{ link.label }}
                    </component>
                </li>
            </ul>
            <client-only>

                <FieldSelect class="header__select" :params="{
                    ...linksMenuParams,
                    items: links,
                }" :value="links[1]" @change="onLinkClick" />
            </client-only>

            <div class="header__side-wrap">
                <div class="header__right">
                    <ButtonMenu size="sm" @onClick="onChangeLang">{{ mdAndDown ? lang.labelShort : lang.label }}
                    </ButtonMenu>

                    <ButtonMenu :icon="{ name: 'profile-alt', position: 'append' }" size="sm" @onClick="onLogin">
                        Войти
                    </ButtonMenu>
                </div>
            </div>
        </div>

        <div class="header__bottom">
            <div ref="logoText" class="header__bottom-title">
                БОГОСЛОВ.RU
            </div>
        </div>
    </header>
</template>

<script>
import FieldSelect from '../ui/FieldSelect/FieldSelect.vue'
import AppLogo from '../AppLogo/AppLogo.vue'
import ButtonMenu from './ButtonMenu/ButtonMenu.vue'
import Icon from '../ui/Icon/Icon.vue'
import { isMob, isTablet } from "@/assets/js/utils/breakpoints"
import { gsap } from 'gsap'
import { useAnimationStore } from './store/animation';

export default {
    name: 'AppHeader',

    components: {
        Icon, ButtonMenu, AppLogo,
        FieldSelect,

    },

    props: {
        animateLogo: {
            type: Boolean,
            default: false
        }
    },

    data: () => ({
        mdAndDown: false,
        animationStore: useAnimationStore(),
        lang: {
            key: 'en',
            label: 'English',
            labelShort: 'En'
        },

        linksMenuParams: {
            menuWidth: '200px',
            menuPos: 'left',
        },

        socials: [
            {
                name: 'social/telegram',
                url: '/components',
            },
            {
                name: 'social/vk',
                url: '/components',
            },
            {
                name: 'social/rutube',
                url: '/components',
            },
            {
                name: 'social/youtube',
                url: '/components',
            },
        ],

        links: [
            {
                url: '/components',
                id: 'journal',
                label: 'Научный журнал',
            },
            {
                label: 'Богословский портал',
                id: 'portal',
            },
            {
                url: '/components',
                label: 'Онлайн-площадка',
                id: 'streaming',
            },
        ],
    }),

    methods: {
        onChangeLang() {
            alert('Функционал находится в разработке');
        },

        onLogin() {
            alert('Функционал находится в разработке');
        },

        onLinkClick({ url }) {
            window.open = (url, '_blank');
        }
    },

    mounted() {
        this.mdAndDown = isMob() || isTablet();
        window.addEventListener('resize', () => this.mdAndDown = isMob() || isTablet());
        const headerText = document.querySelector('.header__bottom');
        const divHeight = headerText.getBoundingClientRect()
        const startY = window.innerHeight;

        const currentWindowWidth = window.innerWidth;
        let scale

        if (currentWindowWidth >= 1600) {
            scale = 5;
        } else if (currentWindowWidth <= 1600 && currentWindowWidth >= 768) {
            scale = 2.5;
        } else {
            scale = 1.20;
        }


        if (this.animateLogo && !this.animationStore.hasAnimated) {
            const logoText = this.$refs.logoText;

            const timeline = gsap.timeline();

            timeline.fromTo(
                logoText,
                { backgroundPosition: '100%' },
                {
                    backgroundPosition: '0%',
                    duration: 6,
                    ease: 'linear',
                    repeat: 0
                }
            );

            timeline.fromTo(
                logoText,
                {
                    y: startY - divHeight.bottom - scale * 15,
                    scale: scale,
                    zIndex: 100,
                    color: 'transparent'
                },
                {
                    duration: 1.5,
                    y: 0,
                    ease: 'power2.out',
                    scale: 1,
                    transformOrigin: "center center",
                    color: 'inherit'
                },
                "-=1.5"
            );
            this.animationStore.markAsAnimated();
        }

    },
    unmounted() {
    },
}
</script>

<style lang="scss" scoped>
@import "AppHeader.scss"
</style>