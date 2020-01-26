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



### 파라미터를 전달하는 두가지 방법

ex) http://localhost:8080/users/12  12가 현재 유저의 아이디 값

1. router.js 에서 주소창을 통해 전달해 주는 방법

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



2. params 객체 안에 직접적으로 값을 넘겨주는 방식

```vue
// App.vue

<v-list-tile router :to="{
  name: 'users',
  params: {
  userId: 4321
	}
}">
```



### $router 와 $route의 차이는 무엇인가??

$router는 new Router로 선언해준 인스턴스 안에 있는 속성들이 담겨있다.

$route는 현재 주소와 관련 있는 것들이 담긴 객체 ex) query, prams 





### query를 통해 값을 전달하는 방법

```vue
// App.vue 내부적으로 전달

<v-list-tile router :to="{
  name: 'users',
  params: {
  userId: 4321
  },
  query: {
  name: 'lee',
  address: 'seoul'
  }
}">
  
// Users.vue 내부적으로 전달하든 외부적으로 전달하든 아래와 같이 query 값을 가져올 수 있다.

<template>
	<div>
    {{ $route.params.userId }}
		{{ $route.query.name }}
		{{ $route.query.address }}
  </div>  
</template>
```

query는 넘겨주는 값을 숨길 수 없기 때문에 보안상 취약하다. 그 점을 고려하여 params를 사용할지  query를 사용할지 정해야한다.



## children 하위 경로 설정하기

경로를 다 따로 만드는 것과 하위 경로로 만드는 것에는 어떤 차이가 있을까???

Users 안에서만 동작하는 라우터가 하나 더 있다고 생각하면 된다.