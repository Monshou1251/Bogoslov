<template>
    <footer class="footer container">
        <div class="footer__content">
            <div class="footer__logo">
                <AppLogo :width="288" :height="28" />
            </div>
            <div class="footer__journal info">
                <div class="info__label">Журнал</div>
                <ul class="info__list">
                    <NuxtLink
                        v-for="l in journalLinks"
                        :key="l.label"
                        :to="l.link"
                        class="info__link"
                    >
                        {{ l.label }}
                    </NuxtLink>
                </ul>
            </div>

            <div class="footer__social info">
                <div class="info__label">Соцсети</div>
                <ul class="info__list">
                    <NuxtLink
                        v-for="l in socialLinks"
                        :key="l.label"
                        :to="l.link"
                        class="info__link"
                    >
                        {{ l.label }}
                    </NuxtLink>
                </ul>
            </div>

            <div class="footer__divider"></div>

            <div class="footer__column footer__column--founder info">
                <p class="info__label">Учредитель</p>
                <p class="info__text">
                    АНО "Центр информационных технологий Московской духовной
                    академии Русской Православной Церкви"
                </p>
            </div>

            <div class="footer__column footer__column--certificate info">
                <p class="info__label">Свидетельство Роскомнадзора</p>
                <p class="info__text">ЭЛ № ФС 77 - 86845 от 22.02.2024</p>
            </div>

            <div class="footer__column footer__column--address info">
                <p class="info__label">Адрес</p>
                <p class="info__text">
                    141300. Московская область, город Сергиев Посад, территория
                    Троице-Сергиевой Лавры, Академкорпус, аудитория 011
                </p>
            </div>

            <div class="footer__column footer__column--contacts info">
                <p class="info__label">Контакты</p>
                <NuxtLink href="tel:+7(496)5415642" class="footer__link">
                    +7 (496) 541-56-42
                </NuxtLink>
                <NuxtLink
                    href="mailto:redactor.portala@gmail.com"
                    class="footer__link"
                >
                    redactor.portala@gmail.com
                </NuxtLink>
            </div>
            <div class="footer__end">
                <span class="footer__text">© 2024—2025</span>

                <div class="footer__locale">
                    <NuxtLink to="/en" class="footer__link">
                        English version
                    </NuxtLink>
                </div>

                <div class="footer__credits">
                    <NuxtLink
                        to="https://www.charmerstudio.com/"
                        class="footer__link"
                    >
                        Charmer.
                    </NuxtLink>
                    <NuxtLink to="https://www.uplab.ru/" class="footer__link">
                        Uplab
                    </NuxtLink>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import AppLogo from "@/components/AppLogo/AppLogo.vue";

export default {
    components: { AppLogo },
    data() {
        return {
            socialLinks: [
                { label: "Telegram", link: "/" },
                { label: "ВКонтакте", link: "/" },
                { label: "Rutube", link: "/" },
                { label: "YouTube", link: "/" },
            ],
            journalLinks: [
                { label: "Выпуски", link: "/" },
                { label: "О журнале", link: "/" },
                { label: "Редакция и редсовет", link: "/" },
                { label: "Новости журнала", link: "/" },
                { label: "Рецензирование", link: "/" },
                { label: "Для авторов", link: "/" },
                { label: "Обратная связь", link: "/" },
                { label: "Правовая информация", link: "/" },
            ],
        };
    },
};
</script>
<style lang="scss" src="./AppFooter.scss" scoped />
