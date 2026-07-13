// Safari 호환성 체크
console.log('project-modal.js loaded');

// 프로젝트 상세 정보 데이터
const projectData = {
    'side-note-cleaner': {
        title: '학습지 지우개 - Note Cleaner',
        period: '전체 2025.11 ~ 2026.03 · 개발 2026.01 ~ 2026.02',
        description: '영어 학습지 이미지를 VisionKit으로 입력받고, OpenAI Responses API용 프롬프트와 응답 DTO를 직접 설계해 triage와 정리 결과로 연결한 App Store 출시 개인 사이드 프로젝트입니다.',
        tech: ['iOS', 'Swift', 'SwiftUI', 'VisionKit', 'OpenAI API', 'Prompt Design', 'Structured Response', 'Clean Architecture', 'MVVM', 'RxSwift', 'Firebase Remote Config', 'Fastlane'],
        features: `
            <p><strong>Project Context</strong></p>
            <ul>
                <li>전체 2025.11 ~ 2026.03, iOS 개발 집중 기간은 2026.01 ~ 2026.02입니다.</li>
                <li>Android 1명, iOS 1명, 기획 2명, 디자이너 1명 구성에서 iOS 앱 설계, 구현, App Store 배포를 담당했습니다.</li>
            </ul>

            <p><strong>Problem</strong></p>
            <ul>
                <li>모든 이미지를 바로 AI 처리로 넘기면 비용, 정확도, 실패 케이스 관리가 어려워질 수 있었습니다.</li>
                <li>영어 학습지 여부, 이미지 품질, 후속 정리 필요 여부를 먼저 판별하는 triage 흐름이 필요했습니다.</li>
            </ul>

            <p><strong>My Role</strong></p>
            <ul>
                <li>문제 정의, iOS 앱 플로우, VisionKit 기반 문서 이미지 입력 흐름을 설계·구현했습니다.</li>
                <li>필기 제거용 OpenAI 프롬프트와 응답 DTO를 설계하고, ACCEPT / REJECT 기반 triage와 reason_code 검증 흐름을 구성했습니다.</li>
                <li>토큰 사용량을 줄이기 위해 출력 형식과 응답 스키마를 정리하고, SwiftUI 상태 처리와 App Store 배포까지 담당했습니다.</li>
            </ul>

            <p><strong>Architecture</strong></p>
            <ul>
                <li>Presentation, Domain, Data 레이어로 나누고 SwiftUI View, @Observable @MainActor ViewModel, UseCase, Repository Protocol을 분리했습니다.</li>
                <li>Data 레이어에는 OpenAI API 클라이언트, Repository 구현체, Firebase Remote Config, FileManager/UserDefaults 저장 흐름을 배치했습니다.</li>
            </ul>

            <p><strong>Key Implementation</strong></p>
            <ul>
                <li>VisionKit 스캔 후 네트워크 상태를 확인하고, ExtractWorksheetTextUseCase를 통해 OCR/정리 요청을 실행했습니다.</li>
                <li>OpenAI Responses API는 URLSession 기반 커스텀 클라이언트로 연동하고, 요청 전 이미지 리사이즈와 JPEG 압축을 적용했습니다.</li>
                <li>status, reason_code, confidence, extracted_markdown, truncated, truncation_reason 중심의 DTO와 timeout/HTTP/parse/model refusal 오류 흐름을 분리했습니다.</li>
                <li>프롬프트는 처리 대상 판단, 필기 제거 기준, 출력 형식을 나누고 불필요한 설명 출력을 줄이는 방향으로 정리했습니다.</li>
            </ul>

            <p><strong>AI Integration</strong></p>
            <ul>
                <li>ACCEPT / REJECT와 reason_code 조합을 앱에서 다시 검증해 AI 응답을 그대로 신뢰하지 않도록 설계했습니다.</li>
                <li>truncated와 truncation_reason을 분리해 출력 제한 상황을 다루고, 잘못된 입력은 설명 가능한 실패 상태로 연결했습니다.</li>
            </ul>

            <p><strong>Screenshots / Result</strong></p>
            <div class="reference-image worksheet-screenshot-strip">
                <p class="reference-image-label">App Store Release Screens</p>
                <div class="worksheet-screenshot-grid">
                    <img src="assets/images/worksheet-cleanup/main.jpg" alt="Worksheet Cleanup 앱 메인 화면" class="reference-img-vertical">
                    <img src="assets/images/worksheet-cleanup/scan.jpg" alt="Worksheet Cleanup 문서 스캔 화면" class="reference-img-vertical">
                    <img src="assets/images/worksheet-cleanup/cleanup-result.jpg" alt="Worksheet Cleanup 정리 결과 화면" class="reference-img-vertical">
                </div>
            </div>

            <p><strong>Result</strong></p>
            <ul>
                <li>AI API를 iOS 앱 플로우 안에 방어적으로 연결하고 App Store 출시까지 진행했습니다.</li>
                <li>기획, 디자인, Android 개발자와 협업하며 iOS 구조와 출시 흐름을 정리했습니다.</li>
            </ul>

            <p><strong>App Store</strong></p>
            <p><a class="side-project-cta modal-store-link" href="https://apps.apple.com/kr/app/%ED%95%99%EC%8A%B5%EC%A7%80-%EC%A7%80%EC%9A%B0%EA%B0%9C-note-cleaner/id6757840733" target="_blank" rel="noopener noreferrer">App Store에서 보기</a></p>
        `
    },

    'side-mindly': {
        title: 'Mindly-iOS',
        period: '2026.05 ~ 진행 중 · iOS 1 / Android 1 / Planner 1',
        description: '저장한 링크와 메모를 AI 태그와 로컬 검색 인덱스로 정리해, 나중에 키워드·태그·자연어로 다시 찾을 수 있게 만든 iOS 키워드 메모 앱입니다.',
        tech: ['iOS', 'Swift', 'SwiftUI', 'GRDB', 'Apple Intelligence', 'Firebase Functions', 'OpenGraph', 'Share Extension', 'Codex', 'AGENTS.md', 'Skills'],
        features: `
            <p><strong>Overview</strong></p>
            <ul>
                <li>웹서핑이나 일상 중 발견한 링크와 짧은 메모를 저장하고, AI가 자동으로 태그와 검색용 메타데이터를 생성해주는 iOS 앱입니다.</li>
                <li>노트는 GRDB 기반 로컬 DB에 먼저 저장되며, AI 태그 생성은 비동기로 실행되어 사용자의 저장 흐름을 막지 않도록 설계했습니다.</li>
                <li>기본 검색은 로컬 키워드/태그 검색으로 동작하고, AI 검색은 자연어를 검색 조건으로 변환한 뒤 로컬 DB에서 결과를 조회합니다.</li>
                <li>Share Extension을 통해 Safari나 외부 앱에서 링크/텍스트를 바로 Mindly 저장 흐름으로 연결할 수 있도록 구현했습니다.</li>
            </ul>

            <p><strong>Problem</strong></p>
            <ul>
                <li>좋은 링크나 짧은 아이디어를 저장해도 시간이 지나면 어떤 키워드로 다시 찾아야 할지 기억하기 어렵습니다.</li>
                <li>저장 시점의 링크 정보, 메모, 태그, 검색 인덱스를 함께 정리해 재탐색 가능한 구조가 필요했습니다.</li>
            </ul>

            <p><strong>My Role</strong></p>
            <ul>
                <li>iOS 개발자로 제품 기획 정리, iOS 앱 구조 설계, SwiftUI 화면 구현, GRDB 로컬 저장소, AI 태그/검색 흐름, Share Extension, 실기기 QA를 담당했습니다.</li>
                <li>총 3명 규모(iOS 1명, Android 1명, 기획 1명)에서 iOS 저장-태그 생성-검색-상세 관리 흐름을 구현했습니다.</li>
                <li>Apple Intelligence와 Firebase Functions를 활용해 AI 태그 생성 및 AI 검색 fallback 구조를 설계했습니다.</li>
            </ul>

            <p><strong>Codex Development Workflow</strong></p>
            <div class="side-project-detail-grid">
                <div class="side-project-detail">
                    <span>Context Design</span>
                    <p>AGENTS.md에는 MVVM + UseCase + Repository, GRDB/FTS5 local search, AI provider, 민감 정보 로그 금지처럼 반복 규칙만 두고, PRD/Firebase/design 상세는 docs로 분리했습니다.</p>
                </div>
                <div class="side-project-detail">
                    <span>Skills</span>
                    <p>feature-plan, ios-implementation, firebase-functions, grdb-search, swiftui-screen-scaffold, security-review skill로 계획·구현·Firebase·검색·화면·보안 검토를 분리했습니다.</p>
                </div>
                <div class="side-project-detail">
                    <span>Prompt & Token Strategy</span>
                    <p>“계획만 보고”, “문서만 수정”, “이 파일 외 수정 금지”, “fallback 추가 금지”처럼 범위를 좁혔고, 필요한 문서와 이전 QA 결과만 제공해 컨텍스트를 줄였습니다.</p>
                </div>
                <div class="side-project-detail">
                    <span>Guardrails</span>
                    <p>View의 GRDB/Firebase/FoundationModels 직접 호출을 막고, OpenAI API Key는 iOS 앱에 넣지 않도록 Firebase Functions를 fallback 경계로 고정했습니다. default search는 local-only로 유지했습니다.</p>
                </div>
            </div>

            <p><strong>Verification</strong></p>
            <ul>
                <li>Codex 결과는 git diff/status, Xcode build/test, Preview, iPhone 15 실기기 QA, Firebase Console 로그, 디자인 시안 비교로 검증했습니다.</li>
                <li>UI 이슈는 스크린샷 기반으로 확인했고, 잘못된 변경은 즉시 원복했습니다.</li>
            </ul>

            <p><strong>Screenshots / Result</strong></p>
            <div class="reference-image worksheet-screenshot-strip">
                <p class="reference-image-label">Mindly iOS Screens</p>
                <div class="worksheet-screenshot-grid">
                    <img src="assets/images/side-projects/mindly/main.png" alt="Mindly 메인 노트 리스트 화면" class="reference-img-vertical">
                    <img src="assets/images/side-projects/mindly/ai-search-loading.png" alt="Mindly AI 검색 로딩 화면" class="reference-img-vertical">
                    <img src="assets/images/side-projects/mindly/note-links.png" alt="Mindly 링크 노트 상세 화면" class="reference-img-vertical">
                </div>
                <p class="code-explanation">노트 리스트, 자연어 기반 AI 검색, 링크 상세 화면을 통해 저장-탐색-상세 관리 흐름을 확인할 수 있습니다.</p>
            </div>

            <p><strong>Result / Status</strong></p>
            <ul>
                <li>문서 체계, DesignSystem, SwiftUI 화면, GRDB 저장/검색 구조, AI 태그 생성/검색 흐름, Share Extension까지 iOS 앱 구조를 단계적으로 구성했습니다.</li>
                <li>AI 도구를 활용하되 최종 설계 판단과 품질 검증은 직접 수행하는 개발 워크플로우 사례로 정리할 수 있습니다.</li>
            </ul>

            <p><strong>App Store</strong></p>
            <p><a class="side-project-cta modal-store-link" href="https://apps.apple.com/us/app/mindly-%EB%A7%88%EC%9D%B8%EB%93%A4%EB%A6%AC/id6778290115" target="_blank" rel="noopener noreferrer">App Store에서 보기</a></p>
        `
    },

    'side-focusboard': {
        title: 'FocusBoard',
        period: 'Side Project · SwiftUI macOS App · App Store Released',
        description: '출석, 집중 타이머, Todo, 통계, 메뉴바, 위젯을 포함한 macOS 생산성 앱을 Codex 기반 작업 규칙과 단계별 검증 흐름으로 설계·구현하고 App Store에 출시한 프로젝트입니다.',
        tech: ['Swift', 'SwiftUI', 'macOS', 'MenuBarExtra', 'Widget', 'App Group', 'JSON Persistence', 'Firebase Remote Config', 'String Catalog', 'Codex', 'AGENTS.md', 'Codex Agents', 'Skills'],
        features: `
            <p><strong>Overview</strong></p>
            <ul>
                <li>출석 체크, 집중 타이머, Todo, 반복 일정, 리마인더, 통계, 메뉴바, 위젯, 원형 시간표를 제공하는 macOS 생산성 앱 프로젝트입니다.</li>
                <li>Codex를 단순 코드 생성 도구가 아니라 기능 기획, 단계별 구현, 리뷰, 버그 수정, 테스트 보강, 배포 준비 문서 작성까지 이어지는 개발 보조 시스템으로 활용했습니다.</li>
                <li>개인 사이드 프로젝트로 App Store에 출시했습니다.</li>
            </ul>

            <p><strong>My Role</strong></p>
            <ul>
                <li>기능별 kickoff 문서를 통해 goal, policy, file boundaries, risks, out-of-scope를 먼저 정리했습니다.</li>
                <li>Attendance, Focus Timer, Todo, Statistics, MenuBarExtra, Widget, Schedule 기능을 작은 단계로 나누어 구현했습니다.</li>
            </ul>

            <p><strong>Codex Development Workflow</strong></p>
            <div class="side-project-detail-grid">
                <div class="side-project-detail">
                    <span>Context Design</span>
                    <p>AGENTS.md에는 macOS-only, local-first, JSON persistence, 레이어 경계처럼 장기 규칙만 두고, 긴 PRD·디자인 수치·Firebase JSON·임시 의사결정은 단계별 프롬프트와 kickoff 문서로 분리했습니다.</p>
                </div>
                <div class="side-project-detail">
                    <span>Codex Agents</span>
                    <p>implementation_reviewer, apple_surface_specialist, persistence_and_stats agent를 구성해 구현 리뷰, quick surface 경계, 저장소·통계 리스크를 분리해 검토할 수 있게 했습니다.</p>
                </div>
                <div class="side-project-detail">
                    <span>Skills</span>
                    <p>feature-kickoff, implement-quick-surface, ship-check skill로 기능 시작, MenuBarExtra/Widget 같은 quick surface 구현, 릴리즈 전 점검을 반복 가능한 흐름으로 분리했습니다.</p>
                </div>
                <div class="side-project-detail">
                    <span>Prompt & Token Strategy</span>
                    <p>“kickoff부터”, “이번 단계는 Domain만”, “UI 제외”, “이 파일 외 수정 금지”, “다음 단계 선행 구현 금지”처럼 단계와 파일 범위를 좁혀 컨텍스트와 diff를 작게 유지했습니다.</p>
                </div>
                <div class="side-project-detail">
                    <span>Guardrails</span>
                    <p>Domain import 제한, SwiftData 도입 금지, Firebase 사용 범위 제한, 원치 않는 리팩토링 금지, quick surface business logic 금지를 반복해 기능 추가가 전체 구조 개편으로 번지지 않게 했습니다.</p>
                </div>
            </div>

            <p><strong>Verification</strong></p>
            <ul>
                <li>Codex 결과는 git diff/status, Xcode build/test, 실제 macOS 앱 실행, SwiftUI Preview, Firebase Console 로그, 수동 QA 체크리스트로 검증했습니다.</li>
                <li>Preview, String Catalog, Firebase, Widget 이슈는 핵심 에러와 증상만 다시 제공해 최소 수정하도록 유도했습니다.</li>
            </ul>

            <p><strong>Screenshots / Result</strong></p>
            <div class="reference-image">
                <p class="reference-image-label">FocusBoard App Store Screenshot</p>
                <img src="assets/images/side-projects/focusboard-main.png" alt="FocusBoard 메인 화면 스크린샷" class="reference-img">
                <p class="code-explanation">출석 캘린더, 집중 타이머, 오늘 요약, Todo 입력 흐름이 한 화면 안에서 연결되는 macOS 앱 구조를 보여주는 스크린샷입니다.</p>
            </div>

            <p><strong>Result / Status</strong></p>
            <ul>
                <li>macOS 앱 구조, MenuBarExtra, Today Summary Widget, JSON 공유 저장소, Firebase Remote Config 버전 체크, 다국어 대응, App Store 제출 자료를 정리하고 출시까지 진행했습니다.</li>
                <li>AI를 기획 보조와 구현 보조에 활용하되, 단계 분리와 직접 검증을 통해 변경 리스크를 관리한 사례입니다.</li>
            </ul>

            <p><strong>App Store</strong></p>
            <p><a class="side-project-cta modal-store-link" href="https://apps.apple.com/kr/app/focusboard/id6765804921" target="_blank" rel="noopener noreferrer">App Store에서 보기</a></p>
        `
    },

    'encar-1': {
        title: '엔카닷컴 iOS 앱 개발 및 운영',
        period: '2025.06 ~ 2025.08',
        description: '운영 중인 엔카 iOS 앱에서 UIKit 레거시 화면을 SwiftUI + MVVM 구조로 전환하고, 광고 모듈과 로깅 구조를 정리해 운영 안정성을 높이는 개선 작업을 수행했습니다.',
        tech: ['iOS', 'Objective-C', 'Swift', 'SwiftUI', 'UIKit', 'MVVM', 'AppsFlyer', 'Braze', 'Firebase', 'Crashlytics', 'Alamofire', 'SnapKit', 'Cursor', 'Copilot'],
        features: `
            <p><strong>Overview</strong></p>
            <ul>
                <li>엔카 iOS 앱의 운영 개발 과정에서 레거시 UIKit 화면 개선과 SwiftUI 전환, 운영 안정성 개선을 함께 수행한 프로젝트입니다.</li>
                <li>기존 앱 구조를 파악한 뒤, 맡은 화면 전환 범위와 운영 코드 정리 범위를 분리해 진행해야 했습니다.</li>
            </ul>

            <p><strong>Problem</strong></p>
            <ul>
                <li>차량 옵션 필터 화면은 UIKit 기반 레거시 구조로 유지되고 있어 신규 UI 요구사항과 테스트 구조를 반영하기 어려웠습니다.</li>
                <li>AppsFlyer, Braze 등 광고 모듈 연동 코드가 여러 파일에 분산되어 있어 변경 영향 범위 파악과 유지보수가 비효율적이었습니다.</li>
                <li>운영 중 장애 원인을 빠르게 추적하기 위해 Crashlytics 로깅과 API 요청/응답 로그 구조를 정리할 필요가 있었습니다.</li>
            </ul>

            <p><strong>My Role</strong></p>
            <ul>
                <li>제네시스 옵션 필터 화면의 SwiftUI + MVVM 전환 범위를 담당했습니다.</li>
                <li>광고 모듈 통합 구조, Crashlytics 로깅 중앙화, API 로깅 개선처럼 운영 추적에 필요한 산출물을 정리했습니다.</li>
                <li>정기 배포와 운영 이슈 대응 과정에서 맡은 변경 범위의 안정성 확인을 함께 진행했습니다.</li>
            </ul>

            <p><strong>Key Contributions</strong></p>
            <ul>
                <li>UIKit 기반 화면을 SwiftUI + MVVM 구조로 재구성하고, 주요 유스케이스 기준의 Unit Test를 작성했습니다.</li>
                <li>AppsFlyer, Braze 연동 코드를 단일 구조로 정리해 중복 코드를 줄이고 모듈 추가/교체가 쉬운 형태로 개선했습니다.</li>
                <li>Crashlytics 크래시 로깅 로직을 중앙화하고, API 요청/응답 로그를 추가해 운영 중 디버깅 흐름을 개선했습니다.</li>
            </ul>

            <p><strong>Technical Decisions</strong></p>
            <ul>
                <li>신규 화면은 SwiftUI를 적용하되, 기존 UIKit 앱과의 연결 지점을 고려해 MVVM 기반으로 상태와 화면 로직을 분리했습니다.</li>
                <li>광고/분석 SDK 연동은 화면별 분산 호출보다 공통 진입점에서 관리하는 편이 변경 영향 범위를 추적하기 쉽다고 판단했습니다.</li>
                <li>Crashlytics와 API 로깅은 단순 로그 추가가 아니라 재현 조건, 요청/응답 흐름, 사용자 영향 범위를 파악하기 쉬운 지점을 기준으로 수집 위치를 조정했습니다.</li>
            </ul>

            <p><strong>Screenshots / Result</strong></p>
            <ul>
                <li>UIKit 레거시 화면을 SwiftUI 기반 화면으로 전환한 결과를 면접 중 시각적으로 설명할 수 있는 자료입니다.</li>
            </ul>
            <div class="sub-screenshots">
                <p class="screenshot-label">SwiftUI 전환 결과 화면</p>
                <div class="screenshot-grid">
                    <img src="assets/images/encar_screenshot.jpg" alt="엔카 제네시스 옵션 필터 SwiftUI 전환 결과 화면" class="screenshot-img">
                </div>
            </div>

            <p><strong>Result / Impact</strong></p>
            <ul>
                <li>UIKit 레거시 화면을 SwiftUI + MVVM 구조로 전환한 산출물을 남겨, 유사 화면 전환 시 참고할 수 있는 구현 기준을 만들었습니다.</li>
                <li>광고 모듈 진입점과 Crashlytics/API 로깅 위치를 정리해 운영 이슈의 재현 조건과 영향 범위를 파악하기 쉬운 구조로 개선했습니다.</li>
            </ul>
        `
    },

    'onestore-1': {
        title: 'ONEstore Global App Market Prototype 개발',
        period: '2024.01 ~ 2024.12',
        description: 'ONEstore 글로벌 앱 마켓 프로젝트에서 Apple DMA 관련 제3자 마켓 기술 검토를 진행하고, Prototype부터 Alpha, Beta까지 iOS 구현 범위와 리스크를 정리했습니다.',
        tech: ['iOS', 'Swift', 'SwiftUI', 'Clean Architecture', 'MVVM', 'Tuist', 'MarketplaceKit', 'JavaScript Interface', 'Figma', 'CryptoSwift'],
        features: `
            <p><strong>Overview</strong></p>
            <ul>
                <li>Apple DMA 정책 변화에 대응해 ONEstore 글로벌 대체 앱 마켓의 iOS 구현 가능성을 Prototype, Alpha, Beta 단계로 검증한 프로젝트입니다.</li>
            </ul>

            <p><strong>Problem</strong></p>
            <ul>
                <li>Apple의 제3자 마켓 정책, MarketplaceKit 제약, Hosted App 다운로드/설치/업데이트 흐름의 구현 리스크를 정리해야 했습니다.</li>
            </ul>

            <p><strong>My Role</strong></p>
            <div class="modal-role-callout">
                <span class="modal-role-label">Role Scope</span>
                <p>정책/기술 검토, 앱 아키텍처 설계, Prototype에서 Alpha/Beta로 이어지는 iOS 구현 범위와 리스크 정리를 담당했습니다.</p>
            </div>
            <ul>
                <li>제3자 마켓 기술 검토, 앱 아키텍처, 네트워크 모듈, JavaScript Interface 구조를 담당했습니다.</li>
                <li>Prototype/Alpha/Beta 단계별 구현 범위와 리스크를 정리하고, Apple Cork 기술 세션에서 주요 이슈를 구현 관점으로 확인했습니다.</li>
            </ul>

            <p><strong>Key Contributions</strong></p>
            <ul>
                <li>Apple DMA 문서를 검토해 서비스 적용 조건과 리스크를 정리했습니다.</li>
                <li>Clean Architecture/MVVM 기반 앱 구조, 네트워크 모듈, JavaScript Interface 공통 기반을 구성했습니다.</li>
                <li>Hosted App 목록, 다운로드 상태, 설치/업데이트/실행/삭제 시나리오를 단계적으로 확장했습니다.</li>
            </ul>

            <p><strong>Technical Decisions</strong></p>
            <ul>
                <li>구현 전에 Apple 정책 제약, MarketplaceKit/API 제공 범위, 서비스 요구사항의 충돌 지점을 먼저 분리했습니다.</li>
                <li>마켓 메타데이터, 앱 상태, 웹-앱 이벤트 연동 경계를 나누어 정책 검토 영역과 앱 구현 영역이 섞이지 않도록 설계했습니다.</li>
            </ul>

            <p><strong>Visual Evidence</strong></p>
            <ul>
                <li>정책 검토, 앱 구조, 코드 예시, 결과 화면 자료입니다.</li>
            </ul>
            <div class="reference-image">
                <p class="reference-image-label">Apple Alternative Marketplace 검토 자료</p>
                <img src="assets/images/apple_diagram.png" alt="Apple 대체 앱 마켓 설치 흐름 검토 다이어그램" class="reference-img">
            </div>
            <div class="reference-image">
                <p class="reference-image-label">Architecture / Module Structure</p>
                <img src="assets/images/project_architecture.jpeg" alt="ONEstore Global App Market 프로젝트 모듈 아키텍처" class="reference-img">
            </div>
            <div class="reference-image">
                <p class="reference-image-label">Network Module Code Example</p>
                <img src="assets/images/network1.jpeg" alt="ONEstore Global 네트워크 모듈 코드 예시 1" class="reference-img-vertical">
            </div>
            <div class="reference-image">
                <p class="reference-image-label">Prototype / Result Screens</p>
                <img src="assets/images/session_result.png" alt="Apple Cork 세션에서 구현한 Prototype 결과 화면" class="reference-img">
                <img src="assets/images/onestore_result.jpeg" alt="ONEstore Global App Market 최종 결과 화면" class="reference-img">
            </div>

            <p><strong>Result / Impact</strong></p>
            <ul>
                <li>Apple DMA 대응 가능성과 MarketplaceKit 기반 iOS 구현 리스크를 Prototype → Alpha/Beta 단계에서 앱 흐름으로 검토했습니다.</li>
                <li>정책 제약, 네트워크 모듈, 웹-앱 이벤트 경계를 분리해 후속 단계에서 확인할 기술 리스크를 정리했습니다.</li>
            </ul>
        `
    },

    'onestore-2': {
        title: 'ONEstore Design System',
        period: '2024.06 ~ 2025.06',
        description: 'ONEstore 디자인 시스템 구축 프로젝트에서 iOS 개발 파트 기준으로 공통 UI 컴포넌트 구조, 디자인 토큰, Figma 연계 흐름을 정리하고 디자인-개발 협업 기준을 맞추는 작업을 진행했습니다.',
        tech: ['iOS', 'Swift', 'SwiftUI', 'Tuist', 'Figma', 'Design Token', 'Style Dictionary', 'Code Connect', 'Lottie'],
        features: `
            <p><strong>Overview</strong></p>
            <ul>
                <li>ONEstore 제품군에서 공통 UI 컴포넌트와 디자인 리소스를 일관되게 사용하기 위한 디자인 시스템 구축 프로젝트입니다.</li>
                <li>단순 UI 공통화가 아니라, 디자인 기준과 iOS 구현 구조가 함께 맞물리도록 협업 흐름을 정리하는 데 초점을 맞췄습니다.</li>
            </ul>

            <p><strong>Problem</strong></p>
            <ul>
                <li>디자이너와 개발자가 컴포넌트 단위와 속성을 다르게 해석해 구현 기준을 맞추기 어려웠습니다.</li>
                <li>디자인 토큰과 리소스 변경이 수작업 전달에 의존하면 반복 비용과 누락 위험이 커질 수 있었습니다.</li>
            </ul>

            <p><strong>My Role</strong></p>
            <div class="modal-role-callout">
                <span class="modal-role-label">Role Scope</span>
                <p>iOS 개발 파트 기준으로 UXD팀과 개발 조직 사이에서 컴포넌트 구조, 구현 기준, Figma 연계 흐름을 맞추는 조율 역할을 수행했습니다.</p>
            </div>
            <ul>
                <li>컴포넌트 구조, 구현 기준, Style-Component-Screen 프레임워크 구조를 iOS 관점에서 정리했습니다.</li>
                <li>Figma Plugin, Style Dictionary, Code Connect 기반의 디자인 자산-코드 연결 방식을 검토했습니다.</li>
            </ul>

            <p><strong>Key Contributions</strong></p>
            <ul>
                <li>ONEstore 제품과 협업 방식에 맞는 Style-Component-Screen 구조를 정리했습니다.</li>
                <li>Top Navigation 등 실제 요소를 기준으로 컴포넌트 단위, Item, Property 기준을 구현 규칙으로 연결했습니다.</li>
                <li>WDS 프레임워크 구조와 디자인 토큰/Code Connect 연계 흐름을 검토했습니다.</li>
            </ul>

            <p><strong>Technical Decisions</strong></p>
            <ul>
                <li>디자인 시스템을 Style, Component, Screen 계층으로 나누어 토큰, 컴포넌트, 화면 조합의 책임을 분리하는 방향을 선택했습니다.</li>
                <li>컴포넌트 정의는 디자인 명세만 맞추는 것이 아니라 실제 SwiftUI 구현에 필요한 Property, Item, 상태 조합 기준까지 함께 정리했습니다.</li>
                <li>디자인 토큰과 Code Connect는 디자이너와 개발자가 같은 컴포넌트 기준을 확인할 수 있도록 Figma 자산과 iOS 구현 예시를 연결하는 방향으로 검토했습니다.</li>
            </ul>

            <p><strong>Visual Evidence</strong></p>
            <ul>
                <li>구조, 컴포넌트, 토큰 자동화, Code Connect 흐름을 설명하는 핵심 자료입니다.</li>
            </ul>
            <div class="reference-image">
                <p class="reference-image-label">Design System Architecture</p>
                <img src="assets/images/designsystem_architecture.png" alt="ONEstore 디자인 시스템 Style Component Screen 아키텍처" class="reference-img">
                <img src="assets/images/design_deveolp_archi.png" alt="ONEstore 디자인 시스템 iOS 프레임워크 Tuist 그래프" class="reference-img-vertical">
            </div>
            <div class="reference-image">
                <p class="reference-image-label">Component Definition Example</p>
                <img src="assets/images/component5.png" alt="Top Navigation iOS 코드 구현 예시" class="reference-img">
            </div>
            <div class="reference-image">
                <p class="reference-image-label">Design Token / Resource Automation</p>
                <img src="assets/images/diagram3.png" alt="디자인 토큰 최종 자동화 워크플로우" class="reference-img">
            </div>
            <div class="reference-image">
                <p class="reference-image-label">Figma Code Connect</p>
                <img src="assets/images/codeconnect1.png" alt="Figma Code Connect Top Navigation 코드 스니펫 결과" class="reference-img">
            </div>

            <p><strong>Result / Impact</strong></p>
            <ul>
                <li>공통 컴포넌트, 디자인 토큰, Code Connect 기준을 통해 디자이너와 개발자가 같은 단위로 논의할 수 있는 기준을 정리했습니다.</li>
                <li>디자인 시스템을 단순 UI 공통화가 아니라 iOS 구현 구조와 협업 커뮤니케이션을 연결하는 플랫폼화 작업으로 확장했습니다.</li>
            </ul>
        `
    },

    'onestore-3': {
        title: 'ONEstory iOS Application 운영 및 개발',
        period: '2021.09 ~ 2023.12',
        description: '원스토리는 웹툰, 웹소설, 만화, 일반 도서, 오디오북까지 다양한 콘텐츠를 즐길 수 있는 플랫폼 서비스입니다. iPad까지 호환되며, 위젯을 통해 최근 본 작품을 빠르게 이어볼 수 있는 기능부터 비행기모드/오프라인에서도 다운로드 한 작품을 즐길 수 있는 기능을 제공합니다.',
        tech: ['iOS', 'Swift', 'SwiftUI', 'KeychainAccess', 'Kingfisher', 'CryptoSwift', 'KissXML', 'GoogleSignIn', 'NaverLoginSDK', 'JWTDecode', 'Lottie', 'Amplitude', 'ADpopcorn'],
        features: `
            <p><strong>정기 운영 업무</strong></p>
            <ul>
                <li>정기 배포 진행</li>
                <li>앱 안정성 개선 및 버그 수정</li>
                <li>신규 기능 개발 및 배포</li>
                <li>OS 업데이트 및 Deprecated Function 대응</li>
                <li>Crash Report 분석을 통한 앱 장애 요소 예방 및 대응</li>
                <li>앱 개선 요청 사항 개발 대응</li>
            </ul>
            <p><strong>개인 담당 업무</strong></p>
            <ul>
                <li>
                    <strong class="sub-title">내 서재, 구매 목록, 마이 페이지 feature 담당</strong>
                    <div class="sub-description">
                        <p class="description-label">📝 상세 설명</p>
                        <ul class="sub-list">
                            <li>다운로드 한 도서 DB 관리 및 개발</li>
                            <li>3rd party 로그인 SDK 관리 및 개발</li>
                            <li>카카오톡 고객문의 CS 화면 개발 및 운영</li>
                            <li>기존 웹뷰로 개발된 구매 목록화면을 Native UI로 화면 개발 및 전환</li>
                        </ul>
                    </div>
                </li>
                <li>
                    <strong class="sub-title">Java Script Interface 설계 및 개발</strong>
                </li>
                <li>
                    <strong class="sub-title">위젯 개발 및 운영 담당</strong>
                    <div class="sub-description">
                        <p class="description-label">📝 상세 설명</p>
                        <ul class="sub-list">
                            <li>iPhone & iPad 위젯 개발 및 운영</li>
                        </ul>
                    </div>
                </li>
                <li>
                    <strong class="sub-title">컨텐츠 뷰어 추가 기능 개발</strong>
                    <div class="sub-description">
                        <p class="description-label">📝 상세 설명</p>
                        <ul class="sub-list">
                            <li>Eye Tracking SDK를 활용한 웹툰 뷰어 자동 스크롤링 기능 구현</li>
                        </ul>
                    </div>
                </li>
                <li>
                    <strong class="sub-title">운영 업무 효율을 위한 업무</strong>
                    <div class="sub-description">
                        <p class="description-label">📝 상세 설명</p>
                        <ul class="sub-list">
                            <li>QA 및 개발 테스트를 위한 환경 세팅 조작 및 컨트롤 가능한 Application 개발 및 운영</li>
                            <li>외부 연동 규격 테스트를 위한 Tracer Application 개발 및 운영</li>
                        </ul>
                    </div>
                </li>
            </ul>
            
            <div class="app-store-section">
                <div class="app-store-header">
                    <span class="app-store-icon">📱</span>
                    <span class="app-store-title">App Store</span>
                </div>
                <div class="app-store-content">
                    <a href="https://apps.apple.com/kr/app/id637169319" target="_blank" class="app-store-link">
                        <svg class="app-store-logo" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                        </svg>
                        <div class="app-store-text">
                            <span class="download-text">다운로드</span>
                            <span class="store-name">App Store</span>
                        </div>
                        <svg class="external-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                    </a>
                </div>
            </div>
            
            <div class="sub-screenshots">
                <p class="screenshot-label">📱 결과물</p>
                <div class="screenshot-grid">
                    <img src="assets/images/onestory1.jpg" alt="원스토리 스크린샷" class="screenshot-img">
                    <img src="assets/images/onestory2.jpg" alt="원스토리 스크린샷" class="screenshot-img">
                    <img src="assets/images/onestory3.jpg" alt="원스토리 스크린샷" class="screenshot-img">
                    <img src="assets/images/onestory4.jpg" alt="원스토리 스크린샷" class="screenshot-img">
                    <img src="assets/images/onestory5.jpg" alt="원스토리 스크린샷" class="screenshot-img">
                    <img src="assets/images/onestory6.jpg" alt="원스토리 스크린샷" class="screenshot-img">
                </div>
            </div> 
        `
    },
    'gsitm-1': {
        title: 'GS Retail Mobile App Operation & GS Fresh Renewal',
        period: '2018.08 ~ 2021.09',
        description: 'GS ITM에서 GS Retail 커머스/멤버십 모바일 앱 운영을 담당했고, 별도 GS Fresh 차세대 커머스 프로젝트에서는 모바일 파트 PL로 Android/iOS 개발 범위와 구현 방향을 정리했습니다.',
        tech: ['iOS', 'Android', 'Swift', 'Objective-C', 'RxSwift', 'Firebase', 'Crashlytics', 'Alamofire', 'Moya', 'Jira', 'Confluence'],
        features:  `
            <p><strong>Overview</strong></p>
            <ul>
                <li>GS Retail 커머스/멤버십 앱 운영과 GS Fresh 차세대 프로젝트의 모바일 범위 정리 경험입니다.</li>
            </ul>

            <div class="modal-track-section">
                <div class="modal-track-header">
                    <span class="modal-track-kicker">Track 1</span>
                    <h4>GS Retail Mobile App Operation</h4>
                    <span class="modal-track-badge">Operation</span>
                </div>

                <p><strong>Problem</strong></p>
                <ul>
                    <li>여러 커머스/멤버십 앱의 배포, 장애, OS 변경 대응을 안정적으로 처리해야 했습니다.</li>
                </ul>

                <p><strong>My Role</strong></p>
                <ul>
                    <li>GS Retail 앱 운영 조직에서 iOS/Android 배포, VOC, OS 업데이트, Crash 분석을 수행했습니다.</li>
                </ul>

                <p><strong>Key Contributions</strong></p>
                <ul>
                    <li>GS Fresh Mall, 달리살다, 마켓포, THE POP 등 커머스/멤버십 앱의 정기/긴급 배포와 VOC 기반 버그 수정을 담당했습니다.</li>
                    <li>신규 OS와 Deprecated API 대응, Crash 분석을 운영 흐름 안에서 처리했습니다.</li>
                </ul>

                <p><strong>Technical Decisions</strong></p>
                <ul>
                    <li>정기/긴급 배포, VOC, Crash 대응은 사용자 영향도와 배포 리스크를 기준으로 우선순위를 나누었습니다.</li>
                    <li>신규 OS와 Deprecated API 대응은 앱별 영향 범위를 먼저 확인한 뒤 배포 일정과 함께 조정했습니다.</li>
                </ul>

                <p><strong>Screenshots / Result</strong></p>
                <ul>
                    <li>운영 대상 앱의 대표 화면입니다.</li>
                </ul>
                <div class="reference-image">
                    <p class="reference-image-label">GS Retail 운영 앱 화면</p>
                    <img src="assets/images/gsfresh_screenshot.png" alt="GS Fresh 커머스 앱 운영 화면" class="reference-img">
                    <img src="assets/images/thepop_screenshot.png" alt="THE POP 멤버십 앱 운영 화면" class="reference-img">
                </div>

                <p><strong>Result / Impact</strong></p>
                <ul>
                    <li>정기/긴급 배포, VOC, Crash, OS 대응을 반복하며 운영 중인 모바일 서비스의 안정성을 유지하는 기준을 쌓았습니다.</li>
                </ul>
            </div>

            <div class="modal-track-section modal-track-section-highlight">
                <div class="modal-track-header">
                    <span class="modal-track-kicker">Track 2</span>
                    <h4>GS Fresh Next-generation Commerce App</h4>
                    <span class="modal-track-badge">PL · SI</span>
                </div>

                <p><strong>Problem</strong></p>
                <ul>
                    <li>오픈 전 모바일 산출물, SSO, One-Source Multi Application 등 주요 구현 범위를 정리해야 했습니다.</li>
                </ul>

                <p><strong>My Role</strong></p>
                <div class="modal-role-callout">
                    <span class="modal-role-label">Role Scope</span>
                    <p>모바일 파트에서 Android/iOS 개발 범위, 구현 문서, 주요 기능의 협업 커뮤니케이션을 정리했습니다.</p>
                </div>
                <ul>
                    <li>SSO, One-Source Multi Application, SDK/API/WKWebView 연동 등 주요 모바일 기능 구현에 참여했습니다.</li>
                </ul>

                <p><strong>Key Contributions</strong></p>
                <ul>
                    <li>SSO Flow, 플랫폼별 구현 범위, scheme/환경 분리 방향을 정리했습니다.</li>
                    <li>FCM, 외부 SDK, 소셜 로그인, API/WKWebView 연동 기능을 구현했습니다.</li>
                </ul>

                <p><strong>Technical Decisions</strong></p>
                <ul>
                    <li>One-Source Multi Application과 운영 전환 리스크를 고려해 scheme, 환경, SSO 연동 범위를 점검했습니다.</li>
                    <li>Android/iOS 공통 요구사항과 플랫폼별 차이를 분리해 개발 문서와 구현 범위를 맞췄습니다.</li>
                </ul>

                <p><strong>Screenshots / Result</strong></p>
                <ul>
                    <li>차세대 커머스 앱 전환 결과 화면입니다.</li>
                </ul>
                <div class="reference-image">
                    <p class="reference-image-label">GS Fresh 차세대 커머스 앱 화면</p>
                    <img src="assets/images/gsfresh_screenshot.png" alt="GS Fresh 차세대 커머스 앱 결과 화면" class="reference-img">
                </div>

                <p><strong>Result / Impact</strong></p>
                <ul>
                    <li>SSO, 환경 분리, 외부 SDK/API 연동 등 모바일 구현 범위와 오픈 전 확인 기준을 정리했습니다.</li>
                </ul>
            </div>
        `
    },
    'gsitm-2': {
        title: 'GS Fresh 통합 맴버십 앱 운영 및 개발',
        period: '2018.08 ~ 2021.09',
        description: 'THE POP, GS수퍼마켓, GS25-나만의 냉장고, 우리동네 딜리버리 4가지 맴버십 어플리케이션을 운영 및 개발하는 업무를 담당했습니다.',
        tech: ['iOS', 'Swift', 'RxSwift', 'RxCocoa', 'RxWebkit', 'RxViewController', 'ZXingObjc', 'Alamofire', 'Moya', 'ReachabilitySwift', 'KeychainAccess', 'CryptoSwift', 'Adjust', 'Firebase'],
        features: `
            <div class="project-overview">
                <p>THE POP, GS 수퍼마켓, 나만의냉장고는 GS리테일의 통합 맴버십 어플리케이션으로써, GS리테일 통합 커머스 앱과 같이 OneSource-Multi System을 이루고 있습니다. GS리테일 맴버십 이용, 각 채널의 쿠폰 사용, 상품 결제 등을 할 수 있습니다.</p>
            </div>
            
            <div class="work-period-section">
                <p><strong>정기 운영 업무</strong>
            </div>
            <ul>
                <li>월 2회 정기 배포 진행, 긴급 배포 상시</li>
                <li>VOC 대응 및 오류 대응</li>
                <li>신규 OS Update 대응 및 Deprecated Function 대응</li>
                <li>Crash Report 분석을 통한 앱 장애 요소 예방 및 대응</li>
                <li>현업의 앱 개선 요청 사항 개발 대응</li>
                <li>운영 시스템 관련 프로젝트에 대한 운영팀으로서의 개발 Inspection 리딩</li>
                <li>성능 및 안정성 개선</li>
                <li>신규 기능 개발 및 배포</li>
            </ul>
            <div class="reference-image">
                <p class="reference-image-label">📱 결과물</p>
                <img src="assets/images/thepop_screenshot.png" alt="the pop screenshot" class="reference-img">                        
            </div>
            </ul>
        `
    },
    'digitaldime-1': {
        title: 'CafeUnion Android Application 개발',
        period: '2016.08 ~ 2017.01',
        description: '카페유니온은 중국 시장에 출시될 커피 브랜드 가맹형 O2O 프리오더 서비스 플랫폼 입니다. 국내의 스타벅스 커피 앱과 유사한 Application 입니다.',
        tech: ['Android', 'Java', 'WeChat SDK', 'QQ SDK', 'Baidu SDK', 'Alipay SDK', 'Picasso', 'Glide', 'gson'],
        features: `
            <div class="reference-image">
                <p class="reference-image-label">요구사항</p>
                <img src="assets/images/cafeunion1.png" alt="cafeunion 요구사항" class="reference-img">
                <ul class="sub-list code-explanation">
                    <li>1. 현재 사용자의 위치를 기반으로 근접한 거리에 있는 매장 리스트 노출</li>
                    <li>2. 알리바바 지도 연동을 통한 위치 서비스 제공</li>
                    <li>3. 특정 매장 선택 시, 해당 매장에서 판매하고 있는 상품 리스트 노출</li>
                    <li>4. 사용자사 선택한 상품의 수량, 사이즈, 추가옵션 등 선택을 통해 해당 상품 장바구니 담기 및 결제 기능 구현</li>
                </ul>
            </div>
            <br>
            <div class="sub-description">
                <p class="description-label">📝 상세 진행 내용</p>
                <ul class="sub-list">
                    <li>Android Application 개발</li>
                    <li>API 연동</li>
                    <li>화면 UI 개발
                        <ul class="sub-sub-list">
                            <li>90% 이상 Native 화면으로 구성되어 있었으므로, 모든 페이지의 화면 UI 개발</li>
                            <li>N depth Expandable ListView 구현</li>
                            <li>Swipe Delete 기능 구현</li>
                            <li>Indexable ListView구현</li>
                            <li>Infinite ViewPager 구현</li>
                        </ul>
                    </li>
                    <li>중국 SNS 연동
                        <ul class="sub-sub-list">
                            <li>위쳇, 웨이보, QQ 등 중국 소셜 로그인 및 회원가입 기능 개발</li>
                        </ul>
                    </li>
                    <li>매장 찾기 및 네비게이션 기능 개발
                        <ul class="sub-sub-list">
                            <li>바이두 SDK 연동</li>
                            <li>바이두 SDK를 활용한 네비게이션 기능 구현</li>
                        </ul>
                    </li>
                    <li>바이두 SDK를 활용한 푸시 기능 개발</li>
                    <li>WKWebView 연동</li>
                    <li>중국 결제 수단 연동
                        <ul class="sub-sub-list">
                            <li>위쳇 페이, 알리페이 등 중국의 소셜 Pay 기능 연동을 위한 SDK 삽입 및 기능 개발</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="sub-screenshots">
                <p class="screenshot-label">📱 결과물</p>
                <div class="screenshot-grid">
                    <img src="assets/images/cafeunion2.png" alt="cafeunion 스크린샷" class="screenshot-img">
                    <img src="assets/images/cafeunion3.png" alt="cafeunion 스크린샷" class="screenshot-img">
                </div>
            </div>
        `
    },
    'digitaldime-2': {
        title: 'LuxeWater Android Application 개발',
        period: '2015.11 ~ 2015.12',
        description: '중국 마켓 워터 서플라이 플랫폼 럭스워터 Android Application을 개발했습니다.',
        tech: ['Android', 'Java', 'Baidu SDK', 'QQ', 'Alipay SDK', 'Wechat SDK'],
        features: ` 
            <div class="sub-description">
                <p class="description-label">✔️ 프로젝트 배경 설명</p>
                <ul class="sub-list">
                    <p>전체 화면 구성이 WebView로 구성 되어 있는 Hybrid Application 으로써, 중국 앱 마켓에 출시되었습니다. 중국이라는 국가적 특성에 맞춰 지도, 결제, 푸시, SNS 등의 서비스를 환경에 맞는 SDK로 삽입하여 기능을 구현했습니다.</p>
                </ul>
            </div>
            <div class="sub-description">
                <p class="description-label">📝 상세 진행 내용</p>
                <ul class="sub-list">
                    <li>Android Application 개발</li>
                    <li>WebView 연동
                        <ul class="sub-sub-list">
                            <li>WebView 연동을 위한 기본 세팅 개발</li>
                            <li>Javascript Interface 설계 및 연동</li>
                        </ul>
                    </li>
                    <li>API 연동</li>
                    <li>중국 SNS 연동
                        <ul class="sub-sub-list">
                            <li>위쳇, 바이두, QQ 등 중국 소셜 로그인 및 회원가입 기능 개발</li>
                        </ul>
                    </li>
                    <li>바이두 SDK를 활용한 푸시 기능 개발</li>
                    <li>중국 결제 수단 연동
                        <ul class="sub-sub-list">
                            <li>중국의 소셜 Pay 기능 연동을 위한 알리페이 SDK 삽입 및 기능 개발</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="sub-screenshots">
                <p class="screenshot-label">📱 결과물</p>
                <div class="screenshot-grid">
                    <img src="assets/images/luxewater1.png" alt="cafeunion 스크린샷" class="screenshot-img">
                    <img src="assets/images/luxewater2.png" alt="cafeunion 스크린샷" class="screenshot-img">
                </div>
            </div>
        `
    },
    'digitaldime-3': {
        title: '올가홀푸드 Android Application 개발',
        period: '2016.04 ~ 2016.05',
        description: '기존 올가홀푸드 웹사이트를 모바일용 채널을 확보해 고객 유입을 유도하고자 구축한 올가홀푸드 Android Application 개발을 담당하였습니다.',
        tech: ['Android', 'Java', 'FingerPush', 'ZXing', 'gson', 'universal image loader', 'viewpagerindicator', 'gms', 'crashlytics'],
        features: ` 
            <div class="sub-description">
                <p class="description-label">✔️ 프로젝트 배경 설명</p>
                <ul class="sub-list">
                    <p>기존 올가홀푸드 웹사이트는 모바일용 페이지 부재 등 모바일 환경에 대한 컨텐츠 접근성이 부족했습니다. 기존 웹사이트를 개선하고 모바일 환경을 제공함으로써, 세일즈를 강화하여 고객 유입을 유도할 수 있으며, 급변하는 모바일 커머스 시장에 대한 대응을 통해 안전한 먹거리라는 브랜드 아이덴티티를 전달하여 소비자와의 신뢰를 강화하고자 하였습니다.</p>
                </ul>
            </div>
            <div class="sub-description">
                <p class="description-label">📝 상세 진행 내용</p>
                <ul class="sub-list">
                    <li>Android Application 개발</li>
                    <li>화면 UI 개발
                        <ul class="sub-sub-list">
                            <li>전시 화면 개발</li>
                            <li>사이드 메뉴 화면 개발</li>
                            <li>제품 바코드 인식을 위한 스캔 기능 구현 및 화면 개발</li>
                            <li>설정 화면 개발</li>
                        </ul>
                    </li>
                    <li>API 연동</li>
                    <li>WebView 연동
                        <ul class="sub-sub-list">
                            <li>WebView 연동을 위한 기본 세팅 개발</li>
                            <li>Javascript Interface 설계 및 연동</li>
                        </ul>
                    </li>
                    <li>FingerPush SDK를 활용한 푸시 기능 개발</li>
                    <li>제품 바코드 및 QR 코드 인식 기능을 위한 기능 개발
                        <ul class="sub-sub-list">
                            <li>Zxing barcode scan library 연동</li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div class="reference-image">
                <p class="reference-image-label">📱 결과물</p>
                <img src="assets/images/orga_screenshot.png" alt="gs fresh screenshot" class="reference-img">
            </div>
        `
    },
    'digitaldime-4': {
        title: '사내 인트라넷 Android Application 개발',
        period: '2015.07 ~ 2015.09',
        description: '사내 인프라넷 웹사이트를 기반으로 임직원들의 편의를 위해 제작된 인트라넷 Android Application 개발을 담당하였습니다.',
        tech: ['Android'],
        features:` 
            <div class="sub-description">
                <p class="description-label">✔️ 프로젝트 배경 설명</p>
                <ul class="sub-list">
                    <p>인트라넷 앱은 업무 커뮤니케이션 강화와 더불어 사내 커뮤니케이션을 활성화하여 정서적인 교류도 함께할 수 있는 플랫폼 구축을 목표로 했습니다. 더불어 사원들이 굳이 데스크탑을 사용하지 않아도 내부 정보나 업무를 효율적으로 진행할 수 있고자 했습니다.</p>
                    <p>일일 업무 등록, 휴가 결재, 야근 신청, 회의실 예약, 한줄 토크 등 다양한 인트라넷 기능을 모바일 네이티브 앱으로 제작하여 편의성을 극대화 했습니다.</p>
                </ul>
            </div>
            <div class="sub-description">
                <p class="description-label">📝 상세 진행 내용</p>
                <ul class="sub-list">
                    <li>Android Application 개발</li>
                    <li>전체 화면 UI 개발</li>
                    <li>API 연동</li>
                    <li>푸시 기능 연동을 위한 GCM 연동</li>
                </ul>
            </div>

            <div class="sub-screenshots">
                <p class="screenshot-label">📱 결과물</p>
                <div class="screenshot-grid">
                    <img src="assets/images/myd22.png" alt="myd2 스크린샷" class="screenshot-img">
                    <img src="assets/images/myd21.png" alt="myd2 스크린샷" class="screenshot-img">
                </div>
            </div>
        `
    }
};

