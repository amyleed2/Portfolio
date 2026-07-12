# 프로젝트–기술 매핑 기준 v1

## 문서 목적

Tech Skills 카드의 숫자 배지를 신뢰할 수 있게 계산하기 위한 기준 문서다.

숫자 배지는 숙련도, 사용 연수, 구현 횟수가 아니다.

> 현재 포트폴리오의 공개 프로젝트 중 해당 기술을 실제로 사용한 프로젝트 수

현재 `project-modal.js`의 `tech` 배열을 1차 근거로 사용했다. Career 설명에만 존재하거나 원문과 충돌하는 기술은 임의로 추가하지 않고 `확인 필요`로 구분했다.

## 집계 원칙

1. 동일 프로젝트에서 같은 기술을 여러 기능에 사용해도 1회로 계산한다.
2. 회사 경력과 프로젝트 상세가 같은 작업을 설명하면 프로젝트 1개로 계산한다.
3. 기술 검토만 하고 구현하지 않은 경우 기본 집계에서 제외한다.
4. 화면에 공개되는 프로젝트만 숫자에 포함한다.
5. `gsitm-1`과 `gsitm-2`처럼 범위가 겹치면 최종 UI에서 별도 프로젝트인지 내부 트랙인지 확정한 후 계산한다.
6. 기술명은 원문을 보존하되 화면 집계에는 표준명을 사용한다.
7. AI 개발 도구와 앱 기능에 사용한 AI API는 별도 카테고리로 분리한다.
8. 플랫폼명(`iOS`, `Android`, `macOS`)은 기술 사용 횟수와 분리해 필터로 제공하는 방안을 우선 검토한다.

## 프로젝트 범위

### Selected Company Work

| ID | 프로젝트 | 분류 | 현재 상태 |
|---|---|---|---|
| `onestore-1` | ONEstore Global App Market Prototype | 대표 | 유지 |
| `onestore-2` | ONEstore Design System | 대표 | 유지 |
| `encar-1` | Encar iOS App | 대표 | 유지 |
| `gsitm-1` | GS Retail Operation & GS Fresh Renewal | 대표 | 유지, 내부 2개 트랙 |
| `onestore-3` | ONEstory iOS App Operation | 회사 프로젝트 | Projects에 추가 제안 |
| `gsitm-2` | GS Fresh 통합 멤버십 앱 | 회사 프로젝트 | `gsitm-1`과 중복 범위 확인 필요 |

### Independent Products

| ID | 프로젝트 | 분류 | 현재 상태 |
|---|---|---|---|
| `side-note-cleaner` | Note Cleaner | 개인 제품 | 유지 |
| `side-mindly` | Mindly-iOS | 개인 제품 | 유지 |
| `side-focusboard` | FocusBoard | 개인 제품 | 유지 |

### Early Career Work

| ID | 프로젝트 | 분류 | 현재 상태 |
|---|---|---|---|
| `digitaldime-1` | CafeUnion | 초기 경력 | compact 유지 |
| `digitaldime-2` | LuxeWater | 초기 경력 | compact 유지 |
| `digitaldime-3` | 올가홀푸드 | 초기 경력 | compact 유지 |
| `digitaldime-4` | 사내 인트라넷(MyD2) | 초기 경력 | 역할 강조 후 compact 유지 |

## 프로젝트별 원문 기술

다음 목록은 현재 `project-modal.js`의 `tech` 배열을 그대로 옮긴 것이다.

