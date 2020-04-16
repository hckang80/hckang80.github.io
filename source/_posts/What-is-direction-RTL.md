---
title: What is direction RTL
date: 2020-04-16 19:13:08
categories: html
tags: direction, rtl, ltr, urdu
thumbnail:
---

웹에서의 rtl은 'right to left'의 축약어로써 텍스트의 방향이 우측에서 시작하며 [우르드어](https://namu.wiki/w/%EC%9A%B0%EB%A5%B4%EB%91%90%EC%96%B4)의 경우 이 규약을 따른다.
`<html dir="rtl">`로 속성을 선언하기만 하면 된다.

하지만 css에 의해 `float`이나 `position`된 컨텐츠는 반응하지 않는다. 당연한거 같으니 rtl로 되게끔 하려면 `direction: rtl; text-align: right; right: 0;` 등의 스타일 노가다가 필요할 것 같다. 반면에, `flex`나 `table`로 구성된 컨텐츠는 즉각 rtl로 변경된다.

또한 `transform: scaleX(-1)`을 주면 좌우가 반전되므로 아이콘의 방향을 변경하기에 유용하다.
구글에서 제공하는 [material-design-icons](https://google.github.io/material-design-icons/#icons-in-rtl)에는 자체적으로 이를 지원한다.
대표 Carousel 중의 하나인 [swiperjs](https://swiperjs.com/demos/#RTL_layout)에서도 이를 지원하여 적용하기 유용하다.
