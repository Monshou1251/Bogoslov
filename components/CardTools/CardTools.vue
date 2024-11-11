<template>
  <div class="card-tools">
    <CardTool
      v-for="card in cards"
      :key="card.id"
      :size="card.id === activeCardId ? 'large' : 'small'"
      :title="card.title"
      :body="card.body"
      @click="setActiveCard(card.id)"
      class="card-tools__item"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CardTool from './Cards/CardTool.vue';

const props = defineProps({
  cards: {
    type: Array,
    required: true
  }
});


const activeCardId = ref(props.cards[0].id); 

function setActiveCard(id) {
  activeCardId.value = id;
}
</script>

<style lang="scss">
@import 'CardTools.scss';
</style>
