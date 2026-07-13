# 포트폴리오 리뉴얼 변경 기록

## 작성 목적

이 문서는 포트폴리오 리뉴얼 과정에서 어떤 변경을 했는지 기록하기 위한 문서다.

Claude Code로 작업할 때는 각 단계가 끝날 때마다 이 파일에 변경 요약을 추가한다.

---

## 기록 형식

각 변경은 다음 형식으로 기록한다.

### YYYY-MM-DD 작업명

## 변경 파일

- index.html
- styles.css

## 변경 내용

- 어떤 섹션을 수정했는지
- 어떤 문구를 변경했는지
- 어떤 UI 구조를 바꿨는지

## 변경 이유

- 채용 관점에서 무엇을 개선하기 위한 변경인지
- Senior iOS 포지셔닝에 어떤 도움이 되는지

## 남은 작업

- 다음에 수정해야 할 내용
- 추가 검토가 필요한 내용

---

## 변경 기록

### 2026-07-13 8단계: Projects 섹션 통합 (ALL / WORK / PERSONAL 필터)

## 변경 파일

- index.html
- styles.css
- script.js

## 변경 내용

- `Featured Projects`, `Early Career Experience`, `Side Projects` 3개 섹션을 `id="projects"` 단일 섹션으로 통합하고 `ALL / WORK / PERSONAL` 필터를 추가했습니다.
- 회사 4개(ONEstore Global App Market, ONEstore Design System, Encar iOS App, GS Retail Operation & GS Fresh Renewal) + Early Career 그룹 카드(details/summary 아코디언, Digitaldime 4개 프로젝트 모달 연결) + 개인 프로젝트 3개를 새 `project-card-v2` 컴포넌트로 통일했습니다.
- 기존 `data-project-id`와 `openProjectModal()` 연결은 그대로 유지해 `project-modal.js` 데이터는 수정하지 않았습니다.
- 옛 다크 테마 카드 CSS(`.featured-project-*`, `.early-project-*`, `.side-project-card-ui` 계열)는 새 마크업이 더 이상 참조하지 않아 제거했습니다. 단, 모달 본문(`features` 템플릿)에서 재사용 중인 `.side-project-cta`, `.modal-store-link`, `.side-project-detail-grid`, `.side-project-detail`, `.tech-badge`, `.project-tech`는 그대로 유지했습니다.
- `script.js`에 필터 로직을 추가했습니다. 카운트(`ALL/WORK/PERSONAL` 숫자)는 하드코딩하지 않고 DOM의 `data-project-type` 개수를 기준으로 계산합니다.

## 변경 이유

- 정보 구조 문서(`information-architecture-wireframe-v1.md`)와 8단계 논의에서 확정한 대로, 회사·개인 프로젝트를 한 곳에서 비교 탐색할 수 있게 해 채용 담당자가 "무엇을 만들었는지"를 빠르게 훑을 수 있도록 했습니다.
- Early Career(SI/SM) 4개를 개별 카드로 나열하지 않고 그룹 카드로 축소해 대표 프로젝트의 비중을 흐리지 않게 했습니다.

## 남은 작업

- 9단계: ONEstore Global App Market, ONEstore Design System 2개 프로젝트부터 상세 모달을 PAAR 구조로 전환.
- Tech Skills 섹션과 프로젝트 카드 간 기술 사용 횟수 정합성 최종 확인.

### 2026-07-13 8단계 카드 디자인 피드백 반영

## 변경 파일

- index.html
- styles.css

## 변경 내용

- Projects 타이틀/설명을 "프로젝트 단위로 남긴 설계 판단과 실행 결과"로 재작성.
- 썸네일을 다시 키우고(`aspect-ratio: 16/10`), 카드 한 줄 요약 문구를 제거, 기술 배지를 최대 6~7개까지 노출.
- WORK/PERSONAL 배지를 솔리드 컬러(블루/코랄)로, 필터 버튼을 굵은 테두리 + 카운트 필로 강조.
- `View Project`/`App Store` 버튼을 라운드 필 버튼으로 통일(View Project는 채움, App Store는 아웃라인)하고 `margin-top: auto` 푸터로 카드 하단 고정을 유지.
- ONEstore Global App Market Prototype, ONEstore Design System 2개를 `project-card-v2-featured`로 전체 폭 가로 레이아웃 카드로 승격해 대표 프로젝트임을 크기로 표현.
- Early Career(SI/SM) 4개 프로젝트는 아코디언 대신 개별 카드로 분리하고, 카드 상단에 사선 패턴 배너("Early Career · 초기 경력 프로젝트")로 표시.
- 개인 프로젝트 순서를 Mindly-iOS → NoteCleaner → FocusBoard로 변경, NoteCleaner로 개명, Mindly-iOS에 App Store 링크·기간(2026.05~2026.07)·역할(기술PL, iOS Developer) 추가, FocusBoard 역할을 기획/디자인/iOS Developer로 수정.
- `App Store Released`/`AI Tool Workflow` 상태 배지 제거.

## 변경 이유

사용자 피드백: 채용 담당자 관점에서 타이틀이 모호했고, 카드 정보 위계(대표 프로젝트 강조, Early Career 구분, WORK/PERSONAL 구분)가 잘 드러나지 않았습니다.

## 남은 작업

- 9단계: PAAR 모달 전환 진행.
