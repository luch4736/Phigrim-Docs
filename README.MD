# Phigrim Docs

## 简介

这是一个基于VuePress的文档项目，由`luch4736`创建，旨在通过社区创造规范。

您可以修改`/src`目录下的`.md`格式的文档，或者在issue中提出您想要加入的功能。

目前，此文档正在缓慢进行推进，包括Phigrim日后可能的支持选项。

## 撰写

### 提交您的编辑

Phigrim Docs在`Github`使用`MPL2.0`协议开源。您可以在[这里](https://github.com/luch4736/Phigrim-Docs/pulls)请求合并您的编辑。

### 评论

在Phigrim Docs中，除了主页的所有文档都开启了评论系统。

你可以对当前文档发表评论，或在Github中的本项目链接中找到Discussions修改你的评论。

### 拓展选项：

#### YAML Front Matter

你可以在Markdown的 frontmatter 配置以下选项设置页面相关信息。

##### title

- 类型: `string`
- 必填: 否

当前页面内容标题，默认为 Markdown 文件中的第一个 h1 标签内容。

##### shortTitle

- 类型: `string`
- 必填: 否

当前页面的短标题，会在导航栏、侧边栏和路径导航中作为首选。

##### description

- 类型: `string`
- 必填: 否

当前页面内容描述。

##### icon

- 类型: `string`
- 必填: 否
- 详情:
    - [图标支持](#图标支持)

当前页面图标。

##### date

- 类型: `DateString`
- 必填: 否
- 格式: `YYYY-MM-DD` 或 `YYYY-MM-DD hh:mm:ss`

写作时间。

##### category

- 类型: `string | string[]`
- 必填: 否

分类。

##### tag

- 类型: `string | string[]`
- 必填: 否

标签。

##### sticky

- 类型: `boolean | number`
- 默认值: `false`

是否在列表中置顶。当填入数字时，数字越大，排名越靠前。

#### 图标支持

Phigrim Docs支持了 [FontAwesome](https://fontawesome.com/) 图标库（免费图标），以Bolt图标为例，

您在FontAwesome网站找到的使用方式

```html
<i class="fa-solid fa-bolt"></i>
```

其中，`fa-solie`是图标样式，`fa-`前缀代表免费图标，您只需要提取`bolt`字段，所以您在使用图标时应该如下：

```yaml
lang: zh-CN
title: 示例
icon: bolt
```

#### Mermaid

[Mermaid](https://mermaid.js.org/)（此超链接指向Mermaid文档）是一个强大的表格拓展，支持多种表格绘制，Phigrim
Docs开启了对此控件的支持，您可以用如下方式加入Mermaid图表：

````markdown
```mermaid
---
title: Flowchart
---
flowchart TB
    c1-->a2
    subgraph one
    a1-->a2
    end
    subgraph two
    b1-->b2
    end
    subgraph three
    c1-->c2
    end
    one --> two
    three --> two
    two --> c2
```
````

效果如下

```mermaid
---
title: 流程图示意
---
flowchart TB
    c1-->a2
    subgraph one
    a1-->a2
    end
    subgraph two
    b1-->b2
    end
    subgraph three
    c1-->c2
    end
    one --> two
    three --> two
    two --> c2
```

#### 选项卡

##### 用法

你需要将选项卡包装在 `tabs` 容器中。

你可以在 `tabs` 容器中添加一个 id 后缀，该后缀将用作选项卡 id。 所有具有相同 id 的选项卡将共享相同的切换事件。

```
::: tabs#fruit

<!-- 这里，fruit 将用作 id，它是可选的 -->

<!-- 选项卡内容 -->

:::
```

在这个容器内，你应该使用 `@tab` 标记来标记和分隔选项卡内容。

在 `@tab` 标记后，你可以添加文本 `:active` 默认激活选项卡，之后的文本将被解析为选项卡标题。

```
::: tabs

@tab 标题 1

<!-- tab 1 内容 -->

@tab 标题 2

<!-- tab 2 内容 -->

@tab:active 标题 3

<!-- tab 3 将会被默认激活 -->

<!-- tab 3 内容 -->

:::
```

默认情况下，标题将用作选项卡的值，但你可以使用 id 后缀覆盖它。

```
::: tabs

@tab 标题 1

<!-- 此处，选项卡 1 的标题“标题 1”将用作值。 -->

<!-- tab 1 内容 -->

@tab 标题 2#值 2

<!-- 这里，tab 2 的标题将是 “标题 2”，但它会使用 “值 2” 作为选项卡的值-->

<!-- tab 2 内容 -->

:::
```

