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
    mobileMenuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        navMenu.classList.remove('active');
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

// Observe contact section
const contactSection = document.querySelector('.contact-wrapper');
if (contactSection) {
    contactSection.style.opacity = '0';
    contactSection.style.transform = 'translateY(30px)';
    contactSection.style.transition = 'all 0.8s ease-out';
    observer.observe(contactSection);
}

// EmailJS 초기화
// EmailJS에서 발급받은 Public Key를 입력하세요
// 1. https://www.emailjs.com/ 에서 회원가입
// 2. Email Services에서 이메일 서비스 추가 (Gmail 추천)
// 3. Email Templates에서 템플릿 생성
// 4. Account > General에서 Public Key 확인
(function() {
    // EmailJS Public Key (사용자가 직접 입력해야 함)
    const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // 여기에 EmailJS Public Key 입력
    const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'; // 여기에 Service ID 입력
    const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // 여기에 Template ID 입력
    
    if (typeof emailjs !== 'undefined') {
        emailjs.init(EMAILJS_PUBLIC_KEY);
    }
    
    window.emailConfig = {
        serviceId: EMAILJS_SERVICE_ID,
        templateId: EMAILJS_TEMPLATE_ID
    };
})();

// Form submission with EmailJS
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        message: document.getElementById('message').value,
        to_email: 'amy.lee.d2@gmail.com' // 받는 이메일 주소
    };
    
    // Show loading state
    const submitBtn = contactForm.querySelector('.submit-btn');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span class="btn-text">전송 중...</span>';
    submitBtn.disabled = true;
    
    // EmailJS를 사용한 실제 이메일 전송
    if (typeof emailjs !== 'undefined' && window.emailConfig.serviceId !== 'YOUR_SERVICE_ID') {
        emailjs.send(
            window.emailConfig.serviceId,
            window.emailConfig.templateId,
            formData
        ).then(
            function(response) {
                console.log('SUCCESS!', response.status, response.text);
                // Show success message
                formMessage.textContent = '메시지가 성공적으로 전송되었습니다!';
                formMessage.className = 'form-message success';
                formMessage.style.display = 'block';
                
                // Reset form
                contactForm.reset();
                
                // Reset button
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
                
                // Hide message after 5 seconds
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 5000);
            },
            function(error) {
                console.error('FAILED...', error);
                // Show error message
                formMessage.textContent = '메시지 전송에 실패했습니다. 다시 시도해주세요.';
                formMessage.className = 'form-message error';
                formMessage.style.display = 'block';
                
                // Reset button
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
                
                // Hide message after 5 seconds
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 5000);
            }
        );
    } else {
        // EmailJS가 설정되지 않은 경우 시뮬레이션
        console.warn('EmailJS가 설정되지 않았습니다. 시뮬레이션 모드로 실행됩니다.');
        setTimeout(() => {
            // Show success message
            formMessage.textContent = '메시지가 성공적으로 전송되었습니다! (시뮬레이션 모드)';
            formMessage.className = 'form-message success';
            formMessage.style.display = 'block';
            
            // Reset form
            contactForm.reset();
            
            // Reset button
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
            
            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        }, 1500);
    }
});

// Form validation
const formInputs = contactForm.querySelectorAll('input, textarea');

formInputs.forEach(input => {
    input.addEventListener('blur', () => {
        validateInput(input);
    });
    
    input.addEventListener('input', () => {
        if (input.classList.contains('invalid')) {
            validateInput(input);
        }
    });
});

function validateInput(input) {
    const value = input.value.trim();
    
    if (input.hasAttribute('required') && value === '') {
        setInvalid(input, '이 필드는 필수입니다.');
        return false;
    }
    
    if (input.type === 'email' && value !== '') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            setInvalid(input, '유효한 이메일 주소를 입력해주세요.');
            return false;
        }
    }
    
    setValid(input);
    return true;
}

function setInvalid(input, message) {
    input.classList.add('invalid');
    input.classList.remove('valid');
    
    let errorElement = input.parentElement.querySelector('.error-message');
    if (!errorElement) {
        errorElement = document.createElement('span');
        errorElement.className = 'error-message';
        errorElement.style.color = '#ef4444';
        errorElement.style.fontSize = '0.875rem';
        errorElement.style.marginTop = '0.25rem';
        errorElement.style.display = 'block';
        input.parentElement.appendChild(errorElement);
    }
    errorElement.textContent = message;
}

function setValid(input) {
    input.classList.remove('invalid');
    input.classList.add('valid');
    
    const errorElement = input.parentElement.querySelector('.error-message');
    if (errorElement) {
        errorElement.remove();
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

// Add cursor follower effect (optional, modern touch)
const createCursorFollower = () => {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-follower';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 2px solid #6366f1;
        pointer-events: none;
        z-index: 9999;
        opacity: 0;
        transition: opacity 0.3s ease;
        transform: translate(-50%, -50%);
    `;
    document.body.appendChild(cursor);
    
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.opacity = '0.5';
    });
    
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
    });
    
    function animateCursor() {
        const dx = mouseX - cursorX;
        const dy = mouseY - cursorY;
        
        cursorX += dx * 0.1;
        cursorY += dy * 0.1;
        
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    
    animateCursor();
};

// Only add cursor follower on desktop devices
if (window.innerWidth > 768) {
    createCursorFollower();
}

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
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.style.color = 'var(--text-primary)';
            } else {
                navLink.style.color = 'var(--text-secondary)';
            }
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

console.log('Portfolio website loaded successfully! 🚀');

