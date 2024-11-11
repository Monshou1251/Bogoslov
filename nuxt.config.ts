// https://nuxt.com/docs/api/configuration/nuxt-config
import fs from "fs";
import path from "path";

const CUSTOM_ICON_DIR = "assets/icons";

const customIconsDir = path.resolve(__dirname, CUSTOM_ICON_DIR);
const customCollection = fs
    .readdirSync(customIconsDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

const generateCustomIconsArray = () => {
    const rootIconFolder = {
        prefix: "ci",
        dir: `./${CUSTOM_ICON_DIR}`,
    };
    const childrenIconFolders = customCollection.map((dir) => ({
        prefix: `ci-${dir}`,
        dir: `./${CUSTOM_ICON_DIR}/${dir}`,
    }));
    return [rootIconFolder, ...childrenIconFolders];
};

export default defineNuxtConfig({
    compatibilityDate: "2024-10-02",

    devtools: { enabled: true },

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData:
                        '@import "@/assets/scss/vars/index.scss"; @import "@/assets/scss/mixins/index.scss";',
                },
            },
        },
    },

    css: ["@/assets/scss/main.scss"],

    plugins: [
        // '~/plugins/v-click-outside.js',
    ],

    modules: ["@pinia/nuxt", "@nuxt/icon"],
    icon: {
        componentName: "NuxtIcon",
        mode: "svg",
        customCollections: generateCustomIconsArray(),
    },
    resolve: {
        alias: [{ find: "@", replacement: path.resolve(__dirname, "./") }],
    },
});
