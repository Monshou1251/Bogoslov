export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('click-outside', {
        mounted (el,binding) {
            el.clickOutsideEvent = function (event) {
                if (!(el == event.target || el.contains(event.target))) {
                    binding.value(event);
                    return
                }
            };

            document.body.addEventListener('click', el.clickOutsideEvent)
        },
    })
})