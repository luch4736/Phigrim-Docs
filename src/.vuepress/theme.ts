import {hopeTheme} from 'vuepress-theme-hope';

export default hopeTheme({
    navbar:[
        {
            text: '设计规范',
            icon: 'lightbulb',
            children: ['../Design/Illustration.md', '../Design/Tachie.md', '../Design/basic.md'],
        },
        {
            text: '谱面拓展',
            icon: 'list',
            children: ['/Chart/AssetPackageDesign/index.md',],
        },
        {
            text: '游戏界面文档',
            icon: 'compass',
            children: ['/GameUI/index.md',],
        },
        {
            text: '关于',
            icon: 'compass',
            children: ['/About/index.md', '/About/publicNotice.md'],
        },
    ],
    navbarAutoHide: 'mobile',
    repo: 'luch4736/Phigrim-Docs-UI',
    docsRepo: 'https://github.com/luch4736/Phigrim-Docs-UI',
    docsBranch: 'main',
    docsDir: 'src',
    pure: true,
    navbarIcon: true,
    iconAssets: 'fontawesome',

    logo: '/Logo/Phigrim_Docs.png',
    sidebar: [
        {
            text: '资源包设计与应用',
            icon: 'lightbulb',
            prefix: '/Chart/AssetPackageDesign/',
            collapsible: true,
            children: [
                'basic.md',
                'further.md'
            ],
            activeMatch: '^/Chart/',
        },
        {
            text: '谱面拓展',
            icon: 'lightbulb',
            prefix: '/Chart/ChartPackageDesign/',
            collapsible: true,
            children: [
                'Illustration.md',
                'basic.md',
                'Tachie.md'
            ],
        },
        {
            text: '关于',
            icon: 'lightbulb',
            prefix: '/About',
            collapsible: false,
            children: [
                'index.md',
                'publicNotice.md'
            ],
        },
    ],
});