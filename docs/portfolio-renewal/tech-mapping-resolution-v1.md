# 기술 매핑 정합성 정리 v1

## 목적

`project-tech-mapping-v1.md`에서 확인된 불일치를 현재 포트폴리오와 경력 자료를 근거로 재분류한다. 이 문서는 Tech Skills 숫자 배지의 최종값이 아니라, 어떤 기술에 숫자를 표시해도 되는지를 판단하는 기준이다.

## 결론

기술 카드는 두 종류로 구분한다.

1. **Project-backed Skill**: 사용 프로젝트가 확인되어 숫자 배지를 표시할 수 있는 기술
2. **Additional Skill**: 보유 또는 실무 사용 경험은 기재되어 있으나 공개 프로젝트 연결이 불충분해 숫자를 표시하지 않는 기술

숫자 배지 때문에 근거가 불충분한 기술을 삭제하지는 않는다. 다만 프로젝트 수처럼 보이는 수치를 임의로 만들지 않는다.

## 프로젝트 집계 단위

Tech Skills 숫자에는 최종 Projects 섹션에 공개할 다음 12개 프로젝트를 기준으로 사용한다.

### 회사 프로젝트 5개

- ONEstore Global App Market Prototype
- ONEstore Design System
- ONEstory iOS App Operation
- Encar iOS App Modernization
- GS Retail Mobile App Operation & GS Fresh Renewal

### 개인 프로젝트 3개

- Note Cleaner
- Mindly-iOS
- FocusBoard

### 초기 경력 프로젝트 4개

- CafeUnion
- LuxeWater
- 올가홀푸드
- 사내 인트라넷(MyD2)

`gsitm-2`는 `gsitm-1` 안의 GS Retail 운영·GS Fresh 트랙과 범위가 겹치므로 별도 프로젝트 수에 포함하지 않는 안을 기준으로 한다. 상세 기술 근거는 `gsitm-1`을 보완하는 자료로 활용한다.

## 근거 상태 정의

- **확정**: 프로젝트 `tech` 배열 또는 프로젝트 상세에 사용 사실이 명확함
- **보완 확정**: `tech` 배열에는 빠졌지만 Career 또는 프로젝트 본문에 명확한 근거가 있음
- **조건부**: 현재 사이트에 주장은 있으나 구체적 프로젝트 범위나 구현 수준을 추가 확인해야 함
- **미연결**: 보유 기술로 기재되어 있으나 공개 프로젝트를 특정할 수 없음

## 기술별 정합성

### iOS Core

| 기술 | 추천 수 | 상태 | 근거 및 처리 |
|---|---:|---|---|
| Swift | 8 | 확정 | ONEstore 3개, Encar, GS ITM, 개인 프로젝트 3개. Android 초기 프로젝트 제외 |
| SwiftUI | 7 | 확정 | Global Market, Design System, ONEstory, Encar, 개인 프로젝트 3개 |
| UIKit | 2 | 보완 확정 | Encar, ONEstory. ONEstory Career와 본문에 Native 전환 근거 존재 |
| Objective-C | 3 | 보완 확정 | Encar, GS Retail, ONEstory |
| RxSwift | 2 | 확정 | Note Cleaner, GS Retail/GS Fresh. `gsitm-2`는 중복 집계하지 않음 |
| Combine | - | 미연결 | Summary와 About에는 있으나 공개 프로젝트를 특정할 수 없음 |
| VisionKit | 1 | 확정 | Note Cleaner |

### Architecture & State

| 기술 | 추천 수 | 상태 | 근거 및 처리 |
|---|---:|---|---|
| Clean Architecture | 2 | 확정 | Global Market, Note Cleaner |
| MVVM | 3 | 확정 | Global Market, Encar, Note Cleaner |
| MVI | 1 | 보완 확정 | Encar에서 MVVM/MVI 두 버전을 비교·적용한 현재 콘텐츠 근거 |
| DI | 2 | 조건부 | 현재 Tech Stack 문구에서 Global Market, Note Cleaner 사용을 주장하지만 프로젝트 배열에는 없음 |
| Coordinator | 2 | 조건부 | 현재 Tech Stack 문구에서 Global Market, Note Cleaner 사용을 주장하지만 프로젝트 배열에는 없음 |
| Tuist | 2 | 확정 | Global Market, Design System |

### Networking & Data

| 기술 | 추천 수 | 상태 | 근거 및 처리 |
|---|---:|---|---|
| Alamofire | 2 | 확정 | Encar, GS Retail/GS Fresh |
| Moya | 1 | 확정 | GS Retail/GS Fresh |
| GRDB | 1 | 확정 | Mindly |
| KeychainAccess | 2 | 확정 | ONEstory, GS Retail/GS Fresh 상세 근거 |
| CryptoSwift | 3 | 확정 | Global Market, ONEstory, GS Retail/GS Fresh 상세 근거 |
| OpenAI API | 1 | 확정 | Note Cleaner. AI 개발 도구가 아닌 제품 기술로 분류 |
| Structured Response | 1 | 확정 | Note Cleaner |

