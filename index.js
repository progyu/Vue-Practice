// todo-item 이름을 가진 컴포넌트 정의
Vue.component('todo-item', {
	props: ['todo'],
	template: '<li>{{ todo.text }}</li>',
});

var app = new Vue({
	// 데이터와 DOM을 연결
	el: '#app',
	data: {
		message: 'Hello Vue!',
	},
});

var app2 = new Vue({
	el: '#app-2',
	data: {
		message: '이 페이지는' + new Date() + '에 로드되었습니다.',
	},
});

var app3 = new Vue({
	el: '#app-3',
	data: {
		seen: true,
	},
});

var app4 = new Vue({
	el: '#app-4',
	data: {
		todos: [
			{ text: 'JavaScript 배우기' },
			{ text: 'Vue 배우기' },
			{ text: 'Webpack 배우기' },
		],
	},
});

var app5 = new Vue({
	el: '#app-5',
	data: {
		message: 'Vue! 재미있네요! ',
	},
	methods: {
		reverseMessage: function() {
			this.message = this.message
				.split('')
				.reverse()
				.join('');
		},
	},
});

var app6 = new Vue({
	el: '#app-6',
	data: {
		message: '반가워요! Vue!',
	},
});

var app7 = new Vue({
	el: '#app-7',
	data: {
		groceryList: [
			{ id: 0, text: 'Vegetables' },
			{ id: 1, text: 'Cheese' },
			{ id: 2, text: 'Whatever else humans are supposed to eat' },
		],
	},
});
