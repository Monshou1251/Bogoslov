<template>
    <div class="card-main" :class="variantClass">
        <div class="card-main__image">
            <img :src="data.img" alt="">
        </div>
        <div class="card-main__content">

            <div class="card-main__title">
                <span v-if="data.icon" class="card-main__icon">
                    <Icon :name="data.icon" class="sm" />
                </span>
                {{ data.title }}
            </div>

            <div class="card-main__bottom">
                <div class="card-main__text">

                    <div class="card-main__date">
                        {{ formattedTime }}
                    </div>

                    <div class="card-main__category">
                        <div class="card-main__categorytext">
                            {{ data.tags?.category }}
                        </div>

                        <Icon name="dot" size="sm" />

                        <div class="card-main__categorytext">
                            {{ data.tags?.subcategory }}
                        </div>
                    </div>

                </div>
                
                <div class="card-main__button">
                    <!-- <Icon name="favorites" size="sm" /> -->

                    <ButtonUi theme="grand"
                                class="card-main__btn-fav"
                                :class="data.hasBookmark ? 'active' : ''"
                                type= "secondary"
                                size="sm"
                                :iconAppend="data.hasBookmark ? 'favorites-active' : 'favorites'"
                                @click.stop="$emit('toggleBookmarkNews', {
                                        id: data.uuid,
                                        hasBookmark: data.hasBookmark
                                })"
                      />
                </div>

            </div>
        </div>
    </div>
</template>


<script>
import Icon from '../ui/Icon/Icon.vue';
import ButtonUi from '../ui/ButtonUi/ButtonUi.vue';

export default {
    components: {
        Icon,
        ButtonUi
    },
    computed: {
        variantClass() {
            if (this.data.small) {
                return 'card-main--small';
            }

            return this.data.spec ? 'card-main--spec' : 'card-main--default';
        },
        formattedTime() {
            if (this.data.small) {
                const currentDate = new Date();
                const inputDate = new Date(this.data.time);

                const isToday = currentDate.toDateString() === inputDate.toDateString();

                const yesterday = new Date(currentDate);
                yesterday.setDate(currentDate.getDate() - 1);
                const isYesterday = yesterday.toDateString() === inputDate.toDateString();

                const hours = inputDate.getHours().toString().padStart(2, '0');
                const minutes = inputDate.getMinutes().toString().padStart(2, '0');
                const formattedTime = `${hours}:${minutes}`;

                if (isToday) {
                    return `Сегодня, ${formattedTime}`;
                } else if (isYesterday) {
                    return `Вчера, ${formattedTime}`;
                } else {
                    const day = inputDate.getDate();
                    const months = [
                        'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
                        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
                    ];
                    const month = months[inputDate.getMonth()];
                    return `${day} ${month}, ${formattedTime}`;
                }
            }

            return this.data.time
        }


    },
    props: {
        data: Object
    },

};
</script>

<style lang="scss" scoped>
@import "CardNews";
</style>