// 모든 프로젝트 상세 화면은 동일한 PAAR 구조를 사용한다.
// 수치는 기존 경력 자료에서 확인할 수 있는 기간, 인원, 앱·단계·산출물 수만 사용한다.
const projectPaarData = {
    'onestore-1': {
        overview: 'Apple DMA 정책 변화에 대응해 ONEstore 글로벌 대체 앱 마켓의 iOS 구현 가능성을 검증한 프로젝트입니다.',
        problem: ['국내에서 직접 개발·출시하기 어려운 제3자 앱 마켓을 Apple 문서와 제한된 개발 환경만으로 검토해야 했습니다.', 'MarketplaceKit 정책, entitlement, Hosted App 설치·업데이트 흐름이 사업 검토와 투자 판단에 연결되는 과제였습니다.'],
        analyze: ['Apple Developer Documentation과 Apple Cork 기술 세션 내용을 기준으로 정책 제약과 구현 가능 범위를 분리했습니다.', '처음부터 제품화하지 않고 Prototype → Alpha → Beta 3단계로 검증해 불확실한 API와 사업 요구가 구조 전체로 번지는 위험을 관리했습니다.'],
        action: ['iOS 파트 PL로 앱 아키텍처, 네트워크 모듈, JavaScript Interface와 MarketplaceKit 연결 범위를 설계했습니다.', '약 2주간 Apple Cork 기술 세션에 iOS 대표로 참석해 구현 제약을 확인하고 단계별 기능·리스크 문서에 반영했습니다.'],
        result: ['Prototype·Alpha·Beta 3단계의 동작 앱과 iOS 구현 범위 문서를 산출했습니다.', '정책 문서, Apple 기술 세션, 단계별 실행 결과를 근거로 제3자 앱 마켓의 가능 범위와 남은 위험을 구분했습니다.'],
        metrics: ['3단계 검증', 'Apple Cork 약 2주', 'iOS PL'],
        additionalSections: [{
            eyebrow: 'SPECIAL EXPERIENCE',
            title: 'Apple Cork Technical Lab',
            summary: '국내에서 재현하기 어려운 제3자 앱 마켓 환경과 MarketplaceKit 제약을 Apple 엔지니어와 직접 확인하기 위해 아일랜드 Cork 지사로 기술 출장을 다녀왔습니다.',
            items: [
                '2024.04.08~04.20 동안 기획 PM, 개발 PM, iOS, Backend 각 1명으로 구성된 4명의 기술 세션 참가자 중 iOS 대표로 참석했습니다.',
                'Developer Documentation만으로 확정하기 어려웠던 entitlement, 설치·업데이트 흐름과 API 제약을 실제 Prototype으로 검증했습니다.',
                '세션에서 확인한 정책·기술 답변을 귀국 후 iOS 구현 범위, 리스크 목록과 Prototype → Alpha → Beta 계획에 반영했습니다.'
            ],
            metrics: ['출장 2024.04.08~20', '참가 4명', 'iOS 대표']
        }]
    },
    'onestore-2': {
        overview: 'ONEstore 최초의 디자인 시스템을 공통 UI 코드, 디자인 토큰, Figma 자산과 배포 흐름으로 연결한 프로젝트입니다.',
        problem: ['iOS·Android·Web과 디자인 조직이 같은 컴포넌트를 서로 다른 레이어와 명칭으로 정의해 반복 구현과 협업 비용이 발생했습니다.', 'Top Navigation Bar처럼 플랫폼별 동작이 다른 컴포넌트도 하나의 공통 개념과 예외 기준으로 설명할 방법이 필요했습니다.'],
        analyze: ['모든 플랫폼 구현을 억지로 같게 만드는 대신 공통 개념, 플랫폼별 예외, 토큰과 컴포넌트 레이어를 분리했습니다.', '바이위클리 회의에서 회의록, 컴포넌트 정의서, 레이어·토큰 기준표를 검토 자료로 사용했습니다.'],
        action: ['기술 파트 PM으로 iOS·Android·Web·디자인·기획 의견을 조율하고 비개발자도 판단할 수 있는 문서로 기술 제약을 설명했습니다.', 'SPM, Style Dictionary, Figma Code Connect를 연결하고 C레벨 보고 2회와 전사 공유 1회를 준비했습니다.'],
        result: ['공통 컴포넌트, 디자인 토큰, SPM 배포, Code Connect와 자동화 흐름을 산출물로 정리했습니다.', '총 3회의 세미나를 통해 도입 이유, 사용 방법, 기존 업무 대비 변경점을 조직에 공유했습니다.'],
        metrics: ['세미나 3회', 'SPM 배포', 'Code Connect']
    },
    'onestore-3': {
        overview: '웹툰·웹소설·전자책·오디오북을 제공하는 ONEstory iOS 앱의 기능 개발과 운영을 담당한 프로젝트입니다.',
        problem: ['콘텐츠 탐색·구매·보관·열람 흐름을 유지하면서 OS 변경, VOC, SDK 업데이트와 정기 배포를 함께 처리해야 했습니다.', '일부 WebView 화면을 Native로 전환하면서 기존 서비스 계약과 사용자 흐름을 유지해야 했습니다.'],
        analyze: ['기존 UIKit·Objective-C·WebView 구조와 서버 연동 지점을 먼저 확인하고 Native 전환 범위를 화면 단위로 분리했습니다.', 'iPhone·iPad·Widget·오프라인 콘텐츠 사용 환경별로 상태와 화면 차이를 검수했습니다.'],
        action: ['정기 배포, VOC와 OS 대응을 수행하고 WebView 화면 Native 전환, 위젯, iPad UI, SDK 연동 기능을 구현했습니다.', '콘텐츠 다운로드와 최근 본 작품 진입 등 열람 전후의 사용자 흐름을 기준으로 변경 영향을 확인했습니다.'],
        result: ['2021.09~2023.12 동안 ONEstory iOS 운영과 기능 개발을 이어갔습니다.', 'Native 전환 화면, iPad 대응 UI, 최근 본 작품 위젯과 운영 배포 산출물을 남겼습니다.'],
        metrics: ['운영 2년 이상', 'iPhone·iPad 대응', 'Widget 구현']
    },
    'encar-1': {
        overview: '아키텍처가 적용되지 않은 UIKit·Objective-C 기반 운영 앱에 SwiftUI와 테스트 가능한 상태 구조를 도입한 개선 프로젝트입니다.',
        problem: ['차량 옵션 필터 화면의 UI와 상태 변경이 결합돼 신규 요구사항 반영과 단위 테스트가 어려웠습니다.', '광고 SDK, Crashlytics, API 로그가 여러 위치에 분산돼 운영 이슈의 진입점과 영향 범위를 추적하기 어려웠습니다.'],
        analyze: ['전체 앱을 한 번에 바꾸지 않고 의존성이 낮은 leaf 화면을 시작점으로 선정했습니다.', '동일 화면을 MVVM과 MVI 2개 구조로 비교해 입력·상태·출력 흐름과 테스트 가능성을 검토했습니다.'],
        action: ['옵션 필터 화면을 SwiftUI로 재구현하고 UseCase 테스트와 기존 오류 수정을 함께 진행했습니다.', '광고 모듈 진입점, Crashlytics, API 요청·응답 로깅을 중앙화하고 Font·Color·Radius 토큰과 Semantic Color를 정의했습니다.'],
        result: ['SwiftUI 전환 화면 1개와 MVVM·MVI 2개 설계 버전, UseCase 테스트를 산출했습니다.', '로깅과 광고 모듈 관리 지점을 중앙화하고 디자인 토큰 3개 범주의 초기 기준을 만들었습니다.'],
        metrics: ['SwiftUI 화면 1개', '설계안 2종', '토큰 3범주']
    },
    'gsitm-1': {
        overview: 'GS Retail 전사 모바일 앱 운영과 GS Fresh 차세대 커머스 앱 구축을 함께 수행한 프로젝트입니다.',
        problem: ['10종 이상의 앱에서 사업부별 기능 요청, VOC, OS·Deprecated API, Crash와 정기·긴급 배포를 동시에 관리해야 했습니다.', 'GS Fresh 차세대 구축에서는 Android와 iOS의 사용자 시나리오, SSO, 환경, SDK 연동 기준을 오픈 전에 맞춰야 했습니다.'],
        analyze: ['운영 이슈는 사용자 영향도와 배포 긴급도를 기준으로 분류하고 앱별 OS·API 영향 범위를 먼저 확인했습니다.', '차세대 프로젝트는 공통 사용자 흐름과 플랫폼별 구현 차이를 분리해 문서화하고 One-Source Multi Application의 환경·SSO 위험을 검토했습니다.'],
        action: ['GS Fresh, GS수퍼마켓, 달리살다, 나만의 냉장고 등 10종 이상 앱의 기능 개발과 월 2회 정기 배포, 긴급 대응을 수행했습니다.', '모바일 파트 PL로 Android·iOS 범위, 사용자 시나리오, SSO와 WebView·API·외부 SDK 연동 문서를 조율했습니다.'],
        result: ['10종 이상 운영 앱의 배포·VOC·OS·Crash 대응 흐름을 유지했습니다.', 'GS Fresh 차세대 앱의 플랫폼별 구현 범위와 오픈 전 확인 기준을 모바일 산출물로 정리했습니다.'],
        metrics: ['운영 앱 10종+', '정기 배포 월 2회', 'Mobile PL']
    },
    'gsitm-2': {
        overview: 'GS Retail 멤버십 앱 4종의 기능 개발과 운영을 담당한 경험입니다.',
        problem: ['통합 멤버십·쿠폰·결제 기능을 제공하는 앱에서 채널별 요구사항과 운영 일정을 함께 관리해야 했습니다.', 'OS와 SDK 변경, VOC와 Crash를 정기 배포 흐름 안에서 지속적으로 처리해야 했습니다.'],
        analyze: ['사용자 영향도와 장애 가능성을 기준으로 정기 배포와 긴급 대응 항목을 분리했습니다.', '앱별 공통 코드와 채널별 예외 범위를 확인한 뒤 변경 대상을 선정했습니다.'],
        action: ['THE POP, GS수퍼마켓, 나만의 냉장고, 우리동네 딜리버리의 기능 개발과 운영 대응을 수행했습니다.', 'OS·Deprecated API·Crash Report를 점검하고 외부 프로젝트 개발 결과를 운영 관점에서 검수했습니다.'],
        result: ['멤버십 앱 4종의 기능 개발, VOC와 OS 대응, 정기·긴급 배포 업무를 수행했습니다.', '월 2회 정기 배포를 기준으로 운영 변경과 검수 항목을 관리했습니다.'],
        metrics: ['앱 4종', '정기 배포 월 2회', 'iOS·Android']
    },
    'digitaldime-1': {
        overview: '중국 시장을 대상으로 주문·결제·매장 탐색을 제공한 O2O 커머스 Android 앱입니다.',
        problem: ['국내 서비스와 다른 중국의 로그인, 지도, 결제 생태계를 Android 앱 안에서 하나의 주문 흐름으로 연결해야 했습니다.', '여러 외부 SDK의 생명주기와 오류를 함께 다뤄야 했습니다.'],
        analyze: ['기능을 로그인·위치·주문·결제로 나누고 각 현지 SDK의 연동 지점과 실패 상태를 검토했습니다.', 'Native 화면과 서버 API, 외부 SDK의 책임을 분리해 구현 범위를 정했습니다.'],
        action: ['Java 기반 Android 화면과 API 연동을 구현하고 WeChat·QQ·Baidu·Alipay SDK를 연결했습니다.', '기획·디자인·서버 개발자와 화면 상태와 플랫폼별 예외 조건을 조율했습니다.'],
        result: ['2016.08~2017.01 동안 중국 시장용 Android 앱 1종을 개발했습니다.', '로그인·지도·결제에 필요한 중국 현지 SDK 4종의 연동 결과물을 구현했습니다.'],
        metrics: ['Android 앱 1종', '현지 SDK 4종', '개발 6개월']
    },
    'digitaldime-2': {
        overview: '중국 시장의 생수 주문 서비스를 모바일로 제공하기 위해 구축한 LuxeWater Android 앱입니다.',
        problem: ['짧은 구축 기간 안에 브랜드 콘텐츠와 주문 WebView, 중국 현지 서비스 SDK를 Android 앱으로 연결해야 했습니다.', 'WebView와 Native SDK 사이의 상태 전달 및 플랫폼별 예외를 정의해야 했습니다.'],
        analyze: ['콘텐츠·주문은 WebView, 로그인·결제 등 플랫폼 기능은 Native SDK가 담당하도록 경계를 검토했습니다.', 'JavaScript Interface의 호출 범위와 외부 SDK 실패 시 사용자 흐름을 구현 전에 정리했습니다.'],
        action: ['Android WebView와 JavaScript Interface를 구현하고 중국 현지 로그인·결제 SDK를 연동했습니다.', '기획·디자인·서버 담당자와 화면 전환, API와 SDK 연결 조건을 맞췄습니다.'],
        result: ['2015.11~12의 2개월 동안 중국 시장용 Android 앱 1종을 구축했습니다.', 'WebView 서비스와 Native 외부 SDK가 연결되는 하이브리드 앱 구조를 산출했습니다.'],
        metrics: ['Android 앱 1종', '개발 2개월', '중국 시장']
    },
    'digitaldime-3': {
        overview: '올가홀푸드 웹 서비스를 모바일 채널로 확장하기 위해 구축한 Android 커머스 앱입니다.',
        problem: ['기존 웹 상품 탐색과 구매 흐름을 모바일 환경에 맞게 연결하면서 앱 전용 기능과 운영 대응을 추가해야 했습니다.', 'WebView, 바코드·QR, 푸시와 외부 SDK가 한 사용자 흐름에서 동작해야 했습니다.'],
        analyze: ['웹에서 유지할 기능과 Android Native로 제공할 기능을 분리하고 브리지 호출과 오류 경계를 검토했습니다.', '상품 탐색·구매 과정에서 필요한 앱 권한과 SDK 연동 지점을 기준으로 구현 순서를 정했습니다.'],
        action: ['Android 앱 화면, WebView 연동, 바코드·QR 인식, 푸시와 외부 SDK 연결을 구현했습니다.', '웹·서버·기획·디자인 담당자와 앱 진입 경로와 예외 상태를 조율했습니다.'],
        result: ['2016.04~05의 2개월 동안 올가홀푸드 Android 앱 1종을 구축했습니다.', '기존 웹 커머스와 Native 기능을 연결하는 모바일 채널을 산출했습니다.'],
        metrics: ['Android 앱 1종', '개발 2개월', 'Web·Native 연동']
    },
    'digitaldime-4': {
        overview: '웹으로만 제공되던 사내 인트라넷을 임직원용 Android 앱으로 확장한 프로젝트입니다.',
        problem: ['회의실 예약, 휴가 결재와 사내 소통 기능을 모바일에서 사용할 수 있도록 기존 인트라넷과 연결해야 했습니다.', '업무 데이터와 알림을 다루므로 로그인·API·푸시의 안정적인 연결이 필요했습니다.'],
        analyze: ['웹 인트라넷 기능을 모바일 사용 빈도와 중요도에 따라 나누고 Native 화면과 API 범위를 정했습니다.', '로그인 상태, 결재·예약 결과, 푸시 진입 흐름을 사용자 시나리오별로 검토했습니다.'],
        action: ['메인 Android 개발자로 화면, API, 로그인, 예약·결재와 푸시 기능을 구현하고 출시 후 운영을 담당했습니다.', '기획·디자인·서버 담당자와 요구사항부터 배포까지 전체 개발 흐름을 조율했습니다.'],
        result: ['2015.07~09의 3개월 동안 임직원용 Android 앱 1종을 메인 개발자로 구축했습니다.', '웹 인트라넷의 회의실 예약과 휴가 결재를 모바일에서 수행할 수 있는 결과물을 배포·운영했습니다.'],
        metrics: ['Android 앱 1종', '개발 3개월', '메인 개발']
    },
    'side-note-cleaner': {
        overview: 'VisionKit과 OpenAI API를 연결해 영어 학습지 이미지의 처리 가능 여부를 판별하고 필기를 정리하는 iOS 앱입니다.',
        problem: ['모든 이미지를 곧바로 AI 처리하면 토큰 비용, 낮은 품질 입력과 모델 실패를 앱에서 통제하기 어려웠습니다.', 'AI 결과를 그대로 신뢰하지 않고 처리 대상과 후속 작업을 앱이 판단할 구조가 필요했습니다.'],
        analyze: ['이미지 입력 후 ACCEPT·REJECT, reason_code, should_run_cleanup을 반환하는 triage 단계를 먼저 두었습니다.', '출력 DTO를 구조화하고 이미지 리사이즈·압축과 짧은 응답 스키마를 적용해 요청 크기와 불필요한 토큰 출력을 관리했습니다.'],
        action: ['iOS 앱 구조, VisionKit 입력, OpenAI Responses API 클라이언트, 프롬프트와 응답 DTO를 직접 설계·구현했습니다.', '모델 응답 조합을 앱에서 다시 검증하고 timeout·HTTP·parse·refusal 오류를 사용자 상태로 분리했습니다.'],
        result: ['iOS 1명, Android 1명, 기획 2명, 디자이너 1명의 5명 구성에서 iOS 개발과 App Store 배포를 완료했습니다.', '2026.01~02의 2개월 집중 개발로 스캔·triage·정리 결과 흐름을 앱 1종으로 출시했습니다.'],
        metrics: ['팀 5명', 'iOS 개발 2개월', 'App Store 출시']
    },
    'side-mindly': {
        overview: '링크와 메모를 AI 태그와 로컬 검색 인덱스로 정리해 다시 찾을 수 있게 만든 iOS 키워드 메모 앱입니다.',
        problem: ['저장한 링크와 짧은 메모는 시간이 지나면 어떤 키워드로 찾아야 할지 기억하기 어렵습니다.', 'AI 처리가 저장을 막거나 네트워크 실패로 로컬 검색까지 사용할 수 없게 만들면 안 됐습니다.'],
        analyze: ['GRDB에 먼저 저장하고 AI 태그는 비동기로 생성하는 local-first 흐름을 선택했습니다.', '기본 검색은 FTS5 로컬 검색으로 유지하고 자연어 검색만 AI가 로컬 검색 조건으로 변환하도록 경계를 정했습니다.'],
        action: ['iOS 앱 구조, SwiftUI 화면, GRDB 저장·검색, AI 태그·검색과 Share Extension을 구현했습니다.', 'AGENTS.md에는 반복 규칙만 두고 feature-plan 등 6개 Skill로 계획·구현·검색·보안 검토를 분리해 Codex 변경 범위를 통제했습니다.'],
        result: ['iOS 1명, Android 1명, 기획 1명의 3명 구성에서 저장·태깅·검색·공유 흐름을 구현했습니다.', '메인·AI 검색·링크 상세의 대표 화면 3개와 단계별 빌드·실기기 QA 결과를 남겼습니다.'],
        metrics: ['팀 3명', 'Codex Skill 6개', '대표 화면 3개']
    },
    'side-focusboard': {
        overview: '출석, 집중 타이머, Todo, 통계, 메뉴바와 위젯을 제공하는 SwiftUI macOS 생산성 앱입니다.',
        problem: ['여러 기능이 같은 일정·집중 데이터를 공유하므로 기능 추가가 저장소와 통계 계산을 동시에 흔들 수 있었습니다.', 'Codex가 요청 범위를 넘어 구조를 바꾸지 않도록 프로젝트 수준의 개발 통제가 필요했습니다.'],
        analyze: ['local-first JSON 저장소를 공통 데이터 경계로 두고 MenuBarExtra와 Widget에는 비즈니스 로직을 넣지 않았습니다.', '기능별 kickoff 문서에서 goal, policy, file boundary, risk와 out-of-scope를 먼저 확정했습니다.'],
        action: ['Attendance, Focus Timer, Todo, Statistics, MenuBarExtra, Widget, Schedule을 단계별로 구현했습니다.', '전문 Agent 3개와 feature-kickoff·implement-quick-surface·ship-check Skill 3개를 구성하고 단계·파일 범위를 제한한 프롬프트로 Codex를 운영했습니다.'],
        result: ['주요 기능 7개와 macOS 앱·메뉴바·위젯 화면을 구현하고 App Store에 출시했습니다.', 'Agent 3개와 Skill 3개, 빌드·테스트·Preview·실행 QA를 포함한 반복 가능한 개발 하네스를 산출했습니다.'],
        metrics: ['주요 기능 7개', 'Agent 3개', 'App Store 출시']
    }
};

