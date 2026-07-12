# 포트폴리오 전면 개편 콘텐츠 인벤토리

## 문서 목적

현재 포트폴리오의 콘텐츠를 새 정보 구조에 맞춰 분류한다. 이 문서는 UI 구현안이 아니라, 기존 자료를 잃지 않으면서 중복을 제거하기 위한 콘텐츠 기준 문서다.

새 섹션 순서는 다음을 기준으로 한다.

1. Home
2. About
3. Career
4. Tech Skills
5. Projects
6. AI Workflow
7. Contact

Career와 Projects의 최종 UI는 사용자 와이어프레임을 전달받은 뒤 결정한다.

## 분류 기준

- **유지**: 현재 사실과 메시지를 그대로 활용할 수 있음
- **통합**: 다른 섹션과 합쳐야 의미가 선명해짐
- **이동**: 내용은 유효하지만 현재 위치가 적절하지 않음
- **축소**: 사실은 유지하되 본문 노출량을 줄여야 함
- **재작성**: 사실은 유효하지만 새 포지셔닝과 구조에 맞게 다시 써야 함
- **제거 후보**: 중복되거나 현재 채용 메시지를 흐리는 요소. 실제 삭제 전 사용자 확인 필요
- **추가 확인**: 근거 또는 표현 범위를 사용자와 확인해야 함

## 핵심 채용 메시지

현재 자료를 하나의 경력 흐름으로 묶으면 다음과 같다.

> 다양한 모바일 플랫폼과 운영 환경을 경험하고, 복잡한 정책·기술·협업 제약을 유지보수 가능한 구조와 공통 기준으로 전환해 온 Senior iOS Application Developer

이 메시지를 뒷받침하는 경력 흐름은 다음과 같다.

`Android/SI 구축 경험 → 대규모 Android/iOS 운영 → 콘텐츠 앱 인하우스 운영 → 글로벌 앱 마켓 기술 검토 → 디자인 시스템 플랫폼화 → UIKit/Objective-C 레거시 현대화 → AI-assisted 개발 환경과 개인 제품 출시`

## 섹션별 인벤토리

### 1. Home

#### 유지

- `Senior iOS Application Developer`
- 이름 이지은
- 10년 이상의 모바일 앱 개발·운영 경력
- 커머스, 콘텐츠, 플랫폼, 중고차, 글로벌 앱 마켓 도메인
- 운영 안정화, 레거시 개선, SwiftUI 전환, 디자인 시스템 경험
- 프로필 이미지

#### 재작성

- 현재 Hero 제목과 부제는 핵심 역할과 대표 증거가 더 빨리 보이도록 압축한다.
- `안녕하세요`로 시작하는 자기소개형 제목보다 직무와 차별점을 먼저 제시한다.
- 다음 대표 증거 중 검증된 항목 2~3개를 선택해 시각적으로 노출한다.
  - GS Retail 전사 모바일 앱 10종 이상 운영
  - Apple Cork 기술 세션 및 약 2주간의 해외 출장
  - ONEstore Design System 전사 세미나 3회
  - Android에서 iOS로 전환한 크로스 플랫폼 경험

#### 이동

- 최근 개인 프로젝트와 App Store 배포 내용은 About 또는 Projects로 이동한다.
- AI 도구 이름 나열은 AI Workflow로 이동한다.

#### 제거 후보

- `더 알아보기`처럼 목적지가 모호한 CTA
- 장식 목적의 마우스 스크롤 표시와 커서 추적 효과

### 2. About

기존 `Summary`, `Core Strengths`, `About Me`를 하나의 섹션으로 통합한다.

#### 유지

- 10년 이상 경력과 주요 도메인
- Android 개발자로 시작해 iOS 개발자로 전환한 과정
- Android/iOS 양쪽의 구현 차이를 이해하고 모바일 범위를 조율한 경험
- 운영 중인 앱에서 안정성과 유지보수성을 우선하는 태도
- 레거시를 전면 교체하기보다 영향 범위를 파악해 점진적으로 개선하는 방식
- UIKit, SwiftUI, RxSwift, Combine 등을 프로젝트 맥락에 맞게 선택하는 기준
- 디자인 시스템, 공통 컴포넌트, 디자인 토큰을 통한 협업 구조 개선 경험
- 웹에이전시 시절부터 기획·디자인·서버·웹·모바일 개발자와 협업한 경험
- AI 결과를 검증하고 최종 설계 판단을 개발자가 책임진다는 원칙

#### 통합

- Summary의 `Domain`, `Modernization`, `Architecture`, `Workflow`, `Recent`
- Core Strengths의 Architecture, Operation, Refactoring, Migration, Platform
- About Me의 Working Principles

