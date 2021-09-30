---
title: Hexo 기본 사용법
date: 2018-01-14 14:16:50
categories: etc
tags: [hexo, blog]
thumbnail:
---

**로컬서버 실행하기**
```bash
  # -o 옵션을 붙이면 브라우저도 오픈
  $ hexo server -o
```

**새 글 작성하기** (source 폴더에 파일이 생성됨)
```bash
  # layout: post, page, draft
  $ hexo new (layout) "My New Post"
```

**글 발행하기**
```bash
  $ hexo clean
  $ hexo d -g
```