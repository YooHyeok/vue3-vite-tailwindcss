# vue3-vite-tailwindcss-app

<details>
<summary style="font-size:30px; font-weight:bold; font-style:italic;">vite기반 vue3 install</summary>

- ### vite 기반 vue3 project 생성

  ```bash
  npm init vite-app {프로젝트 명}
  ```

- ### npm 초기 설치
  ```bash
  npm install
  ```

- ### vite 기반 vue3 서버 기동
  ```bash
  npm run dev
  ```
- ### build 명령
  ```bash
  npm run build
  ```
</details>
<details>
<summary style="font-size:30px; font-weight:bold; font-style:italic;">tailwindcss install</summary>

- ### tailwindcss 디펜던시 추가

  ```bash
  npm install tailwindcss@1.8.3
  ```

- ### CSS에 Tailwind 기본 설정 추가
  Tailwind의 기능을 CSS에서 활성화 하는 진입점 역할을 한다.
  - [src/index.css](src/index.css)
    ```css
    /* 기본 CSS 리셋 및 Base 스타일 추가 */
    @tailwind base;
    /* 기본 구성 요소 및 유틸리티 클래스 */
    @tailwind components;
    /* 유틸리티 클래스 (ex: margin, padding, flexbox 등) 추가 */
    @tailwind utilities;
    ```

- ### Tailwind 설정 파일 생성
  ```bash
  npx tailwindcss init
  ```
  - [tailwind.config.js](tailwind.config.js)
    ```js
    /** @type {import('tailwindcss').Config} */
    module.exports = { 
      content: [], // Tailwind가 CSS클래스 사용 여부를 스캔할 파일 경로 지정 (성능 최적화를 위한 필수 설정)
      theme: { // 프로젝트 디자인 시스템 확장 (ex: 색상, 폰트 등)
        extend: {},
      },
      plugins: [], // Tailwind와 함께 사용할 추가 플러그인 설치
    }

    ```
  
- ### postcss 설정 파일 생성
  CSS를 처리하는 도구로, tailwindcss와 autoprefixer를 플러그인으로 추가함으로써 빌드 과정에서 css를 변환한다.  
  Autoprefixer는 CSS 속성에 브라우저별 벤더 프리픽스를 추가하여 다양한 브라우저에서 CSS가 제대로 동작되도록 도와준다.
  - [postcss.config.js](postcss.config.js)
    ```js
    module.exports = {
      plugins: [
        require('tailwindcss'), // Tailwind CSS 생성 및 적용
        require('autoprefixer'), // 브라우저 호환성 처리
      ],
    }
    ```
  

</details>

<details>
<summary style="font-size:30px; font-weight:bold; font-style:italic;">Tailwind CSS IntelliSense plugin</summary>

1. Extentions 에서 Tainwind CSS IntelliSense 검색 후 설치
2. Settings > Workspace > Extentions > Emmet > Edit in settings.json

- ### [settings.json](.vscode/settings.json)
  ```json
  {
    "tailwindCSS.includeLanguages": {
      "plaintext": "html"
    },
    "tailwindCSS.emmetCompletions": true,
    "tailwindCSS.colorDecorators": "on"
  }
  ```

이제 class 속성 값 정의시 Ctrl space 등을 통한 Tailwind CSS의 자동완성 기능을 사용할 수 있게 된다.

</details>