| 프로젝트 ID | 원문 기술 |
|---|---|
| `side-note-cleaner` | iOS, Swift, SwiftUI, VisionKit, OpenAI API, Prompt Design, Structured Response, Clean Architecture, MVVM, RxSwift, Firebase Remote Config, Fastlane |
| `side-mindly` | iOS, Swift, SwiftUI, GRDB, Apple Intelligence, Firebase Functions, OpenGraph, Share Extension, Codex, AGENTS.md, Skills |
| `side-focusboard` | Swift, SwiftUI, macOS, MenuBarExtra, Widget, App Group, JSON Persistence, Firebase Remote Config, String Catalog, Codex, AGENTS.md, Codex Agents, Skills |
| `encar-1` | iOS, Objective-C, Swift, SwiftUI, UIKit, MVVM, AppsFlyer, Braze, Firebase, Crashlytics, Alamofire, SnapKit, Cursor, Copilot |
| `onestore-1` | iOS, Swift, SwiftUI, Clean Architecture, MVVM, Tuist, MarketplaceKit, JavaScript Interface, Figma, CryptoSwift |
| `onestore-2` | iOS, Swift, SwiftUI, Tuist, Figma, Design Token, Style Dictionary, Code Connect, Lottie |
| `onestore-3` | iOS, Swift, SwiftUI, KeychainAccess, Kingfisher, CryptoSwift, KissXML, GoogleSignIn, NaverLoginSDK, JWTDecode, Lottie, Amplitude, ADpopcorn |
| `gsitm-1` | iOS, Android, Swift, Objective-C, RxSwift, Firebase, Crashlytics, Alamofire, Moya, Jira, Confluence |
| `gsitm-2` | iOS, Swift, RxSwift, RxCocoa, RxWebkit, RxViewController, ZXingObjc, Alamofire, Moya, ReachabilitySwift, KeychainAccess, CryptoSwift, Adjust, Firebase |
| `digitaldime-1` | Android, Java, WeChat SDK, QQ SDK, Baidu SDK, Alipay SDK, Picasso, Glide, gson |
| `digitaldime-2` | Android, Java, Baidu SDK, QQ, Alipay SDK, Wechat SDK |
| `digitaldime-3` | Android, Java, FingerPush, ZXing, gson, universal image loader, viewpagerindicator, gms, crashlytics |
| `digitaldime-4` | Android |

## 기술명 표준화 제안

| 원문 | 화면 표준명 | 처리 기준 |
|---|---|---|
| `Wechat SDK`, `WeChat SDK` | WeChat SDK | 대소문자 통합 |
| `QQ`, `QQ SDK` | QQ SDK | 동일 SDK로 통합 |
| `crashlytics`, `Crashlytics` | Firebase Crashlytics | 표기 통합 |
| `Firebase` | Firebase | 개별 제품과 별도 유지 |
| `Code Connect` | Figma Code Connect | 공식 제품명으로 표시 |
| `Design Token` | Design Tokens | 개념명 복수형 통일 |
| `JavaScript Interface` | WebView JavaScript Bridge | 사용자에게 역할이 명확한 명칭 검토 |
| `OpenAI API` | OpenAI API | AI 개발 도구와 분리 |
| `Codex Agents` | Codex Agents | AI Workflow 하위 항목 |
| `Skills` | Codex Skills | 일반 기술 스킬과 혼동 방지 |
| `AGENTS.md` | AGENTS.md | 개발 환경 규칙으로 유지 |
| `gson` | Gson | 공식 표기 적용 |
| `universal image loader` | Universal Image Loader | 공식 표기 적용 |
| `viewpagerindicator` | ViewPagerIndicator | 공식 표기 적용 |
| `gms` | Google Play services | 실제 사용 범위 확인 후 표기 |

## 1차 자동 집계

아래 숫자는 현재 `project-modal.js`의 14개 프로젝트 ID를 모두 별도 프로젝트로 계산한 값이다. 아직 최종 UI 숫자로 사용하면 안 된다.

### Core iOS / Apple Platform

