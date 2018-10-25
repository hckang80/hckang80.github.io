---
title: Sass 시작하기
date: 2018-02-08 10:54:42
categories: CSS
tags: Sass
thumbnail: https://user-images.githubusercontent.com/7262465/35373886-ed8d9d9a-01e3-11e8-9ba9-714970d515a4.png
---

Sass의 경우 Ruby 와 Node 기반 형태로 나누어지며 문법이 조금 다르다. (node 기반이 css 작성 방법과 조금 더 유사하며 최신 트렌드이므로 node 기반으로 설명하겠다)



우선 node.js의 설치가 필요하다.
https://nodejs.org/ko/



설치하고자 하는 폴더로 이동 후 bash에서 아래와 같이 입력하여 진행한다.

``` js
// 폴더 내에 package.json이 없는 경우에는 아래 명령어부터 입력하여 설정하는 것이 좋다.
$ npm init -y

// npm을 통한 node-sass의 설치
$ npm install node-sass

// src 하위의 sass 폴더 전체를 dist 하위의 css 폴더로 컴파일한다.
// 이때 watch 모드이므로 변경사항을 실시간 감지한다.
$ node-sass --watch src/sass --output dist/css

// 실제 프로젝트를 진행할때는 용량이 적을수록 좋기 때문에 빈공간이 없는 압축된 형태로 컴파일한다.
// --output-style : nested(default), expanded(표준 스타일), compact(룰셋을 한줄로 표기), compressed(빈공간이 없는 형태)
$ node-sass --output-style compressed src/sass --output dist/css
```


관련 사이트
https://velopert.com/1712
https://sass-guidelin.es/ko/
https://sass.urbanzakapa.kr/
https://www.sassmeister.com/