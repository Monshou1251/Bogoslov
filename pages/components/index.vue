<template>
    <div class="container">
        <div class="pt-32 pb-32">
            <h1 style="border-bottom: 1px solid">Typography Heading</h1>

            <div class="pt-32 pb-32">
                <div class="h0 pt-8 pb-8">Heading 0</div>
                <div class="h1 pt-8 pb-8">Heading 1</div>
                <div class="h2 pt-8 pb-8">Heading 2</div>
                <div class="h2 pt-8 pb-8" style="font-style: italic">
                    Heading 2s
                </div>
                <div class="h3 pt-8 pb-8">Heading 3</div>
                <div class="h3 pt-8 pb-8" style="font-style: italic">
                    Heading 3s
                </div>
                <div class="h4 pt-8 pb-8">Heading 4</div>
                <div class="h4-secondary pt-8 pb-8">Heading 4s</div>
                <div class="h4-tertiary pt-8 pb-8">Heading 4t</div>
                <div class="h5 pt-8 pb-8">Heading 5</div>
                <div class="hx-0 pt-8 pb-8">Heading x0</div>
                <div class="hx-0-secondary pt-8 pb-8">Heading x0s</div>
                <div class="hx-1 pt-8 pb-8">Heading x1</div>
                <div class="hx-2 pt-8 pb-8">Heading x2</div>
            </div>
        </div>

        <div class="pt-32 pb-32">
            <h1 style="border-bottom: 1px solid">Typography Text</h1>

            <div class="pt-32 pb-32">
                <div class="text-initial pt-8 pb-8">text-initial</div>
                <div class="text-lead pt-8 pb-8">text-lead</div>
                <div class="text-1 pt-8 pb-8">text-1 - default body text</div>
                <div class="text-1 pt-8 pb-8" style="font-style: italic">
                    text-1 italic
                </div>
                <div class="text-2 pt-8 pb-8">text-2</div>
                <div class="text-2 pt-8 pb-8" style="font-style: italic">
                    text-2 italic
                </div>
            </div>
        </div>

        <div class="pt-32 pb-32">
            <h1 style="border-bottom: 1px solid">Typography Caption</h1>

            <div class="pt-32 pb-32">
                <div class="caption-0 pt-8 pb-8">caption-0</div>
                <div class="caption-1 pt-8 pb-8">caption-1</div>
                <div class="caption-2 pt-8 pb-8">caption-2</div>
            </div>
        </div>

        <div class="pt-32 pb-32">
            <h1 style="border-bottom: 1px solid">NavArrow</h1>
            <div class="pt-32">
                <NavArrow
                    :count="120"
                    :portion="32"
                    @change="(offset) => fetchItems(offset)"
                />
            </div>
            <div class="pt-8">
                <NavArrow
                    :count="4"
                    :portion="1"
                    type="gallery"
                    @change="(i) => changeItem(i)"
                />
            </div>
        </div>
    </div>
</template>

<script>
import NavArrow from "~/components/ui/NavArrow/NavArrow.vue";
export default {
    components: {
        NavArrow,
    },
    methods: {
        fetchItems(offset) {
            alert(`Запрос на сервер с оффсетом: ${offset}`);
        },
        changeItem(index) {
            alert(`Сменили на  item: ${index}`);
        },
    },
};
</script>

<style lang="scss" scoped></style>
