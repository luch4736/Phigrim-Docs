/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 *
 */

import {defineUserConfig} from "vuepress";
import {searchProPlugin} from "vuepress-plugin-search-pro";
import {gitPlugin} from '@vuepress/plugin-git'
import theme from "./theme.ts";

export default defineUserConfig({
    base: "./",
    dest: "${sourceDir}/build",
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

    plugins: [
        searchProPlugin({
                indexContent: true,
                customFields: [
                    {
                        getter: (page) => page.frontmatter.category,
                        formatter: "分类：$content",
                    },
                    {
                        getter: (page) => page.frontmatter.tag,
                        formatter: "标签：$content",
                    },
                ],
            },
            gitPlugin({
                createdTime: true,
                updatedTime: true,
                contributors: true,
            }),
        ),
    ],
})

