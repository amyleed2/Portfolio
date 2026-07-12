# 포트폴리오 정보 구조 및 텍스트 와이어프레임 v1

## 목적

새 포트폴리오의 각 섹션에서 무엇을, 어떤 순서와 정보량으로 보여줄지 정의한다. 시각 디자인과 Career/Project 카드 모양은 확정하지 않는다.

## 전체 탐색 구조

```text
Home
└─ About
   └─ Career
      └─ Tech Skills
         └─ Projects
            └─ AI Workflow
               └─ Contact
```

내비게이션 표기는 다음으로 통일한다.

```text
01 Home
02 About
03 Career
04 Tech Skills
05 Projects
06 AI Workflow
07 Contact
```

데스크톱은 우측 고정 인덱스를 우선 검토하고, 모바일은 현재 섹션명이 보이는 compact menu를 사용한다.

## 01 Home

### 섹션 목적

5초 안에 직무, 연차, 차별점을 이해시킨다.

### 정보 순서

1. 역할
2. 이름
3. 핵심 가치 제안
4. 대표 증거 3개
5. About 또는 Career CTA

### 텍스트 와이어프레임

```text
[Eyebrow]
10+ YEARS · SENIOR iOS APPLICATION DEVELOPER

[Headline]
운영의 복잡성을
구조와 기준으로 바꾸는
iOS 개발자, 이지은입니다.

[Supporting Copy]
Android와 iOS, SI 구축과 인하우스 운영을 모두 경험하며
대규모 앱 운영, 글로벌 플랫폼 기술 검토, 디자인 시스템 구축,
UIKit 레거시의 SwiftUI 전환을 수행했습니다.

[Evidence]
10+  GS Retail 운영 앱
3x   Design System 전사 세미나
2wk  Apple Cork 기술 출장

[CTA]
경력 흐름 보기
대표 프로젝트 보기
```

### 콘텐츠 제한

- 본문은 최대 3줄
- 증거는 최대 3개
- 기술 이름 나열 금지
- 최근 활동과 AI 설명은 배치하지 않음

## 02 About

### 섹션 목적

Summary, Core Strengths, 기존 About의 역할을 통합해 어떤 방식으로 일하는 개발자인지 설명한다.

### 정보 순서

1. 짧은 소개
2. 경력 전환 흐름
3. 핵심 역량 4개
4. 최근 개발 방향 한 줄

### 텍스트 와이어프레임

```text
[Section Label]
ABOUT

[Lead]
다양한 모바일 플랫폼과 운영 환경을 경험하고,
복잡한 제약을 유지보수 가능한 구조와 협업 기준으로 전환해 왔습니다.

[Short Story]
웹에이전시에서 Android 개발자로 커리어를 시작해 기획·디자인·서버·웹 개발자와
여러 SI 프로젝트의 제안부터 출시와 운영까지 경험했습니다. 이후 GS Retail의
Android/iOS 앱을 함께 운영하며 iOS로 전환했고, 콘텐츠 앱 운영, 글로벌 앱 마켓
기술 검토, 디자인 시스템 플랫폼화, UIKit 레거시의 SwiftUI 전환으로 역할을 넓혔습니다.

[Keyword 01]
Cross-platform Perspective
Android와 iOS의 구현 차이를 이해하고 모바일 전체 흐름을 조율합니다.

[Keyword 02]
Operation at Scale
다수의 운영 앱에서 배포, VOC, OS 변화, Crash와 외부 SDK 이슈를 다뤘습니다.

[Keyword 03]
Architecture & Modernization
기존 동작과 운영 리스크를 기준으로 안전한 전환 단위를 찾고 구조를 개선합니다.

[Keyword 04]
Platform & Collaboration
공통 컴포넌트와 디자인 토큰처럼 여러 직군이 같은 기준으로 일할 수 있는 체계를 만듭니다.

[Recent]
최근에는 Codex 기반 개발 환경과 개인 제품을 통해 설계·검증·배포 과정을 계속 확장하고 있습니다.
```

### 콘텐츠 제한

- 별도 Core Strengths 섹션을 만들지 않음
- 핵심 역량은 4개 이하
- 기술 도구 나열 금지
- AI 원칙은 한 문장만 허용

## 03 Career

### 섹션 목적

회사명과 기간보다 역할이 어떻게 확장됐는지 보여준다.

### Career 공통 데이터 단위

사용자 와이어프레임에는 회사별로 다음 정보가 들어갈 수 있어야 한다.

```text
company
period
position
career_stage
one_line_role
key_responsibilities[2~4]
signature_evidence[1~3]
role_transition
related_project_ids[]
```

### 경력 흐름

#### 01 디지털다임

```text
[Career Stage]
Build Across Domains

[One-line Role]
웹에이전시에서 Android 기반 SI 프로젝트의 제안·구축·출시·운영 전 과정을 경험했습니다.

[Evidence]
B2B / B2C / Intranet
Native / Hybrid
Main Android Developer · MyD2

[Transition]
여러 직군과 제품 전 과정을 경험하며 모바일 구현과 협업의 기반을 만들었습니다.
```

