// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScrollTop = scrollTop;
});

// Mobile menu toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

mobileMenuToggle.addEventListener('click', () => {
    const isOpen = mobileMenuToggle.classList.toggle('active');
    navMenu.classList.toggle('active', isOpen);
    mobileMenuToggle.setAttribute('aria-expanded', String(isOpen));
    mobileMenuToggle.setAttribute('aria-label', isOpen ? '메뉴 닫기' : '메뉴 열기');
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        mobileMenuToggle.setAttribute('aria-label', '메뉴 열기');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe project cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.6s ease-out ${index * 0.2}s`;
    observer.observe(card);
});

// Keyboard support for Featured Projects cards that use inline modal triggers.
function handleFeaturedProjectKey(event, projectId) {
    if (event.target.closest('button, a')) return;
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openProjectModal(projectId);
    }
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
    }
});

// Add active state to navigation based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (navLink) {
            navLink.classList.toggle('active', scrollY > sectionTop && scrollY <= sectionTop + sectionHeight);
        }
    });
});

// 타이핑 효과는 제거하고 즉시 표시되도록 변경
// 애니메이션은 CSS에서 처리

// 상세 업무 토글 기능
function toggleDetail(button) {
    const workDetail = button.nextElementSibling;
    const isActive = button.classList.contains('active');
    
    if (isActive) {
        // 닫기
        button.classList.remove('active');
        workDetail.classList.remove('active');
        button.innerHTML = '<span class="toggle-icon">▼</span> 상세 업무 보기';
    } else {
        // 열기
        button.classList.add('active');
        workDetail.classList.add('active');
        button.innerHTML = '<span class="toggle-icon">▼</span> 상세 업무 닫기';
    }
}

// Tech Skills category filtering and evidence detail.
const techSkillTabs = document.querySelectorAll('[data-tech-category]');
const techSkillCards = document.querySelectorAll('[data-tech-card]');
const techSkillDetailName = document.getElementById('techSkillDetailName');
const techSkillDetailContext = document.getElementById('techSkillDetailContext');
const techSkillDetailProjects = document.getElementById('techSkillDetailProjects');

function selectTechSkill(card) {
    if (!card || !techSkillDetailName || !techSkillDetailContext || !techSkillDetailProjects) return;

    techSkillCards.forEach(item => {
        const isSelected = item === card;
        item.classList.toggle('is-active', isSelected);
        item.setAttribute('aria-pressed', String(isSelected));
    });

    techSkillDetailName.textContent = card.dataset.name;
    techSkillDetailContext.textContent = card.dataset.context;
    techSkillDetailProjects.replaceChildren();

    card.dataset.projects.split('|').forEach(project => {
        const projectTag = document.createElement('span');
        projectTag.textContent = project;
        techSkillDetailProjects.appendChild(projectTag);
    });
}

function selectTechCategory(category) {
    techSkillTabs.forEach(tab => {
        const isSelected = tab.dataset.techCategory === category;
        tab.classList.toggle('is-active', isSelected);
        tab.setAttribute('aria-selected', String(isSelected));
    });

    let firstVisibleCard = null;
    techSkillCards.forEach(card => {
        const isVisible = card.dataset.category === category;
        card.hidden = !isVisible;
        if (isVisible && !firstVisibleCard) firstVisibleCard = card;
    });

    selectTechSkill(firstVisibleCard);
}

if (techSkillTabs.length && techSkillCards.length) {
    techSkillTabs.forEach(tab => {
        tab.addEventListener('click', () => selectTechCategory(tab.dataset.techCategory));
    });

    techSkillCards.forEach(card => {
        card.addEventListener('click', () => selectTechSkill(card));
    });

    selectTechCategory('ios-development');
    const initialSwiftUICard = document.querySelector('[data-tech-card][data-name="SwiftUI"]');
    selectTechSkill(initialSwiftUICard);
}

// Projects section ALL / WORK / PERSONAL filter.
const projectFilterButtons = document.querySelectorAll('[data-project-filter]');
const projectCardsV2 = document.querySelectorAll('.project-card-v2[data-project-type]');
const projectFilterCounts = document.querySelectorAll('[data-filter-count]');
const projectsMoreButton = document.getElementById('projectsMoreButton');
const projectMobileQuery = window.matchMedia('(max-width: 768px)');
const mobileProjectLimit = 5;
let selectedProjectFilter = 'all';
let areMobileProjectsExpanded = false;

function updateProjectFilterCounts() {
    const counts = { all: projectCardsV2.length, work: 0, personal: 0 };
    projectCardsV2.forEach(card => {
        counts[card.dataset.projectType] = (counts[card.dataset.projectType] || 0) + 1;
    });
    projectFilterCounts.forEach(el => {
        el.textContent = counts[el.dataset.filterCount] || 0;
    });
}

function selectProjectFilter(filter) {
    selectedProjectFilter = filter;
    areMobileProjectsExpanded = false;

    projectFilterButtons.forEach(button => {
        const isSelected = button.dataset.projectFilter === filter;
        button.classList.toggle('is-active', isSelected);
        button.setAttribute('aria-pressed', String(isSelected));
    });

    updateProjectCardVisibility();
}

function updateProjectCardVisibility() {
    const matchingCards = Array.from(projectCardsV2).filter(card => (
        selectedProjectFilter === 'all' || card.dataset.projectType === selectedProjectFilter
    ));
    const shouldLimit = projectMobileQuery.matches && !areMobileProjectsExpanded;

    projectCardsV2.forEach(card => {
        const matchingIndex = matchingCards.indexOf(card);
        const matchesFilter = matchingIndex !== -1;
        const isWithinLimit = !shouldLimit || matchingIndex < mobileProjectLimit;
        card.hidden = !matchesFilter || !isWithinLimit;
    });

    if (!projectsMoreButton) return;

    const remainingCount = Math.max(matchingCards.length - mobileProjectLimit, 0);
    const shouldShowButton = projectMobileQuery.matches && remainingCount > 0;
    projectsMoreButton.hidden = !shouldShowButton;
    projectsMoreButton.setAttribute('aria-expanded', String(areMobileProjectsExpanded));
    projectsMoreButton.querySelector('span:first-child').textContent = areMobileProjectsExpanded
        ? '프로젝트 접기'
        : `프로젝트 ${remainingCount}개 더 보기`;
    projectsMoreButton.querySelector('span:last-child').textContent = areMobileProjectsExpanded ? '−' : '＋';
}

if (projectFilterButtons.length && projectCardsV2.length) {
    updateProjectFilterCounts();
    projectFilterButtons.forEach(button => {
        button.addEventListener('click', () => selectProjectFilter(button.dataset.projectFilter));
    });

    projectsMoreButton?.addEventListener('click', () => {
        areMobileProjectsExpanded = !areMobileProjectsExpanded;
        updateProjectCardVisibility();
    });

    projectMobileQuery.addEventListener('change', updateProjectCardVisibility);
    updateProjectCardVisibility();
}

// AI workflow step navigation.
const aiWorkflowButtons = document.querySelectorAll('[data-ai-step-button]');
const aiWorkflowPanels = document.querySelectorAll('[data-ai-step-panel]');

function selectAIWorkflowStep(stepId) {
    aiWorkflowButtons.forEach(button => {
        const isSelected = button.dataset.aiStepButton === stepId;
        button.classList.toggle('is-active', isSelected);
        button.setAttribute('aria-selected', String(isSelected));
    });

    aiWorkflowPanels.forEach(panel => {
        const isSelected = panel.dataset.aiStepPanel === stepId;
        panel.classList.toggle('is-active', isSelected);
        panel.hidden = !isSelected;
    });
}

aiWorkflowButtons.forEach(button => {
    button.addEventListener('click', () => selectAIWorkflowStep(button.dataset.aiStepButton));
});

console.log('Portfolio website loaded successfully! 🚀');
