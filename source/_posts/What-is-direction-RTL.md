---
title: What is direction RTL
date: 2020-04-16 19:13:08
categories: html
tags: direction, rtl, ltr, urdu
thumbnail:
---

다국어로 웹 서비스 제작시 지원하는 언어에 [우르드어](https://namu.wiki/w/%EC%9A%B0%EB%A5%B4%EB%91%90%EC%96%B4)가 포함되어 있다면 이 주제에 대해 반드시 알 필요가 있다. 여기서 rtl이란 ‘right to left’의 축약어로써 텍스트의 방향이 우측에서 시작하는 것으로써 우르드어의 경우 이 규약을 따른다.

서비스에 적용하는 방법은 매우 간단하다. 문서 상단에 `<html dir="rtl">`로 속성을 선언하기만 하면 된다.
하지만 `float`이나 `position`된 컨텐츠는 반응하지 않는다. 이는 당연한거 같으니 rtl로 되게끔 하려면 `direction: rtl; text-align: right; right: 0;` 등의 스타일 노가다가 필요할 것 같다. 필자는 <b class="color-important">[dir="rtl"] Selector</b>를 이용하여 처리했다. 반면에, `flex`나 `table`로 구성된 컨텐츠는 즉각 반응한다.

여기서 끝은 아니다. 아이콘이 사용되었다면 이 역시 대부분 방향 전환이 되어야 자연스러울 것이다. `transform: scaleX(-1)`을 주면 좌우가 반전되므로 아이콘의 방향을 전환하기에 유용하다.
구글에서 제공하는 [material-design-icons](https://google.github.io/material-design-icons/#icons-in-rtl)에서는 이러한 부분을 위한 가이드를 제공하고 있다.

또한 Carousel 등의 UI도 방향 전환이 되어 제공된다면 좀 더 세심한 배려가 될 것이다. 대표 Carousel 중의 하나인 [swiperjs](https://swiperjs.com/demos/#RTL_layout)에서는 이를 자체적으로 지원하므로 서비스에 쉽게 적용 가능하다.
