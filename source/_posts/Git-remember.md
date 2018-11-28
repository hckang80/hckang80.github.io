---
title: Git Remember
date: 2018-06-18 19:44:28
categories: etc
tags: git
thumbnail:

---

### 1. 자동완성 설정

git 명령어를 입력할 때 Tab키를 눌러서 자동완성을 사용할 수 있다.  
(window의 경우 따로 설정이 필요하지 않으므로 아래의 과정은 생략한다)

1. 다음의 경로에서 파일을 홈 디렉토리(~)에 다운받는다. (Mac OS)

   https://github.com/git/git/blob/master/contrib/completion/git-completion.bash

2. ~/.bashrc (혹은 ~/.bash_profile) 파일에 아래의 명령어를 입력한다.

```basic
source ~/git-completion.bash
```

<br>

### 2. 주요 명령어

단순한 add, commit과 같이 자주 다루는 내용은 생략하였다.

#### 2-1. Config

```bash
# 설정 및 확인
$ git config --global user.name hckang80
$ git config --global user.email hckang80@gmail.com
$ git config --list
```

#### 2-2. History

```bash
# 직전의 add 취소
$ git reset HEAD

# 직전의 add와 commit 취소
$ git reset HEAD^

# pull, merge 되돌리기
$ git reset --hard ORIG_HEAD

# 직전 commit 메세지 변경
$ git commit --amend

# 기존의 커밋과 병합할 목적으로 commit 하기
$ git commit --squash <commit number 7자리~>

# vim으로 이동하여 commit 메시지 입력(괄호, 콜론 등 특수문자의 입력이 가능)
$ git commit -v

# 기존의 commit 이력 관리
$ git rebase -i HEAD~10

# 이후 메세지를 병합하려면 pick을 squash로 변경 후 저장
# 이때 병합하는 메세지의 순서가 나란해야 함

# 또는 메세지를 변경하려면 pick을 edit로 변경 후 저장
$ git commit --amend
# 메세지 변경
$ git commit --continue
```

#### 2-3. Stash

```bash
# 변경사항을 Stack에 백업하고 워킹디렉토리를 깨끗하게 유지
# rebase나 pull이 가능해짐. 직전의 변경사항이 @stash{0}으로 백업
$ git stash

# 백업한 내용을 가져오고 Stack을 비움
$ git stash pop

# Stack의 목록 확인
$ git stash list
```

#### 2-4. ETC

```bash
# Remote 브런치를 동기화하고 이동
$ git fetch origin --prune
$ git checkout -t origin/<브런치명>
```