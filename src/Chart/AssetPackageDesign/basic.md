---
lang: zh-CN
title: 资源包制作入门
icon: list
---
[//]: # (This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.)

# 资源包制作入门

你可以在 Phigrim 中套用自己的游戏按键、音效、粒子、打击音效、判定线等素材，可以使用由社区提供的开放资源包，也可以制作您自己资源包，本文档将说明制作方法。
目前，Phigrim 除了自身格式的资源包，还支援 prpr 的资源包。

## 结构

### 基础资源

#### Phigrim资源

Phigrim的资源包为 ZIP 格式，后缀为 .pap 的压缩文件，如下：

```files:no-line-numbers
└─ phigrim_offcial.pap         
 ├─ notes
 │  ├─ Tap.png 
 │  ├─ Drag.png
 │  ├─ Flick.png
 │  └─ Hold0.png
 ├─ sounds       
 │  ├─ Tap.ogg   
 │  ├─ Drag.ogg
 │  ├─ Flick.ogg
 │  ├─ Hold.ogg  
 └─ config.ts
```

这是一个最基础的 .pap(Phigrim Assets Package) 格式的资源文件，拥有所有的必须选项。除了上述文件，您还可以加入一些其他文件。
::: warning 注意
若不包含所需文件，将会使用设置中的默认选项。
:::

#### prpr资源

资源文件必须包括：

`click.png`和`click_mh.png`：Click 音符的皮肤，`mh` 代表双押；
`drag.png`和`drag_mh.png`：Drag 音符的皮肤，`mh` 代表双押；
`flick.png`和`flick_mh.png`：Flick 音符的皮肤，`mh` 代表双押；
`hold.png`和`hold_mh.png`：Hold 音符的皮肤，`mh` 代表双押；
`hit_fx.png`：打击特效图片。
资源文件可以包括（即若不包括，将使用默认）：

`click.ogg`、`drag.ogg` 和 `flick.ogg`：对应音符的打击音效，由于 Phigrim 使用 Unity 引擎，因此对采样率没有严格限制。
`ending.mp3`：结算界面背景音乐。

### 配置文件

Phigrim 资源包的配置文件为 config.txt，其格式类似于 JavaScript。由半角英文字符进行分割，编码为 UTF-8。
prpr 资源包的配置文件为 info.yml，格式为标准 yml。
Phigrim资源包的配置文件是叫做`config.ts`且编码为`UTF-8`的 类TypeScript 文件

示例如下：

::: code-tabs#txt
@tab phigrim

```typescript
packageName: "Phigrim Assets Package";
author: "Phigrim Arts";
isFrameSequence: true; // 启用序列帧模式
hitFxFrameCounts: 30; // 帧序列数量
hitFxDuration: 1; // 播放时间 (float/s)
holdAtlas: [50, 50]; // Hold 音符头尾的 px 数量 (int/top + int/bottom)
holdAtlasHL: [50, 110]; // HoldHL 音符头尾的 px 数量 (int/top + int/bottom)
holdRepeat: false; // Hold 音符的中间部分是否采用重复式拉伸
holdCompact: false; // Hold 音符的中间部分是否与头尾分离
```

@tab prpr

```yml
name: Default
author: "Mivik & MisaLiu"
hitFx: [5, 6]
holdAtlas: [50, 50]
holdAtlasMH: [50, 110]
```

:::

您可以在 [资源文件](further.md#配置文件编辑) 中查看详细选项。
::: warning 注意
若您的资源包不包含 config.txt，将会抛出错误。
:::
