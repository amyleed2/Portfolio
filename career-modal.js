// 경력 상세 정보 데이터
const careerData = {
    digitaldime: {
        company: '디지털다임',
        logo: 'assets/images/logos/digitaldigm_logo.png',
        period: '2014.12 ~ 2017.05',
        duration: '2년 6개월',
        role: '사원',
        roleEmoji: '🌱',
        techStack: ['Android', 'Java', 'Eclipse', 'Git', 'SVN', 'Trello'],
        sections: [
            {
                title: 'Role Summary',
                content: `
                    <p><strong>Android 기반 SI/SM 프로젝트를 수행하며 모바일 앱 개발의 기본기와 다양한 직군 협업 경험을 쌓았습니다.</strong></p>
                    <p>웹에이전시 환경에서 기획, 디자인, 서버/웹 개발자와 요구사항을 맞추며 커머스, 브랜드, O2O, 위치 기반 서비스 앱을 개발했습니다.</p>
                `
            },
            {
                title: 'Main Responsibilities',
                content: `
                    <ul>
                        <li>Android 앱 화면 구현, API 연동, WebView/JavaScript Interface 연동을 담당했습니다.</li>
                        <li>외부 SDK, 소셜 로그인, 결제, 위치 기반 기능을 프로젝트 요구사항에 맞게 연동했습니다.</li>
                        <li>SI/SM 프로젝트에서 기획서와 디자인을 기준으로 구현 범위와 예외 케이스를 맞춰가며 개발했습니다.</li>
                    </ul>
                `
            },
            {
                title: 'Key Projects',
                content: `
                    <ul>
                        <li><strong>CafeUnion</strong> : 중국 시장 대상 O2O 커머스 앱. 위치 기반 매장 탐색, 소셜 로그인, 결제 SDK 연동 경험.</li>
                        <li><strong>LuxeWater</strong> : 중국 마켓 대상 브랜드/하이브리드 앱. WebView, JavaScript Interface, 현지 SDK 연동 경험.</li>
                        <li><strong>올가홀푸드</strong> : 식품/커머스 브랜드 앱. 상품 탐색, 바코드/QR 인식, 푸시 SDK 연동 경험.</li>
                        <li><strong>MyD2</strong> : 사내 커뮤니케이션 앱. 업무용 앱 화면 구현, API 연동, 푸시 기능 연동 경험.</li>
                    </ul>
                `
            },
            {
                title: 'Technical Focus',
                content: `
                    <ul>
                        <li>Android Java, WebView, 외부 SDK, 위치 기반 기능, 푸시, 소셜 로그인/결제 연동</li>
                        <li>여러 도메인의 요구사항을 모바일 앱 구조로 구현하는 경험</li>
                    </ul>
                `
            },
            {
                title: 'What This Experience Shows',
                content: `
                    <p>초기 Android/SI 경험은 이후 iOS 개발자로서 플랫폼 차이, 운영 구조, 협업 흐름을 이해하는 기반이 되었습니다.</p>
                `
            }
        ]
    },
    gsitm: {
        company: 'GS ITM',
        logo: 'assets/images/logos/gsitm_logo.png',
        period: '2017.06 ~ 2021.09',
        duration: '4년 4개월',
        role: '대리',
        roleEmoji: '💼',
        techStack: ['iOS', 'Android', 'Swift', 'Objective-C', 'RxSwift', 'Java', 'Kotlin', 'Firebase', 'Crashlytics', 'Jira', 'Confluence'],
        sections: [
            {
                title: 'Role Summary',
                content: `
                    <p><strong>GS Retail 전사 모바일 앱 운영 조직에서 iOS/Android 앱 운영과 개발을 담당했습니다.</strong></p>
                    <p>정기/긴급 배포, OS 업데이트 대응, VOC/Crash 대응을 수행했고, 별도 GS Fresh 차세대 프로젝트에서는 모바일 파트 PL로 참여했습니다.</p>
                `
            },
            {
                title: 'Main Responsibilities',
                content: `
                    <ul>
                        <li>GS 그룹의 다양한 SI 프로젝트를 구축했습니다.</li>
                        <li>GS Retail 커머스 및 멤버십 앱의 정기 배포와 긴급 배포를 대응했습니다.</li>
                        <li>VOC, Crash Report, 신규 OS 업데이트, Deprecated API 대응을 수행했습니다.</li>
                        <li>운영 앱 개선 요청과 성능/안정성 이슈를 확인하고 수정했습니다.</li>
                        <li>GS Fresh 차세대 프로젝트에서 모바일 파트 PL로 개발 범위와 구현 방향을 정리했습니다.</li>
                    </ul>
                `
            },
            {
                title: 'Key Projects',
                content: `
                    <ul>
                        <li><strong>GS Retail Mobile App Operation</strong> : GS Fresh Mall, 달리살다, 마켓포, THE POP 등 전사 모바일 앱 운영.</li>
                        <li><strong>GS Fresh 차세대 프로젝트 구축p</strong> : 모바일 파트 PL로 SSO, One-Source Multi Application, SDK/API/WKWebView 연동 범위 담당.</li>
                    </ul>
                `
            },
            {
                title: 'Technical Focus',
                content: `
                    <ul>
                        <li>iOS/Android 운영, 배포 대응, Crash 분석, OS 업데이트 대응</li>
                        <li>One-Source Multi Application, Scheme / Environment 분리, SSO, 외부 SDK 연동</li>
                    </ul>
                `
            },
            {
                title: 'What This Experience Shows',
                content: `
                    <p>운영 중인 모바일 서비스의 안정성을 지키는 방식과 Android/iOS 양쪽을 고려한 모바일 개발 리딩 경험을 보여줍니다.</p>
                `
            }
        ]
    },
    onestore1: {
        company: '원스토어',
        logo: 'assets/images/logos/onestore_logo.png',
        period: '2021.09 ~ 2023.12',
        duration: '2년 4개월',
        role: '팀원',
        roleEmoji: '👨‍💻',
        techStack: ['iOS', 'Swift', 'UIKit', 'Objective-C', 'SwiftUI', 'Bitbucket', 'Confluence', 'Jira', 'Teams', 'Zeplin'],
        sections: [
            {
                title: 'Role Summary',
                content: `
                    <p><strong>ONEstory iOS 앱 운영과 기능 개발을 담당하며 콘텐츠 앱의 운영 안정성과 사용자 기능 개선을 경험했습니다.</strong></p>
                    <p>UIKit 기반 화면 개선, WebView 연동, iPad 대응, 위젯 등 콘텐츠 앱 운영에 필요한 기능을 개발했습니다.</p>
                `
            },
            {
                title: 'Main Responsibilities',
                content: `
                    <ul>
                        <li>ONEstory iOS 앱의 정기 배포, VOC 대응, OS 업데이트 대응을 수행했습니다.</li>
                        <li>WebView로 구성되어 있던 화면을 UIKit Native 전환, 내서재/마이페이지/고객문의 등 주요 화면 개발을 담당했습니다.</li>
                        <li>소셜 로그인 SDK, JavaScript 연동, 위젯, iPad UI 대응 등 콘텐츠 앱 기능을 개발했습니다.</li>
                    </ul>
                `
            },
            {
                title: 'Key Projects',
                content: `
                    <ul>
                        <li><strong>ONEstory iOS App Operation</strong> : 콘텐츠 앱 운영, 화면 개선, SDK 연동, 위젯 및 iPad 대응.</li>
                        <li><strong>WebView to Native</strong> : 구매목록 등 WebView 기반 화면의 Native 전환 경험.</li>
                    </ul>
                `
            },
            {
                title: 'Technical Focus',
                content: `
                    <ul>
                        <li>UIKit, Swift, Objective-C, SwiftUI, WebView/JavaScript 연동</li>
                        <li>정기 운영, VOC 대응, OS 업데이트 및 Deprecated API 대응</li>
                    </ul>
                `
            },
            {
                title: 'What This Experience Shows',
                content: `
                    <p>콘텐츠 도메인 iOS 앱을 운영하며 레거시 화면 개선과 기능 확장을 병행한 경험을 보여줍니다.</p>
                `
            }
        ]
    },
    onestore2: {
        company: '원스토어',
        logo: 'assets/images/logos/onestore_logo.png',
        period: '2024.01 ~ 2025.06',
        duration: '1년 6개월',
        role: '팀원',
        roleEmoji: '🚀',
        techStack: ['iOS', 'Swift', 'SwiftUI', 'Clean Architecture', 'MVVM', 'Tuist', 'Figma', 'Design Token', 'Code Connect', 'Cursor', 'Copilot'],
        sections: [
            {
                title: 'Role Summary',
                content: `
                    <p><strong>ONEstore iOS Platform팀에서 글로벌 앱 마켓 Prototype iOS PL과 디자인 시스템 iOS 개발 파트 PM 역할을 수행했습니다.</strong></p>
                    <p>Apple DMA 관련 기술 검토, Prototype/Alpha/Beta 개발 흐름, 공통 UI 컴포넌트와 디자인 토큰 기반 협업 구조를 정리했습니다.</p>
                `
            },
            {
                title: 'Main Responsibilities',
                content: `
                    <ul>
                        <li>ONEstore Global App Market Prototype에서 iOS PL로 기술 검토와 단계별 개발 흐름을 리드했습니다.</li>
                        <li>Clean Architecture/MVVM 기반 앱 구조, 네트워크 모듈, JavaScript Interface 구조를 설계했습니다.</li>
                        <li>ONEstore Design System에서 iOS 개발 파트 PM으로 컴포넌트 구조, 디자인 토큰, Figma Code Connect 흐름을 정리했습니다.</li>
                    </ul>
                `
            },
            {
                title: 'Key Projects',
                content: `
                    <ul>
                        <li><strong>ONEstore Design System</strong> : 공통 UI 컴포넌트, 디자인 토큰, Figma Code Connect 기반 디자인-개발 협업 구조.</li>
                        <li><strong>ONEstore Global App Market Prototype</strong> : Apple DMA 관련 기술 검토, MarketplaceKit 제약 확인, Prototype → Alpha/Beta 개발.</li>
                    </ul>
                `
            },
            {
                title: 'Technical Focus',
                content: `
                    <ul>
                        <li>SwiftUI, Clean Architecture, MVVM, Tuist, MarketplaceKit 검토</li>
                        <li>Design Token, Style Dictionary, Figma Code Connect, 공통 UI 컴포넌트 구조</li>
                    </ul>
                `
            },
            {
                title: 'What This Experience Shows',
                content: `
                    <p>신규 플랫폼 대응, iOS PL/PM 역할, 디자인 시스템 기반 플랫폼화 경험을 함께 보여줍니다.</p>
                `
            }
        ]
    },
    encar: {
        company: '엔카닷컴',
        logo: 'assets/images/logos/encar_logo.png',
        period: '2025.06 ~ 2025.08',
        duration: '3개월',
        role: '과장',
        roleEmoji: '⭐',
        techStack: ['iOS', 'Objective-C', 'Swift', 'SwiftUI', 'UIKit', 'MVVM', 'Crashlytics', 'AppsFlyer', 'Braze', 'Alamofire', 'SnapKit', 'Cursor', 'Copilot'],
        sections: [
            {
                title: 'Role Summary',
                content: `
                    <p><strong>엔카 iOS 앱 운영 개발 과정에서 UIKit 레거시 화면의 SwiftUI 전환과 운영 안정성 개선을 담당했습니다.</strong></p>
                    <p>재직 기간은 짧지만, 레거시 화면 개선, 광고 모듈 통합, Crashlytics/API 로깅 개선처럼 운영 중인 앱의 구조 개선에 집중했습니다.</p>
                `
            },
            {
                title: 'Main Responsibilities',
                content: `
                    <ul>
                        <li>기존의 UIKit으로 구현된 제네시스 옵션 필터 화면을 SwiftUI + MVVM 구조로 전환했습니다.</li>
                        <li>AppsFlyer, Braze 등 광고 모듈 연동 코드를 공통 구조로 정리했습니다.</li>
                        <li>Crashlytics 로깅 중앙화와 API 요청/응답 로깅 개선을 수행했습니다.</li>
                    </ul>
                `
            },
            {
                title: 'Key Projects',
                content: `
                    <ul>
                        <li><strong>Encar iOS App</strong> : UIKit 레거시 화면 개선, SwiftUI 전환, 광고 모듈 통합, 운영 로깅 개선.</li>
                    </ul>
                `
            },
            {
                title: 'Technical Focus',
                content: `
                    <ul>
                        <li>SwiftUI, UIKit, MVVM, Unit Test, SnapKit, Figma, Cursor</li>
                        <li>Crashlytics, AppsFlyer, Braze, API logging, 운영 안정성 개선</li>
                    </ul>
                `
            },
            {
                title: 'What This Experience Shows',
                content: `
                    <p>운영 중인 iOS 앱에서 레거시 구조를 파악하고, 필요한 범위를 정해 점진적으로 개선하는 역량을 보여줍니다.</p>
                `
            }
        ]
    }
};

