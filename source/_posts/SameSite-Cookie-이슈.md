---
title: SameSite Cookie 이슈
date: 2020-03-29 20:50:18
categories: etc
tags: SameSite, session, cookie
thumbnail:
---

20년 2월 중 릴리즈된 구글의 Chrome 80버전부터는 Cookie의 SameSite 속성 기본 값이 <b style="color:#f03e3e">None에서 Rax</b>로 변경됨에 따라 크로스 도메인 내에서만 Cookie를 전송하고 사용할 수 있습니다.
조금 바꿔서 얘기하면 Open API 등 타 도메인을 통한 통신에서 쿠키를 이용한 처리가 되지 않을 수 있다는 것입니다.

Javascript에서는 아래와 같이 SameSite 속성을 설정하면 기존과 동일한 서비스로 제공이 가능합니다. 다만 여기서 주의할 점은 Secure 속성도 반드시 추가하여야 합니다. 그렇지 않을 경우 브라우저 콘솔 창에서 경고 메시지를 보게 될 것입니다.

``` JS
document.cookie = 'cookieName=foo; SameSite=None; Secure'
```

마지막으로 **[EditThisCookie](https://chrome.google.com/webstore/detail/editthiscookie/fngmhnnpilhplaeedifhccceomclgfbg?hl=ko)**와 같은 크롬 확장 도구에서 쿠키의 값을 임의로 변경해 볼 수 있습니다.

## Reference
* [https://www.chromium.org/updates/same-site](https://www.chromium.org/updates/same-site)
