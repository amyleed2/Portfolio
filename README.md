# iOS Career Portfolio

10년 이상 경력의 Senior iOS Application Developer 포트폴리오 웹사이트입니다.

이 저장소는 단순 경력 나열이 아니라, 채용 담당자와 iOS 현업 면접관이 지원자의 강점을 빠르게 이해할 수 있도록 구성한 정적 포트폴리오입니다.

## 목표

이 포트폴리오는 다음 메시지를 전달하는 것을 목표로 합니다.

- 운영 중인 iOS 앱을 안정적으로 개선할 수 있는 개발자
- UIKit / Objective-C 기반 레거시 구조를 이해하고 SwiftUI / MVVM 기반으로 점진적으로 전환할 수 있는 개발자
- Clean Architecture, MVVM, DI, Coordinator 등 구조 설계 관점으로 앱을 바라보는 개발자
- 디자인 시스템, 공통 컴포넌트, 디자인 토큰, Figma Code Connect 기반의 플랫폼화 경험이 있는 개발자
- Android 개발자로 시작해 iOS로 전향하며 두 플랫폼의 구조와 운영 차이를 이해한 개발자
- AI 도구를 코드 생성이 아니라 분석, 설계 검토, 테스트 초안, 문서화 보조 워크플로우로 활용하는 개발자
- 개인 사이드 프로젝트를 통해 VisionKit, OpenAI API, structured response, App Store 배포까지 실험한 개발자

## 현재 섹션 구조

1. Hero
2. Senior Summary
3. Core Strengths
4. Career
5. Featured Projects
6. Early Career Experience
7. AI-Assisted Project Workflow
8. Side Project
9. About Me
10. Tech Stack
11. Contact

## 주요 콘텐츠

### Senior Summary

10년 이상 모바일 앱 개발 경험, 운영 앱 구조 개선, Objective-C / UIKit 레거시 분석, SwiftUI 전환, ONEstore 디자인 시스템과 글로벌 앱 마켓 Prototype 경험, 최근 개인 프로젝트와 App Store 배포 경험을 요약합니다.

### Core Strengths

- iOS App Architecture
- App Operation & Stability
- Legacy Modernization
- SwiftUI Migration
- Design System & Platformization
- AI-assisted Development Workflow

### Career

회사별 재직 이력을 표 형태로 보여주되, 단순 회사/기간 나열이 아니라 각 회사에서의 핵심 역할과 대표 경험이 보이도록 정리했습니다.

- Digitaldime: Android SI/SM, 커머스/O2O, 외부 SDK 연동
- GS ITM: GS Retail 모바일 앱 운영, GS Fresh 차세대 프로젝트 Mobile Scope
- ONEstore: 콘텐츠 앱 운영, 글로벌 앱 마켓 Prototype, 디자인 시스템
- Encar: 운영 중인 iOS 앱 개선, SwiftUI 전환, Crash/API 로깅 개선

### Featured Projects

대표 프로젝트는 Senior iOS Developer 채용 관점에서 우선순위를 두고 배치했습니다.

1. ONEstore Design System
2. ONEstore Global App Market Prototype
3. Encar iOS App
4. GS Retail Mobile App Operation & GS Fresh Renewal

각 프로젝트 모달은 프로젝트 배경보다 역할, 문제, 기술 판단, 결과, 시각 자료를 중심으로 구성되어 있습니다.

### Early Career Experience

Digitaldime 시기의 Android/SI 프로젝트는 Featured Projects와 같은 비중으로 과노출하지 않고, 초기 모바일 개발 기반을 보여주는 compact card 형태로 유지합니다.

- CafeUnion
- LuxeWater
- 올가홀푸드
- MyD2

### AI-Assisted Project Workflow

AI 도구를 단순 도구 나열이 아니라 실제 업무 흐름에 연결해 설명합니다.

- Feature Development in Operating Apps
- Legacy Refactoring
- Operation Checklist Drafting
- Planning & Design Review

핵심 원칙은 AI 결과를 그대로 사용하는 것이 아니라, 기존 코드 구조, 운영 리스크, 테스트 가능성, 팀 적용 가능성을 기준으로 개발자가 최종 판단한다는 점입니다.

### Side Project

`Worksheet Cleanup / OCR App`은 App Store에 출시한 개인 프로젝트입니다.

- VisionKit 기반 문서 이미지 입력
- OpenAI API 요청/응답 구조 설계
- 프롬프트 설계 및 토큰 사용량을 고려한 응답 스키마 조정
- ACCEPT / REJECT 기반 triage 로직
- reason_code / should_run_cleanup 검증
- SwiftUI 화면 흐름과 상태 처리
- Clean Architecture / MVVM 기반 구조
- App Store 배포

