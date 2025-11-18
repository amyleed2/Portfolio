# EmailJS 설정 가이드

이 문서는 Contact 폼에서 실제로 이메일을 전송하기 위한 EmailJS 설정 방법을 안내합니다.

## 📧 EmailJS란?

EmailJS는 백엔드 서버 없이 JavaScript만으로 이메일을 전송할 수 있게 해주는 무료 서비스입니다.
매달 200개의 무료 이메일 전송이 가능합니다.

## 🚀 설정 단계

### 1. EmailJS 회원가입

1. [EmailJS 웹사이트](https://www.emailjs.com/)에 접속
2. 우측 상단의 "Sign Up Free" 클릭
3. 이메일 주소로 가입 (또는 Google 계정으로 가입)

### 2. Email Service 추가

1. 대시보드에서 **"Email Services"** 메뉴 클릭
2. **"Add New Service"** 버튼 클릭
3. **Gmail** 선택 (가장 쉬운 방법)
4. **"Connect Account"** 클릭하여 Gmail 계정 연동
   - amy.lee.d2@gmail.com 계정으로 연동하는 것을 추천
5. Service ID를 복사해두세요 (예: `service_abc123`)

### 3. Email Template 생성

1. 대시보드에서 **"Email Templates"** 메뉴 클릭
2. **"Create New Template"** 버튼 클릭
3. 템플릿 내용을 다음과 같이 설정:

#### Subject (제목)
```
[Portfolio] {{from_name}}님으로부터 새 메시지
```

#### Content (내용)
```
포트폴리오 사이트를 통해 새로운 메시지가 도착했습니다.

보내는 사람: {{from_name}}
이메일: {{from_email}}

메시지:
{{message}}

---
이 메시지는 포트폴리오 웹사이트의 Contact 폼을 통해 전송되었습니다.
```

4. **Settings** 탭에서:
   - **To Email**: `amy.lee.d2@gmail.com` (받을 이메일 주소)
   - 또는 `{{to_email}}` 사용 (코드에서 동적으로 설정)

5. **"Save"** 버튼 클릭
6. Template ID를 복사해두세요 (예: `template_xyz789`)

### 4. Public Key 확인

1. 대시보드 우측 상단의 **계정 아이콘** 클릭
2. **"Account"** 선택
3. **"General"** 탭에서 **Public Key** 확인 및 복사 (예: `abcd1234efgh5678`)

### 5. 코드에 설정 적용

`script.js` 파일을 열어서 다음 부분을 수정하세요:

```javascript
// 93번째 줄 근처
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // 여기에 복사한 Public Key 입력
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'; // 여기에 복사한 Service ID 입력
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // 여기에 복사한 Template ID 입력
```

**예시:**
```javascript
const EMAILJS_PUBLIC_KEY = 'abcd1234efgh5678';
const EMAILJS_SERVICE_ID = 'service_abc123';
const EMAILJS_TEMPLATE_ID = 'template_xyz789';
```

### 6. 테스트

1. 웹사이트를 브라우저에서 열기
2. Contact 섹션으로 스크롤
3. 폼 작성 후 "메시지 보내기" 클릭
4. "메시지가 성공적으로 전송되었습니다!" 메시지 확인
5. amy.lee.d2@gmail.com 받은편지함 확인

## 🔍 문제 해결

### 이메일이 전송되지 않을 때

1. **브라우저 콘솔 확인**: 
   - F12 (개발자 도구) → Console 탭
   - 오류 메시지 확인

2. **Service ID, Template ID, Public Key 재확인**:
   - 복사할 때 공백이나 추가 문자가 없는지 확인

3. **EmailJS 대시보드에서 확인**:
   - [EmailJS Dashboard](https://dashboard.emailjs.com/)
   - History 탭에서 전송 기록 확인

4. **Gmail 설정 확인**:
   - Gmail에서 EmailJS 앱 접근 권한 확인
   - 스팸 폴더 확인

### 시뮬레이션 모드

설정이 완료되지 않은 경우, 자동으로 시뮬레이션 모드로 작동합니다.
콘솔에 "EmailJS가 설정되지 않았습니다. 시뮬레이션 모드로 실행됩니다." 메시지가 표시됩니다.

## 📝 추가 정보

- **무료 플랜**: 월 200개 이메일
- **유료 플랜**: 더 많은 이메일이 필요한 경우 업그레이드 가능
- **보안**: Public Key는 공개되어도 안전합니다 (클라이언트 측에서 사용)
- **문서**: [EmailJS 공식 문서](https://www.emailjs.com/docs/)

## ✅ 체크리스트

- [ ] EmailJS 회원가입 완료
- [ ] Gmail 서비스 연동 완료
- [ ] Email Template 생성 완료
- [ ] Public Key 확인 완료
- [ ] script.js에 키 값 입력 완료
- [ ] 테스트 이메일 전송 성공

---

문제가 있거나 도움이 필요하면 [EmailJS Support](https://www.emailjs.com/docs/)를 참고하세요.

