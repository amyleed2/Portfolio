// Safari 호환성 체크
console.log('project-modal.js loaded');

// 프로젝트 상세 정보 데이터
const projectData = {
    'encar-1': {
        title: '엔카닷컴 iOS 앱 개발 및 운영',
        period: '2025.06 ~ 2025.08',
        description: '운영 중인 엔카 iOS 앱에서 UIKit 레거시 화면을 SwiftUI + MVVM 구조로 전환하고, 광고 모듈과 로깅 구조를 정리해 운영 안정성을 높이는 개선 작업을 수행했습니다.',
        tech: ['iOS', 'Objective-C', 'Swift', 'SwiftUI', 'UIKit', 'MVVM', 'AppsFlyer', 'Braze', 'Firebase', 'Crashlytics', 'Alamofire', 'SnapKit', 'Cursor', 'Copilot'],
        features: `
            <p><strong>Overview</strong></p>
            <ul>
                <li>엔카 iOS 앱의 운영 개발 과정에서 레거시 UIKit 화면 개선과 SwiftUI 전환, 운영 안정성 개선을 함께 수행한 프로젝트입니다.</li>
                <li>단기간 안에 기존 구조를 파악하고, 신규 화면 전환과 운영 코드 정리를 병행해야 했습니다.</li>
            </ul>

            <p><strong>Problem</strong></p>
            <ul>
                <li>차량 옵션 필터 화면은 UIKit 기반 레거시 구조로 유지되고 있어 신규 UI 요구사항과 테스트 구조를 반영하기 어려웠습니다.</li>
                <li>AppsFlyer, Braze 등 광고 모듈 연동 코드가 여러 파일에 분산되어 있어 변경 영향 범위 파악과 유지보수가 비효율적이었습니다.</li>
                <li>운영 중 장애 원인을 빠르게 추적하기 위해 Crashlytics 로깅과 API 요청/응답 로그 구조를 정리할 필요가 있었습니다.</li>
            </ul>

            <p><strong>My Role</strong></p>
            <ul>
                <li>제네시스 옵션 필터 화면의 SwiftUI + MVVM 전환을 담당했습니다.</li>
                <li>광고 모듈 통합 구조 설계, Crashlytics 로깅 중앙화, API 로깅 개선 작업을 수행했습니다.</li>
                <li>정기 배포와 운영 이슈 대응 과정에서 안정성 개선 작업을 함께 진행했습니다.</li>
            </ul>

            <p><strong>Key Contributions</strong></p>
            <ul>
                <li>UIKit 기반 화면을 SwiftUI + MVVM 구조로 재구성하고, 주요 유스케이스 기준의 Unit Test를 작성했습니다.</li>
                <li>AppsFlyer, Braze 연동 코드를 단일 구조로 정리해 중복 코드를 줄이고 모듈 추가/교체가 쉬운 형태로 개선했습니다.</li>
                <li>Crashlytics 크래시 로깅 로직을 중앙화하고, API 요청/응답 로그를 추가해 운영 중 디버깅 흐름을 개선했습니다.</li>
            </ul>

            <p><strong>Technical Decisions</strong></p>
            <ul>
                <li>신규 화면은 SwiftUI를 적용하되, 기존 앱 구조와의 연결성을 고려해 MVVM 기반으로 상태와 화면 로직을 분리했습니다.</li>
                <li>광고/분석 SDK 연동은 개별 화면에 흩어지지 않도록 공통 진입점을 두는 방향으로 정리했습니다.</li>
                <li>운영 중 원인 추적이 필요한 지점을 기준으로 크래시와 네트워크 로그의 수집 위치를 조정했습니다.</li>
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
                <li>레거시 화면을 신규 구조로 전환하며 이후 SwiftUI 기반 화면 확장의 기준을 마련했습니다.</li>
                <li>광고 모듈과 로깅 구조를 정리해 운영 중 변경 대응과 장애 추적이 쉬운 구조로 개선했습니다.</li>
            </ul>
        `
    },

    'onestore-1': {
        title: 'ONEstore Global App Market Prototype 개발',
        period: '2024.01 ~ 2024.12',
        description: 'ONEstore 글로벌 앱 마켓 프로젝트에서 iOS PL로 참여해 Apple DMA 관련 제3자 마켓 기술 검토를 진행하고, Prototype부터 Alpha, Beta까지 단계별 iOS 앱 개발을 이끌었습니다.',
        tech: ['iOS', 'Swift', 'SwiftUI', 'Clean Architecture', 'MVVM', 'Tuist', 'MarketplaceKit', 'JavaScript Interface', 'Figma', 'CryptoSwift'],
        features: `
            <p><strong>Overview</strong></p>
            <ul>
                <li>Apple DMA 정책 변화에 대응해 ONEstore 글로벌 대체 앱 마켓의 iOS 구현 가능성을 검토하고 Prototype, Alpha, Beta 단계로 앱을 확장한 프로젝트입니다.</li>
                <li>단순 화면 구현보다 신규 정책과 플랫폼 제약을 해석하고, 실제 서비스 구조로 연결 가능한지 검증하는 것이 핵심이었습니다.</li>
            </ul>

            <p><strong>Problem</strong></p>
            <ul>
                <li>Apple의 제3자 마켓 정책과 API 제약을 ONEstore 글로벌 서비스 관점에서 해석해야 했습니다.</li>
                <li>Hosted App 다운로드, 설치, 업데이트, 실행 흐름이 기존 App Store 배포 모델과 달라 별도의 검증 구조가 필요했습니다.</li>
                <li>정책 문서만으로 판단하기 어려운 이슈는 실제 구현 관점에서 리스크를 정리해야 했습니다.</li>
            </ul>

            <p><strong>My Role</strong></p>
            <div class="modal-role-callout">
                <span class="modal-role-label">Leadership Role</span>
                <p>iOS PL로서 정책/기술 검토, 앱 아키텍처 설계, Prototype에서 Alpha/Beta로 이어지는 개발 흐름을 리드했습니다.</p>
            </div>
            <ul>
                <li>iOS PL로서 제3자 마켓 기술 검토와 단계별 앱 개발 흐름을 리드했습니다.</li>
                <li>아키텍처, 네트워크 모듈, JavaScript Interface 구조를 설계하고 주요 구현 범위를 나누어 개발을 진행했습니다.</li>
                <li>Apple Cork 기술 세션에 iOS Client 대표로 참석해 검토 중이던 이슈를 구현 관점에서 확인했습니다.</li>
            </ul>

            <p><strong>Key Contributions</strong></p>
            <ul>
                <li>Apple DMA 및 제3자 마켓 관련 문서를 검토하고, ONEstore 글로벌 서비스에 필요한 구현 조건과 리스크를 정리했습니다.</li>
                <li>Clean Architecture와 MVVM 기반으로 앱 구조를 설계하고, 네트워크 모듈과 JavaScript Interface를 포함한 공통 기반을 구성했습니다.</li>
                <li>Hosted App List 수신, 전시 화면 일부, 다운로드 상태 처리, 설치/업데이트/실행/삭제 시나리오 구현에 참여했습니다.</li>
                <li>Prototype에서 Alpha, Beta 단계로 기능을 확장하며 MVP 흐름과 핵심 기능 구현 가능성을 검증했습니다.</li>
            </ul>

            <p><strong>Technical Decisions</strong></p>
            <ul>
                <li>신규 정책 대응 프로젝트였기 때문에 구현 전에 정책 제약, API 제공 범위, 서비스 요구사항의 충돌 지점을 먼저 정리했습니다.</li>
                <li>Hosted App과 마켓 메타데이터 흐름을 분리해 관리할 수 있도록 네트워크와 저장소 계층을 나누는 방향으로 설계했습니다.</li>
                <li>웹과 앱 간 이벤트 연동이 필요한 영역은 JavaScript Interface를 통해 명확한 경계를 두고 처리했습니다.</li>
            </ul>

            <p><strong>Visual Evidence</strong></p>
            <ul>
                <li>Apple 정책 검토, 앱 구조, 핵심 구현 예시, 최종 화면을 함께 보여주기 위한 시각 자료입니다.</li>
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
                <li>제3자 마켓 서비스의 iOS 구현 가능성과 주요 리스크를 실제 앱 흐름으로 검증했습니다.</li>
                <li>Prototype부터 Beta까지 이어지는 단계별 개발 기반을 만들며 글로벌 앱 마켓 출시 검토에 필요한 기술 판단 자료를 정리했습니다.</li>
            </ul>
        `
    },

    'onestore-2': {
        title: 'ONEstore Design System 구축 및 개발',
        period: '2024.06 ~ 2025.06',
        description: 'ONEstore 디자인 시스템 구축 프로젝트에서 iOS 개발 파트 PM으로 참여해 공통 UI 컴포넌트 구조, 디자인 토큰, Figma 연계 흐름을 정리하고 디자인-개발 협업 기준을 맞추는 작업을 진행했습니다.',
        tech: ['iOS', 'Swift', 'SwiftUI', 'Tuist', 'Figma', 'Design Token', 'Style Dictionary', 'Code Connect', 'Lottie'],
        features: `
            <p><strong>Overview</strong></p>
            <ul>
                <li>ONEstore 제품군에서 공통 UI 컴포넌트와 디자인 리소스를 일관되게 사용하기 위한 디자인 시스템 구축 프로젝트입니다.</li>
                <li>단순 UI 공통화가 아니라, 디자인 기준과 iOS 구현 구조가 함께 맞물리도록 협업 흐름을 정리하는 데 초점을 맞췄습니다.</li>
            </ul>

            <p><strong>Problem</strong></p>
            <ul>
                <li>디자이너와 개발자, 각 플랫폼 개발자가 컴포넌트 단위와 속성을 다르게 해석할 수 있어 구현 기준을 맞추기 어려웠습니다.</li>
                <li>디자인 토큰과 리소스 변경 사항이 수작업 전달에 의존하면 반복 비용과 누락 위험이 커질 수 있었습니다.</li>
                <li>새로운 컴포넌트 체계를 도입하더라도 사용 방식이 명확하지 않으면 신규 참여자의 러닝커브가 커질 수 있었습니다.</li>
            </ul>

            <p><strong>My Role</strong></p>
            <div class="modal-role-callout">
                <span class="modal-role-label">Leadership Role</span>
                <p>iOS 개발 파트 PM으로서 UXD팀과 개발 조직 사이에서 컴포넌트 구조, 구현 기준, Figma 연계 흐름을 맞추는 역할을 맡았습니다.</p>
            </div>
            <ul>
                <li>iOS 개발 파트 PM으로 참여해 UXD팀 및 개발 조직과 컴포넌트 구조와 구현 기준을 정리했습니다.</li>
                <li>Style, Component, Screen으로 이어지는 개발 프레임워크 구조를 iOS 구현 관점에서 설계하고 정리했습니다.</li>
                <li>Figma Plugin, Style Dictionary, Code Connect를 활용한 디자인 자산과 코드 연결 방식을 검토했습니다.</li>
            </ul>

            <p><strong>Key Contributions</strong></p>
            <ul>
                <li>Atomic Design을 그대로 적용하기보다 ONEstore 제품과 협업 방식에 맞는 Style-Component-Screen 구조를 정리했습니다.</li>
                <li>Top Navigation 등 실제 화면 요소를 기준으로 컴포넌트 단위, Item, Property 기준을 협의하고 구현 규칙으로 연결했습니다.</li>
                <li>리소스, 코어 로직, 컴포넌트 레이어를 분리한 WDS 프레임워크 구조를 구성했습니다.</li>
                <li>디자인 토큰을 추출하고 Style Dictionary로 변환하는 자동화 방향과, Figma Code Connect 기반 코드 스니펫 확인 흐름을 검토했습니다.</li>
            </ul>

            <p><strong>Technical Decisions</strong></p>
            <ul>
                <li>디자인 시스템을 화면 단위가 아니라 Style, Component, Screen 계층으로 나누어 확장성과 유지보수성을 확보하는 방향을 선택했습니다.</li>
                <li>컴포넌트 정의는 디자인 명칭이 아니라 실제 구현에 필요한 Property와 조합 기준까지 함께 맞추는 방식으로 정리했습니다.</li>
                <li>Code Connect는 컴포넌트 사용법을 문서로만 전달하지 않고 Figma 안에서 코드 스니펫과 속성 조합을 확인하는 방식으로 검토했습니다.</li>
            </ul>

            <p><strong>Visual Evidence</strong></p>
            <ul>
                <li>디자인 시스템 구조, 컴포넌트 정의, 디자인 토큰 자동화, Figma Code Connect 흐름을 설명하기 위한 핵심 자료입니다.</li>
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
                <li>디자인 시스템을 공통 UI 개발 작업이 아니라 플랫폼화와 협업 기준 정리 작업으로 연결했습니다.</li>
                <li>디자이너와 개발자가 같은 컴포넌트 기준을 보고 논의할 수 있는 구조를 만들고, iOS 구현 체계와 Figma 자산을 연결하는 방향을 제시했습니다.</li>
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
        description: 'GS ITM에서 GS Retail 전사 모바일 앱 운영을 담당했고, 별도 GS Fresh 차세대 커머스 프로젝트에서는 모바일 파트 PL로 참여했습니다.',
        tech: ['iOS', 'Android', 'Swift', 'Objective-C', 'RxSwift', 'Firebase', 'Crashlytics', 'Alamofire', 'Moya', 'Jira', 'Confluence'],
        features:  `
            <p><strong>Overview</strong></p>
            <ul>
                <li>GS ITM 재직 중 수행한 대표 경험을 운영 업무와 차세대 프로젝트 PL 경험으로 나누어 정리한 프로젝트입니다.</li>
                <li>전사 모바일 앱 운영에서는 배포 안정성, 장애 대응, VOC 대응을 담당했고, GS Fresh 차세대 프로젝트에서는 모바일 파트 PL로 참여했습니다.</li>
            </ul>

            <div class="modal-track-section">
                <div class="modal-track-header">
                    <span class="modal-track-kicker">Track 1</span>
                    <h4>GS Retail Mobile App Operation</h4>
                    <span class="modal-track-badge">Operation</span>
                </div>

                <p><strong>Problem</strong></p>
                <ul>
                    <li>GS Retail의 여러 커머스 및 멤버십 앱을 동시에 운영하면서 정기 배포, 긴급 배포, 장애 대응, 신규 OS 대응을 안정적으로 처리해야 했습니다.</li>
                    <li>VOC와 Crash Report를 기반으로 사용 중인 앱의 문제를 빠르게 파악하고 운영 리스크를 줄여야 했습니다.</li>
                </ul>

                <p><strong>My Role</strong></p>
                <ul>
                    <li>GS Retail 전사 앱 운영 조직에서 iOS와 Android 앱 운영 및 개발을 담당했습니다.</li>
                    <li>커머스 앱과 멤버십 앱의 정기 배포, 긴급 배포, VOC 대응, OS 업데이트 대응, Crash 분석을 수행했습니다.</li>
                </ul>

                <p><strong>Key Contributions</strong></p>
                <ul>
                    <li>GS Fresh Mall, 달리살다, 마켓포 등 커머스 앱과 THE POP, GS수퍼마켓, GS25 나만의 냉장고 등 멤버십 앱 운영을 담당했습니다.</li>
                    <li>월 2회 정기 배포와 긴급 배포 대응, 신규 OS 업데이트와 Deprecated API 대응을 수행했습니다.</li>
                    <li>VOC, Crash Report, 현업 개선 요청을 기반으로 앱 안정성 개선과 버그 수정을 진행했습니다.</li>
                </ul>

                <p><strong>Screenshots / Result</strong></p>
                <ul>
                    <li>운영 대상이었던 커머스 및 멤버십 앱의 서비스 맥락을 빠르게 이해할 수 있는 대표 화면 자료입니다.</li>
                </ul>
                <div class="reference-image">
                    <p class="reference-image-label">GS Retail 운영 앱 화면</p>
                    <img src="assets/images/gsfresh_screenshot.png" alt="GS Fresh 커머스 앱 운영 화면" class="reference-img">
                    <img src="assets/images/thepop_screenshot.png" alt="THE POP 멤버십 앱 운영 화면" class="reference-img">
                </div>

                <p><strong>Result / Impact</strong></p>
                <ul>
                    <li>여러 운영 앱의 정기/긴급 배포와 장애 대응을 경험하며 운영 중인 모바일 서비스의 안정성을 지키는 실무 역량을 쌓았습니다.</li>
                    <li>Android와 iOS를 함께 다룬 경험을 통해 이후 iOS 개발에서도 플랫폼 차이와 운영 구조를 함께 고려하는 기반을 만들었습니다.</li>
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
                    <li>오픈을 앞둔 시점에 모바일 개발 산출물과 구현 방향을 다시 점검하고, Android/iOS 양쪽의 개발 범위를 정리해야 했습니다.</li>
                    <li>SSO, One-Source Multi Application, 외부 SDK, API/WKWebView 연동처럼 여러 앱과 플랫폼에 영향을 주는 기능을 안정적으로 구현해야 했습니다.</li>
                </ul>

                <p><strong>My Role</strong></p>
                <div class="modal-role-callout">
                    <span class="modal-role-label">Leadership Role</span>
                    <p>모바일 파트 PL로 참여해 Android/iOS 개발 범위와 개발 문서를 정리하고, 주요 기능 구현 방향을 조율했습니다.</p>
                </div>
                <ul>
                    <li>GS 차세대 프로젝트 모바일 파트 PL 역할을 맡았습니다.</li>
                    <li>Android와 iOS 개발 범위를 함께 확인하며 기능 구현과 문서 정리를 담당했습니다.</li>
                    <li>SSO, One-Source Multi Application, SDK 연동, API/WKWebView 연동 등 주요 모바일 기능 구현에 참여했습니다.</li>
                </ul>

                <p><strong>Key Contributions</strong></p>
                <ul>
                    <li>SSO Flow와 시나리오를 정리하고, 각 플랫폼에서 필요한 구현 범위를 검토했습니다.</li>
                    <li>여러 앱을 한 구조에서 관리하기 위한 scheme 분리와 환경 분리 작업을 진행했습니다.</li>
                    <li>FCM, 외부 SDK, 소셜 로그인, API/WKWebView 연동 등 차세대 커머스 앱에 필요한 모바일 기능을 구현했습니다.</li>
                </ul>

                <p><strong>Technical Decisions</strong></p>
                <ul>
                    <li>One-Source Multi Application 구조를 고려해 앱별 scheme과 환경을 분리하는 방향으로 구성했습니다.</li>
                    <li>SSO와 외부 SDK 연동은 운영 전환 이후의 안정성과 배포 리스크를 고려해 구현 범위를 점검했습니다.</li>
                </ul>

                <p><strong>Screenshots / Result</strong></p>
                <ul>
                    <li>차세대 커머스 앱 전환 결과를 설명할 수 있는 대표 화면 자료입니다.</li>
                </ul>
                <div class="reference-image">
                    <p class="reference-image-label">GS Fresh 차세대 커머스 앱 화면</p>
                    <img src="assets/images/gsfresh_screenshot.png" alt="GS Fresh 차세대 커머스 앱 결과 화면" class="reference-img">
                </div>

                <p><strong>Result / Impact</strong></p>
                <ul>
                    <li>운영 경험을 기반으로 차세대 커머스 프로젝트의 모바일 개발 범위와 구현 방향을 정리했습니다.</li>
                    <li>Android와 iOS를 함께 고려하며 모바일 파트 PL 역할을 수행한 경험을 쌓았습니다.</li>
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
    document.getElementById('modalDescription').textContent = project.description;
    document.getElementById('modalFeatures').innerHTML = project.features;
    
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
    
    // 스크린샷 그리드 스크롤 감지 및 클릭 이벤트 추가 (모달이 렌더링된 후)
    setTimeout(() => {
        // 결과물 스크린샷 처리
        const screenshotGrids = modal.querySelectorAll('.screenshot-grid');
        screenshotGrids.forEach(grid => {
            const images = grid.querySelectorAll('.screenshot-img');
            
            // 스크롤 힌트 설정
            if (images.length >= 3) {
                grid.setAttribute('data-has-scroll', 'true');
            } else {
                grid.setAttribute('data-has-scroll', 'false');
            }
            
            // 각 이미지에 클릭 이벤트 추가
            images.forEach((img, index) => {
                img.style.cursor = 'pointer';
                img.addEventListener('click', function() {
                    // 같은 그리드 내의 모든 이미지를 배열로 변환
                    const imageList = Array.from(images).map(image => ({
                        src: image.src,
                        alt: image.alt
                    }));
                    openImageViewer(imageList, index);
                });
            });
        });
        
        // 참조 이미지 처리 (설명용 이미지 - 가로)
        const referenceImages = modal.querySelectorAll('.reference-img');
        referenceImages.forEach(img => {
            img.style.cursor = 'pointer';
            img.addEventListener('click', function() {
                // 단일 이미지로 뷰어 열기
                openImageViewer([{
                    src: img.src,
                    alt: img.alt
                }], 0);
            });
        });
        
        // 참조 이미지 처리 (설명용 이미지 - 세로)
        const referenceImagesVertical = modal.querySelectorAll('.reference-img-vertical');
        referenceImagesVertical.forEach(img => {
            img.style.cursor = 'pointer';
            img.addEventListener('click', function() {
                // 단일 이미지로 뷰어 열기
                openImageViewer([{
                    src: img.src,
                    alt: img.alt
                }], 0);
            });
        });
    }, 100);
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
        closeProjectModal();
        closeImageViewer();
    }
});

// 이미지 뷰어 관련 변수
let currentImageList = [];
let currentImageIndex = 0;

// 이미지 뷰어 열기
function openImageViewer(images, startIndex = 0) {
    const modal = document.getElementById('imageViewerModal');
    const viewerImage = document.getElementById('viewerImage');
    const currentIndexSpan = document.getElementById('currentImageIndex');
    const totalImagesSpan = document.getElementById('totalImages');
    
    currentImageList = images;
    currentImageIndex = startIndex;
    
    // 이미지 설정
    viewerImage.src = currentImageList[currentImageIndex].src;
    viewerImage.alt = currentImageList[currentImageIndex].alt;
    
    // 카운터 업데이트
    currentIndexSpan.textContent = currentImageIndex + 1;
    totalImagesSpan.textContent = currentImageList.length;
    
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
    document.body.style.overflow = '';
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
    const currentIndexSpan = document.getElementById('currentImageIndex');
    
    viewerImage.src = currentImageList[currentImageIndex].src;
    viewerImage.alt = currentImageList[currentImageIndex].alt;
    currentIndexSpan.textContent = currentImageIndex + 1;
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
