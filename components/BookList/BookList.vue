<template>
    <div class="book-list">
        <div v-for="book in books" :key="book.uuid" class="book-list__item">
            <CardBook :data="book"></CardBook>
        </div>
    </div>
</template>

<script>
import CardBook from "@/components/CardBook/CardBook.vue";

export default {
    components: {
        CardBook,
    },
    props: {
        books: {
            type: Object,
            default: () => {},
        },
    },
};
</script>

<style lang="scss" scoped>
@import "BookList.scss";
</style>
