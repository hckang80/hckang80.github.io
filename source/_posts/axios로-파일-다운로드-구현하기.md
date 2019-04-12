---
title: axios로 파일 다운로드 구현하기
date: 2018-10-14 22:50:18
categories: javascript
tags: axios, file download
thumbnail:
---

공개적인 파일의 경우 다운로드를 a 요소로 구현하나, 보안상의 목적 등을 위해 Rest API를 이용하여 다음과 같은 방식으로도 구현이 가능하다.

```html
<!-- 일반적인 형태 -->
<a href="fileName.xls">
```

```js
// Rest API
const downloadFile = (params, headers) => {
  axios.post(`${baseUrl}download`, params, { headers, responseType: 'blob' })
    .then(response => {
      // Blob 생성자 함수로 URL 생성하여 할당
      const url = window.URL.createObjectURL(new Blob([response.data]))
      // <a> 요소 동적 생성
      const link = document.createElement('a')
      // <a> 요소에 href attribute에 url 할당
      link.href = url
      // <a> 요소에 download attribute 와 value 동적 할당
      link.setAttribute('download', 'fileName.xls')
      // body 요소의 직계 자식으로 삽입 후 클릭
      document.body.appendChild(link)
      link.click()
    })
    .catch(e => {
      console.error(e)
    })
}

downloadFile('Insert request body argument', 'Insert request header argument')
```