# vue-router 공부하기



### 라우터로 이동한 페이지 표시(router-view)

```vue
// router로 이동한 페이지를 표시
<router-view></router-view>
```


```javascript
// router.js
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
```



### 라우트의 각 요소

```
path:
name: 별칭
```



### 라우팅할 컴포넌트를 import하는 두가지 방법

```js
// 전부 로딩한 다음에 보여주는 화면만 다르게 보여주는 방법
import Home from './views/Home.vue'
```

```js
// 주소와 연결되어 있는 컴포넌트 하나만 로드한다.
{
  path: '/about',
  name: 'about',
  component: () => import(/* webpackChunkName: "about" */'./views/About.vue')
}
```



### 사용자 입력에 반응하여 라우팅하는 여러가지 방법

```vue
@click="$router.push({ name: 'home'})"

@click="$router.push({ path: '/about'})"

// 객체 형태로 이동하지 않아도 된다.
@click="$router.push('/about')"

// 객체 형태를 추천하는 이유
// 아래 코드와 같이 router에서 query와 params와 같은 값을 넘겨 줄 수 있다.
@click="$router.push({ path: '/about', query: {}, params: {}})"

// router-link는 a태그로 변경된다.
<router-link :to="{name: 'home'}">홈으로</router-link>
```



### mode 속성 설명

라우터의 기본은 해시 모드이다. 주소창에 /#/가 생김. 

history로 설정해주면 /#/ 가 사라진다.



### 만약 현재 유저의 pk(id)를 값으로 사용하고 싶다면

ex) http://localhost:8080/users/12  12가 현재 유저의 아이디 값

```vue
// router.js

path: '/users/:userId'


// User.vue
<template>
    <div>
        <h1>Users</h1>
        <p>이 유저는 현재 아이디가 {{ userId }} 입니다.</p>
    </div>
</template>

<script>
    export default {
        computed: {
            userId () {
                return this.$route.params.userId
            }
        }
    }
</script>
```

$router 와 $route의 차이는 무엇인가??





