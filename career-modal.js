// Career detail data. Company-level context stays concise; project modals hold technical evidence.
const careerData = {
    encar: {
        company: '엔카닷컴',
        label: 'MANAGEMENT',
        logo: 'assets/images/company-logos/encar.png',
        period: '2025.06 ~ 2025.08',
        duration: '3개월',
        team: '모바일팀',
        position: '과장 · iOS Developer',
        overview: '운영 중인 엔카 iOS 앱에서 UIKit·Objective-C 레거시를 분석하고, 작은 화면부터 SwiftUI와 테스트 가능한 상태 구조를 도입했습니다. 기능 전환뿐 아니라 운영 코드와 디자인 기준을 함께 정리했습니다.',
        responsibilities: [
            { label: 'MODERNIZATION', title: '점진적 SwiftUI 전환', description: '기존 화면의 의존성과 사용자 흐름을 분석해 전환 단위를 선정했습니다.' },
            { label: 'ARCHITECTURE', title: '테스트 가능한 상태 구조', description: 'MVVM·MVI를 비교 적용하고 주요 UseCase의 테스트 코드를 작성했습니다.' },
            { label: 'OPERATION', title: '운영 코드 중앙화', description: '광고 모듈과 Crashlytics·API 로깅을 공통 흐름으로 정리했습니다.' },
            { label: 'DESIGN SYSTEM', title: '초기 디자인 기준 설계', description: 'Font·Color·Radius 토큰과 Semantic Color Naming을 정의했습니다.' }
        ],
        projects: [
            {
                title: 'UIKit 레거시 화면의 SwiftUI 전환',
                period: '2025.06 ~ 2025.08',
                scope: '제네시스 옵션 필터 화면의 구조 분석, SwiftUI 전환과 테스트 코드 작성',
                decision: '전체 교체 대신 의존성이 낮은 Leaf 화면부터 MVVM·MVI 구조를 비교 적용했습니다.',
                evidence: 'SwiftUI 화면 · MVVM/MVI 구현안 · UseCase Unit Test',
                projectId: 'encar-1'
            },
            {
                title: '운영 코드 중앙화 및 레거시 클리닝',
                period: '2025.06 ~ 2025.08',
                scope: 'Crashlytics와 API 요청·응답 로깅의 공통 인터페이스 및 호출 흐름 정리',
                decision: '화면별 로그 구현을 유지하지 않고 공통 처리 지점에서 오류 맥락을 구성하도록 중앙화했습니다.',
                evidence: '공통 로깅 인터페이스 · 중복 코드 제거 · 통일된 오류 추적 기준'
            },
            {
                title: 'iOS 디자인 시스템 초기 설계',
                period: '2025.06 ~ 2025.08',
                scope: '공통 컴포넌트 적용을 위한 Foundation Token과 Semantic Naming 초기 설계',
                decision: '원시 값 직접 사용 대신 Font·Color·Radius 토큰과 의미 기반 색상 이름을 분리했습니다.',
                evidence: 'Foundation Token · Semantic Color · 공통 컴포넌트 확장 기준'
            }
        ],
        technicalScope: ['Swift', 'UIKit', 'Objective-C', 'SwiftUI', 'MVVM', 'MVI', 'XCTest', 'Crashlytics', 'API Logging', 'Design Token']
    },
    onestore: {
        company: '원스토어',
        label: 'PLATFORM & CONTENT',
        logo: 'assets/images/company-logos/onestore.png',
        period: '2021.09 ~ 2025.06',
        duration: '3년 10개월',
        team: '스토리 앱 개발팀 → iOS Platform팀',
        position: 'iOS Developer',
        overview: 'ONEstory 콘텐츠 앱 운영으로 인하우스 서비스 경험을 쌓은 뒤 iOS Platform팀으로 이동했습니다. Apple DMA 대응 글로벌 앱 마켓과 전사 디자인 시스템에서 구현 가능성 검토, 개발 범위 조율과 협업 기준 설계까지 역할을 확장했습니다.',
        progression: [
            { period: '2021.09 ~ 2023.12', title: 'ONEstory iOS 운영', description: '콘텐츠 앱의 기능 개발, 정기 배포, VOC·OS 대응을 담당했습니다.' },
            { period: '2024.01 ~ 2025.06', title: 'iOS Platform', description: '글로벌 앱 마켓 기술 검토와 디자인 시스템의 iOS 개발 범위를 조율했습니다.' }
        ],
        responsibilities: [
            { label: 'CONTENT OPERATION', title: 'ONEstory 서비스 운영', description: '기능 개발, 정기 배포, VOC와 OS 업데이트 대응을 수행했습니다.' },
            { label: 'FEASIBILITY', title: '신규 플랫폼 기술 검토', description: 'Apple DMA와 MarketplaceKit 문서를 검토해 구현 가능성과 제약을 정리했습니다.' },
            { label: 'ARCHITECTURE', title: '글로벌 앱 마켓 구조 설계', description: '앱 아키텍처, 네트워크 모듈과 JavaScript Interface를 설계했습니다.' },
            { label: 'PLATFORMIZATION', title: '디자인 시스템 협업 기준', description: '공통 컴포넌트·토큰·Code Connect와 기술 파트 협업 흐름을 정리했습니다.' }
        ],
        projects: [
            {
                title: 'ONEstore Global App Market Prototype',
                period: '2024.01 ~ 2024.12',
                role: 'PL',
                scope: 'iOS 구현 범위 조율, 아키텍처·네트워크·JavaScript Interface 설계',
                decision: '불확실한 정책과 API 제약을 한 번에 제품화하지 않고 Prototype → Alpha → Beta 단계로 검증했습니다.',
                evidence: 'Apple Cork 기술 세션 · MarketplaceKit 검토 · 단계별 동작 Prototype',
                projectId: 'onestore-1'
            },
            {
                title: 'ONEstore Design System',
                period: '2024.06 ~ 2025.06',
                role: 'PM',
                scope: '기술 파트 PM, 컴포넌트 레이어·토큰 기준과 디자인-코드 연결 흐름 설계',
                decision: '플랫폼별 구현을 단순 통일하지 않고 공통 개념과 플랫폼별 예외를 함께 문서화했습니다.',
                evidence: 'SPM · Design Token · Style Dictionary · Code Connect · 전사 세미나 3회',
                projectId: 'onestore-2'
            },
            {
                title: 'ONEstory iOS Application 운영 및 개발',
                period: '2021.09 ~ 2023.12',
                scope: '콘텐츠 앱 기능 개발, WebView의 Native 전환, 정기 배포와 운영 대응',
                decision: '사용 빈도와 앱 연동 범위를 기준으로 WebView 화면을 UIKit Native로 순차 전환했습니다.',
                evidence: '내서재·마이페이지·고객문의 · 위젯 · iPad UI · 운영 배포',
                projectId: 'onestore-3'
            }
        ],
        technicalScope: ['Swift', 'UIKit', 'SwiftUI', 'Clean Architecture', 'MVVM', 'Tuist', 'MarketplaceKit', 'Design Token', 'Style Dictionary', 'Code Connect']
    },
    gsitm: {
        company: 'GS ITM',
        label: 'SI → MOBILE OPERATION',
        logo: 'assets/images/company-logos/gsitm.png',
        period: '2017.06 ~ 2021.09',
        duration: '4년 4개월',
        team: '모바일 SI팀 → GS Retail 운영팀',
        position: '대리 · Android & iOS Developer',
        overview: 'GS 계열사의 모바일 SI 프로젝트를 구축한 뒤 GS Retail 운영팀으로 이동해 전사 모바일 앱 10종 이상을 운영했습니다. Android와 iOS를 함께 담당한 경험을 기반으로 GS Fresh 차세대 프로젝트에서는 모바일 범위 조율 역할을 맡았습니다.',
        progression: [
            { period: '2017.06 ~ 2018.06', title: 'GS 계열사 모바일 SI', description: '신규 모바일 서비스의 구축, 검수와 운영 조직 이관을 수행했습니다.' },
            { period: '2018.06 ~ 2021.09', title: 'GS Retail 모바일 운영', description: '전사 모바일 앱의 기능 개발, 배포와 장애 대응을 담당했습니다.' }
        ],
        responsibilities: [
            { label: 'APPLICATION OPERATION', title: '전사 앱 10종 이상 운영', description: 'GS Fresh, GS 수퍼마켓, 달리살다, 나만의 냉장고 등을 운영했습니다.' },
            { label: 'COORDINATION', title: '사업부별 요구사항 조율', description: '현업자와 기능 범위, 정기·긴급 배포 일정과 장애 영향을 조율했습니다.' },
            { label: 'STABILITY', title: '플랫폼·운영 이슈 대응', description: 'OS, Deprecated API, VOC, Crash와 외부 SDK 이슈를 대응했습니다.' },
            { label: 'HANDOVER', title: '외부 개발 결과 인스펙션', description: '프로젝트 투입 개발자의 인수인계와 구현 결과 검수를 수행했습니다.' }
        ],
        projects: [
            {
                title: 'GS Retail 전사 모바일 앱 운영',
                period: '2018.06 ~ 2021.09',
                scope: 'GS Retail 전사 모바일 앱 10종 이상의 기능 개발, 배포와 장애 대응',
                decision: '사업부별 요구사항과 장애 영향도를 기준으로 정기·긴급 배포 범위를 구분했습니다.',
                evidence: 'B2C 커머스 · 실시간 QR 결제 · OS/VOC/Crash 대응',
                projectId: 'gsitm-1'
            },
            {
                title: 'GS Fresh 차세대 프로젝트',
                period: '2020.07 ~ 2020.09',
                role: 'PL',
                scope: '모바일 파트 PL, Android·iOS 구현 범위와 사용자 시나리오 조율',
                decision: '플랫폼별 구현 차이를 유지하면서 SSO·WKWebView·API 계약의 공통 기준을 먼저 맞췄습니다.',
                evidence: '플랫폼별 기술 스펙 · 구현 문서 · 협업 커뮤니케이션',
                projectId: 'gsitm-1'
            },
            {
                title: 'GS 계열사 모바일 SI 프로젝트',
                period: '2017.06 ~ 2018.06',
                scope: 'GS 계열사 신규 모바일 서비스의 Android·iOS 구축과 운영 조직 이관',
                decision: '기획·디자인 요구사항을 플랫폼별 기능과 연동 범위로 분리해 구현했습니다.',
                evidence: 'API · WebView · 인증/SDK 연동 · 검수 및 운영 이관'
            }
        ],
        technicalScope: ['Swift', 'Objective-C', 'RxSwift', 'Android', 'Java', 'Kotlin', 'Firebase', 'Crashlytics', 'Moya', 'Alamofire', 'WKWebView']
    },
    digitaldime: {
        company: '디지털다임',
        label: 'EARLY CAREER · SI / SM',
        logo: 'assets/images/company-logos/digitaldime.png',
        period: '2014.12 ~ 2017.05',
        duration: '2년 6개월',
        team: '모바일팀',
        position: '사원 · Android Developer',
        overview: '웹에이전시 모바일팀에서 국내외 B2B·B2C·인트라넷 앱을 개발했습니다. Native·Hybrid·iPad 앱의 제안과 요구사항 정리부터 디자인·서버 협업, 출시와 운영까지 다양한 SI/SM 프로젝트의 전 과정을 경험했습니다.',
        responsibilities: [
            { label: 'APPLICATION DEVELOPMENT', title: 'Native·Hybrid 앱 구축', description: 'Android 화면, API, WebView·JavaScript Interface와 외부 SDK를 구현했습니다.' },
            { label: 'COLLABORATION', title: '직군 간 구현 범위 조율', description: '기획·디자인·서버 개발자와 기능 범위와 플랫폼별 예외 조건을 맞췄습니다.' },
            { label: 'SERVICE INTEGRATION', title: '서비스별 외부 기능 연동', description: '로그인, 결제, 위치, 바코드·QR과 푸시 기능을 요구사항에 맞게 연동했습니다.' },
            { label: 'MAINTENANCE', title: '출시 이후 운영과 개선', description: '기능 개선, OS·SDK 변경 대응과 배포 업무를 이어갔습니다.' }
        ],
        projects: [
            {
                title: '중국 시장 브랜드·O2O 앱 구축',
                period: '2015.11 ~ 2017.01',
                category: 'GLOBAL · SI',
                scope: 'CafeUnion·LuxeWater의 Android 및 Hybrid 앱 기능 개발',
                decision: '중국 현지 SDK와 WebView 연동을 플랫폼 기능별로 분리해 구현했습니다.',
                evidence: '위치 기반 탐색 · 소셜 로그인/결제 · 중국 현지 SDK'
            },
            {
                title: '사내 인트라넷 모바일 앱 구축·운영',
                period: '2015.07 ~ 2015.09',
                category: 'INTRANET · SI/SM',
                scope: 'MyD2 Android 앱의 전체 화면, API·푸시 연동과 출시 이후 운영',
                decision: '기존 웹 인트라넷의 핵심 사용자 흐름을 모바일 업무 시나리오로 재구성했습니다.',
                evidence: '회의실 예약 · 휴가 결재 · 사내 커뮤니케이션',
                projectId: 'digitaldime-4'
            },
            {
                title: '국내 커머스·교육·브랜드 앱 구축',
                period: '재직 기간 내 다수 수행',
                category: 'DOMESTIC · SI',
                scope: '커머스·교육·브랜드 도메인의 Native·Hybrid·iPad 앱 구축',
                decision: '서비스 목적에 따라 Native 화면과 WebView, 외부 기능의 적용 범위를 구분했습니다.',
                evidence: '올가홀푸드 · 폴리스쿨 · SK FashionMall Brochure'
            },
            {
                title: '브랜드 모바일 앱 운영',
                period: '재직 기간 내 운영',
                category: 'BRAND · SM',
                scope: '할리스커피 등 출시된 브랜드 앱의 유지보수와 배포',
                decision: '기존 사용자 흐름을 유지하면서 OS·SDK 변경과 오류 수정 범위를 최소화했습니다.',
                evidence: '기능 개선 · OS/SDK 대응 · 오류 확인 · 배포'
            }
        ],
        technicalScope: ['Android', 'Java', 'Native App', 'Hybrid App', 'WebView', 'JavaScript Interface', 'Location', 'Push', 'Payment SDK', 'iPad']
    }
};

