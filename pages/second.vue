<template>
  <div class="container">
    <div>

      <ButtonUi theme="icon" type="primary" size="lg" iconAppend="caret-left" />
      <ButtonUi theme="icon" type="primary" size="md" iconAppend="caret-left" />
      <ButtonUi theme="icon" type="primary" size="sm" iconAppend="caret-left" />
      <ButtonUi theme="icon" type="primary" size="xs" iconAppend="caret-left" />
    </div>
    <div>
      <PagingSlider :current="1" :total="4"/>
    </div>
  </div>
</template>

<script setup>
import ButtonUi from '~/components/ui/ButtonUi/ButtonUi.vue';
import PagingSlider from './components/ui/PagingSlider/PagingSlider.vue';

</script>

<style scoped>
.container {
  background-color: antiquewhite;
  height: 100vh;
  display: flex;
  gap: 50px;
}
</style>