const projectRoleData = {
    'onestore-1': 'iOS 파트 PL · 기술 검토, 아키텍처와 네트워크 모듈 설계, 단계별 구현 범위와 리스크 정리',
    'onestore-2': '기술 파트 PM · 플랫폼 간 기준 조율, iOS 컴포넌트 구조와 디자인-코드 연결 흐름 설계',
    'onestore-3': 'iOS 운영 개발 · 기능 개발, 정기 배포, VOC·OS 대응, Native 전환과 iPad·Widget 구현',
    'encar-1': 'iOS 개발 · UIKit 레거시 분석, SwiftUI 전환, MVVM·MVI 비교 적용, 테스트와 로깅 중앙화',
    'gsitm-1': 'Android·iOS 운영 개발 / Mobile PL · 전사 앱 운영과 GS Fresh 차세대 모바일 범위 조율',
    'gsitm-2': 'Android·iOS 운영 개발 · 멤버십 앱 4종의 기능 개발, 배포, VOC·OS·Crash 대응',
    'digitaldime-1': 'Android 개발 · O2O 주문 흐름과 중국 현지 로그인·지도·결제 SDK 연동',
    'digitaldime-2': 'Android 개발 · WebView·JavaScript Interface와 중국 현지 SDK 연동',
    'digitaldime-3': 'Android 개발 · 기존 웹 커머스와 Native 바코드·QR·푸시 기능 연결',
    'digitaldime-4': '메인 Android 개발 · 요구사항 정리부터 화면·API·푸시 구현, 배포와 운영까지 담당',
    'side-note-cleaner': 'iOS 개발 · 제품 흐름, 앱 아키텍처, VisionKit·OpenAI API, 프롬프트·DTO 설계와 App Store 배포',
    'side-mindly': 'iOS 개발 · 앱 구조, SwiftUI, GRDB 검색, AI 태그·검색, Share Extension과 Codex 작업 환경 구성',
    'side-focusboard': '기획·디자인·macOS 개발 · 기능 정의, SwiftUI 구현, 저장소·위젯·메뉴바와 Codex 하네스 구성'
};

