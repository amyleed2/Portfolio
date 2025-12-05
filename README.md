# 📱 iOS Developer Portfolio

> 이지은의 포트폴리오 웹사이트

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-success)](https://your-github-pages-url.github.io)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 🌟 프로젝트 소개

iOS 개발자 이지은의 경력, 프로젝트, 기술 스택을 소개하는 개인 포트폴리오 웹사이트입니다.  
심플하고 모던한 디자인으로 제작되었으며, 반응형 웹 디자인을 지원합니다.

### ✨ 주요 특징

- 🎨 **모던한 UI/UX**: 다크 테마 기반의 세련된 디자인
- 📱 **반응형 디자인**: 모바일, 태블릿, 데스크톱 모든 디바이스 지원
- 🎭 **인터랙티브한 모달**: 경력 및 프로젝트 상세 정보를 모달로 제공
- 🖼️ **이미지 뷰어**: 프로젝트 스크린샷을 풀스크린으로 확인 가능
- 🎪 **슬라이더**: 프로젝트 카드를 슬라이더 형태로 제공
- ⚡ **부드러운 애니메이션**: 스크롤 및 호버 효과
- 🎯 **섹션별 구성**: Education, Career, About Me, Projects, Contact

## 📂 프로젝트 구조

```
Portfolio/
├── index.html              # 메인 HTML 파일
├── styles.css              # 전역 스타일시트
├── script.js               # 메인 JavaScript (네비게이션, 스크롤 등)
├── slider.js               # 프로젝트 슬라이더 기능
├── career-modal.js         # 경력 상세 모달 관리
├── project-modal.js        # 프로젝트 상세 모달 및 이미지 뷰어
├── EMAILJS_SETUP.md        # EmailJS 설정 가이드
├── 포트폴리오_PDF.pdf       # 포트폴리오 PDF 버전
└── assets/
    └── images/             # 이미지 리소스
        ├── logos/          # 회사 로고
        ├── profile.jpg     # 프로필 사진
        ├── *_applogo.*     # 프로젝트 썸네일
        ├── *_screenshot.*  # 프로젝트 스크린샷
        └── *.png/jpeg/jpg  # 다이어그램 및 참고 이미지
```

## 🚀 시작하기

### 필수 요구사항

- 웹 브라우저 (Chrome, Safari, Firefox, Edge 등)
- 로컬 서버 (선택사항)

### 로컬에서 실행하기

#### 방법 1: 파일로 직접 열기
```bash
# 프로젝트 클론
git clone https://github.com/your-username/Portfolio.git
cd Portfolio

# index.html 파일을 브라우저로 열기
open index.html  # macOS
# 또는
start index.html  # Windows
```

#### 방법 2: 로컬 서버 사용 (권장)

**Python 사용:**
```bash
# Python 3
python -m http.server 8080

# Python 2
python -m SimpleHTTPServer 8080
```

**Node.js 사용:**
```bash
# http-server 설치
npm install -g http-server

# 서버 실행
http-server -p 8080
```

**VS Code Live Server 사용:**
1. VS Code에서 프로젝트 열기
2. Live Server 확장 프로그램 설치
3. `index.html` 우클릭 → "Open with Live Server"

브라우저에서 `http://localhost:8080` 접속

## 🎨 주요 섹션

### 1. 🏠 Home (Hero Section)
- 인사말 및 직업 소개
- 프로필 사진
- CTA 버튼

### 2. 🎓 Education
- 학력 정보
- 전공 및 졸업 연도

### 3. 💼 Career
- 경력 타임라인 테이블
- 회사별 상세 정보 (모달)
  - 회사 로고 및 정보
  - 재직 기간 및 근속 일수
  - 직급 및 역할
  - 주요 프로젝트
  - 담당 업무
  - 기술 스택

### 4. 👤 About Me
- 자기소개
- 보유 기술
- 관심사

### 5. 📱 Projects
- 프로젝트 슬라이더
- 프로젝트별 상세 정보 (모달)
  - 프로젝트 개요
  - 주요 기능
  - 기술 스택
  - 스크린샷 갤러리
  - 아키텍처 다이어그램
  - 팀 구성 및 기여도
  - 담당 업무 및 성과

### 6. 📧 Contact
- 이메일 및 연락처 정보
- GitHub 링크

## 🛠️ 기술 스택

### Frontend
- **HTML5**: 시맨틱 마크업
- **CSS3**: 
  - Flexbox & Grid Layout
  - CSS Variables (Custom Properties)
  - CSS Animations & Transitions
  - Media Queries (반응형)
  - Print Styles (PDF 변환 최적화)
- **JavaScript (Vanilla)**:
  - DOM Manipulation
  - Event Handling
  - Modal Management
  - Image Viewer
  - Slider Implementation
  - Intersection Observer API

### Design
- **디자인 시스템**: 일관된 색상, 타이포그래피, 간격
- **아이콘**: SVG 기반 커스텀 아이콘
- **이미지**: PNG, JPEG, JPG 최적화

### Deployment
- **GitHub Pages**: 정적 사이트 호스팅

## 🎯 주요 기능

### 1. 반응형 네비게이션
- 데스크톱: 가로 메뉴
- 모바일: 햄버거 메뉴
- 스크롤 시 배경색 변경
- 부드러운 스크롤 이동

### 2. 경력 상세 모달
- 회사별 상세 정보 표시
- 회사 로고 및 기본 정보
- 재직 기간 자동 계산
- 직급별 이모지 표시
- 기술 스택 뱃지
- 스크롤 가능한 콘텐츠

### 3. 프로젝트 상세 모달
- 프로젝트 정보 상세 표시
- 계층적 콘텐츠 구조
- 가로 스크롤 스크린샷 갤러리
- 참고 이미지 (가로/세로 최적화)
- 워크플로우 분석 카드
- 팀 구성 및 기여도 시각화

### 4. 이미지 뷰어
- 풀스크린 이미지 보기
- 이전/다음 이미지 네비게이션
- 키보드 단축키 지원 (←, →, ESC)
- 이미지 카운터 표시
- 배경 클릭으로 닫기

### 5. 프로젝트 슬라이더
- 터치/마우스 드래그 지원
- 자동 센터링
- 부드러운 애니메이션
- 반응형 카드 크기

### 6. PDF 변환 최적화
- `@media print` 스타일 적용
- 다크 테마 유지
- 불필요한 요소 숨김
- 페이지 브레이크 최적화

## 📱 브라우저 호환성

| 브라우저 | 지원 버전 |
|---------|----------|
| Chrome | ✅ 최신 버전 |
| Safari | ✅ 최신 버전 |
| Firefox | ✅ 최신 버전 |
| Edge | ✅ 최신 버전 |
| Mobile Safari | ✅ iOS 12+ |
| Chrome Mobile | ✅ 최신 버전 |

## 🎨 커스터마이징

### 색상 변경
`styles.css`의 CSS 변수를 수정하세요:

```css
:root {
    --primary-color: #8b5cf6;
    --secondary-color: #a78bfa;
    --background-dark: #0f0f23;
    --background-darker: #0a0a15;
    --text-color: #e0e0e0;
    /* ... */
}
```

### 콘텐츠 수정

#### 경력 정보 수정
`career-modal.js`의 `careerData` 객체를 수정하세요:

```javascript
const careerData = {
    'company-id': {
        company: '회사명',
        logo: 'assets/images/logos/company_logo.png',
        period: 'YYYY.MM - YYYY.MM',
        duration: 'X년 X개월',
        role: '직급',
        roleEmoji: '🚀',
        // ...
    }
};
```

#### 프로젝트 정보 수정
`project-modal.js`의 `projectData` 객체를 수정하세요:

```javascript
const projectData = {
    'project-id': {
        title: '프로젝트명',
        period: 'YYYY.MM - YYYY.MM',
        description: '프로젝트 설명',
        features: '주요 기능 HTML',
        techStack: ['기술1', '기술2'],
        // ...
    }
};
```

## 📄 PDF 변환

### 브라우저에서 PDF 생성
1. 포트폴리오 웹사이트 열기
2. `Cmd/Ctrl + P` (인쇄 단축키)
3. "PDF로 저장" 선택
4. 저장

최적화된 PDF 출력을 위해 `@media print` 스타일이 적용되어 있습니다.

## 🐛 알려진 이슈

### Safari 구버전 호환성
- Safari 구버전에서 Optional Chaining (`?.`) 미지원
- 해결: 명시적 `if` 체크로 대체 완료

### 이미지 경로 문제
- 파일명에 공백이 있으면 GitHub Pages에서 로드 실패
- 해결: 모든 이미지 파일명에서 공백 제거

## 🤝 기여하기

이 프로젝트는 개인 포트폴리오이지만, 개선 제안은 언제나 환영합니다!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 라이선스

이 프로젝트는 개인 포트폴리오 용도로 제작되었습니다.

## 📞 연락처

**이지은 (iOS Developer)**

- 📧 Email: your.email@example.com
- 💼 GitHub: [@your-github-username](https://github.com/your-github-username)
- 🌐 Portfolio: [https://your-portfolio-url.github.io](https://your-portfolio-url.github.io)

---

⭐ 이 프로젝트가 도움이 되었다면 Star를 눌러주세요!

**Made with ❤️ by 이지은**

