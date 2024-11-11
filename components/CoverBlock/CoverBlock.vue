<template>
  <span class="cover-block">
    <div class="cover-block__overlay">
      <slot />
    </div>
    <!-- <span class="cover-block__logo" ref="logoText">
      БОГОСЛОВ.RU
    </span> -->
    <div class="cover-block__articles">
      <div class="cover-block__articles-one" ref="articles-one">

        <div ref="articlesOneText">
          <div class="cover-block__articles-one-type">
            <span class="cover-block__articles-one-type-icon">
              <Icon :name="coverblock[currentIndex].icon" />
            </span>
            <div v-html="animatedText"></div>
          </div>

          <div class="cover-block__articles-one-text">
            {{ coverblock[currentIndex].text }}
          </div>
        </div>
        <div class="cover-block__articles-one-paging">
          <PagingSlider :current="currentIndex + 1" :total="coverblock.length" @previous="handlePrevious"
            @next="handleNext" />
        </div>

        <div class="cover-block__articles-one-button-container">
          <ButtonUi color="white" class="cover-block__articles-one-button" theme="ghost" text="Подробнее" size="lg"
            :iconPrepend="'arrow-right'" href="/" />
        </div>
      </div>
      <div class="cover-block__articles-two" ref="articles-two">
        <div class="cover-block__articles-two-header">
          главное на портале
        </div>
        <div v-for="item, index in coverblock" :key="index" class="cover-block__articles-two-list">
          {{ item.text }}
        </div>

      </div>
    </div>
  </span>
</template>


<script setup>
import { ref, onMounted, onBeforeUnmount, watch, nextTick, computed } from 'vue';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import Icon from '../ui/Icon/Icon.vue'
import ButtonUi from "../ui/ButtonUi/ButtonUi.vue";
import PagingSlider from './components/ui/PagingSlider/PagingSlider.vue';


const props = defineProps({
  coverblock: Array,
  required: true
})

const logoText = ref(null);
const currentIndex = ref(0);
const articlesOneText = ref(null)
let rotationInterval;

function handlePrevious() {
  if (currentIndex.value > 0) {
    currentIndex.value -= 1;
  }
}

function handleNext() {
  if (currentIndex.value < props.coverblock.length - 1) {
    currentIndex.value += 1;
  }
}


const animatedText = computed(() => {
  return props.coverblock[currentIndex.value].type
    .split('')
    .map((char) => `<span class="char">${char}</span>`)
    .join('');
});

function startRotation() {
  rotationInterval = setInterval(() => {
    gsap.to(".cover-block__articles-one-text", {
      opacity: 0,
      y: 20,
      duration: 1,
      onComplete: () => {
        currentIndex.value = (currentIndex.value + 1) % props.coverblock.length;

        gsap.fromTo(
          ".cover-block__articles-one-text",
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 1 }
        );
      }
    });

  }, 10000);
}


function startTypingAnimation() {
  gsap.fromTo(
    ".char",
    { opacity: 0 },
    {
      opacity: 1,
      duration: 0.05,
      stagger: 0.05,
      ease: "power1.inOut",
    }
  );
}

function coverAnimation() {

  gsap.fromTo(".cover-block__overlay",
    {
      height: "100%",
      delay: 4.5,
      duration: 2,
    },
    {
      height: "0%",
      delay: 4.5,
      duration: 2,
      ease: "power2.out",
      onComplete: enableScrolling,
    }
  );

}

function disableScrolling() {
  document.body.classList.add('no-scroll')
}

function enableScrolling() {
  document.body.classList.remove('no-scroll')
}


watch(currentIndex, () => {
  startTypingAnimation();
});


onMounted(async () => {
  
  await nextTick();
  startRotation()
  startTypingAnimation();

  window.addEventListener('beforeunload', () => {
      localStorage.removeItem('homeAnimationPlayed');
    });

  const animationPlayed = sessionStorage.getItem('homeAnimationPlayed');

  if (!animationPlayed) {
    
    disableScrolling()
    coverAnimation()
    gsap.fromTo(
      articlesOneText.value,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        delay: 5,
        duration: 1,
        ease: "power2.out"
      }
    );
  
    gsap.fromTo(
      ".cover-block__articles-two",
      { opacity: 0 },
      {
        opacity: 1,
        delay: 5,
        duration: 2,
        ease: "power1.in"
      }
    );

    // localStorage.setItem('homeAnimationPlayed', 'true')
    sessionStorage.setItem('homeAnimationPlayed', 'true')
  }

});

onBeforeUnmount(() => {
  clearInterval(rotationInterval);
  // localStorage.removeItem('homeAnimationPlayed');
});


</script>


<style lang="scss">
@import "CoverBlock.scss";
</style>