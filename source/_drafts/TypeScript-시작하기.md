---
title: TypeScript 시작하기
date: 2018-03-08 13:52:37
categories: javascript
tags: typescript
thumbnail: https://user-images.githubusercontent.com/7262465/37696608-4a0fbdc0-2d1b-11e8-8228-51322cea06eb.png
---

### Typescript(이하 ts)의 특징 및 장점

- React 등 사용영역이 점차 확대되고 있다.
- 타입을 지원하므로 다양한 도구의 지원를 받기가 좋아 생산성이 향상된다.
- Java 나 C# 등의 클래스 기반 언어를 먼저 알고 접근하면 더 좋다.
- 컴파일러 기능을 내장하고 있으므로, Babel이 필요 없게 된다.
- 코드 가독성, 예측성, 안정성이 향상되어 대규모 프로젝트에 적합하다.

**설치 및 버전 확인**

```bash
$ npm install -g typescript // typescript는 전역으로 설치하자

$ tsc -v // 설치가 잘 되었는지 확인하자
Version 2.7.2
```

**컴파일 방법**

```bash
$ tsc person // person.ts의 확장자 생략이 가능하다. 기본적으로 es3문법으로 컴파일한다

$ tsc person -t es5 // -t는 target이며 문법을 지정하여 컴파일한다

$ tsc *.ts // 한번에 여러파일을 컴파일한다
```