/** @type {import('tailwindcss').Config} */
module.exports = { 
  content: [], // Tailwind가 CSS클래스 사용 여부를 스캔할 파일 경로 지정 (성능 최적화를 위한 필수 설정)
  theme: { // 프로젝트 디자인 시스템 확장 (ex: 색상, 폰트 등)
    extend: {},
  },
  plugins: [], // Tailwind와 함께 사용할 추가 플러그인 설치
}