const projectTeamData = {
    'onestore-1': {
        label: 'iOS 개발 파트 기준',
        members: ['iOS 6명'],
        position: 'iOS PL'
    },
    'onestore-2': {
        label: '프로젝트 전체 구성',
        members: ['iOS 3명', 'Android 3명', 'Designer 3명', 'Backend 1명', 'Frontend 1명'],
        position: '기술 파트 PM'
    },
    'onestore-3': {
        label: '모바일 개발 구성',
        members: ['iOS 3명', 'Android 3명'],
        position: 'iOS Developer'
    },
    'gsitm-1': {
        label: 'GS Fresh 차세대 구축 기준',
        members: ['iOS 2명', 'Android 2명', '총괄 1명'],
        position: 'Mobile PL · iOS/Android'
    },
    'gsitm-2': {
        label: '모바일 운영 구성',
        members: ['iOS 2명', 'Android 2명', '총괄 1명'],
        position: 'iOS/Android 운영 개발'
    },
    'side-note-cleaner': {
        label: '사이드 프로젝트 전체 구성',
        members: ['iOS 1명', 'Android 1명', 'Planner 2명', 'Designer 1명'],
        position: 'iOS Developer'
    },
    'side-mindly': {
        label: '사이드 프로젝트 전체 구성',
        members: ['iOS 1명', 'Android 1명', 'Planner 1명'],
        position: 'iOS Developer'
    }
};

