/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 *
 */

import {hopeTheme} from 'vuepress-theme-hope';

export default hopeTheme({
        navbar: [
            {
                text: '设计规范',
                icon: 'lightbulb',
                children: ['/Design/Illustration.md', '/Design/Tachie.md', '/Design/basic.md'],
            },
            {
                text: '谱面拓展',
                icon: 'list',
                children: ['/Chart/AssetPackageDesign/basic.md',],
            },
            {
                text: '游戏界面',
                icon: 'wand-magic-sparkles',
                children: ['/GameUI/index.md', '/GameUI/todo.md'],
            },
            {
                text: '游戏机制',
                icon: 'compass',
                children: ['/Phigrim/index.md',],
            },
            {
                text: '关于',
                icon: 'circle-user',
                children: ['/About/index.md', '/About/publicNotice.md'],
            },
        ],

        displayFooter: true,
        footer: "Phigrim-Docs-UI is licensed under the MPL 2.0</br>2023 luch4736",
        logo: '/img/Logo/Phigrim_Docs.png',
        sidebar: [
            {
                text: '资源包',
                icon: 'lightbulb',
                prefix: '/Chart/AssetPackageDesign/',
                collapsible: false,
                children: [
                    'basic.md',
                    'further.md'
                ],
                // activeMatch: '^/Chart/',
            },
            {
                text: '谱面特性',
                icon: 'lightbulb',
                prefix: '/Chart/ChartPackageDesign/',
                collapsible: false,
                children: [
                    'Illustration.md',
                    'basic.md',
                    'Tachie.md'
                ],
            },
            {
                text: '游戏界面',
                icon: 'wand-magic-sparkles',
                prefix: '/GameUI/',
                collapsible: false,
                children: [
                    'index.md',
                    'todo.md',
                ],
            },
            {
                text: '关于',
                icon: 'circle-user',
                prefix: '/About',
                collapsible: false,
                children: [
                    'index.md',
                    'publicNotice.md',
                ],
            },
        ],

        navbarIcon: true,
        repo: 'luch4736/Phigrim-Docs-UI',
        docsRepo: 'https://github.com/luch4736/Phigrim-Docs-UI',
        docsBranch: 'main',
        docsDir: 'src',
        pure: true,

        // iconAssets: 'fontawesome',
        iconAssets: "https://kit.fontawesome.com/3ec1664bb0.js",
        iconPrefix: "fas fa-",

        plugins: {
            mdEnhance: {
                tasklist: true,
                codetabs: true,
                attrs: true,
            },
            comment: {
                provider: "Giscus",
                repo: "luch4736/Phigrim-Docs-UI",
                repoId: "R_kgDOJAL8DQ",
                category: "General",
                categoryId: "DIC_kwDOJAL8Dc4CUeHy",
            },
            photoSwipe: true,
        },
    }
);