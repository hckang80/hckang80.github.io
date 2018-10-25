---
title: Git Remember
date: 2018-09-18 07:44:28
categories: etc
tags: git
thumbnail:

---

### 1. 자동완성 설정

git 명령어를 입력할 때 Tab키를 눌러서 자동완성을 사용할 수 있다.

1. 다음의 경로에서 파일을 홈 디렉토리에 다운받는다

   https://github.com/git/git/blob/master/contrib/completion/git-completion.bash

2. ~/.bashrc (혹은 ~/.bash_profile) 파일에 아래의 명령어를 입력한다. (Mac OS)

   Window의 경우 따로 설정이 필요하지 않다.

```basic
source ~/git-completion.bash
```

<br>

### 2. 주요 명령어

add, commit, branch와 같이 매우 자주 다루는 내용은 생략하였다.

#### 2-1. history

```bash
# 설정 및 확인
$ git config --global user.name hckang80
$ git config --global user.email hckang80@gmail.com
$ git config --list

# 가장 최근의 add 취소
$git reset HEAD

# 가장 최근의 commit 취소
$git reset HEAD^

# 가장 최근의 commit 메세지 변경
$git commit --amend
```

#### 2-2. stash

```bash
# 변경사항을 Stack에 백업하고 워킹디렉토리를 깨끗하게 유지(rebase나 pull이 가능해짐)
$git stash

# 변경사항을 다시 가져오고 Stack에 백업했던 내용은 삭제 
$git stash pop

# Stack의 백업 목록 확인
$git stash list
```