const technicalScopeCategories = {
    ios: new Set(['Swift', 'Objective-C', 'UIKit', 'SwiftUI', 'Combine', 'RxSwift']),
    architecture: new Set(['Clean Architecture', 'MVVM', 'MVI', 'XCTest', 'Swift Testing']),
    cicd: new Set(['Tuist', 'Fastlane', 'Jenkins', 'GitHub Actions']),
    collaboration: new Set(['Figma', 'Design Token', 'Style Dictionary', 'Code Connect']),
    ai: new Set(['Codex', 'Claude Code', 'Cursor', 'ChatGPT']),
    android: new Set(['Android', 'Java', 'Kotlin'])
};

function getTechnicalScopeCategory(tech) {
    return Object.entries(technicalScopeCategories).find(([, skills]) => skills.has(tech))?.[0] || 'integration';
}

function renderCareerProject(project) {
    const labels = [project.category, project.role].filter(Boolean)
        .map(label => `<span class="career-modal-role-badge">${label}</span>`)
        .join('');
    const detailButton = project.projectId
        ? `<button type="button" class="career-modal-project-link" onclick="openProjectFromCareer('${project.projectId}')">Project Details <span aria-hidden="true">↗</span></button>`
        : '';

    return `
        <article class="career-modal-project">
            <div class="career-modal-project-heading">
                <div>
                    <h4>${project.title}</h4>
                    <div class="career-modal-project-meta">
                        <time>${project.period}</time>
                        ${labels}
                    </div>
                </div>
                ${detailButton}
            </div>
            <div class="career-modal-evidence-grid">
                <div><span>SCOPE</span><p>${project.scope}</p></div>
                <div><span>DECISION</span><p>${project.decision}</p></div>
                <div><span>EVIDENCE</span><p>${project.evidence}</p></div>
            </div>
        </article>
    `;
}

