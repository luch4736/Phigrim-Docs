---
lang: zh-CN
title: 资源包制作进阶
shortTitle: 进阶
icon: list
---

# 资源包制作进阶

本文档说明了资源包部分的进阶选项以及套用方法。

## 配置文件编辑

说明了详细的配置文件可选项

目前可用的配置文件选项如下：

### packageName

- 类型：`string`
- 必填：`true`
- 默认值：`"PhigrimAssetsPackage"`

```typescript
packageName: "PhigrimAssetsPackage"
```

资源包的显示名称（在游戏设置中）

### author

- 类型：`string`
- 必填：`true`
- 默认值：`"Phigrim Arts"`

```typescript
author: "Phigrim Arts"
```

资源包的作者名称

### isFrameSequence

- 类型：`boolean`
- 必填：`true`
- 默认值：`true`

```typescript
isFrameSequence: true
```

::: tip
当此选项为 `False` 时，将开启 [hitFx](further.html#hitfx) 选项，如无该选项将会报错
:::

### hitFx

- 类型：`int`
- 必填：`true`
- 默认值：`true`

```typescript
hitFx: [5, 6]
```

行、列裁切数量

### hitFxFrameCounts

- 类型：`boolean`
- 必填：`true`
- 默认值：`true`

```typescript
hitFxFrameCounts: 30
```

行、列裁切数量

## 拓展资源文件

您可以使用拓展资源文件进行更多设定，可添加文件如下

| notes 文件夹的拓展文件 | 描述             | sounds 文件夹的拓展文件 | 描述               |
|:---------------|:---------------|:----------------|:-----------------|
| TapHL.png      | 高亮的 `Tap` 音符   | TapHL.ogg       | 高亮的 `Tap` 音符音效   |
| DragHL.png     | 高亮的 `Drag` 音符  | DragHL.ogg      | 高亮的 `Drag` 音符音效  |
| FlickHL.png    | 高亮的 `Flick` 音符 | FlickHL.ogg     | 高亮的 `Flick` 音符音效 |
| HoldHL.png     | 高亮的 `Hold` 音符  | HoldHL.ogg      | 高亮的 `Hold` 音符音效  |
