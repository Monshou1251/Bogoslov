<template>
  <div class="header-box container">
    <div class="header-box__top ">

      <NuxtLink to="/" class="header-box__button">
  <span class="header-box__icon">
    <Icon name="circle-back" size="md" />
  </span>
  <div>Главная</div>
</NuxtLink>
      <div class="header-box__title">
        {{ title }}
      </div>
    </div>
    <div class="header-box__filter">
      <div class="header-box__filter-left">
        <div class="header-box__filter-button">
          <Icon name="filter2" size="md" />
        </div>
        <div class="header-box__filter-text">
          Фильтры
        </div>
      </div>
      <div class="header-box__filter-center">
  <div 
    class="header-box__filter-center-item"
    :class="{ active: selectedFilter === 'all-news' }"
    @click="selectFilter('all-news')"
  >
    Все новости
  </div>
  <div 
    class="header-box__filter-center-item"
    :class="{ active: selectedFilter === 'science' }"
    @click="selectFilter('science')"
  >
    Наука
  </div>
  <div 
    class="header-box__filter-center-item"
    :class="{ active: selectedFilter === 'education' }"
    @click="selectFilter('education')"
  >
    Образование
  </div>
</div>

    </div>

  </div>
</template>

<script setup>
import {ref} from 'vue'
import Icon from '../ui/Icon/Icon.vue';


const selectedFilter = ref('all-news')

function selectFilter(filter) {
  selectedFilter.value = filter; 
}

const props = defineProps({
  title: {
    type: String
  }
})

</script>

<style lang="scss">
@import 'HeaderBox.scss';
</style>