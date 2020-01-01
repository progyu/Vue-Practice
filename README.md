# Vue 시작하기

Vue dev tools 추가 - 크롬 웹스토어, firefox
Visual Studio Code Vetur extension 설치


설치방법

1. CDN 

   ```html
   <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
   ```

   

2. NPM

   Vue를 사용하여 대규모 애플리케이션을 구축할 때 NPM을 이요한 설치를 권장한다. NPM은 Webpack 또는 Browserify와 같은 모듈 번들러와 잘 작동한다. Vue는 싱글 파일 컴포넌트를 만들기 위한 도구도 제공한다.

```bash
# 최신 안정화 버전
$ npm install vue 
```



3. CLI

   Vue.js는 단일 페이지 애플리케이션를 빠르게 구축할 수 있는 [공식 CLI](https://github.com/vuejs/vue-cli)를 제공. 최신 프론트엔드 워크 플로우를 위해 사전 구성된 빌드 설정을 제공.

   ```bash
   $ npm install -g @vue/cli
   # OR
   $ yarn global add @vue/cli
   
   $ vue --version
   
   # Instant Prototyping
   $ vue serve
   
   # Creating a Project
   $ vue create hello-world
   ```

   

**v-bind 속성**

디렉티브라고 한다. 디렉티브는 Vue에서 제공하는 특수 속성임을 나타내는` v-` 접두어가 붙어있으며 렌더링된 DOM에 특수한 반응형 동작을 한다. 



## 조건문과 반복문

**v-if** 디렉티브

텍스트와 속성뿐 아니라 DOM의 **구조**에도 데이터를 바인딩 할 수 있음을 보여준다.



**v-for** 디렉티브

각 디렉티브마다 고유한 기능이 있다. 예를 들어 `v-for` 디렉티브는 배열의 데이터를 바인딩하여 Todo 목록을 표시하는데 사용할 수 있다.



## 사용자 입력 핸들링

사용자가 앱과 상호 작용할 수 있게 하기 위해 우리는 `v-on` 디렉티브를 사용하여 Vue 인스턴스에서 메소드를 호출하는 이벤트 리스너를 추가 할 수 있다

이 방법은 직접적으로 DOM을 건드리지 않고 앱의 상태만을 업데이트한다.

Vue는 또한 양식에 대한 입력과 앱 상태를 양방향으로 바인딩하는 `v-model` 디렉티브를 제공한다.



## 컴포넌트를 사용한 작성방법

컴포넌트 시스템은 Vue의 또 다른 중요한 개념. 독립적이며 재사용할 수 있는 컴포넌트로 구성된 대규모 애플리케이션을 구축할 수 있게 해주는 추상적 개념이다. 거의 모든 유형의 애플리케이션 인터페이스를 컴포넌트 트리로 추상화할 수 있다.

**Vue에서 컴포넌트는 미리 정의된 옵션을 가진 Vue 인스턴스**

부모 영역의 데이터를 자식 컴포넌트에 전달할 수 있어야 합니다. [prop](https://kr.vuejs.org/v2/guide/components.html#Props)을 전달

자식을 props 인터페이스를 통하여 부모로부터 합리적인 수준으로 분리할 수 있다. 

Vue 컴포넌트는  [Web Components Spec](https://www.w3.org/wiki/WebComponents/)의 일부인 **사용자 지정 엘리먼트** 와 매우 유사