App Store 링크: [학습지 지우개 Note Cleaner](https://apps.apple.com/kr/app/%ED%95%99%EC%8A%B5%EC%A7%80-%EC%A7%80%EC%9A%B0%EA%B0%9C-note-cleaner/id6757840733)

## 프로젝트 구조

```text
ios-career-lab/
├── index.html                  # 메인 페이지 구조와 섹션 콘텐츠
├── styles.css                  # 전체 스타일, 반응형 레이아웃, 모달/카드 디자인
├── script.js                   # 네비게이션, 스크롤, 공통 인터랙션
├── slider.js                   # 기존 프로젝트 슬라이더 관련 스크립트
├── career-modal.js             # Career 상세 모달 데이터와 렌더링
├── project-modal.js            # Project / Side Project 상세 모달 데이터와 이미지 뷰어
├── favicon.ico                 # 브라우저 favicon
├── AGENTS.md                   # Codex/agent 작업 기준과 포트폴리오 전략
├── CLAUDE.md                   # Claude Code 작업 기준
├── EMAILJS_SETUP.md            # EmailJS 설정 참고 문서
├── docs/
│   └── portfolio-renewal/      # 리뉴얼 전략, 프로필 소스, 프로젝트 우선순위 문서
└── assets/
    └── images/
        ├── logos/              # 회사 로고
        ├── worksheet-cleanup/   # Side Project 스크린샷
        └── *.png|*.jpg|*.jpeg  # 프로젝트 이미지, 아키텍처, 코드/결과 화면 자료
```

## 실행 방법

이 프로젝트는 빌드 과정이 없는 정적 웹사이트입니다.

### 파일로 바로 열기

```bash
open index.html
```

### 로컬 서버로 실행하기

파일 경로로 열어도 대부분 동작하지만, 브라우저 환경을 더 안정적으로 확인하려면 로컬 서버 사용을 권장합니다.

```bash
python3 -m http.server 8080 --bind 127.0.0.1
```

브라우저에서 아래 주소로 접속합니다.

```text
http://localhost:8080/
```

## 주요 파일 수정 가이드

### 메인 섹션 수정

`index.html`에서 Hero, Summary, Core Strengths, Career table, Featured Projects card, Early Career Experience, AI Workflow, Side Project card, About Me, Tech Stack, Contact 섹션을 수정합니다.

### Career 모달 수정

`career-modal.js`의 `careerData` 객체를 수정합니다.

각 회사 모달은 다음 흐름을 기준으로 작성합니다.

- Role Summary
- Main Responsibilities
- Key Projects
- Technical Focus
- What This Experience Shows

### Project 모달 수정

`project-modal.js`의 `projectData` 객체를 수정합니다.

대표 프로젝트 모달은 다음 흐름을 기준으로 작성합니다.

- Overview
- Problem
- My Role
- Key Contributions
- Technical Decisions
- Visual Evidence / Screenshots
- Result / Impact

프로젝트 이미지와 스크린샷은 면접관의 이해를 돕는 자료이므로 특별한 이유 없이 삭제하지 않습니다.

### 스타일 수정

`styles.css`에서 섹션별 레이아웃, 카드, 모달, 반응형 스타일을 관리합니다.

주요 스타일 영역은 다음과 같습니다.

- Hero / navigation
- Senior Summary
- Core Strengths
- Career table / modal
- Featured Projects
- Early Career Experience
- AI Workflow
- Side Project
- About Me
- Tech Stack
- Contact
- Image viewer
- Responsive media queries

## 기술 스택

### Frontend

- HTML5
- CSS3
- Vanilla JavaScript

### UI / Interaction

- Responsive layout
- Modal rendering
- Image viewer
- Anchor navigation
- Card-based project presentation

### Portfolio Content Focus

- Swift
- Objective-C
- UIKit
- SwiftUI
- RxSwift
- Combine
- Clean Architecture
- MVVM / MVI
- DI
- Coordinator
- Firebase Crashlytics
- API Logging
- Figma / Design Token / Code Connect
- Cursor / Claude Code / Codex / Copilot / ChatGPT

## 이미지 자료 관리 규칙

프로젝트 이미지 자료는 장식이 아니라 프로젝트 이해를 돕는 evidence입니다.

유지해야 하는 자료 예시는 다음과 같습니다.

- 아키텍처 도식
- 화면 흐름 이미지
- 코드 예시 이미지
- 디자인 시스템 구조 이미지
- Figma Code Connect 예시
- 디자인 토큰 관련 이미지
- 최종 결과물 스크린샷
- App Store 출시 화면

이미지를 줄여야 할 경우 삭제보다 모달 내 Visual Evidence / Screenshots 영역에서 선별 정리하는 방식을 우선합니다.

## 콘텐츠 작성 원칙

- 과장된 성과 수치를 만들지 않습니다.
- 공식 직책과 프로젝트 내 역할이 혼동되지 않도록 책임 범위를 구체적으로 씁니다.
- `PM`, `PL` 표현은 필요한 경우에만 사용하고, 본문에서는 `iOS 개발 범위 조율`, `Mobile Scope`, `구현 리스크 정리`, `협업 커뮤니케이션`처럼 실제 수행 범위를 함께 설명합니다.
- 회사 배경 설명보다 문제, 역할, 기술 판단, 결과를 먼저 보여줍니다.
- AI 활용은 개발을 대신했다는 표현이 아니라 생산성 보조와 개발자 최종 검증 관점으로 설명합니다.

## QA 체크리스트

배포 전 아래 항목을 확인합니다.

- 첫 화면에서 Senior iOS Application Developer 포지셔닝이 5초 안에 보이는가?
- Summary, Core Strengths, Career, Featured Projects가 하나의 메시지로 연결되는가?
- Featured Projects의 카드와 모달 제목이 일치하는가?
- Project / Career / Side Project 모달이 정상적으로 열리고 닫히는가?
- 이미지와 스크린샷 경로가 깨지지 않는가?
- 이미지 확대 뷰어가 정상 동작하는가?
- 모바일에서 카드와 모달 길이가 과도하게 피로하지 않은가?
- AI Workflow가 실제 업무 방식처럼 보이는가?
- Side Project가 회사 프로젝트보다 과하게 튀지 않으면서도 출시 경험을 보여주는가?
- 콘솔에 JavaScript 에러나 favicon 404가 없는가?

## 연락처

- Email: amy.lee.d2@gmail.com

## 라이선스

개인 포트폴리오 용도로 제작된 프로젝트입니다.