// 경력 모달 열기
function openCareerModal(companyId) {
    const modal = document.getElementById('careerModal');
    const data = careerData[companyId];
    
    if (!data) return;
    
    // 모달 헤더 설정 (로고 + 회사명)
    const modalTitle = document.getElementById('careerModalTitle');
    if (data.logo) {
        modalTitle.innerHTML = `
            <div class="career-modal-header-content">
                <img src="${data.logo}" alt="${data.company} 로고" class="company-logo">
                <span>${data.company}</span>
            </div>
        `;
    } else {
        modalTitle.textContent = data.company;
    }
    
    // 근무 기간 설정 (더 명확하게)
    document.getElementById('careerModalPeriod').innerHTML = `
        <span class="period-dates">${data.period}</span>
        <span class="period-duration">${data.duration}</span>
    `;
    
    // 모달 본문 내용 생성
    const modalBody = document.getElementById('careerModalBody');
    
    // 직급 뱃지 (이모지 + 텍스트)
    let bodyHTML = `
        <div class="career-role-card">
            <span class="role-emoji">${data.roleEmoji}</span>
            <span class="role-text">${data.role}</span>
        </div>
    `;
    
    // 섹션 추가
    data.sections.forEach(section => {
        bodyHTML += `
            <div class="modal-section">
                <h3>${section.title}</h3>
                ${section.content}
            </div>
        `;
    });
    
    // 기술 스택 섹션 추가
    if (data.techStack && data.techStack.length > 0) {
        bodyHTML += `
            <div class="modal-section tech-stack-section">
                <h3>🛠️ 기술 스택</h3>
                <div class="tech-stack-badges">
                    ${data.techStack.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
                </div>
            </div>
        `;
    }
    
    modalBody.innerHTML = bodyHTML;
    
    // 모달 표시
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// 경력 모달 닫기
function closeCareerModal() {
    const modal = document.getElementById('careerModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ESC 키로 모달 닫기
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeCareerModal();
    }
});

// 모달 외부 클릭 시 닫기
document.getElementById('careerModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'careerModal') {
        closeCareerModal();
    }
});
