// Safari 호환성 체크
console.log('project-modal.js loaded');

// 프로젝트 상세 정보 데이터
const projectData = {
    'encar-1': {
        title: '엔카닷컴 iOS 앱 개발 및 운영',
        period: '2025.06 ~ 2025.08',
        description: 'iOS 앱 개발 및 유지보수를 담당했습니다.',
        tech: ['iOS', 'Objective-C', 'Swift', 'SwiftUI', 'AppsFlyer', 'Braze', 'KakaoAd', 'Firebase', 'FaceBookSDK', 'Kingfisher', 'CryptoSwift', 'lottie-ios', 'Alamofire', 'KissXML', 'SnapKit', 'Cursor', 'Copilot', 'etc'],
        features: `
            <p><strong>정기 운영 업무</strong></p>
            <ul>
                <li>정기 배포 진행</li>
                <li>앱 안정성 개선 및 버그 수정</li>
                <li>신규 기능 개발 및 배포</li>
            </ul>
            <p><strong>개인 업무</strong></p>
            <ul>
                <li>
                    <strong class="sub-title">제네시스 옵션 필터 화면 리팩토링</strong>
                    <div class="sub-description">
                        <p class="description-label">📝 상세 설명</p>
                        <ul class="sub-list">
                            <li>기존 UIKit으로 구현된 차량 검색을 위한 옵션 필터 화면을 SwiftUI로 Language 전환 및 개발</li>
                            <li>MVVM 디자인 패턴 신규 개발 및 적용</li>
                            <li>Unit Test 코드 작성 및 적용</li>
                            <li>디자인 시스템 적용</li>
                        </ul>
                    </div>
                    <div class="sub-screenshots">
                        <p class="screenshot-label">📱 결과물</p>
                        <div class="screenshot-grid">
                            <img src="assets/images/encar_screenshot.jpg" alt="제네시스 옵션 필터 화면" class="screenshot-img">
                        </div>
                    </div>
                </li>
                <li>
                    <strong class="sub-title">기존 소스 리팩토링</strong>
                    <div class="sub-description">
                        <p class="description-label">📝 상세 설명</p>
                        <ul class="sub-list">
                            <li>광고 모듈(AppsFlyer, Braze) 적용을 위한 파편화된 소스 통합과 관리 구조 설계 및 개발 </li>
                            <li>API 요청 및 응답 과정에 대한 로깅 기능 구현</li>
                            <li>Crashlytics 크래시 로깅 로직을 중앙화하여 단일 클래스에서 관리하도록 구조 개선</li>
                            <li>기타 운영 업무 효율을 증대시킬 수 있는 기능 개발 및 적용</li>
                        </ul>
                    </div>
                </li>
            </ul>
        `
    },
    'onestore-1': {
        title: 'ONEstore Global App Market Prototype 개발',
        period: '2024.01 ~ 2024.12',
        description: '24년 2월 Apple의 DMA 정책에 의한 제 3자 앱 마켓에 대한 Open API 제공에 따라 ONEstore 글로벌 앱 마켓에 대한 기술 검토를 진행했습니다. 그리고 그를 기반으로 Prototype, Alpha, Beta 앱 개발 및 구축을 했습니다.',
        tech: ['iOS', 'Swift', 'SwiftUI', 'Clean Architecture', 'MVVM', 'Tuist', 'Figma', 'Cursor', 'Copilot', 'CryptoSwift'],
        features: `
            <p><strong>기술 검토</strong></p>
            <ul>
                <li>
                    EU에서 DMA(디지털 시장법)을 시행함에 따라, Apple은 24년도 2월 iOS 17.4 beta 이상에서 EU 국가에 한해 application 다운로드 및 결제하는 방식에 대한 신규 기능을 발표했습니다. 이는 독점으로 앱 마켓을 운영하고 있던 Apple이 제 3자 앱 마켓을 허용하게 된 것이며, 마켓플레이스를 운영하는 ‘원스토어’는 iOS 시장 점유율을 확보하고자 글로벌 마켓 출시를 위한 준비 과정을 시작하게 되었습니다.
                    <br>
                    그리고 저는 관련 문서를 리딩하며, 정책서를  확인하고 원스토어 iOS 글로벌 서비스 진행 시 weak point가 될 요소가 무엇이 있는지 등을 분석해 나가는 업무를 시작하였습니다.
                    <div class="reference-image">
                        <p class="reference-image-label">🍎 Installing app from an alternative marketplace (apple.com)</p>
                        <img src="assets/images/apple_diagram.png" alt="디자인 시스템 아키텍쳐" class="reference-img">                        
                    </div>
                    <br>
                </li>                
            </ul>
            </ul>

            <p><strong>오프라인 세션 참석</strong></p>
            <ul>
                <li>
                    Apple에서 Alternative marketplace (대체마켓 앱) 개발을 돕기 위해, Ireland, Cork 지사에서 5일간의 Lab을 개최했습니다. 
                    <br>
                    이에 저는 iOS Client 대표자 1명으로 선출되어, 총 2주간의 출장을 다녀왔으며, 세션을 참석해 기술 검토를 위한 MVP 시나리오를 개발했습니다. 세션 참석 후 C-레벨 보고에서 원스토어 iOS 글로벌 앱 마켓 출시에 대한 feasibility를 발표했으며 구축에 필요한 초기 작업을 다지는데 기여하였습니다.
                    <div class="reference-image">
                        <p class="reference-image-label">🍎 Installing app from an alternative marketplace (apple.com)</p>
                        <img src="assets/images/apple_diagram.png" alt="Apple Alternative Marketplace" class="reference-img">                        
                    </div>
                    
                    <div class="lab-info-section">
                        <div class="lab-info-header">
                            <span class="lab-info-icon">🏢</span>
                            <span class="lab-info-title">Apple Lab 세션 정보</span>
                        </div>
                        
                        <div class="lab-info-grid">
                            <div class="lab-info-item">
                                <div class="lab-label">Lab 소개</div>
                                <div class="lab-content">
                                    <a href="https://developer.apple.com/events/view/S2L63QD88Y/dashboard" target="_blank" class="lab-link">
                                        Apple Developer Events
                                        <svg class="external-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                            <polyline points="15 3 21 3 21 9"></polyline>
                                            <line x1="10" y1="14" x2="21" y2="3"></line>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            
                            <div class="lab-info-item">
                                <div class="lab-label">출장 기간</div>
                                <div class="lab-content">
                                    <div class="date-info">
                                        <span class="date-icon">📅</span>
                                        <div class="date-details">
                                            <p><strong>총 기간:</strong> 2024.04.08 ~ 2024.04.21</p>
                                            <p><strong>세션:</strong> 2024.04.15 ~ 2024.04.19 (5일)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="lab-info-item">
                                <div class="lab-label">장소</div>
                                <div class="lab-content">
                                    <span class="location-icon">📍</span>
                                    <span>Ireland Cork</span>
                                </div>
                            </div>
                            
                            <div class="lab-info-item">
                                <div class="lab-label">참가 인원</div>
                                <div class="lab-content">
                                    <div class="team-members">
                                        <div class="member-badge">
                                            <span class="member-icon">👨‍💼</span>
                                            <span>개발 리더 1명</span>
                                        </div>
                                        <div class="member-badge">
                                            <span class="member-icon">👨‍💻</span>
                                            <span>iOS 1명 (본인)</span>
                                        </div>
                                        <div class="member-badge">
                                            <span class="member-icon">💻</span>
                                            <span>Backend 1명</span>
                                        </div>
                                        <div class="member-badge">
                                            <span class="member-icon">🎨</span>
                                            <span>기획 및 디자이너 1명</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="lab-info-item full-width">
                                <div class="lab-label">참가 목표</div>
                                <div class="lab-content">
                                    <ul class="goal-list">
                                        <li>MVP 기반의 prototype app 개발</li>
                                        <li>MarketplaceKit API 관련 내용 질의</li>
                                        <li>MarketplaceKit에서 제공하지 않지만, 원스토어에 필요한 기능에 대한 질의 및 기능 제공 가능성 확인</li>
                                        <li>우림 이외 지역에서 개발 및 QA 가능 여부 확인</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div class="lab-info-item full-width">
                                <div class="lab-label">세션 진행 내역</div>
                                <div class="lab-content">
                                    <div class="session-timeline">
                                        <div class="timeline-item">
                                            <div class="timeline-number">1</div>
                                            <div class="timeline-content">제 3자 마켓 등록을 위한 절차 진행</div>
                                        </div>
                                        <div class="timeline-item">
                                            <div class="timeline-number">2</div>
                                            <div class="timeline-content">제 3자 마켓 출시를 위한 환경 구성 (Back-end)</div>
                                        </div>
                                        <div class="timeline-item">
                                            <div class="timeline-number">3</div>
                                            <div class="timeline-content">제 3자 마켓에서 App 다운로드를 위한 개발 진행</div>
                                        </div>
                                        <div class="timeline-item">
                                            <div class="timeline-number">4</div>
                                            <div class="timeline-content">제 3자 마켓에 등록될 Hosted App 개발 및 공증 절차 진행</div>
                                        </div>
                                        <div class="timeline-item">
                                            <div class="timeline-number">5</div>
                                            <div class="timeline-content">
                                                제 3자 마켓에서 Hosted App 다운로드 시나리오 개발
                                                <ul class="sub-features">
                                                    <li>App Install, Update, Launch, Multiple Install, Multiple Update, Remove 기능 개발</li>
                                                    <li>Download Progress State 개발</li>
                                                    <li>Installing Phase, Resume 개발</li>
                                                    <li>Installed Apps Filter 기능 개발</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="lab-info-item full-width">
                                <div class="lab-label">담당 역할 및 업무</div>
                                <div class="lab-content">
                                    <div class="role-highlight">
                                        <span class="role-badge">iOS Client 담당 업무</span>
                                    </div>
                                    <div class="work-sections">
                                        <div class="work-section">
                                            <div class="work-section-title">
                                                <span class="work-number">1</span>
                                                <span>App 등록 및 다운로드 등 테스트 시나리오를 위한 Prototype app 개발</span>
                                            </div>
                                            <ul class="work-details">
                                                <li>Hosted App List 를 수신하기 위한 API 연동</li>
                                                <li>전시 화면 개발</li>
                                                <li>Hosted App의 Update State 확인을 위한 API 연동</li>
                                                <li>기타 화면 UI 및 기능 개발</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="work-section">
                                            <div class="work-section-title">
                                                <span class="work-number">2</span>
                                                <span>제 3자 마켓에 등록될 Hosted App 개발 및 간이 심사(공증) 완료</span>
                                            </div>
                                        </div>
                                        
                                        <div class="work-section">
                                            <div class="work-section-title">
                                                <span class="work-number">3</span>
                                                <span>제 3자 마켓에 등록된 Hosted App 다운로드를 위한 기능 구현</span>
                                            </div>
                                            <ul class="work-details">
                                                <li>MarketplaceKit를 활용해 당면에 다운로드, 업데이트, 열기, 삭제 등 Application을 설치하는데 필요한 기능 구현</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="work-section">
                                            <div class="work-section-title">
                                                <span class="work-number">4</span>
                                                <span>기타 MarketplaceKit Error 로슈 로그 분석 및 리포팅</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="lab-info-item full-width">
                                <div class="lab-label">최종 구현 화면</div>
                                <div class="lab-content">
                                    <div class="reference-image">
                                        <img src="assets/images/session_result.png" alt="최종 구현 화면" class="reference-img">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br>
                </li>                
            </ul>

            <p><strong>Prototype/Alpha/Beta 앱 개발</strong></p>
            <ul>
                <li>
                    DMA 정책 시행에 따라, 원스토어 iOS 글로벌 앱 마켓 구축 프로젝트를 착수하게 되었습니다. 앞서 설명드린 기술 검토와 동시에, Prototype app 제작이란 미션이 주어졌고, 이에 현재 상용 서비스로 운영되고 있는 Android 원스토어 글로벌 앱 마켓 형상을 그대로 본 따, Onestore iOS Global Prototype Application 개발을 시작했습니다.
                    
                    <div class="rnd-work-section">
                        <!-- 팀 구성 -->
                        <div class="team-composition">
                            <div class="team-comp-header">
                                <span class="team-comp-icon">👥</span>
                                <span class="team-comp-title">팀 구성</span>
                            </div>
                            <div class="team-members-grid">
                                <div class="team-member-item">
                                    <span class="member-role-icon">👔</span>
                                    <span class="member-role-text">팀장(PM)</span>
                                    <span class="member-count">1명</span>
                                </div>
                                <div class="team-member-item highlight">
                                    <span class="member-role-icon">🎯</span>
                                    <span class="member-role-text">PL</span>
                                    <span class="member-count">3명 (본인 포함)</span>
                                </div>
                                <div class="team-member-item">
                                    <span class="member-role-icon">🌱</span>
                                    <span class="member-role-text">신입사원</span>
                                    <span class="member-count">2명</span>
                                </div>
                            </div>
                        </div>
                        
                        <!-- 나의 기여도 -->
                        <div class="my-contribution">
                            <div class="contribution-header">
                                <span class="contribution-icon">📊</span>
                                <span class="contribution-title">나의 역할</span>
                            </div>
                            <div class="contribution-items">
                                <div class="contribution-item">
                                    <div class="contribution-label">
                                        <span class="label-text">기여도</span>
                                        <span class="label-value">40%+</span>
                                    </div>
                                    <div class="progress-bar">
                                        <div class="progress-fill contribution" style="width: 40%">
                                            <span class="progress-text">40%+</span>
                                        </div>
                                    </div>
                                    <p class="contribution-note">* PL 3명 중 주도적 역할 수행</p>
                                </div>
                                <div class="contribution-item">
                                    <div class="contribution-label">
                                        <span class="label-text">참여도</span>
                                        <span class="label-value">100%</span>
                                    </div>
                                    <div class="progress-bar">
                                        <div class="progress-fill participation" style="width: 100%">
                                            <span class="progress-text">100%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <div class="rnd-header">
                            <span class="rnd-icon">🔬</span>
                            <span class="rnd-title">담당 업무 (R&R)</span>
                        </div>
                        
                        <div class="rnd-category">
                            <div class="category-header">
                                <span class="category-icon">🏗️</span>
                                <span class="category-name">Foundation</span>
                            </div>
                            <div class="category-tasks">
                                <div class="task-item">
                                    <span class="task-number">1</span>
                                    <span class="task-text">아키텍처 설계 및 신규 기술 검토(PL)</span>
                                </div>
                                <div class="task-item">
                                    <span class="task-number">2</span>
                                    <span class="task-text">네트워크 모듈 구조 설계 및 개발</span>
                                </div>
                                <div class="task-item">
                                    <span class="task-number">3</span>
                                    <span class="task-text">Javascript Interface 설계 및 구현</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="rnd-category">
                            <div class="category-header">
                                <span class="category-icon">🎨</span>
                                <span class="category-name">UI 개발</span>
                            </div>
                            <div class="category-tasks">
                                <div class="task-item">
                                    <span class="task-number">1</span>
                                    <span class="task-text">전시 일부 화면 구현</span>
                                </div>
                                <div class="task-item">
                                    <span class="task-number">2</span>
                                    <span class="task-text">공통 컴포넌트 개발</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="rnd-category">
                            <div class="category-header">
                                <span class="category-icon">⚙️</span>
                                <span class="category-name">기타</span>
                            </div>
                            <div class="category-tasks">
                                <div class="task-item">
                                    <span class="task-number">1</span>
                                    <span class="task-text">OS 대응</span>
                                </div>
                                <div class="task-item">
                                    <span class="task-number">2</span>
                                    <span class="task-text">코드 리뷰 주관</span>
                                </div>
                                <div class="task-item">
                                    <span class="task-number">3</span>
                                    <span class="task-text">네이밍 컨벤션 및 Ground Rule 정의</span>
                                </div>
                                <div class="task-item">
                                    <span class="task-number">4</span>
                                    <span class="task-text">기타</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="sub-section">
                           <div class="sub-section-header">
                               <span class="sub-section-title">1. Clean Architecture와 MVVM 디자인 패턴을 적용하여 아키텍쳐 구조를 설계</span>
                           </div>
                           <div class="sub-section-content">
                               <div class="reference-image">
                                   <p class="reference-image-label">Product Architecture</p>
                                   <img src="assets/images/clean_architecture.png" alt="clean_architecture" class="reference-img">                                   
                                   <img src="assets/images/project_architecture.jpeg" alt="project_architecture" class="reference-img">
                               </div>
                           </div>
                       </div>
                    </div>

                     <div class="sub-section">
                           <div class="sub-section-header">
                               <span class="sub-section-title">2. 자체 네트워크 모듈 개발 및 구축</span>
                           </div>
                           <div class="sub-section-content">
                               <div class="section-description">
                                   <p>Alamofire, Moya라는 대표적인 iOS 네트워크 프레임워크 아키텍처를 참고하여 자체적으로 네트워크 프레임워크를 구현함으로써 외부 라이브러리에 대한 의존도를 낮추고자 함.</p>
                               </div>
                               <div class="reference-image">
                                   <p class="reference-image-label">일부 Code 예시</p>
                                   <img src="assets/images/network1.jpeg" alt="네트워크 모듈 코드 1" class="reference-img-vertical">
                                   <img src="assets/images/network2.png" alt="네트워크 모듈 코드 2" class="reference-img">                                 
                                   <img src="assets/images/network3.png" alt="네트워크 모듈 코드 3" class="reference-img">
                               </div>
                           </div>
                       </div>
                    </div>

                    <div class="sub-section">
                           <div class="sub-section-header">
                               <span class="sub-section-title">3. 제 3자 마켓 개발을 위한 MarketplaceKit API 출시 후, 부족한 기능이 추가되고 정책이 변경됨에 따라 변경 사항이 발생하여 이에 대한 지속적인 Follow-up 진행</span>
                           </div>
                       </div>
                    </div>

                    <div class="sub-section">
                           <div class="sub-section-header">
                               <span class="sub-section-title">4. 공통 UI 컴포넌트 개발 및 전시, 상세 화면 UI 개발</span>
                           </div>
                       </div>
                    </div>

                    <div class="final-result-section">
                           <div class="final-result-header">
                               <span class="final-result-icon">🎯</span>
                               <span class="final-result-title">최종 구현 화면</span>
                           </div>
                           <div class="final-result-content">
                               <div class="reference-image">
                                   <p class="reference-image-label">Application Screenshots</p>
                                   <img src="assets/images/onestore_result.jpeg" alt="최종 자동화 Workflow" class="reference-img">
                               </div>                               
                           </div>
                       </div>
                </li>
                
            </ul>
        `
    },
    'onestore-2': {
        title: 'ONEstore Design System 구축 및 개발',
        period: '2024.06 ~ 2025.06',
        description: '원스토어는 디자인 시스템이 기존에 구축되어 있지 않았습니다. 불필요하고 반복적인 UI 개발 작업으로 인한 업무 비효율이 있었습니다. 이에 UXD팀과 협업을 이뤄 사내 R&D 프로젝트로 진행하게 되었고, 원스토어 디자인 시스템 즉, Wheel Design System이란 프로젝트를 착수하였으며 저는 개발 파트 PM으로 참여했습니다.',
        tech: ['iOS', 'Swift', 'SwiftUI', 'Tuist', 'Figma', 'Cursor', 'Copilot', 'Lottie'],
        features: `
            <p><strong>WDS Framework Architecture 설계</strong></p>
            <ul>
                <li>
                    원스토어만의 디자인 시스템 아키텍쳐를 설계 및 구축했습니다. 가장 기본적으로 활용되는 디자인 시스템 방법론 중 Atomic Design 방법론이 있지만, '원스토어'라는 Product에 적용하기에는 fit되지 않았으며, 이에 디자인팀과 개발팀의 협업 하에 원스토어 디자인 시스템 만의 아키텍쳐를 구축하게 되었습니다.
                    <div class="reference-image">
                        <p class="reference-image-label">📐 Architecture</p>
                        <img src="assets/images/designsystem_architecture.png" alt="디자인 시스템 아키텍쳐" class="reference-img">
                        <div class="architecture-description">
                            <div class="arch-item">
                                <span class="arch-number">1</span>
                                <div class="arch-content">
                                    <strong>Style</strong>
                                    <p>Font, Spacing, Typhography, Shadow, Radius, Blur 등과 같이 컴포넌트의 스타일을 지정하는데 사용되는 것들을 정의함. Sementic naming으로 전환하며 일괄 관리할 수 있도록 시스템화 진행</p>
                                </div>
                            </div>
                            <div class="arch-item">
                                <span class="arch-number">2</span>
                                <div class="arch-content">
                                    <strong>Component</strong>
                                    <p>Screen을 구성하는 공통 UI 구성 요소를 구축 및 개발</p>
                                </div>
                            </div>
                            <div class="arch-item">
                                <span class="arch-number">3</span>
                                <div class="arch-content">
                                    <strong>Screen</strong>
                                    <p>Style + Component 를 조합하여 완성된 형태의 UI 화면을 구성</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br>
                </li>
                <li>
                    위 방법론에 따라 개발 Framework Architecture를 설계 및 구축했습니다.
                    <div class="reference-image vertical">
                        <p class="reference-image-label">📐 WDS Framework Tuist graph</p>
                        <img src="assets/images/design_deveolp_archi.png" alt="디자인 시스템 개발 아키텍쳐" class="reference-img-vertical">
                    </div>
                    <div class="framework-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Framework</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>WDSstyle</td>
                                    <td>- Font, Image, Color, Localization 등 Resource 형태의 파일들이 집합.</td>
                                </tr>
                                <tr>
                                    <td>WDScore</td>
                                    <td>
                                        - View를 그리는데 필요한 Core Logic 포함.<br>
                                        - View+Extension 또는 CustomView를 그리는 로직 포함.
                                    </td>
                                </tr>
                                <tr>
                                    <td>WDScomponent</td>
                                    <td>
                                        - Style과 Core의 조합으로 구현된 Component<br>
                                        - Screen을 구성하는 요소들의 집합체
                                    </td>
                                </tr>
                                <tr>
                                    <td>Screen</td>
                                    <td>- Component의 조합으로 구현된 하나의 화면</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>
            </ul>
            <br>
            <br>
            <p><strong>공통 UI Component 개발 및 구축</strong></p>
            <ul>
            <li>
                디자이너와 개발자, 심지어 각 개발자간에도 POC별로 Component를 칭하는 명칭, 레이아웃을 나누는 기준 등 하나부터 열까지 모두 다 다릅니다. 디자인 시스템을 구축함에 따라, 협의된 정의와 규칙성으로 Component를 정의하고 이에 커뮤니케이션 효율을 높이고자 했습니다.
            </li>
                    <br>
                <li>
                    <strong class="sub-title">Step1. 컴포넌트 구조 분석</strong>
                    <div class="reference-image">
                        <p class="reference-image-label">예시 시나리오</p>
                        <img src="assets/images/component1.png" alt="디자인 시스템 아키텍쳐" class="reference-img">
                        <img src="assets/images/component2.png" alt="디자인 시스템 아키텍쳐" class="reference-img">
                    </div>
                    <ul class="sub-list">
                        <li>1. 원스토어 글로벌 앱에 적용되어 있는 Top Navigation Bar 형태를 갖춘 Component 들을 모두 리스트업 합니다.</li>
                        <li>2. 디자이너의 관점에서와 개발자의 관점에서 Top Navigation의 카테고리로 묶을 수 있는 것들을 정리하고, 기능과 형태적 특성을 고려해 1번 과정에서 리스트업 된 컴포넌트들 중 최종 Top Navigation으로 선별된 아이템을 선정합니다.</li>
                        <li>3.Top Navigation Component를 구성하는 Item은 어떠한 것들이 있는지, Item 내에서 Property 무엇이 있으며 그 Type은 어떻게 정의해야 하는지 등 디자이너와 전 POC 개발자가 협의된 내용으로 해당 컴포넌트를 정의합니다.</li>
                    </ul>
                    <br>

                    <div class="reference-image">
                        <p class="reference-image-label">실제 작업 산출물</p>
                        <img src="assets/images/component3.png" alt="디자인 시스템 아키텍쳐" class="reference-img">
                        <img src="assets/images/component4.png" alt="디자인 시스템 아키텍쳐" class="reference-img">
                    </div>

                    <br>
                    <br>

                <li>
                    <strong class="sub-title">Step2. 디자인 가이드 작성</strong>
                    <ul class="sub-list">
                        <li>Step1 에서 정리된 내용을 바탕으로, 디자이너는 Figma내에 가이드를 작성합니다.</li>
                        <li>Component를 구성하는 Item의 Type, Case, Property를 상세하게 정의하며 이는 개발자와 협의된 내용입니다.</li>
                        <li>Top Navigation이란 Component가 Item의 어떠한 정렬과 조합으로 구성되는 것인지 가이드 하며, Property가 어떻게 세팅됌에 따라 Case가 나뉘어지게 되는 것인지 모든 경우의 수를 정의합니다. 이 또한, 개발자와 협의된 내용이여야 합니다.</li>
                    </ul>
                </li>
                <br>
                <li>
                    <strong class="sub-title">Step3. 컴포넌트 개발</strong>
                    <ul class="sub-list">
                        <li>Step2에서 정해진 디자인 가이드 문서에 따라 개발자는 Component 구현을 시작합니다.</li>
                    </ul>
                    <div class="reference-image">
                        <p class="reference-image-label">iOS Code Example</p>
                        <img src="assets/images/component5.png" alt="디자인 시스템 아키텍쳐" class="reference-img">
                        <ul class="sub-list code-explanation">
                            <li>1. Top Navigation Left Item은 image Resource 변경에 따른 Buttom형 UI Component이기 때문에, 생성자 초기 Parameter은 삽입하고자 하는 image resource name과 Button Click Action이 존재할 것입니다. 이에 그 구조에 따라 Structure을 구현했습니다.</li>
                            <li>2. 1번 방법에 따라 Top Navigation를 구성하는 모든 Item Component와 Top Navigation을 구현합니다.</li>
                        </ul>
                    </div>
                </li>
            </ul>

            <br>
            <br>

            <p><strong>Figma Tool을 활용한 Communication 개선안 도출</strong></p>
            <p>
                Figma는 단순 디자인 가이드 Tool 이 아닌, DevMode를 제공하며 디자인 파일을 개발자 개념에 맞는 컨셉(Design Token, Variables)로 제공한다는 점과 Figma 자체 Plugin을 개발하여 적용할 수 있어, 디자이너와 개발자의 Communication 도구로 활용될 수 있는 Tool 입니다. 
                <br><br>
                이에, 개발팀은 디자인 시스템을 구축하며 Figma를 활용해 '협업과 커뮤니케이션 개선을 이룰 수 있는 수단'으로 Figma를 재정의하고자 했으며, 아래와 같이 2가지의 업무 방향성을 구축했습니다.
            </p>
            
            <!-- 첫 번째: 자동화 구축 -->
            <div class="major-section">
                       <div class="major-section-header">
                           <span class="major-number">1</span>
                           <span class="major-title">자동화 구축</span>
                       </div>
                       <div class="major-section-content">
                           <p>기존 업무 방식에 있어개선될만한 포인트가 무엇이 있는지, 그리고 Figma를 활용해 개선시킬 수 있는 점이 어떤것이 있는지 고민해 보았습니다.</p>
                           <div class="reference-image">
                            <p class="reference-image-label">기존 디자이너와 개발자의 협업 Workflow</p>
                            <img src="assets/images/legacy_workflow.png" alt="legacy_workflow" class="reference-img">
                        </div>
                        <div class="workflow-analysis">
                            <div class="workflow-analysis-row">
                                <div class="analysis-card problem">
                                    <div class="card-header">
                                        <span class="card-icon">⚠️</span>
                                        <span class="card-title">문제점</span>
                                    </div>
                                    <div class="card-content">
                                        불필요하고 반복적인 작업이 반복되며, 수동으로 업무 변경 사항을 알려주는 업무 방식으로 인해 불필요한 업무 Cost가 발생하고 있던 기존 작업 방식이 있었습니다.
                                    </div>
                                </div>
                                <div class="analysis-card improvement">
                                    <div class="card-header">
                                        <span class="card-icon">💡</span>
                                        <span class="card-title">개선점</span>
                                    </div>
                                    <div class="card-content">
                                        * 디자인 리소스를 각 POC에 맞는 형태로 변환해 자동으로 추출할 수 있는 방법은 없을까? 
                                        <br>
                                        * 디자인 리소스 변경 사항이 자동으로 각 POC 개발 Repository에 반영된다면, Communication Cost를 줄일 수 있는 방법은 없는지?
                                    </div>
                                </div>
                            </div>
                            <div class="analysis-card goal">
                                <div class="card-header">
                                    <span class="card-icon">🎯</span>
                                    <span class="card-title">목표 수립</span>
                                </div>
                                <div class="card-content">
                                    Figma Custom Plugin을 활용한 디자인 리소스 자동화(CI/CD) 구축
                                </div>
                           </div>
                       </div>
                       
                       <div class="sub-section">
                           <div class="sub-section-header">
                               <span class="sub-section-title">Step1. 자동화 초안 Workflow 설계</span>
                           </div>
                           <div class="sub-section-content">
                               <div class="reference-image">
                                   <p class="reference-image-label">자동화 초안 Workflow</p>
                                   <img src="assets/images/pre_workflow.png" alt="legacy_workflow" class="reference-img">
                                   <ul class="sub-list code-explanation">
                                       <li>1. Style Component (Color, Typography, Spacing 등) 을 Figma의 Design Token으로 등록</li>
                                       <li>2. 위 Style Component를 다양한 POC를 대응하기 위해 데이터 교환 표준 규격인 json 파일 형태로 추출하는 Figma Custom Plugin 개발 및 적용</li>
                                       <li>3. 추출된 json파일은 <span class="term-highlight" data-term="style-dictionary">Style Dictionary</span> 를 통해 각 POC 개발 Tool에 바로 적용 가능한 파일 및 소스 형태로 변환하는 과정을 거침.</li>
                                   </ul>
                                   <div class="term-explanation">
                                       <div class="term-explanation-header">
                                           <span class="term-icon">📚</span>
                                           <span class="term-name">Style Dictionary</span>
                                       </div>
                                       <div class="term-explanation-content">
                                           Design Token이 정의되면 이를 명령어 하나로 모든 플랫폼, 스타일 문서 등 필요한 곳에 요구사항에 맞는 결과물로 만들어 내는 CLI 도구.
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                       
                       <!-- Step2. Figma Custom Plugin 제작 -->
                       <div class="sub-section">
                           <div class="sub-section-header">
                               <span class="sub-section-title">Step2. Figma Custom Plugin 제작</span>
                           </div>
                           <div class="sub-section-content">
                               <div class="requirements-box">
                                   <div class="requirements-header">
                                       <span class="requirements-icon">📋</span>
                                       <span class="requirements-title">요구사항</span>
                                   </div>
                                   <ul class="requirements-list">
                                       <li>Resource 변경 히스토리를 기입할 수 있는 Textfield 입력창을 가진다.</li>
                                       <li>등록된 Design Token들을 json파일 형태로 추출하는 기능을 가진다.</li>
                                       <li>추출된 json파일은 지정된 서버에 저장한다.</li>
                                   </ul>
                               </div>
                               <div class="reference-image">
                                   <p class="reference-image-label">📱 결과물</p>
                                   <img src="assets/images/figma_custom_plugin.png" alt="Figma Custom Plugin" class="reference-img">
                               </div>
                           </div>
                       </div>
                       
                       <!-- Step3. Style Dictionary를 활용한 Resource 변환 -->
                       <div class="sub-section">
                           <div class="sub-section-header">
                               <span class="sub-section-title">Step3. Style Dictionary를 활용한 Resource 변환</span>
                           </div>
                           <div class="sub-section-content">
                               <p class="section-description">
                                   위 Step1에서 추출된 json파일이 Style Dictionary Repository에 git push하고, push되었을 시 젠킨스 서버로 웹훅을 발생시켜 파이프라인들 빌드하게 됩니다. 이 때, 각 POC에 맞는 형태로 Resource를 변환하는 로직이 Style Dictionary Repository에 포함되어 있습니다.
                               </p>
                               <div class="reference-image">
                                   <p class="reference-image-label">🔄 변환 프로세스</p>
                                   <img src="assets/images/diagram1.jpeg" alt="Style Dictionary 변환 다이어그램" class="reference-img">
                               </div>
                           </div>
                       </div>


                       <!-- Step4. Develop Repository Git Add & Push -->
                       <div class="sub-section">
                           <div class="sub-section-header">
                               <span class="sub-section-title">Step4. Develop Repository Git Add & Push</span>
                           </div>
                           <div class="sub-section-content">
                               <p class="section-description">
                                   Step2에서 추출된 Resource는 각 개발 Respoitory에 Git Add & Push 과정을 거쳐, 개발자가 일일히 리소스 변동 사항을 체크하지 않아도 최종적으로 자동 반영된 상태를 확인할 수 있습니다.
                               </p>
                               <div class="reference-image">
                                   <p class="reference-image-label">🔄 전체 프로세스</p>
                                   <img src="assets/images/diagram2.png" alt="Style Dictionary 변환 다이어그램" class="reference-img">
                               </div>
                           </div>
                       </div>
                       
                       <!-- 최종 결과물 섹션 -->
                       <div class="final-result-section">
                           <div class="final-result-header">
                               <span class="final-result-icon">🎯</span>
                               <span class="final-result-title">최종 자동화(CI/CD) Workflow</span>
                           </div>
                           <div class="final-result-content">
                               <div class="reference-image">
                                   <p class="reference-image-label">📊 최종 자동화 Workflow</p>
                                   <img src="assets/images/diagram3.png" alt="최종 자동화 Workflow" class="reference-img">
                               </div>
                               
                               <div class="expected-effects">
                                   <div class="expected-effects-header">
                                       <span class="effects-icon">✨</span>
                                       <span class="effects-title">기대효과</span>
                                   </div>
                                   <div class="effects-grid">
                                       <div class="effect-card">
                                           <div class="effect-number">1</div>
                                           <div class="effect-content">
                                               <div class="effect-icon">💬</div>
                                               <p>디자이너와 개발자 간의 커뮤니케이션 효율을 증가할 수 있다.</p>
                                           </div>
                                       </div>
                                       <div class="effect-card">
                                           <div class="effect-number">2</div>
                                           <div class="effect-content">
                                               <div class="effect-icon">🎨</div>
                                               <p>서로 다른 POC에 일관성 있는 리소스를 자동으로 제공할 수 있다.</p>
                                           </div>
                                       </div>
                                       <div class="effect-card">
                                           <div class="effect-number">3</div>
                                           <div class="effect-content">
                                               <div class="effect-icon">⚡</div>
                                               <p>휴먼 에러 및 비효율성을 제거할 수 있다.</p>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
               <!-- 첫 번째 끝 -->
               
               <!-- 두 번째: Code Connect -->
               <div class="major-section">
                   <div class="major-section-header">
                       <span class="major-number">2</span>
                       <span class="major-title">Code Connect</span>
                   </div>
                   <div class="major-section-content">
                       <p>디자인 시스템을 구축하는 원초적인 목표는 일관되고 효율적으로 협업하기 위함입니다. 새로운 시스템이 구축되는 것인 만큼, 기존과는 다른 방식과 구현 방법으로 설계됌에 따라 초기 인발브 비용이 발생할 수 밖에 없습니다. </p>
                   </div>
                   <div class="major-section-content">
                       <p>기존 업무 방식에 있어개선될만한 포인트가 무엇이 있는지, 그리고 Figma를 활용해 개선시킬 수 있는 점이 어떤것이 있는지 고민해 보았습니다.</p>
                       <div class="reference-image">
                           <p class="reference-image-label">디자인 시스템 구축 및 배포 시, 예상되는 이슈</p>
                           <img src="assets/images/expected_issue.png" alt="expected_issue" class="reference-img">
                       </div>
                       <div class="workflow-analysis">
                           <div class="workflow-analysis-row">
                               <div class="analysis-card problem">
                                   <div class="card-header">
                                       <span class="card-icon">⚠️</span>
                                       <span class="card-title">문제점</span>
                                   </div>
                                   <div class="card-content">
                                       신규 인력 및 디자인 시스템 구축 시 미 참여 개발자가 인발브 되었을 때, 디자인 시스템 아키텍처 구조를 이해하고 컴포넌트를 구현하는데 초기 인발브 비용이 클 것으로 예상.
                                   </div>
                               </div>
                               <div class="analysis-card improvement">
                                   <div class="card-header">
                                       <span class="card-icon">💡</span>
                                       <span class="card-title">개선점</span>
                                   </div>
                                   <div class="card-content">
                                       디자인 시스템을 이해하고 실제 구현에 활용하는 방법을 제시해, 초기 러닝커브를 줄일 수 있는 방법은 없을까? 
                                   </div>
                               </div>
                           </div>
                           <div class="analysis-card goal">
                               <div class="card-header">
                                   <span class="card-icon">🎯</span>
                                   <span class="card-title">목표 수립</span>
                               </div>
                               <div class="card-content">
                                   Figma <span class="term-highlight" data-term="code-connect">Code Connect</span>를 활용하여, 디자인 컴포넌트 구현 코드를 Preview로 보여줄 수 있는 기능을 제공함으로써 초기 비용을 줄임.
                               </div>
                               <div class="term-explanation">
                                   <div class="term-explanation-header">
                                       <span class="term-icon">📚</span>
                                       <span class="term-name">Code Connect</span>
                                   </div>
                                   <div class="term-explanation-content">
                                       디자인에서 만들어져 있는 컴포넌트의 코드를 실제 개발 코드에 연결하여 코드 시니펫을 피그마에 직관적으로 확인 가능하게 하는 기능.
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>

                   <div class="sub-section">
                       <div class="sub-section-header">
                           <span class="sub-section-title">Step1. 구현한 Component와 Figma Code Connect 연동</span>
                       </div>
                       <div class="sub-section-content">
                           <div class="reference-image">
                               <p class="reference-image-label">Code Connect 연동을 위한 예시 코드</p>
                               <img src="assets/images/sample_code_connect.png" alt="Code Connect 연동 예시" class="reference-img">
                           </div>
                       </div>
                   </div>
                    
                   <div class="sub-section">
                       <div class="sub-section-header">
                           <span class="sub-section-title">Step2. Figma에서 연동한 Code Snippet 확인</span>
                       </div>
                       <div class="sub-section-content">
                           <div class="reference-image">
                               <p class="reference-image-label">Top Navigation Component에 대한 Code Snippet</p>
                               <img src="assets/images/codeconnect1.png" alt="Code Connect 결과 1" class="reference-img"> 
                                <ul class="sub-list code-explanation">
                                    <li>1. Figma Dev모드로 진입 후, Code Snippet을 확인하고자 하는 Component 선택</li>
                                </ul>
                                <br>
                               <img src="assets/images/codeconnect2.png" alt="Code Connect 결과 2" class="reference-img"> 
                                <ul class="sub-list code-explanation">
                                    <li>2. 우측 Inspector에 ‘Open in Playground’ 버튼 클릭</li>
                                 </ul>  
                                <br>
                               <img src="assets/images/codeconnect3.png" alt="Code Connect 결과 3" class="reference-img">
                                <ul class="sub-list code-explanation">
                                    <li>3. 해당 Component의 변수로 선언된 Property들을 변경해보면서, 해당 경우에 구현될 Code Preview를 확인해 볼 수 있음.</li>
                                 </ul>
                                <br>
                           </div>

                       </div>
                   </div>

                   <div class="final-result-section">
                   <div class="final-result-header">
                       <span class="final-result-icon">✨</span>
                       <span class="final-result-title">기대효과</span>
                   </div>
                   <div class="final-result-content">
                       <div class="effects-grid">
                               <div class="effect-card">
                                   <div class="effect-number">1</div>
                                   <div class="effect-content">
                                       <div class="effect-icon">👌🏻</div>
                                       <p>주관적이고 무분별한 컴포넌트 개발을 막아 서비스 일관성을 유지할 수 있다.</p>
                                   </div>
                               </div>
                               <div class="effect-card">
                                   <div class="effect-number">2</div>
                                   <div class="effect-content">
                                       <div class="effect-icon">📈</div>
                                       <p>코드 일관성을 이루어 개발 운영의 개선을 기대할 수 있다.</p>
                                   </div>
                               </div>
                               <div class="effect-card">
                                   <div class="effect-number">3</div>
                                   <div class="effect-content">
                                       <div class="effect-icon">💰</div>
                                       <p>신규 인력 투입 및 컴포넌트 개발 시 초기 인발브 비용을 축소할 수 있다.</p>
                                   </div>
                               </div>
                           </div>
                   </div>
               </div>
               </div>
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
        title: 'GS Fresh 통합 커머스 앱 운영 및 개발',
        period: '2018.08 ~ 2021.09',
        description: 'GS 리테일의 Commerce 사업부의 GS fresh Mall, 달리살다, 마켓포 총 3가지의 어플리케이션을 운영하는 업무를 담당했습니다. 그리고 GS 리테일 커머스 차세대 프로젝트의 모바일 파트 PL로 참여 및 개발을 담당했습니다.',
        tech: ['iOS', 'Swift', 'Objective-C', 'KeyChainAccess', 'Firebase', 'Alamofire', 'Moya', 'ReachabilitySwift', 'AdbrixRemaster', 'KakaoSDK', 'FacebookSDK', 'naveridlogin-sdk-ios', 'Snapkit'],
        features:  `
            <div class="project-overview">
                <p>✅ 'GS 프레시'는 2014년부터 GS 리테일에서 운영되어온 이커머스 플랫폼입니다.</p>
                <br>
                <p>✅ 저는 2018년 GS 리테일 운영팀에 합류하며, GS 프레시를 포함한 GS 리테일의 전사 앱을 운영 및 개발하는 업무를 담당했습니다.</p>
                <br>
                <p>✅ 2020년 통합 커머스 시스템 전면 개편 프로젝트로 인해, 'GS 프레시'에서 'GS 프레시몰'로 브랜드명이 변경되며 사이트 업데이트를 이루었고 동시에 '달리살다' 어플리케이션이 출시되었습니다. 더 나아가, 2021년 3월 GS 리테일에만 국한되는 것이 아닌 GS 그룹의 Commerce 플랫폼을 모두 포함한 '마켓포' 어플리케이션을 출시하였습니다.</p>
            </div>
            
            <div class="work-period-section">
                <p><strong>정기 운영 업무</strong> <span class="period-badge">2018.08 ~ 2021.09</span></p>
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
            
            <div class="work-period-section">
                <p><strong>GS 커머스 차세대 SI 프로젝트</strong> <span class="period-badge">2020.07 ~ 2020.08</span></p>
            </div>
            <ul>
                <li>
                    <div class="sub-description">
                        <p class="description-label">✔️ 프로젝트 배경 설명</p>
                        <ul class="sub-list">
                            <p>GS 프레시 운영자로서 차세대 프로젝트 현황을 Follow-up 하고 있던 중, 오픈 2개월 전, 갑작스럽게 모바일 개발자가 퇴사하며 기존 산출물과 작업하던 소스 코드가 무의미하게 된 상황이 발생했었습니다.</p>
                            <p>이에 팀 내에서 SI 프로젝트 경험이 있으며, Android / iOS 두 POC에 대한 전반적인 개발 지식이 있었던 제가 모바일 파트 핵심 업무를 사실상 주도하게 되었습니다.</p>
                            <p>해당 프로젝트의 주 핵심은 One-Source Multi Application을 만드는 것과 SSO 기능 구현입니다.</p>
                        </ul>
                    </div>
                    <div class="sub-description">
                        <p class="description-label">📝 상세 진행 내용</p>
                        <ul class="sub-list">
                            <li>GS 차세대 프로젝트 모바일 파트 PL</li>
                            <li>Android, iOS 개발 총괄 리딩</li>
                            <li>SSO(Single Sign-On) 기능 구현
                                <ul class="sub-sub-list">
                                    <li>SSO Flow 및 시나리오 설계</li>
                                    <li>기능 개발을 위한 각 POC에 대한 기술 검토</li>
                                </ul>
                            </li>
                            <li>프로젝트 개발 문서 작성
                                <ul class="sub-sub-list">
                                    <li>API 설계 및 문서 작성</li>
                                    <li>개발 시나리오 및 flow chart 작성</li>
                                    <li>Javascript Interface 설계 및 문서화 작업</li>
                                    <li>통계 자료를 위한 SDK 연동시 필요한 개발 문서 작성</li>
                                </ul>
                            </li>
                            <li>One Source Multi Application 구축을 위한 scheme 분리 및 환경 분리 작업 진행</li>
                            <li>UI 개발</li>
                            <li>API 연동</li>
                            <li>WKWebView 연동</li>
                            <li>소셜 로그인 SDK 연동 및 개발
                                <ul class="sub-sub-list">
                                    <li>카카오, 네이버, Apple 로그인 구현</li>
                                </ul>
                            </li>
                            <li>Crashlytics 연동</li>
                            <li>FCM을 활용한 푸시 기능 개발</li>
                            <li>마케팅 지표 삽입을 위한 SDK 연동 및 개발</li>
                            <li>외부연동기능(Deeplink)기능 구현</li>
                        </ul>
                    </div>
                    <div class="reference-image">
                        <p class="reference-image-label">📱 결과물</p>
                        <img src="assets/images/gsfresh_screenshot.png" alt="gs fresh screenshot" class="reference-img">                        
                    </div>
                </li>
            </ul>
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