#### 추천 키워드

- `Cross-platform Perspective`
- `Operation at Scale`
- `Architecture & Modernization`
- `Platform & Collaboration`

#### 축소

- 기술 이름은 About에서 4~6개만 예시로 남기고 전체 목록은 Tech Skills로 이동한다.
- AI 활용은 원칙 한 문장만 남기고 상세 방법은 AI Workflow로 이동한다.
- `Legacy Modernization`과 `SwiftUI Migration`은 하나의 점진적 현대화 메시지로 합친다.

#### 제거 후보

- Summary와 About에서 반복되는 운영 안정성·레거시 개선 문장
- 별도의 Core Strengths 6개 카드 섹션
- 추상적인 태도만 설명하고 실제 경력 근거가 연결되지 않는 문장

### 3. Career

UI는 사용자 와이어프레임 수신 전까지 수정하지 않는다. 현재 표 데이터와 모달 내용을 기반으로 회사별 경력 서사만 정리한다.

#### 디지털다임

**유지**

- 2014.12 ~ 2017.05
- Android 개발과 SI/SM 경험
- 기획·디자인·서버·웹 개발자와 제안부터 출시·운영까지 협업
- B2B, B2C, 사내 인트라넷, 네이티브·하이브리드 프로젝트 경험
- CafeUnion, LuxeWater, 올가홀푸드, 사내 인트라넷(MyD2)
- 위치 기반, 외부 SDK, 결제, 소셜 로그인, WebView/JavaScript Interface 경험
- 사내 인트라넷 앱의 메인 Android 개발과 운영 경험

**재작성**

- 초기 경력을 단순한 `Android 기반 경험`이 아니라 여러 직군과 제품 전 과정을 경험한 웹에이전시 경력으로 설명한다.
- 사내 인트라넷은 기존 웹 기능을 모바일로 확장하고 회의실 예약·휴가 결재 등을 앱에서 사용할 수 있게 한 대표 사례로 정리한다.

**제거 후보**

- `이 경험은 이후 iOS 개발의 기반이 되었다`처럼 결과를 대신 해석하는 상투적인 문장

#### GS ITM

**유지**

- 2017.06 ~ 2021.09
- GS Retail 전사 모바일 앱 10종 이상 동시 운영·개발
- GS Fresh, GS 수퍼마켓, 달리살다, 미식일상, 배송기사 전용 앱, 나만의 냉장고 등
- 정기·긴급 배포, 기능 개발, OS 업데이트, Deprecated API, VOC, Crash, 외부 SDK 대응
- 각 사업부 현업 담당자와 요구사항·일정·장애 영향 범위 조율
- GS 계열사 SI 프로젝트 개발 경험
- 외부 투입 개발자 인수인계와 인스펙션
- Android에서 iOS 개발자로 전환
- GS Fresh 차세대 프로젝트에서 Android/iOS 범위와 사용자 시나리오·기술 스펙 조율

**재작성**

- `앱 운영`과 `GS Fresh 차세대 구축`을 하나의 회사 경력 안에서 두 개의 역할 트랙으로 구분한다.
- 공식 직급과 오해되지 않도록 `비공식 PL` 대신 실제 책임 범위를 먼저 설명한다.

**추가 확인**

- 10종 이상 앱의 공개 가능한 정확한 목록
- 외부 개발자 인스펙션의 구체적인 기준과 산출물
- GS Fresh 차세대 프로젝트 기간과 참여 인원은 현재 자료와 최종 대조 필요

#### ONEstore

ONEstore 경력은 회사는 하나지만 역할 변화가 크므로 Career에서 단계적으로 표현한다.

**트랙 1: ONEstory 운영 및 개발**

- 2021.09 ~ 2023.12
- 콘텐츠 앱의 인하우스 운영 경험
- 정기 배포, VOC, OS 업데이트, SDK 연동, 위젯, iPad 대응
- WebView 기반 화면의 UIKit Native 전환
- 콘텐츠 탐색·구매·대여·보관함·뷰어와 연계되는 사용자 흐름 유지보수

**트랙 2: Global App Market**

- 2024.01 ~ 2024.12
- Apple DMA와 Alternative App Marketplace 기술 검토
- MarketplaceKit, 앱 아키텍처, 네트워크 모듈, JavaScript Interface 검토·구현
- Prototype → Alpha → Beta 단계의 구현 범위와 리스크 정리
- Apple Cork 기술 세션 참가자 대표 및 약 2주간의 해외 출장
- 기술 문서 중심의 구현 가능성 검토와 Apple 직접 커뮤니케이션

