---
title: TypeScript & React & Redux 시작하기
categories: react
tags: 'react, redux'
thumbnail: >-
  data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K
date: 2018-05-10 19:34:11
---


우선 CRA를 통해 설치합니다.
```bash
$ create-react-app typescript-react-tutorial --scripts-version=react-scripts-ts
```

부트스트랩을 사용하고 싶다면 다음과 같이 설치합니다.  
(4버전부터는 레이아웃이 flex 기반이므로 3버전으로 설치합니다)
```bash
$ npm i bootstrap@3.3.7
```

/src/index.tsx 에 아래의 한 줄을 추가합니다.  
import 'bootstrap/dist/css/bootstrap.css'
```ts
import App from './App';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
```

Redux 및 관련 패키지를 설치합니다.
```bash
$ npm i redux react-redux immutable redux-actions
```

Redux 및 관련 패키지에서도 타입 지원을 받을 수 있도록 타입 패키지를 설치합니다.  
(immutable 과 redux는 TypeScript 지원이 내장되어 있어서 타입 패키지 설치를 생략합니다)
```bash
$ npm i @types/react-redux @types/redux-actions --save-dev
```