### Operation & Quality

| 기술 | 추천 수 | 상태 | 근거 및 처리 |
|---|---:|---|---|
| Firebase Crashlytics | 3 | 확정 | Encar, GS Retail, 올가홀푸드 |
| Firebase Remote Config | 2 | 확정 | Note Cleaner, FocusBoard |
| Firebase Functions | 1 | 확정 | Mindly |
| Fastlane | 1 | 확정 | Note Cleaner |
| XCTest / Unit Test | 1 | 보완 확정 | Encar 프로젝트 상세에 주요 UseCase Unit Test 작성 근거 존재 |
| Swift Testing | - | 미연결 | 공개 프로젝트 근거 없음 |

### Design System

| 기술 | 추천 수 | 상태 | 근거 및 처리 |
|---|---:|---|---|
| Figma | 2 | 확정 | Global Market, Design System |
| Design Tokens | 1 | 확정 | Design System |
| Style Dictionary | 1 | 확정 | Design System |
| Figma Code Connect | 1 | 확정 | Design System |
| Lottie | 2 | 확정 | Design System, ONEstory |

### AI Development Workflow

| 기술 | 추천 수 | 상태 | 근거 및 처리 |
|---|---:|---|---|
| Codex | 2 | 확정 | Mindly, FocusBoard |
| AGENTS.md | 2 | 확정 | Mindly, FocusBoard |
| Codex Skills | 2 | 확정 | Mindly, FocusBoard |
| Codex Agents | 1 | 확정 | FocusBoard |
| Cursor | 1 | 조건부 | Encar 기술 배열에 있으나 어떤 작업에 사용했는지 상세 근거 보강 필요 |
| Copilot | 1 | 조건부 | Encar 기술 배열에 있으나 어떤 작업에 사용했는지 상세 근거 보강 필요 |

### Android / Cross-platform

| 기술 | 추천 수 | 상태 | 근거 및 처리 |
|---|---:|---|---|
| Android | 5 | 확정 | GS Retail/GS Fresh, 초기 경력 4개 |
| Java | 3 | 확정 | CafeUnion, LuxeWater, 올가홀푸드 |
| Java | 4 | 조건부 | 사내 인트라넷이 Java 기반이었다면 4로 변경 |
| WebView / JavaScript Bridge | 3 이상 | 조건부 | LuxeWater, ONEstory, Global Market은 확인되나 전체 적용 범위 재검토 필요 |

## 메인 Tech Skills 표시안

### 숫자 배지 표시 가능

- Swift `8`
- SwiftUI `7`
- Objective-C `3`
- UIKit `2`
- RxSwift `2`
- VisionKit `1`
- Clean Architecture `2`
- MVVM `3`
- MVI `1`
- Tuist `2`
- Alamofire `2`
- Moya `1`
- GRDB `1`
- Firebase Crashlytics `3`
- Firebase Remote Config `2`
- Fastlane `1`
- Figma `2`
- Design Tokens `1`
- Style Dictionary `1`
- Figma Code Connect `1`
- Codex `2`
- AGENTS.md `2`
- Codex Skills `2`

### 숫자 없이 Additional Skills로 표시

- Combine
- DI
- Coordinator
- Swift Testing
- Cursor
- Copilot

DI와 Coordinator는 사용자 확인 후 각각 `2`로 승격할 수 있다. Cursor와 Copilot은 프로젝트에서 어떤 분석·검토에 사용했는지 근거가 보강되면 숫자 표시가 가능하다.

## 화면 표기 규칙

- 숫자 옆 또는 섹션 설명에 `사용 프로젝트 수`라고 명시한다.
- `0`은 표시하지 않는다.
- 프로젝트 수가 1이어도 희소성과 직무 연관성이 높으면 노출한다.
- 숫자가 큰 기술만 주력 기술로 해석되지 않도록 카테고리와 대표 사례를 함께 보여준다.
- 플랫폼명 iOS, Android, macOS에는 숫자 배지를 붙이지 않고 필터 또는 경력 키워드로 사용한다.
- Apple Intelligence와 OpenAI API는 AI Workflow가 아니라 제품 기술에 배치한다.

## 사용자 확인이 필요한 최소 질문

1. ONEstore Global Market과 Note Cleaner에서 DI와 Coordinator를 실제 구조로 적용했는가?
2. Combine을 실제로 사용한 공개 프로젝트는 무엇인가?
3. Swift Testing을 실제로 사용한 공개 프로젝트는 무엇인가?
4. 사내 인트라넷 앱은 Java 기반이었는가?
5. Cursor와 Copilot을 Encar의 어떤 업무에 사용했는가?

이 다섯 항목은 구현 직전 확인한다. 답변이 없어도 숫자 없는 Additional Skills로 안전하게 구현할 수 있다.