#### 02 GS ITM

```text
[Career Stage]
Operate at Scale

[One-line Role]
GS Retail 전사 모바일 앱 10종 이상을 운영하고 Android에서 iOS 개발자로 역할을 확장했습니다.

[Evidence]
10+ Apps Operation
Android → iOS
GS Fresh Mobile Scope

[Transition]
개별 기능 구현에서 운영 안정성과 Android/iOS 전체 범위를 판단하는 역할로 확장했습니다.
```

#### 03 ONEstore

```text
[Career Stage]
Platform & Technical Coordination

[One-line Role]
콘텐츠 앱 운영에서 글로벌 앱 마켓 기술 검토와 디자인 시스템 플랫폼화로 역할을 넓혔습니다.

[Role Track]
ONEstory Operation
Global App Market
Design System

[Evidence]
Apple Cork · 2 Weeks
Prototype → Alpha → Beta
Company-wide Seminars · 3

[Transition]
구현을 넘어 feasibility, 공통 기준, 여러 직군의 협업 구조를 설계하는 역할로 확장했습니다.
```

#### 04 엔카닷컴

```text
[Career Stage]
Modernize Legacy

[One-line Role]
Objective-C/UIKit 운영 앱에서 SwiftUI와 테스트 가능한 구조로 전환하는 시작점을 만들었습니다.

[Evidence]
UIKit → SwiftUI
MVVM / MVI
Unit Test & Logging

[Transition]
운영 중인 레거시에서 작은 화면부터 안전하게 현대화하는 기준을 실무에 적용했습니다.
```

### Career UI 보류 항목

- 카드, 타임라인, 아코디언 여부
- 회사 로고 크기와 배치
- ONEstore 3개 트랙의 확장 방식
- 프로젝트 연결 버튼의 위치

위 항목은 사용자 와이어프레임 수신 후 결정한다.

## 04 Tech Skills

### 섹션 목적

보유 기술을 나열하지 않고 실제 프로젝트 사용 근거와 연결한다.

### 정보 순서

1. 섹션 설명
2. 카테고리 필터
3. 프로젝트 수 배지가 있는 기술 카드
4. 숫자 없는 Additional Skills
5. 선택 기술의 연결 프로젝트

### 텍스트 와이어프레임

```text
[Section Label]
TECH SKILLS

[Lead]
숫자는 현재 포트폴리오에서 해당 기술을 사용한 프로젝트 수를 의미합니다.
기술을 선택하면 적용한 프로젝트와 사용 맥락을 확인할 수 있습니다.

[Category]
iOS Core
Architecture & State
Networking & Data
Operation & Quality
Design System
AI Development Workflow

[Skill Card]
SwiftUI                          7
[Logo]
UIKit 병행 운영과 점진적 전환

[Selected Skill Detail]
SwiftUI가 사용된 프로젝트
Global App Market · Design System · ONEstory · Encar · Note Cleaner · Mindly · FocusBoard

[Additional Skills]
프로젝트 연결을 추가 확인 중인 보유 기술
Combine · DI · Coordinator · Swift Testing
```

### 상호작용 원칙

- 기술 선택 시 페이지를 강제로 이동시키지 않고 관련 프로젝트를 먼저 보여준다.
- 프로젝트명을 선택하면 Projects 카드 또는 상세 화면으로 이동한다.
- 숫자 배지가 큰 기술만 강조되지 않도록 희소 기술도 별도 `Specialized` 영역에서 보여줄 수 있다.

## 05 Projects

### 섹션 목적

회사와 개인 프로젝트를 한곳에서 탐색하되 채용 우선순위를 분명하게 유지한다.

### 그룹 구조

```text
Selected Company Work
Independent Products
Early Career Work
```

### 프로젝트 카드 공통 데이터 단위

사용자 와이어프레임에는 다음 정보가 들어갈 수 있어야 한다.

```text
project_id
group
priority
company_or_type
title
period
one_line_problem
role_label
evidence_labels[1~3]
technologies[3~5]
thumbnail
status_or_link
```

### Selected Company Work 순서

1. ONEstore Global App Market Prototype
2. ONEstore Design System
3. GS Retail Mobile App Operation & GS Fresh Renewal
4. Encar iOS App Modernization
5. ONEstory iOS App Operation

### 카드용 핵심 문장

#### Global App Market

```text
Apple DMA 환경에서 제3자 앱 마켓의 iOS 구현 가능성과 제약을 검토하고
Prototype에서 Alpha/Beta까지 구현 범위와 리스크를 정리했습니다.

Apple Cork · iOS Scope · Feasibility
```

#### Design System

```text
여러 플랫폼과 직군이 같은 기준으로 UI를 구현할 수 있도록 컴포넌트,
디자인 토큰, Code Connect와 배포 흐름을 정리했습니다.

Technical Coordination · 3 Seminars · SPM
```

#### GS Retail / GS Fresh