**트랙 3: ONEstore Design System**

- 2024.06 ~ 2025.06
- iOS 개발 파트의 구조와 구현 기준 조율
- 공통 UI 컴포넌트, 디자인 토큰, Style Dictionary, Figma Code Connect
- Android/iOS/Front-end/Back-end/기획/UXD 간 기준 조정
- Top Navigation Bar를 포함한 컴포넌트 레이어와 플랫폼별 차이 조율
- 바이위클리 회의, 회의록, 정의 문서, 레이어 기준표, 토큰 기준표
- C-level 보고 2회와 전사 전파 세미나 1회
- SPM, Code Connect, 자동화 흐름의 배포 가능한 산출물

**재작성**

- Career에서는 세 트랙의 역할 변화만 보여주고 기술 상세는 Projects로 연결한다.
- `iOS PM`, `iOS PL`보다 `iOS 개발 범위 조율`, `기술 검토`, `구현 리스크 정리`를 우선 사용한다.

#### 엔카닷컴

**유지**

- 2025.06 ~ 2025.08
- Objective-C/UIKit 기반 운영 앱 레거시 분석
- 작은 화면부터 SwiftUI 전환의 시작점 마련
- MVVM과 MVI 구조 비교·적용
- 디자인 시스템 적용
- 기존 오류 수정과 테스트 코드 작성
- 광고 모듈 통합
- Crashlytics 중앙화와 API 로깅 개선

**재작성**

- 짧은 재직 기간을 설명하거나 방어하지 않고, 명확한 개선 범위와 산출물 중심으로 작성한다.
- `SwiftUI라는 신규 언어`가 아니라 `SwiftUI 기반 UI 프레임워크`로 정확히 표현한다.

### 4. Tech Skills

#### 유지

- 현재 카테고리 구분
- 기술이 사용된 대표 프로젝트를 설명하는 맥락
- Swift, Objective-C, UIKit, SwiftUI, RxSwift, Combine
- Clean Architecture, MVVM, MVI, DI, Coordinator
- 네트워크, 저장소, 운영·품질, 디자인 시스템, AI 도구

#### 재작성

- 텍스트 태그 중심 UI를 기술 로고 카드 중심으로 변경한다.
- 각 기술 카드 오른쪽 위에 `사용 프로젝트 수`를 표시한다.
- 숫자는 숙련도나 사용 연수가 아니라 현재 포트폴리오에 등록된 프로젝트 수임을 명시한다.
- 기술 선택 시 관련 프로젝트를 확인할 수 있는 연결 방식을 검토한다.

#### 이동

- 각 카드의 긴 사용 맥락은 기술 상세 또는 연결 프로젝트 목록으로 이동한다.

#### 추가 확인

- 프로젝트 모달에 누락된 UIKit, Objective-C, MVVM 등 실제 사용 기술
- `Firebase`와 개별 제품(`Crashlytics`, `Remote Config`, `Functions`)의 집계 방식
- `iOS`, `Android`, `macOS`를 기술 카드로 표시할지 플랫폼 필터로 분리할지 결정

### 5. Projects

기존 Featured Projects, Early Career Experience, Side Projects를 하나의 Projects 섹션으로 통합한다. 같은 무게로 섞지 않고 세 그룹으로 구분한다.

#### Selected Company Work

1. ONEstore Global App Market Prototype
2. ONEstore Design System
3. GS Retail Mobile App Operation & GS Fresh Renewal
4. Encar iOS App Modernization
5. ONEstory iOS App Operation

Global App Market을 첫 번째로 제안하는 이유는 Apple Cork 출장, 국내에서 직접 검증하기 어려운 기술 제약, 기술 문서 기반 feasibility 검토, Prototype에서 Alpha/Beta로 이어진 과정이 가장 희소한 경험이기 때문이다.

#### Independent Products

- Note Cleaner
- Mindly-iOS
- FocusBoard

각 프로젝트는 제품 소개와 함께 다음을 분리해서 보여준다.

- 사용자가 해결하려던 문제
- 직접 담당한 제품·아키텍처·배포 범위
- Codex 환경, Agent, Skill, AGENTS.md, 검증 루프 등 AI-assisted 개발 방식
- App Store 또는 실제 결과물

#### Early Career Work

- CafeUnion
- LuxeWater
- 올가홀푸드
- 사내 인트라넷(MyD2)

초기 프로젝트의 실체는 유지하되 대표 프로젝트보다 작은 비중으로 보여준다. 사내 인트라넷은 담당 범위가 크므로 Early Career 안에서 상대적으로 강조한다.

