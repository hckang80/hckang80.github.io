---
title: lokalise를 이용한 다국어 적용 방법
date: 2018-09-25 17:01:18
categories: etc
tags: lokalise, i18n, 다국어
thumbnail:
---

웹서비스를 만들다 보면 최소 국영문 또는 그 이상의 언어를 지원해야 하는 경우가 종종 있다. 업데이트가 빈번한 경우 그때마다 번역본을 전달받아서 개발자가 적용하는건 여간 귀찮은 작업일뿐더러 비효율적이다.
https://lokalise.co/ 에서는 이러한 번거로움을 줄이고자, 번역 작업만 전담할 수 있게 툴을 제공한다.



1. DOCS -> CLI TOOL 에서 OS에 맞는 tgz 형식의 파일을 다운 받아서 압축 해제

2. 압축을 해제하면 lokalise.exe 파일이 보일 것이고 다음 폴더에 위치

   (**Mac**: /usr/local/bin, **Window**: /usr/bin)

3. 작업 폴더의 루트에 lokalise 폴더 및 쉘스크립트 파일 생성

   ```bash
   # /lokalise/script.sh
   lokalise --token <TOKEN> export <PROJECTID> --type json --export_all 1 --unzip_to lokalise --export_empty skip
   ```

4. package.json에 쉘스크립트 실행 명령어를 추가

   ```json
     "scripts": {
       "lokalise": "sh ./lokalise/script.sh"
     },
   ```

5. 명령어를 실행하면 프로젝트에 등록된 언어가 폴더 내에 자동으로 업데이트 된다