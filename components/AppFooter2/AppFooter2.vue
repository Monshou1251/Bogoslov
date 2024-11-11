<template>
    <div class="app-footer2">
        <div class="app-footer2__container">
            <div class="app-footer2__top">
                <div class="app-footer2__logo logo">
                    <AppLogo :width="288" :height="28" />
                </div>
                <div class="app-footer2__journal-links">
                    <div class="item__label">
                        ЖУРНАЛ
                    </div>
                    <ul class="item__list">
                        <NuxtLink v-for="item in journalLinks" :key="item.label" :to="item.link"
                            class="item__link">
                            {{ item.label }}
                        </NuxtLink>
                    </ul>
                </div>
                <div class="app-footer2__social-links">
                    <div class="item__label">
                        СОЦСЕТИ
                    </div>
                    <ul class="item__list">
                        <NuxtLink v-for="item in socialLinks" :key="item.label" :to="item.link"
                            class="item__link">
                            {{ item.label }}
                        </NuxtLink>
                    </ul>
                </div>
            </div>
            <div class="app-footer2__bottom">
                <div class="app-footer2__info">
                    <div class="app-footer2__founder item">
                        <p class="item__label">Учредитель</p>
                        <p>АНО «Центр информационных технологий</p>
                        <p>Московской духовной академии</p>
                        <p>Русской Православной Церкви»</p>
                    </div>
                    <div class="app-footer2__roskom item">
                        <p class="item__label">Свидетельство Роскомнадзора</p>
                        <p>ЭЛ № ФС 77 - 86845 от 22.02.2024</p>
                    </div>
                    <div class="app-footer2__address item">
                        <p class="item__label">Адрес</p>
                        <p>141300. Московская область, город Сергиев Посад,</p>
                        <p>территория Троице-Сергиевой Лавры,</p>
                        <p>Академкорпус, аудитория 011</p>
                    </div>
                    <div class="app-footer2__contacts item ">
                        <p class="item__label">Контакты</p>
                        <p>+7 (496) 541-56-42</p>
                        <p>redactor.portala@gmail.com</p>
                    </div>
                </div>
                <div class="app-footer2__bottom-footer">
                    <span class="app-footer2__bottom-footer-year">© 2024—2025</span>
                    <span class="app-footer2__bottom-footer-lang">English version</span>
                    <span class="app-footer2__bottom-footer-co">Charmer. Compot</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            journalLinks: [
                { label: "Выпуски", link: "/" },
                { label: "О журнале", link: "/" },
                { label: "Редакция и редсовет", link: "/" },
                { label: "Новости журнала", link: "/" },
                { label: "Рецензирование", link: "/" },
                { label: "Для авторов", link: "/" },
                { label: "Обратная связь", link: "/" },
                { label: "Правовая информация", link: "/" }
            ],
            socialLinks: [
                { label: "Telegram", link: "/" },
                { label: "ВКонтакте", link: "/" },
                { label: "Rutube", link: "/" },
                { label: "YouTube", link: "/" }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import "AppFooter2.scss";
</style>