const projectCompanyData = {
    'onestore-1': 'ONEstore',
    'onestore-2': 'ONEstore',
    'onestore-3': 'ONEstore',
    'encar-1': 'Encar',
    'gsitm-1': 'GS ITM',
    'gsitm-2': 'GS ITM',
    'digitaldime-1': 'Digitaldime',
    'digitaldime-2': 'Digitaldime',
    'digitaldime-3': 'Digitaldime',
    'digitaldime-4': 'Digitaldime',
    'side-note-cleaner': 'PERSONAL PROJECT',
    'side-mindly': 'PERSONAL PROJECT',
    'side-focusboard': 'PERSONAL PROJECT'
};

// 모달 열기
function openProjectModal(projectId) {
    console.log('openProjectModal called with:', projectId);
    const modal = document.getElementById('projectModal');
    const project = projectData[projectId];
    
    if (!project) {
        console.error('Project not found:', projectId);
        return;
    }
    console.log('Opening modal for project:', project.title);
    
    // 모달 내용 업데이트
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalPeriod').textContent = project.period;
    const modalCompany = document.getElementById('modalCompany');
    const companyName = projectCompanyData[projectId] || 'PROJECT';
    modalCompany.textContent = companyName === 'PERSONAL PROJECT' ? 'PERSONAL' : companyName;
    modalCompany.classList.toggle('is-personal', companyName === 'PERSONAL PROJECT');
    document.getElementById('modalDescription').textContent = project.description;
    renderProjectTeamRole(projectId);
    renderProjectStory(projectId, project);
    
    // 기술 스택 업데이트
    const techContainer = document.getElementById('modalTech');
    techContainer.innerHTML = '';
    project.tech.forEach(tech => {
        const badge = document.createElement('span');
        badge.className = 'tech-badge';
        badge.setAttribute('data-tech', tech.toLowerCase());
        badge.textContent = tech;
        techContainer.appendChild(badge);
    });
    
    // 모달 표시
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // 이전 프로젝트에서 보던 위치와 관계없이 새 상세는 항상 헤더부터 보여준다.
    const modalContent = modal.querySelector('.modal-content');
    modal.scrollTop = 0;
    if (modalContent) modalContent.scrollTop = 0;
    requestAnimationFrame(() => {
        modal.scrollTop = 0;
        if (modalContent) modalContent.scrollTop = 0;
    });
    
    // 스크린샷 그리드 스크롤 감지 및 클릭 이벤트 추가 (모달이 렌더링된 후)
    setTimeout(() => {
        // 결과물 스크린샷의 가로 스크롤 여부를 표시한다.
        const screenshotGrids = modal.querySelectorAll('.screenshot-grid');
        screenshotGrids.forEach(grid => {
            const images = grid.querySelectorAll('.screenshot-img');
            
            // 스크롤 힌트 설정
            if (images.length >= 3) {
                grid.setAttribute('data-has-scroll', 'true');
            } else {
                grid.setAttribute('data-has-scroll', 'false');
            }
            
        });

        // 같은 프로젝트 상세에 포함된 시각 자료를 하나의 탐색 목록으로 묶는다.
        const projectImages = Array.from(modal.querySelectorAll(
            '.screenshot-img, .reference-img, .reference-img-vertical, .worksheet-screenshot-grid img'
        ));
        const imageList = projectImages.map(image => ({
            src: image.src,
            alt: image.alt
        }));

        projectImages.forEach((img, index) => {
            img.style.cursor = 'pointer';
            img.addEventListener('click', () => {
                openImageViewer(imageList, index);
            });
        });
    }, 100);
}

