---
name: match-jd
description: JD와 포트폴리오를 비교해 적합도와 보강 포인트를 정리한다
disable-model-invocation: true
allowed-tools: Read Grep Glob
---

다음 문서를 비교한다.
- inputs/portfolio.md
- inputs/resume.md
- $ARGUMENTS

출력 형식
1. JD 핵심 요구사항 요약
2. 적합한 점
3. 부족한 점
4. 보여주지 못한 점
5. 포트폴리오 수정 포인트
6. 면접 대비 질문 5개