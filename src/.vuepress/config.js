import {defineUserConfig} from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
    base: "./",
    locales:
        {
            "/":
                {
                    lang: "zh-CN",
                    selectLanguageName: '简体中文',
                    editLinkText: "编辑此页面",
                    repoLabel: "去 Github 查看此文档",
                },
        },
    contributors: true,
    lastUpdated: true,
    mdEnhance: true,

    theme,
})