| 기술 | 1차 수 | 근거 프로젝트 | 상태 |
|---|---:|---|---|
| Swift | 9 | 개인 3, Encar, ONEstore 3, GS ITM 2 | 원문 기준 확정 |
| SwiftUI | 7 | 개인 3, Encar, Global Market, Design System, ONEstory | 원문 기준 확정 |
| UIKit | 1 | Encar | 누락 가능성 높음 |
| Objective-C | 2 | Encar, `gsitm-1` | ONEstory 및 GS 프로젝트 추가 확인 |
| RxSwift | 3 | Note Cleaner, `gsitm-1`, `gsitm-2` | Note Cleaner 실제 적용 범위 확인 |
| Combine | 0 | 없음 | 현재 요약·Tech Stack과 불일치, 사용 프로젝트 확인 필요 |
| VisionKit | 1 | Note Cleaner | 확정 |

### Architecture

| 기술 | 1차 수 | 근거 프로젝트 | 상태 |
|---|---:|---|---|
| MVVM | 3 | Note Cleaner, Encar, Global Market | Mindly 등 누락 여부 확인 |
| MVI | 0 | 없음 | Encar 상세에는 존재하므로 tech 배열 보완 필요 |
| Clean Architecture | 2 | Note Cleaner, Global Market | 확정 전 검토 |
| DI | 0 | 없음 | 요약·Tech Stack과 불일치, 프로젝트 근거 확인 필요 |
| Coordinator | 0 | 없음 | 요약·Tech Stack과 불일치, 프로젝트 근거 확인 필요 |
| Tuist | 2 | Global Market, Design System | 확정 |

### Networking / Data

| 기술 | 1차 수 | 근거 프로젝트 | 상태 |
|---|---:|---|---|
| Alamofire | 3 | Encar, `gsitm-1`, `gsitm-2` | GS 중복 통합 시 2로 변경 가능 |
| Moya | 2 | `gsitm-1`, `gsitm-2` | GS 중복 통합 시 1로 변경 가능 |
| GRDB | 1 | Mindly | 확정 |
| KeychainAccess | 2 | ONEstory, `gsitm-2` | GS 중복 통합 영향 있음 |
| CryptoSwift | 3 | Global Market, ONEstory, `gsitm-2` | 실제 사용 목적 확인 권장 |
| JSON Persistence | 1 | FocusBoard | 표시 명칭 검토 |

### Operation / Quality

| 기술 | 1차 수 | 근거 프로젝트 | 상태 |
|---|---:|---|---|
| Firebase | 3 | Encar, `gsitm-1`, `gsitm-2` | 제품별 집계와 분리 필요 |
| Firebase Crashlytics | 3 | Encar, `gsitm-1`, 올가홀푸드 | 표준명 통합 기준 |
| Firebase Remote Config | 2 | Note Cleaner, FocusBoard | 확정 |
| Firebase Functions | 1 | Mindly | 확정 |
| Fastlane | 1 | Note Cleaner | 다른 프로젝트 사용 여부 확인 |

### Design System

| 기술 | 1차 수 | 근거 프로젝트 | 상태 |
|---|---:|---|---|
| Figma | 2 | Global Market, Design System | 확정 |
| Design Tokens | 1 | Design System | 확정 |
| Style Dictionary | 1 | Design System | 확정 |
| Figma Code Connect | 1 | Design System | 확정 |
| Lottie | 2 | Design System, ONEstory | 확정 |

### AI Development Workflow

| 기술 | 1차 수 | 근거 프로젝트 | 상태 |
|---|---:|---|---|
| Codex | 2 | Mindly, FocusBoard | Note Cleaner 포함 여부 확인 |
| AGENTS.md | 2 | Mindly, FocusBoard | 확정 |
| Codex Agents | 1 | FocusBoard | Mindly 설정 여부 확인 |
| Codex Skills | 2 | Mindly, FocusBoard | 표준명 통합 기준 |
| Cursor | 1 | Encar | 실제 프로젝트 사용 근거 범위 확인 |
| Copilot | 1 | Encar | 실제 프로젝트 사용 근거 범위 확인 |
| OpenAI API | 1 | Note Cleaner | AI 개발 도구가 아닌 제품 기술 |