function renderProjectStory(projectId, project) {
    const story = document.getElementById('modalFeatures');
    const paar = projectPaarData[projectId];

    if (!story) return;
    if (!paar) {
        story.innerHTML = project.features;
        decorateProjectStory();
        return;
    }

    const legacy = document.createElement('div');
    legacy.innerHTML = project.features;
    const evidenceNodes = collectProjectEvidence(legacy);

    story.innerHTML = `
        ${renderProjectSnapshot(projectId, paar)}
        ${renderPaarSection('Problem', 'problem', paar.problem)}
        ${renderPaarSection('Analyze', 'analysis', paar.analyze)}
        ${renderPaarSection('Action', 'action', paar.action)}
        ${renderAdditionalProjectSections(paar.additionalSections)}
        ${renderPaarSection('Result', 'result', paar.result, paar.metrics)}
        <section class="project-story-block project-story-evidence is-result">
            <div class="project-story-section-heading">
                <span>06</span>
                <div>
                    <h4 class="project-story-heading">Evidence</h4>
                    <p>위 판단과 구현 결과를 확인할 수 있는 화면, 구조도, 코드와 배포 자료입니다.</p>
                </div>
            </div>
            <div class="project-story-evidence-content"></div>
        </section>
    `;

    const evidence = story.querySelector('.project-story-evidence-content');
    if (evidenceNodes.length) {
        evidenceNodes.forEach(node => evidence.appendChild(node));
    } else {
        evidence.innerHTML = '<p>프로젝트 기간, 담당 범위와 구현 산출물을 경력 자료 기준으로 정리했습니다.</p>';
    }
}