#### 통합

- `gsitm-1`과 `gsitm-2`는 중복 범위를 검토해 하나의 대표 사례 내부 트랙으로 관리한다.
- ONEstore의 Career 요약과 프로젝트 상세 간 반복 설명을 줄인다.

#### 재작성

- 대표 프로젝트 상세는 PAAR 논리를 적용한다.
  - 문제와 중요성
  - 제약·자료·선택지 분석
  - 내 판단, 실행, 트레이드오프 관리
  - 결과, 산출물, 검증 자료
- 프로젝트마다 첫 화면에 역할·핵심 판단·증거 3개를 먼저 보여준다.

#### 유지해야 할 시각 자료

- 아키텍처 도식
- 코드 예시 이미지
- 디자인 시스템 구조와 토큰 자료
- Figma Code Connect 자료
- Apple 세션과 Prototype 결과 화면
- 앱 스크린샷과 App Store 링크

### 6. AI Workflow

#### 유지

- AI를 코드 생성기가 아닌 분석·초안·검증 보조 도구로 활용한다는 관점
- 운영 기능 개발, 레거시 분석, QA 체크리스트, 기획·디자인 리뷰 시나리오
- 최종 설계와 품질 검증은 개발자가 책임진다는 원칙
- 민감 정보와 내부 식별자를 제외한 컨텍스트 구성

#### 재작성

- 특정 프로젝트 이름을 전면에 두지 않고 사용자 고유의 반복 가능한 개발 방법으로 정리한다.
- 다음 다섯 단계로 구성한다.
  - Context Packaging
  - Agent & Skill Routing
  - Guardrails
  - Token-efficient Iteration
  - Verification Loop
- 각 단계에는 실제 설정 또는 요청 형식의 짧은 예시를 포함한다.

#### 이동

- Mindly와 FocusBoard에서 실제 적용한 Agent·Skill·AGENTS.md 사례는 각 프로젝트 상세의 Evidence로 연결한다.
- OpenAI API 프롬프트와 DTO 설계는 Note Cleaner 프로젝트의 제품 기술 사례로 유지하고, Codex 활용과 혼동하지 않는다.

#### 제거 후보

- Cursor, Claude Code, Codex 등 도구 이름만 나열하는 카드
- 정의만 있고 실제 입력·제한·검증 방식이 없는 설명

### 7. Contact

#### 유지

- 이메일
- GitHub
- 웹 포트폴리오 주소
- PDF 포트폴리오 또는 이력서 링크

#### 축소

- 설정되지 않은 EmailJS 폼은 실제 사용 여부를 확인한 뒤 제거 또는 정상 연결한다.
- Contact는 페이지를 마무리하는 명확한 CTA 중심으로 구성한다.

## 전역 UI 및 구조 인벤토리

### 유지

- 정적 HTML/CSS/JavaScript 구조
- 프로젝트 모달과 이미지 확대 기능
- 키보드로 프로젝트 카드를 여는 기본 접근성
- 기존 프로젝트 이미지 경로와 자료

### 재작성

- 내비게이션을 실제 섹션 순서와 일치시킨다.
- 데스크톱은 우측 고정 섹션 인덱스, 모바일은 compact menu를 검토한다.
- 전면 다크 테마를 따뜻한 밝은 배경과 제한적인 다크 강조 면으로 변경한다.
- 모든 콘텐츠가 같은 카드 문법을 사용하지 않도록 섹션마다 정보 표현 방식을 구분한다.

### 제거 후보

- 사용하지 않는 과거 슬라이더 스타일과 중복 CSS
- 인라인 스타일과 중복 미디어 쿼리
- 실제 요소가 없는 Contact form 관련 설정
- 장식 목적의 cursor follower

제거 후보는 새 구조가 정상 동작한 뒤 별도 정리 단계에서 삭제한다.

## 구현 전 결정해야 할 사항

1. 사용자 Career 와이어프레임
2. 사용자 Project 카드·상세 와이어프레임
3. 대표 프로젝트 1·2순위 최종 결정
4. 기술 사용 횟수에 포함할 프로젝트 범위
5. GS ITM 중복 프로젝트 통합 기준
6. 기술명 표준화와 Firebase 집계 방식
7. 공개 가능한 회사·프로젝트 수치와 이미지 범위

## 다음 단계

이 문서와 `project-tech-mapping-v1.md`를 검토해 사실 관계와 프로젝트 범위를 확정한 뒤, 새 섹션별 콘텐츠 와이어프레임을 작성한다. Career와 Projects UI는 사용자 와이어프레임을 받은 이후 구현한다.
