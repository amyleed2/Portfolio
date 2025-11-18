// 3D 캐러셀 슬라이더 로직

// 각 회사별 슬라이더 상태 관리
const sliders = {
    digitaldime: { currentIndex: 0, slides: [] },
    gsitm: { currentIndex: 0, slides: [] },
    onestore: { currentIndex: 0, slides: [] },
    encar: { currentIndex: 0, slides: [] }
};

// 초기화
document.addEventListener('DOMContentLoaded', function() {
    // 각 회사별 슬라이더 초기화
    Object.keys(sliders).forEach(company => {
        initSlider(company);
    });
});

// 슬라이더 초기화
function initSlider(company) {
    const container = document.getElementById(`slider-${company}`);
    if (!container) return;
    
    const slides = container.querySelectorAll('.project-slide');
    sliders[company].slides = Array.from(slides);
    
    // 1개만 있을 경우 버튼 숨기기
    const companyContainer = document.querySelector(`.company-projects[data-company="${company}"]`);
    if (slides.length === 1 && companyContainer) {
        const buttons = companyContainer.querySelectorAll('.slider-btn');
        buttons.forEach(btn => btn.style.display = 'none');
    }
    
    // Dot 생성
    createDots(company);
    
    // 초기 위치 설정
    updateSlider(company);
}

// Dot 네비게이션 생성
function createDots(company) {
    const dotsContainer = document.getElementById(`dots-${company}`);
    if (!dotsContainer) return;
    
    dotsContainer.innerHTML = '';
    
    sliders[company].slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = 'slider-dot';
        if (index === 0) dot.classList.add('active');
        
        dot.addEventListener('click', () => {
            sliders[company].currentIndex = index;
            updateSlider(company);
        });
        
        dotsContainer.appendChild(dot);
    });
}

// 슬라이더 위치 업데이트
function updateSlider(company) {
    const slides = sliders[company].slides;
    const current = sliders[company].currentIndex;
    const total = slides.length;
    
    slides.forEach((slide, index) => {
        // 모든 클래스 제거
        slide.className = 'project-slide';
        
        // 현재 위치 계산
        let position = index - current;
        
        // 무한 루프를 위한 위치 조정
        if (position < -2) {
            position = total + position;
        } else if (position > 2) {
            position = position - total;
        }
        
        // 위치별 클래스 적용
        if (position === 0) {
            slide.classList.add('active');
        } else if (position === 1) {
            slide.classList.add('next');
        } else if (position === -1) {
            slide.classList.add('prev');
        } else if (position === 2) {
            slide.classList.add('next-2');
        } else if (position === -2) {
            slide.classList.add('prev-2');
        } else {
            slide.classList.add('hidden');
        }
    });
    
    // Dot 업데이트
    updateDots(company);
}

// Dot 활성화 상태 업데이트
function updateDots(company) {
    const dotsContainer = document.getElementById(`dots-${company}`);
    if (!dotsContainer) return;
    
    const dots = dotsContainer.querySelectorAll('.slider-dot');
    dots.forEach((dot, index) => {
        if (index === sliders[company].currentIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// 슬라이드 이동 함수 (전역 함수로 export)
function slideProjects(company, direction) {
    const total = sliders[company].slides.length;
    
    sliders[company].currentIndex += direction;
    
    // 무한 루프 처리
    if (sliders[company].currentIndex >= total) {
        sliders[company].currentIndex = 0;
    } else if (sliders[company].currentIndex < 0) {
        sliders[company].currentIndex = total - 1;
    }
    
    updateSlider(company);
}

// 카드 클릭으로 중앙으로 이동
document.addEventListener('click', function(e) {
    const slide = e.target.closest('.project-slide');
    if (!slide) return;
    
    const container = slide.parentElement;
    const company = container.id.replace('slider-', '');
    
    if (!sliders[company]) return;
    
    const slideIndex = sliders[company].slides.indexOf(slide);
    
    if (slideIndex !== sliders[company].currentIndex) {
        sliders[company].currentIndex = slideIndex;
        updateSlider(company);
    }
});

// 키보드 네비게이션
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
        // 모든 슬라이더를 왼쪽으로
        Object.keys(sliders).forEach(company => {
            slideProjects(company, -1);
        });
    } else if (e.key === 'ArrowRight') {
        // 모든 슬라이더를 오른쪽으로
        Object.keys(sliders).forEach(company => {
            slideProjects(company, 1);
        });
    }
});

// 자동 슬라이드 (옵션)
let autoSlideInterval;

function startAutoSlide(company, interval = 5000) {
    stopAutoSlide();
    autoSlideInterval = setInterval(() => {
        slideProjects(company, 1);
    }, interval);
}

function stopAutoSlide() {
    if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
    }
}

// 마우스 호버 시 자동 슬라이드 일시 정지
document.querySelectorAll('.projects-slider').forEach(slider => {
    slider.addEventListener('mouseenter', stopAutoSlide);
    // slider.addEventListener('mouseleave', () => startAutoSlide('digitaldime')); // 원하면 주석 해제
});
