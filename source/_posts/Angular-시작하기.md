---
title: Angular 시작하기
date: 2018-03-21 15:10:15
categories: javascript
tags: angular
thumbnail: https://user-images.githubusercontent.com/7262465/37696586-2988fbe8-2d1b-11e8-9f72-8c5ab119ea33.png
---

## Angular란?

구글에서 만든 오픈 프레임워크로써 angular 시리즈 2번째 버전이다(1번째 버전은 AngularJS이 정식명칭이며, 2번째 버전이 Angular이다). 폴더 구조 셋팅 등 프로젝트 초기에 실행해야 하는 개발환경 셋팅을 모두 도와준다.



###Angular의 특장점

- MVC 개발에서 컴포넌트 기반 개발(CBD, Component Based Development)로 전환되었다.
- one-way 바인딩을 지원하여 성능 이슈가 향상되었다.
- 주력언어로 TypeScript를 도입하여 대규모 개발에 적합하다.
- Angular CLI를 통해 개발환경 구축이 간편하다.



**설치방법**

```bash
$ npm install -g @angular/cli
```



**프로젝트 생성**

```bash
$ ng new my-app

$ ng new my-app --prefix todos // 생성하면서 접두사 변경
```



**프로젝트 실행**

```bash
$ ng serve

$ ng serve --open // 실행과 동시에 브라우저도 오픈

$ ng serve --port 4201 // 포트가 충돌날 경우에 포트 변경(4200번을 기본적으로 사용한다)
```



**프로젝트 구성 요소 추가**

| 추가 대상 구성요소 | 명령어                                  | 축약형                   |
| ---------- | ------------------------------------ | --------------------- |
| 컴포넌트       | ng generate component component-name | ng g c component-name |
| 디렉티브       | ng generate directive directive-name | ng g d directive-name |
| 파이프        | ng generate pipe pipe-name           | ng g p pipe-name      |
| 서비스        | ng generate service service-name     | ng g s service-name   |
| 모듈         | ng generate module module-name       | ng g m module-name    |
| 가드         | ng generate guard guard-name         | ng g g guard-name     |
| 클래스        | ng generate class class-name         | ng g cl class-name    |
| 인터페이스      | ng generate interface interface-name | ng g i interface-name |
| Enum       | ng generate enum enum-name           | ng g e enum-name      |

```bash
# 인라인 HTML 템플릿을 사용하는 경우
$ ng g c home --inline-template // html 파일이 생성되지 않는다.

# 인라인 CSS를 사용하는 경우
$ ng g c home --inline-style // css 파일이 생성되지 않는다.

# 인라인 HTML 템플릿과 인라인 CSS를 사용하는 경우
$ ng g c home --inline-template --inline-style // html, css 파일이 모두 생성되지 않는다.
```



**app.component.ts 기본 구조** (루트 컴포넌트)

```typescript
// 임포트 영역
import { Component } from '@angular/core';

// @Component 데코레이터 영역
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// 컴포넌트 클래스 영역
export class AppComponent {
  title = 'app';
}
```

