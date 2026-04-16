---
name: review-portfolio
description: 포트폴리오와 이력서를 iOS 경력직 채용 관점에서 진단한다
disable-model-invocation: true
allowed-tools: Read Grep Glob
---

입력 문서를 읽고 아래 형식으로 분석한다.

1. 한 줄 총평
2. 좋은 점 3개
3. 문제점 3개
4. 누락된 핵심 요소
5. 바로 고칠 문장 예시
6. 다음 액션 3개

평가 관점
- 채용 담당자
- 실무 면접관
- 테크 리드

기본 대상 파일
- inputs/portfolio.md
- inputs/resume.md

사용자가 경로를 넘기면 그 파일을 우선 사용한다: $ARGUMENTS