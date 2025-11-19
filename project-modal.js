// 프로젝트 상세 정보 데이터
const projectData = {
    'encar-1': {
        title: '엔카 앱 개발',
        period: '2025.06 ~ 2025.08',
        description: 'iOS 앱 개발 및 유지보수를 담당했습니다.',
        tech: ['iOS', 'Swift'],
        features: '주요 기능 개발 및 버그 수정'
    },
    'onestore-1': {
        title: '원스토어 앱 개발',
        period: '2023.01 ~ 2023.12',
        description: 'iOS 앱 시스템 운영 및 개발을 담당했습니다.',
        tech: ['iOS', 'Swift'],
        features: '앱 스토어 시스템 개발 및 최적화'
    },
    'onestore-2': {
        title: 'iOS Platform',
        period: '2024.01 ~ 2025.06',
        description: 'iOS Platform 팀 운영 및 개발을 담당했습니다.',
        tech: ['iOS', 'Swift'],
        features: 'Platform 인프라 구축 및 개선'
    },
    'onestore-3': {
        title: '스토리 앱',
        period: '2021.09 ~ 2022.12',
        description: '스토리 앱 개발팀에서 iOS 개발을 담당했습니다.',
        tech: ['iOS', 'Swift'],
        features: '스토리 기능 개발 및 UI/UX 개선'
    },
    'gsitm-1': {
        title: 'GS Fresh 차세대',
        period: '2020.01 ~ 2021.09',
        description: 'GS Fresh 차세대 프로젝트에서 Android / iOS 개발 리더를 맡았습니다.',
        tech: ['iOS', 'Swift'],
        features: '차세대 시스템 구축 및 팀 리딩'
    },
    'gsitm-2': {
        title: 'GS Retail 앱 통합 운영',
        period: '2017.06 ~ 2021.09',
        description: 'GS Retail의 Android, iOS 총 8개 이상의 Application을 운영 및 개발했습니다.',
        tech: ['iOS', 'Swift'],
        features: '다중 앱 통합 관리 및 운영'
    },
    'digitaldime-1': {
        title: '프로젝트 1',
        period: '2016.01 ~ 2016.06',
        description: 'Android 앱 개발',
        tech: ['Android'],
        features: 'Android 앱 개발 및 유지보수'
    },
    'digitaldime-2': {
        title: '프로젝트 2',
        period: '2016.07 ~ 2016.12',
        description: 'Android 앱 개발',
        tech: ['Android'],
        features: 'Android 앱 개발 및 유지보수'
    },
    'digitaldime-3': {
        title: '프로젝트 3',
        period: '2015.01 ~ 2015.12',
        description: 'Android 앱 개발',
        tech: ['Android'],
        features: 'Android 앱 개발 및 유지보수'
    },
    'digitaldime-4': {
        title: '프로젝트 4',
        period: '2014.12 ~ 2015.06',
        description: 'Android 앱 개발',
        tech: ['Android'],
        features: 'Android 앱 개발 및 유지보수'
    }
};

// 모달 열기
function openProjectModal(projectId) {
    const modal = document.getElementById('projectModal');
    const project = projectData[projectId];
    
    if (!project) return;
    
    // 모달 내용 업데이트
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalPeriod').textContent = project.period;
    document.getElementById('modalDescription').textContent = project.description;
    document.getElementById('modalFeatures').textContent = project.features;
    
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
    }
});