function renderAdditionalProjectSections(sections = []) {
    return sections.map((section, index) => {
        const metrics = section.metrics?.length
            ? `<div class="project-story-metrics">${section.metrics.map(metric => `<span>${metric}</span>`).join('')}</div>`
            : '';
        const items = section.items.map(item => `<li>${item}</li>`).join('');

        return `
            <section class="project-story-block project-story-additional">
                <div class="project-story-section-heading">
                    <span>${String.fromCharCode(65 + index)}</span>
                    <div>
                        <small>${section.eyebrow}</small>
                        <h4 class="project-story-heading">${section.title}</h4>
                    </div>
                </div>
                <p class="project-story-additional-summary">${section.summary}</p>
                ${metrics}
                <ul>${items}</ul>
            </section>
        `;
    }).join('');
}

function renderProjectSnapshot(projectId, paar) {
    const outputs = paar.metrics.map(metric => `<span>${metric}</span>`).join('');

    return `
        <section class="project-story-snapshot">
            <div class="project-story-section-heading">
                <span>01</span>
                <div>
                    <h4>Project Snapshot</h4>
                    <p>프로젝트의 목적, 담당 역할과 확인 가능한 결과를 먼저 요약했습니다.</p>
                </div>
            </div>
            <div class="project-story-snapshot-grid">
                <article>
                    <span class="project-story-snapshot-label">PROJECT</span>
                    <p>${paar.overview}</p>
                </article>
                <article>
                    <span class="project-story-snapshot-label">KEY OUTPUTS</span>
                    <div class="project-story-snapshot-outputs">${outputs}</div>
                </article>
            </div>
        </section>
    `;
}