```text
GS Retail 모바일 앱 10종 이상을 운영하고 GS Fresh 차세대 구축에서
Android/iOS 사용자 시나리오와 구현 범위를 조율했습니다.

10+ Apps · Operation · Mobile Scope
```

#### Encar

```text
Objective-C/UIKit 기반 운영 앱에서 작은 화면부터 SwiftUI와 테스트 가능한
구조로 전환하는 구현 기준을 만들었습니다.

SwiftUI · MVVM/MVI · Unit Test
```

#### ONEstory

```text
e-book 콘텐츠 앱을 인하우스에서 운영하며 WebView 화면의 Native 전환,
iPad·Widget 대응과 정기 배포를 수행했습니다.

Content · Operation · UIKit
```

### Independent Products 카드 순서

1. Note Cleaner
2. Mindly-iOS
3. FocusBoard

개인 프로젝트에서는 App Store 출시 여부와 AI-assisted 개발 환경을 회사 프로젝트보다 작은 보조 증거로 표시한다.

### Early Career Work

CafeUnion, LuxeWater, 올가홀푸드, MyD2를 compact하게 유지한다. MyD2는 메인 Android 개발과 운영 범위를 별도 표시한다.

### Project 상세 PAAR 데이터 단위

```text
header
├─ title
├─ period
├─ team
├─ role
└─ evidence_summary[3]

context
├─ background
└─ why_it_mattered

analysis
├─ constraints
├─ options_considered
├─ source_or_evidence
└─ tradeoffs

action
├─ decisions
├─ implementation
├─ collaboration
└─ verification

result
├─ deliverables
├─ operational_or_collaboration_change
└─ visual_evidence[]
```

상세 UI의 레이아웃은 사용자 와이어프레임을 받은 후 결정한다.

## 06 AI Workflow

### 섹션 목적

도구 목록이 아니라 반복 가능한 AI-assisted 개발 방식을 보여준다.

### 텍스트 와이어프레임

```text
[Section Label]
AI-ASSISTED DEVELOPMENT

[Lead]
AI가 안정적으로 작업할 수 있도록 컨텍스트, 역할, 제한 조건과 검증 단계를 먼저 설계합니다.

[01 Context Packaging]
PRD, 아키텍처 결정, API 계약, 현재 오류처럼 이번 작업에 필요한 정보만 분리합니다.

[02 Agent & Skill Routing]
설계 검토, 기능 계획, 테스트 검증처럼 목적이 다른 작업을 역할별 Agent와 Skill로 나눕니다.

[03 Guardrails]
수정 금지 파일, 레이어 경계, 보안 규칙, 제외 범위를 AGENTS.md와 작업 지시에 명시합니다.

[04 Token-efficient Iteration]
전체 프로젝트를 반복 설명하지 않고 기준 문서를 참조한 뒤 영향 범위와 실패 증상만 단계적으로 제공합니다.

[05 Verification Loop]
AI 결과를 diff, build/test, Preview, 실기기·시뮬레이터, 로그와 수동 QA로 다시 검증합니다.

[Principle]
AI는 탐색과 초안의 속도를 높이고, 최종 구조·품질·운영 리스크 판단은 개발자가 책임집니다.
```

### 콘텐츠 제한

- 특정 프로젝트 이름은 본문 중심에 두지 않음
- 도구 태그는 하단 보조 정보로만 사용
- OpenAI API 제품 설계와 Codex 개발 활용을 혼합하지 않음

## 07 Contact

### 섹션 목적

채용 담당자가 다음 행동을 바로 선택할 수 있게 한다.

### 텍스트 와이어프레임

```text
[Headline]
운영과 구조 개선이 필요한 iOS 제품에 대해 이야기하고 싶습니다.

[CTA]
Email
GitHub
Portfolio PDF

[Supporting]
웹 포트폴리오에는 프로젝트 상세와 시각 자료가 포함되어 있습니다.
```

설정되지 않은 Contact Form은 제거 후보로 두고, 이메일 링크 중심 구성을 우선 검토한다.

## 콘텐츠 밀도 기준

- Home: 한 화면
- About: 소개 1개 + 핵심 키워드 4개
- Career: 회사 4개, 회사당 핵심 정보 3단계 이하
- Tech Skills: 카테고리당 4~7개 주력 기술
- Projects: 회사 5개 + 개인 3개 + 초기 경력 compact 4개
- AI Workflow: 5단계
- Contact: CTA 3개 이하

## 구현 전 사용자 입력이 필요한 항목

1. Career 와이어프레임
2. Project 카드 와이어프레임
3. Project 상세 와이어프레임
4. Global Market을 대표 프로젝트 1번으로 올리는 안의 최종 승인
5. 기술 매핑 확인 질문 5개

## 다음 단계

사용자가 Career와 Project 와이어프레임을 전달하기 전에는 Home, About, Tech Skills, AI Workflow의 시각 방향과 공통 디자인 토큰을 설계할 수 있다. 실제 코드는 디자인 방향과 텍스트 와이어프레임 승인 후 수정한다.
