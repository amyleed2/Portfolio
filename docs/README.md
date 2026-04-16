# Docs 운영 규칙

## 목적
이 폴더는 포트폴리오 개선 작업에 필요한 입력 자료, 분석 결과, 수정 초안을 분리해서 관리하기 위한 공간이다.

## 폴더 역할

### docs/jd
- 채용공고 원문 또는 정리본 저장
- 회사/포지션 1개당 파일 1개
- compare-jd 입력값으로 사용

### docs/analysis/portfolio
- 전체 포트폴리오 리뷰 결과 저장
- 날짜 기준 snapshot 유지
- 기존 파일 덮어쓰기보다 새 파일 생성 우선

### docs/analysis/jd-gap
- JD와 포트폴리오 비교 결과 저장
- 회사별/날짜별로 분리 저장

### docs/rewrites/index
- index.html 관련 문장 수정 초안 저장

### docs/rewrites/career
- career-modal.js 관련 수정 초안 저장

### docs/rewrites/projects
- project-modal.js 관련 프로젝트별 수정 초안 저장

## 공통 규칙
- 원본 파일보다 먼저 docs/rewrites에 초안을 만든다.
- docs/analysis는 결과 기록이므로 덮어쓰기보다 히스토리 보존을 우선한다.
- docs/jd는 가능한 원문 의미를 유지한다.
- 실제 반영 전에는 초안 상태를 Draft로 둔다.
- 반영이 완료되면 상태를 Applied로 바꾼다.

## 파일명 규칙
- JD: company-role-yyyy-mm.md
- Analysis: yyyy-mm-dd-target-type.md
- Rewrite: target-vN.md

## 작업 흐름
1. review-portfolio 또는 compare-jd로 분석
2. rewrite 초안 생성
3. 초안 검토 및 승인
4. portfolio-editor로 실제 반영
5. 로컬 미리보기 확인


# 최소 운영 체크리스트

## 시작 전
- git status 확인
- claude 실행
- /status 확인
- /help 에서 project commands 확인
- /agents 에서 project agents 확인

## 분석
- /review-portfolio <output-file>
- /compare-jd <jd-file> <output-file>

## 초안
- /rewrite-project <project-key> <output-file>

## 반영
- portfolio-editor subagent로 승인된 초안만 적용
- git diff 확인
- 로컬 미리보기 확인

## 커밋 전
- .claude/settings.local.json 이 추적되지 않는지 확인
- docs/analysis, docs/rewrites 가 의도치 않게 커밋되지 않는지 확인
- 실제 소스 변경만 커밋
