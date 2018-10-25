---
title: 바람직한 CSS 작성 방법(지극히 주관적)
date: 2018-01-25 15:05:26
categories: CSS
tags: CSS, Desirable, Simple, 바람직한, 간결한
thumbnail: https://user-images.githubusercontent.com/7262465/35373886-ed8d9d9a-01e3-11e8-9ba9-714970d515a4.png
---

- 참고 : 글쓴이의 주관적인 생각에 의해 작성된 것이므로 자신이 사용하는 방법과 맞지 않을 수도 있습니다. 글 특성상 경어는 생략하도록 하겠습니다.

요즘은 Sass, Less 등 전처리기의 도움으로 자칫 복잡해 질 수 있는 css 코드도 효과적인 관리가 가능하지만 바람직한 css를 작성하는 기본은 잊지 않아야 한다.
그럼 글쓴이의 경험에 의한 바람직한 css 작성 방법에 대해 알아보겠다.

## 1. 내용이 반복되지 않도록 한다.

아래는 국기 아이콘 부분을 IR(Image Replacement) 기법을 이용하여 작성한 코드이다.

```html
<ul class="lang-list">
    <li><a href="#" class="ico-kr">국문</a></li>
    <li><a href="#" class="ico-en">English</a></li>
    <li><a href="#" class="ico-ja">日本語</a></li>
    <li><a href="#" class="ico-zh">中國</a></li>
</ul>
```

``` css
/* 내용이 중복된 코드 */
.ico-kr{
    display: inline-block;
    width: 30px;
    height: 20px;
    text-indent: -9999px;
    background: url(‘../images/ico-flag.png’) no-repeat;
}
.ico-en{
    display: inline-block;
    width: 30px;
    height: 20px;
    text-indent: -9999px;
    background: url(‘../images/ico-flag.png’) no-repeat 0 -20px;
}
.ico-ja{
    display: inline-block;
    width: 30px;
    height: 20px;
    text-indent: -9999px;
    background: url(‘../images/ico-flag.png’) no-repeat 0 -40px;
}
.ico-zh{
    display: inline-block;
    width: 30px;
    height: 20px;
    text-indent: -9999px;
    background: url(‘../images/ico-flag.png’) no-repeat 0 -60px;
}
```

위와 같은 경우, 배경이미지 등 여러 내용이 동일함에도 불구하고 반복되어 사용되고 있다.  
공통으로 선택하여 반복되는 내용은 한 번에 작성하고 값이 다른 배경이미지 위치만 각기 넣는 형태가 바람직하다.

``` css
/* 개선된 코드 */
.lang-list a{
    display: inline-block;
    width: 30px;
    height: 20px;
    text-indent: -9999px;
    background-image: url(‘../images/ico-flag.png’);
    background-repeat: no-repeat;
}
.ico-kr{
    background-position: 0 0; /* 배경위치가 기본 값이므로 생략 가능하나 코드의 일관성을 위해 넣어봤다. */
}
.ico-en{
    background-position: -20px 0;
}
.ico-ja{
    background-position: -40px 0;
}
.ico-zh{
    background-position: -60px 0;
}
```

## 2. 선택자를 너무 간결하거나 복잡하게 사용하지 않는다.

``` css
/* 안좋은 예 */
.box{ border:1px solid #ddd; }
.title{ font-size:1.2rem; }
.content .wrap .list .desc-area .item{ color:#f00; }
```

선택자가 간결할 경우, 웹 사이트가 확장 됨에 따라 중첩된 선택이 일어나 의도하지 않은 변형이 일어날 확률이 현저히 많아진다. 반대로 너무 길어지게 되면 가독성이 안좋아지고, 코드의 일관성을 맞추기도 어려워진다.  
각 요소의 첫 번째 선택자를 두 단어 이상 조합된 형태로 작성만 하여도 이러한 문제를 충분히 피할 수 있다.

``` css
/* 개선된 코드 */
.news-wrap .box{ border:1px solid #ddd; }
.sub-title{ font-size:1.2rem; }
.desc-area .item{ color:#f00; }
```