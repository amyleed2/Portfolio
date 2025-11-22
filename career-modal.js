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
                title: '💼 담당 업무',
                content: `
                    <p><strong>Android Mobile Application Developer</strong></p>
                    <ul>
                        <li>SI 프로젝트 개발 및 진행</li>
                        <li>SM 프로젝트 담당 및 개발</li>
                    </ul>
                `
            },
            {
                title: '🏢 주요 프로젝트',
                content: `
                    <p><strong>SI Projects</strong></p>
                    <ul>
                        <li>POLY SCHOOL, 사교육 시스템 학부모/학생 앱 구축</li>
                        <li>SK FashionMall Brochure Pad 용 어플리케이션 구축</li>
                        <li>LuxeWater, 중국 워터 서플라이 플랫폼 어플리케이션 구축</li>
                        <li>CafeUnion, 중국 커피 프리오더 서비스 어플리케이션 구축</li>
                        <li>NatureRepublic 브랜드 어플리케이션 구축</li>
                        <li>올가홀푸드 브랜드 어플리케이션 구축</li>
                    </ul>

                    <p><strong>SM Projects</strong></p>
                    <ul>
                        <li>Holly coffee 어플리케이션 운영 및 개발</li>
                        <li>사내 인프라넷 앱, MyD2 어플리케이션 구축 및 개발</li>
                    </ul>
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
        techStack: ['iOS', 'Android', 'Swift', 'Objective-C', 'RxSwift', 'Java', 'Kotlin', 'SVN', 'Bitbucket', 'Jira', 'Confluence', 'Teams', 'Outlook'],
        sections: [
            {
                title: '💼 담당 업무',
                content: `
                    <p><strong>Cross Platform Management (iOS, Android)</strong></p>
                    <ul>
                        <li>SI 프로젝트 개발 및 진행 (Android)</li>
                        <li>GS Retail 전사 어플리케이션 운영 및 개발 (iOS, Android)</li>
                    </ul>
                    <p><strong>정기 운영 업무</p>
                    <ul>
                        <li>각 어플리케이션 당 월 2회 정기 배포건 진행</li>
                        <li>VOC 대응 및 오류 대응</li>
                        <li>신규 OS Update 대응 및 Deprecated Function 대응</li>
                        <li>Crash Report 분석을 통한 앱 장애 요소 예방 및 대응</li>
                        <li>현업의 앱 개선 요청 사항 개발 대응</li>
                        <li>운영 시스템 관련 프로젝트에 대한 운영팀으로서의 개발 Inspection 리딩</li>
                        <li>성능 및 안정성 개선</li>
                    </ul>
                `
            },
            {
                title: '🏢 주요 프로젝트',
                content: `
                    <p><strong>GS Retail 전사 어플리케이션 운영 및 개발</strong></p>
                    <ul>
                        <li>통합 커머스 어플리케이션 : GS프레시몰, 달리살다, 마켓포</li>
                        <li>통합 맴버십 어플리케이션 : THE POP, GS수퍼마켓, GS25-나만의 냉장고, 우리동네 딜리버리</li>
                        <li>랄라블라 어플리케이션</li>
                        <li>미식일상 어플리케이션</li>
                        <li>GS리테일 배달 기사님 전용 사내 어플리케이션</li>
                    </ul>

                    <p><strong>GS fresh 차세대 프로젝트 구축 및 개발</strong></p>
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
        techStack: ['iOS', 'Swift', 'UIKit', 'Objective-C', 'SwiftUI','Bitbucket', 'Confluence', 'Jira', 'Teams', 'Zepline'],
        sections: [
            {
                title: '💼 담당 업무',
                content: '<p><strong>ONEstory iOS Application 운영 및 개발</strong></p>'
            },
            {
                title: '🏢 주요 프로젝트',
                content: `
                    <p><strong>메인 담당 업무</strong></p>
                    <ul>
                        <li>Webview 기반 구매목록 화면 Native(UIKit) 전환 개발 및 배포</li>
                        <li>iPad 환경 UI 해상도 대응 및 개발</li>
                        <li>내서재, 구매목록, 마이페이지 화면 담당 및 개발</li>
                        <li>소셜 로그인 SDK 연동 및 개발, 관리</li>
                        <li>고객문의 CS 카카오톡 문의하기 개발 및 운영</li>
                        <li>Webview JavaScript 코드 리팩토링 및 개선</li>
                        <li>iPhone/iPad 위젯 개발 및 운영</li>
                        <li>Eye-tracking 기능 개발 및 운영</li>
                        <li>QA 시 외부연동규격 테스트를 위한 Tracer Application 개발 및 운영</li>
                    </ul>

                    <p><strong>정기 운영 업무</strong></p>
                    <ul>
                        <li>월 2회 정기 배포 진행</li>
                        <li>VOC 대응</li>
                        <li>신규 OS Update 대응 및 Deprecated Function 대응</li>
                        <li>Crash Report 분석을 통한 앱 장애 요소 예방 및 대응</li>
                        <li>앱 개선 요청 사항 개발 대응</li>
                        <li>성능 및 안정성 개선</li>
                    </ul>
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
        techStack: ['iOS', 'Swift', 'SwiftUI', 'Clean Architecture', 'MVVM', 'Tuist', 'Figma', 'Cursor', 'Copilot'],
        sections: [
            {
                title: '💼 담당 업무',
                content: `
                    <p><strong>ONEstore iOS Application 개발</strong></p>
                    <ul>
                        <li>원스토어 글로벌 마켓 프로토타입/Beta Application 개발PL</li>
                        <li>디자인 시스템 개발 PM</li>
                    </ul>
                `
            },
            {
                title: '🏢 주요 프로젝트',
                content: `
                    <p><strong>ONEstore Global iOS Market Application 제작</strong></p>
                    <ul>
                        <li>제3자마켓 스토어 기술 검토 및 프로토타입 앱 제작 주도</li>
                        <li>아키텍처 설계 및 네트워크 통신 모듈 설계</li>
                        <li>JavaScript Interface 설계 및 구현</li>
                        <li>상세 페이지 및 전시 화면 구현 담당</li>
                        <li>공통 UI 컴포넌트 개발</li>
                        <li>인증 & 인가 SDK 설계</li>
                    </ul>
                    <p><strong>Apple Cork 지사 기술 세션 참석</strong> 🇮🇪</p>
                    <ul>
                        <li>팀 대표로 선출되어 '제3자마켓 오픈 API' 관련 오프라인 세션 참석</li>
                        <li>관련 기술력 검토 및 MVP 앱 제작</li>
                        <li>제3 마켓 등록 및 출시를 위한 기술력 검토 및 질의</li>
                        <li>전사 세미나 주최</li>
                    </ul>
                    <p><strong>원스토어 디자인 시스템 구축</strong></p>
                    <ul>
                        <li>디자인 시스템 구축 개발 총괄</li>
                        <li>디자인 시스템 아키텍쳐 설계 및 구축</li>
                        <li>iOS 디자인 컴포넌트 개발 파트 리더</li>
                        <li>Figma 연동 모듈 설계 및 구현</li>
                        <li>디자인 시스템 자동화 시스템 설계</li>
                        <li>전사 세미나 주최</li>
                    </ul>
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
        techStack: ['iOS', 'Objective-C', 'Swift', 'SwiftUI', 'UIKit', 'BitBucket', 'Jira', 'Confluence', 'Figma', 'Swagger', 'Cursor', 'Copilot'],
        sections: [
            {
                title: '💼 담당 업무',
                content: '<p><strong>엔카닷컴 iOS Application 운영 및 개발</strong></p>'
            },
            {
                title: '🏢 주요 업무',
                content: `
                    <ul>
                        <li>엔카 iOS 어플리케이션 운영 및 배포</li>
                        <li>앱 안정성 개선 및 버그 수정</li>
                        <li>신규 기능 개발 및 배포</li>
                        <li>코드 리팩토링 및 개선</li>
                        <li>UIKit 기반의 차량 검색 화면 일부 SwiftUI로 언어 전환 및 개발</li>
                    </ul>
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

