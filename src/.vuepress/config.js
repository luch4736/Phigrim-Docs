/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 *
 */

import {defineUserConfig} from "vuepress";
import theme from "./theme.ts";

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