function renderProjectTeamRole(projectId) {
    const container = document.getElementById('modalTeamRole');
    const team = projectTeamData[projectId];
    const responsibility = projectRoleData[projectId];
    if (!container) return;

    const teamGroup = team ? `
        <div class="project-team-role-group project-team-group">
            <div class="project-team-role-heading">
                <span>TEAM COMPOSITION</span>
                <small>${team.label}</small>
            </div>
            <div class="project-team-badges">
                ${team.members.map(member => `<span>${member}</span>`).join('')}
            </div>
        </div>
    ` : '';

    container.innerHTML = `
        ${teamGroup}
        <div class="project-team-role-group project-responsibility-group">
            <div class="project-team-role-heading">
                <span>MY RESPONSIBILITY</span>
            </div>
            <div class="project-responsibility-badges">
                <strong>${team?.position || 'My Role'}</strong>
                <p>${responsibility}</p>
            </div>
        </div>
    `;
}

function renderPaarSection(title, tone, items, metrics = []) {
    const metricHtml = metrics.length
        ? `<div class="project-story-metrics">${metrics.map(metric => `<span>${metric}</span>`).join('')}</div>`
        : '';
    const itemHtml = items.map(item => `<li>${item}</li>`).join('');

    const step = { problem: '02', analysis: '03', action: '04', result: '05' }[tone] || '';

    return `
        <section class="project-story-block project-story-paar is-${tone}">
            <div class="project-story-section-heading">
                <span>${step}</span>
                <h4 class="project-story-heading">${title}</h4>
            </div>
            ${metricHtml}
            <ul>${itemHtml}</ul>
        </section>
    `;
}

function collectProjectEvidence(container) {
    const candidates = Array.from(container.querySelectorAll(
        '.reference-image, .screenshot-grid, .worksheet-screenshot-grid, .modal-store-link'
    ));

    return candidates
        .filter(node => !candidates.some(parent => parent !== node && parent.contains(node)))
        .map(node => node.cloneNode(true));
}

function initializeProjectCompanyLabels() {
    document.querySelectorAll('.project-card-v2[data-project-id]').forEach(card => {
        const projectId = card.dataset.projectId;
        const company = projectCompanyData[projectId];
        if (!company) return;

        card.querySelectorAll('.project-card-v2-company').forEach(label => label.remove());

        const label = document.createElement('span');
        label.className = 'project-card-v2-company';
        label.textContent = company === 'PERSONAL PROJECT' ? 'PERSONAL' : company;
        label.classList.toggle('is-personal', company === 'PERSONAL PROJECT');
        card.appendChild(label);
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeProjectCompanyLabels);
} else {
    initializeProjectCompanyLabels();
}

// 기존 상세 콘텐츠를 유지하면서 제목 단위로 묶어 새 모달의 정보 위계를 만든다.
function decorateProjectStory() {
    const story = document.getElementById('modalFeatures');
    if (!story) return;

    const children = Array.from(story.children);
    const fragment = document.createDocumentFragment();
    let section = null;

    children.forEach(child => {
        const strong = child.matches('p') ? child.querySelector(':scope > strong') : null;

        if (strong) {
            section = document.createElement('section');
            section.className = `project-story-block ${getProjectStoryClass(strong.textContent)}`;

            const heading = document.createElement('h4');
            heading.className = 'project-story-heading';
            heading.textContent = strong.textContent.trim();
            section.appendChild(heading);
            fragment.appendChild(section);
            return;
        }

        if (section) {
            section.appendChild(child);
        } else {
            fragment.appendChild(child);
        }
    });

    story.replaceChildren(fragment);
}

function getProjectStoryClass(title) {
    const normalized = title.toLowerCase();
    if (normalized.includes('problem')) return 'is-problem';
    if (normalized.includes('analy') || normalized.includes('decision') || normalized.includes('architecture') || normalized.includes('verification')) return 'is-analysis';
    if (normalized.includes('role') || normalized.includes('contribution') || normalized.includes('implementation') || normalized.includes('workflow') || normalized.includes('integration') || normalized.includes('담당')) return 'is-action';
    if (normalized.includes('result') || normalized.includes('impact') || normalized.includes('status') || normalized.includes('screenshot') || normalized.includes('visual') || normalized.includes('app store')) return 'is-result';
    return 'is-context';
}

// 모달 닫기
function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}


// 모달 외부 클릭 시 닫기
document.addEventListener('click', function(e) {
    const modal = document.getElementById('projectModal');
    if (e.target === modal) {
        closeProjectModal();
    }
});

// ESC 키로 모달 닫기
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const imageViewer = document.getElementById('imageViewerModal');
        if (imageViewer?.classList.contains('active')) {
            closeImageViewer();
            return;
        }
        closeProjectModal();
    }
});

// 이미지 뷰어 관련 변수
let currentImageList = [];
let currentImageIndex = 0;

// 이미지 뷰어 열기
function openImageViewer(images, startIndex = 0) {
    const modal = document.getElementById('imageViewerModal');
    const viewerImage = document.getElementById('viewerImage');
    const viewerCaption = document.getElementById('viewerCaption');
    const currentIndexSpan = document.getElementById('currentImageIndex');
    const totalImagesSpan = document.getElementById('totalImages');
    
    currentImageList = images;
    currentImageIndex = startIndex;
    
    // 이미지 설정
    viewerImage.src = currentImageList[currentImageIndex].src;
    viewerImage.alt = currentImageList[currentImageIndex].alt;
    viewerCaption.textContent = currentImageList[currentImageIndex].alt || '프로젝트 이미지';
    
    // 카운터 업데이트
    currentIndexSpan.textContent = String(currentImageIndex + 1).padStart(2, '0');
    totalImagesSpan.textContent = String(currentImageList.length).padStart(2, '0');
    
    // 단일 이미지 여부 설정
    if (currentImageList.length === 1) {
        modal.setAttribute('data-single-image', 'true');
    } else {
        modal.setAttribute('data-single-image', 'false');
    }
    
    // 모달 표시
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// 이미지 뷰어 닫기
function closeImageViewer() {
    const modal = document.getElementById('imageViewerModal');
    modal.classList.remove('active');
    const projectModal = document.getElementById('projectModal');
    document.body.style.overflow = projectModal?.classList.contains('active') ? 'hidden' : '';
    currentImageList = [];
    currentImageIndex = 0;
}

// 이전 이미지
function prevImage() {
    if (currentImageList.length <= 1) return;
    
    currentImageIndex = (currentImageIndex - 1 + currentImageList.length) % currentImageList.length;
    updateViewerImage();
}

// 다음 이미지
function nextImage() {
    if (currentImageList.length <= 1) return;
    
    currentImageIndex = (currentImageIndex + 1) % currentImageList.length;
    updateViewerImage();
}

// 뷰어 이미지 업데이트
function updateViewerImage() {
    const viewerImage = document.getElementById('viewerImage');
    const viewerCaption = document.getElementById('viewerCaption');
    const currentIndexSpan = document.getElementById('currentImageIndex');
    
    viewerImage.src = currentImageList[currentImageIndex].src;
    viewerImage.alt = currentImageList[currentImageIndex].alt;
    viewerCaption.textContent = currentImageList[currentImageIndex].alt || '프로젝트 이미지';
    currentIndexSpan.textContent = String(currentImageIndex + 1).padStart(2, '0');
}

// 키보드 화살표로 이미지 넘기기
document.addEventListener('keydown', function(e) {
    const modal = document.getElementById('imageViewerModal');
    if (modal.classList.contains('active')) {
        if (e.key === 'ArrowLeft') {
            prevImage();
        } else if (e.key === 'ArrowRight') {
            nextImage();
        }
    }
});

// 이미지 뷰어 모달 외부 클릭 시 닫기
const imageViewerModal = document.getElementById('imageViewerModal');
if (imageViewerModal) {
    imageViewerModal.addEventListener('click', function(e) {
        if (e.target.id === 'imageViewerModal') {
            closeImageViewer();
        }
    });
}
