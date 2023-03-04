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
                text: '设计',
                icon: 'wand-magic-sparkles',
                children: ['/Design/index.md', '/Design/BrandResources.md', '/Design/todo.md'],
            },
            {
                text: '谱面',
                icon: 'list',
                children: ['/Chart/AssetPackageDesign/',],
            },
            {
                text: '机制',
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
        footer: "Phigrim Docs is licensed under the MPL 2.0",
        // logo: '/img/Logo/Phigrim_Docs.png',
        sidebar: [
            {
                text: "设计",
                prefix: "/Design",
                collapsible: true,
                icon: "wand-magic-sparkles",
                children: [
                    "index.md",
                    {
                        text: "UI",
                        prefix: "UI/",
                        children: [
                            "Entry.md",
                        ],
                    },
                    {
                        text: "美术",
                        prefix: "Artwork/",
                        children: [],
                    },
                    "BrandResources.md",
                    "todo.md",
                ],
            },
            {
                text: "谱面",
                prefix: "/Chart",
                collapsible: true,
                icon: "file-lines",
                children: [
                    {
                        text: "资源包",
                        icon: "file-zipper",
                        prefix: "AssetPackageDesign/",
                        children: [
                            "basic.md", "further.md",
                        ],
                    },
                    {
                        text: "谱面包",
                        prefix: "ChartPackageDesign/",
                        children: [],
                    },
                ],
            },
        ],

        iconAssets: "https://kit.fontawesome.com/3ec1664bb0.js",
        iconPrefix: "fa-solid fa-",
        navbarIcon: true,
        pure: true,

        hotReload: true,
        repo: 'luch4736/Phigrim-Docs',
        docsRepo: 'https://github.com/luch4736/Phigrim-Docs',
        docsBranch: 'main',
        docsDir: 'src',

        plugins: {
            mdEnhance: {
                tasklist: true,
                codetabs: true,
                attrs: true,
                mermaid: true,
                chart: true,
                figure: true,
                imgLazyload: true,
                imgMark: true,
                imgSize: true,
            },
            comment: {
                provider: "Giscus",
                repo: "luch4736/Phigrim-Docs",
                repoId: "R_kgDOJAL8DQ",
                category: "General",
                categoryId: "DIC_kwDOJAL8Dc4CUeHy",
            },
            photoSwipe: true,
        },
    }
);
