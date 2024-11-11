<template>
  <div class="events-calendar">
    <div class="events-calendar__month" v-for="month in items" :key="month.month">

      <h4 class="events-calendar__month-title">
        {{ setupMonthName(month.month) }}

        <sup class="events-calendar__month-cnt">({{ getEventsCount(month.items) }})</sup>
      </h4>

      <EventsList v-for="(item, i) in month.items"
                  :key="i"
                  :data="item"
                  @toggleBookmark="onBookmarkToggle($event, i, month.month)"
      />
    </div>

  </div>
</template>

<script>
import EventsList from '../EventsList/EventsList.vue'

export default {
  name: 'EventsCalendar',

  components: {
    EventsList
  },

  props: {
    items: {
      type: Array,
      required: true,
    },
  },

  methods: {
    setupMonthName(month) {
      const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
        'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

      return months[+month - 1];
    },

    getEventsCount(monthItem) {
      return monthItem.reduce((acc, item) => acc + +item.items.length, 0)
    },

    onBookmarkToggle(event, index, month) {
      console.log('Im in EventsCalendar');
      
      this.$emit('bookmarkToggle', { value: event, index, month })
    },
  }
}
</script>

<style lang="scss" scoped>
@import "EventsCalendar.scss";
</style>