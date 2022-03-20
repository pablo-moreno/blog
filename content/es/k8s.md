---
title: Hello Blog
description: Culpa eu irure excepteur excepteur Lorem enim.
publishedAt: 2022-02-21
image: welcome/content-dark.svg
authors:
  - name: Pablo Moreno
    avatarUrl: itsme.png
tags:
  - kubernetes
---

## Hello Blog

Pariatur nostrud est tempor fugiat laborum est tempor excepteur esse do elit id quis exercitation. Mollit cillum aliquip duis nulla reprehenderit nulla. Et cillum culpa tempor adipisicing do minim qui qui Lorem duis dolor. Consectetur anim voluptate et nulla irure. Minim eu ullamco laborum nostrud ut voluptate culpa eu do aliquip. Fugiat eu ex ipsum officia aliqua ex dolor ex minim laborum tempor incididunt et. Nostrud proident esse est ullamco ut quis irure proident ex dolore deserunt incididunt aute sunt.

Amet aliqua fugiat adipisicing aliquip voluptate enim Lorem sunt. Ut laboris nostrud amet nisi exercitation Lorem voluptate amet sunt Lorem sit nisi dolore amet. Tempor aliqua laboris laborum irure qui tempor. Irure velit ex esse labore aliquip culpa laborum commodo adipisicing duis labore officia officia.

Consectetur labore pariatur elit commodo aliquip ad duis aliquip deserunt ex nulla. Cillum laboris veniam labore enim fugiat voluptate occaecat aute laborum amet est qui elit duis. Nulla Lorem adipisicing ullamco ut irure culpa. Tempor laborum occaecat eiusmod ullamco cupidatat non aute culpa mollit esse commodo ipsum sunt. Pariatur irure ullamco irure nulla enim elit est quis non magna Lorem irure pariatur.

Laboris in nisi anim ipsum. Voluptate ea aliquip culpa duis officia. Non ipsum occaecat nisi pariatur occaecat in irure id non deserunt id aliquip. Sit qui sunt ea velit culpa est aliqua. Elit et mollit ut duis velit laborum nisi est ullamco sit. Non esse ut eiusmod ullamco.


## Headings 

## h2
### h3
#### h4

## Links

### Internal

<nuxt-link to="/">Nuxt Link to Homepage</nuxt-link>

<a href="/">Html Link to Homepage</a>

[Markdown Link to Homepage](/)

### External 

<a href="https://nuxtjs.blog">External link html</a>

[External Link markdown](https://nuxtjs.blog)

## Lists

### Ordered List

1. First item
2. Second item
3. Third item
4. Fourth item

### Unordered List

- First item
- Second item
- Third item
- Fourth item

## Images

### Markdown

![logo](/icon.png)

### HTML

Here we have visible at the same time the light and dark logo

<img src="/logo-light.svg" width="400" alt="logo">
<img src="/logo-dark.svg" width="400" alt="logo">

Here we only have visible the logo for the current mode.  
Change the color mode to see it in action.

<img src="/logo-light.svg" width="400"  alt="logo" class="light-img">
<img src="/logo-dark.svg" width="400"  alt="logo" class="dark-img">

## Code Blocks

```js{1,3-5}[server.js]
const http = require('http')
const bodyParser = require('body-parser')

http.createServer((req, res) => {
  bodyParser.parse(req, (error, body) => {
    res.end(body)
  })
}).listen(3000)
```