### Android / Early Career

| 기술 | 1차 수 | 근거 프로젝트 | 상태 |
|---|---:|---|---|
| Android | 5 | `gsitm-1`, Digitaldime 4개 | 확정 전 GS 범위 확인 |
| Java | 3 | CafeUnion, LuxeWater, 올가홀푸드 | 사내 인트라넷 누락 가능성 높음 |
| WeChat SDK | 2 | CafeUnion, LuxeWater | 표준명 통합 기준 |
| QQ SDK | 2 | CafeUnion, LuxeWater | 표준명 통합 기준 |
| Baidu SDK | 2 | CafeUnion, LuxeWater | 확정 |
| Alipay SDK | 2 | CafeUnion, LuxeWater | 확정 |

## 화면에 표시할 추천 기술

모든 원문 기술을 카드로 만들면 핵심 기술이 흐려진다. 다음 기술을 1차 노출 대상으로 제안한다.

### iOS Core

- Swift
- Objective-C
- UIKit
- SwiftUI
- VisionKit

### Architecture & State

- Clean Architecture
- MVVM
- MVI
- DI
- Coordinator
- RxSwift
- Combine

### Networking & Data

- Alamofire
- Moya
- GRDB
- KeychainAccess

### Operation & Quality

- Firebase Crashlytics
- Firebase Remote Config
- Fastlane
- XCTest / Swift Testing

### Design System

- Figma
- Design Tokens
- Style Dictionary
- Figma Code Connect

### AI Development Workflow

- Codex
- AGENTS.md
- Codex Agents
- Codex Skills
- Cursor
- Copilot

MarketplaceKit, OpenAI API, VisionKit처럼 프로젝트 차별성이 큰 기술은 사용 수가 1이어도 표시 가치가 있다. 반면 단일 프로젝트의 세부 SDK는 프로젝트 상세에서 보여주고 메인 Tech Skills에서는 제외하는 것이 적절하다.

## 숫자 배지 확정 전 확인 목록

1. ONEstory에서 UIKit과 Objective-C를 실제 사용했는지 tech 배열에 반영
2. GS Retail 및 GS Fresh에서 UIKit 사용 여부
3. Encar에서 MVVM과 MVI를 각각 구현한 범위
4. Mindly의 아키텍처가 MVVM, Clean Architecture, DI 중 어디에 해당하는지
5. Combine을 실제 사용한 프로젝트
6. DI와 Coordinator를 실제 사용한 프로젝트
7. XCTest와 Swift Testing을 사용한 프로젝트
8. Note Cleaner에서 RxSwift를 실제 적용했는지
9. Note Cleaner에서 Codex 환경을 포트폴리오 근거로 표시할지
10. `gsitm-1`과 `gsitm-2`를 기술 집계에서 하나로 합칠지
11. Firebase를 umbrella 카드로 표시할지 제품별 카드로 표시할지
12. 사내 인트라넷 앱의 Java 및 주요 기술 목록

## 권장 구현 데이터 구조

향후 HTML에 숫자를 반복 입력하지 않고 프로젝트 데이터를 한 곳에서 관리하는 방식을 권장한다.

```text
projects
└─ projectId
   ├─ title
   ├─ category
   ├─ visibility
   ├─ technologies[]
   └─ evidence[]

technologyCatalog
└─ technologyId
   ├─ displayName
   ├─ category
   ├─ icon
   └─ aliases[]
```

기술 카드의 숫자는 `visibility`가 공개 상태인 프로젝트의 `technologies`를 기준으로 계산한다. Career 데이터는 프로젝트 수에 중복 포함하지 않는다.

## 다음 단계

사용자 확인을 통해 누락 기술과 GS 프로젝트 중복 기준을 확정한다. 그 결과로 `v2`에서 최종 숫자 배지를 결정한 뒤 Tech Skills 와이어프레임과 UI 구현에 사용한다.
