<template>
    <div class="default-layout">
        <client-only>
            <AppHeader
            :class="$route.name === 'index' ? '' : 'dark'"
            :animateLogo="$route.name === 'index' ? true : false"
            />
            <AppHeaderSticky
            :layout="$route.name === 'index' ? '' : 'dark'"
            
            />
        </client-only>

        <div class="default-layout__body">
            <slot />
        </div>

        <AppFooter2 class="" />
    </div>
</template>


<script>
import AppHeaderSticky from '../components/AppHeader/AppHeaderSticky/AppHeaderSticky.vue'
import AppHeader from '../components/AppHeader/AppHeader.vue'

export default {
    components: {
        AppHeader, AppHeaderSticky,
        
    },
};
</script>