function openCareerModal(companyId) {
    const modal = document.getElementById('careerModal');
    const data = careerData[companyId];
    if (!modal || !data) return;

    document.getElementById('careerModalTitle').innerHTML = `
        <span class="career-modal-eyebrow">${data.label}</span>
        <span class="career-modal-header-content">
            <span class="career-modal-logo"><img src="${data.logo}" alt="${data.company} 로고"></span>
            <span class="career-modal-company-name">${data.company}</span>
        </span>
    `;

    document.getElementById('careerModalPeriod').innerHTML = `
        <span>${data.period}</span>
        <span>${data.duration}</span>
        <span>${data.team}</span>
        <span>${data.position}</span>
    `;

    const progression = data.progression?.length ? `
        <section class="career-modal-section career-modal-progression-section">
            <div class="career-modal-section-label">ROLE PROGRESSION</div>
            <div class="career-modal-progression">
                ${data.progression.map(item => `
                    <article>
                        <time>${item.period}</time>
                        <h4>${item.title}</h4>
                        <p>${item.description}</p>
                    </article>
                `).join('')}
            </div>
        </section>
    ` : '';

    document.getElementById('careerModalBody').innerHTML = `
        <section class="career-modal-overview">
            <span>CAREER OVERVIEW</span>
            <p>${data.overview}</p>
        </section>
        ${progression}
        <section class="career-modal-section career-modal-responsibilities">
            <div class="career-modal-section-label">KEY RESPONSIBILITIES</div>
            <div class="career-modal-responsibility-grid">
                ${data.responsibilities.map((item, index) => `
                    <article>
                        <div><span>${String(index + 1).padStart(2, '0')}</span><small>${item.label}</small></div>
                        <h4>${item.title}</h4>
                        <p>${item.description}</p>
                    </article>
                `).join('')}
            </div>
        </section>
        <section class="career-modal-section career-modal-project-section">
            <div class="career-modal-section-heading">
                <div>
                    <div class="career-modal-section-label">PROJECT EVIDENCE</div>
                    <p>Career에서는 책임 범위와 판단 근거를 요약하고, 기술 구현과 시각 자료는 Project Details에서 확인할 수 있습니다.</p>
                </div>
            </div>
            <div class="career-modal-projects">${data.projects.map(renderCareerProject).join('')}</div>
        </section>
        <section class="career-modal-section career-modal-scope">
            <div class="career-modal-section-label">TECHNICAL SCOPE</div>
            <div class="career-modal-scope-skills">
                ${data.technicalScope.map(tech => `<span data-skill-category="${getTechnicalScopeCategory(tech)}">${tech}</span>`).join('')}
            </div>
        </section>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function openProjectFromCareer(projectId) {
    closeCareerModal();
    requestAnimationFrame(() => openProjectModal(projectId));
}

function closeCareerModal() {
    const modal = document.getElementById('careerModal');
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeCareerModal();
});

document.getElementById('careerModal')?.addEventListener('click', event => {
    if (event.target.id === 'careerModal') closeCareerModal();
});
