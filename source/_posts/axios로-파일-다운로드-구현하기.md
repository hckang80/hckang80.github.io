---
title: axios로 파일 다운로드 구현하기
date: 2018-10-31 22:50:18
categories: javascript
tags: axios, download, file
thumbnail:
---

```js
const downloadFile = (params, headers) => {
  axios.post(`${baseUrl}download`, params, { headers, responseType: 'blob' })
    .then(response => {
      // Blob 생성자 함수로 URL 생성하여 할당
      const url = window.URL.createObjectURL(new Blob([response.data]))
      // <a> element 동적 생성
      const link = document.createElement('a')
      // <a> element에 href attribute에 url 할당
      link.href = url
      // <a> element에 download attribute 와 value 동적 할당
      link.setAttribute('download', 'fileName.xls')
      // body 요소의 직계자식으로 삽입 후 클릭
      document.body.appendChild(link)
      link.click()
    })
    .catch(e => {
      console.error(e)
    })
}

downloadFile('request body 전달', 'request header 전달')
```