---
description: 특정 프로젝트 설명 문구를 리라이트하고 rewrite 초안 파일로 저장한다
argument-hint: [project-key] [output-file]
---

@project-modal.js

$1 에 해당하는 프로젝트를 찾아서 아래 형식으로 정리해줘.

1. 현재 문장의 문제점
2. 더 강한 문장 예시
3. 면접에서 말하기 좋은 포인트 3개

저장 규칙
- 결과는 반드시 $2 파일에 저장한다
- $2는 docs/rewrites/projects/ 아래 경로여야 한다
- 저장 파일에는 아래 항목을 포함한다
  - 대상 파일: project-modal.js
  - 대상 프로젝트
  - 상태: Draft
  - 작성일
  - Before / After
  - 수정 이유
  - 면접 포인트

주의사항
- 실제 project-modal.js는 수정하지 않는다
- 근거 없는 수치, 허위 성과, 과장 표현은 만들지 않는다
- 기존 프로젝트의 사실관계는 유지한다
- 역할, 문제, 해결 방식, 결과가 더 잘 드러나게 쓴다