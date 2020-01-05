<template>
	<div>
		<h1>{{ result }}</h1>
		<form @submit.prevent="onSubmitForm">
			<input ref="answer" minlength="4" maxlength="4" v-model="value" />
			<button type="submit">입력</button>
		</form>
		<div>시도: {{ tries.length }}</div>
		<ul>
			<li v-for="t in tries" v-bind:key="t.id">
				<div>{{ t.try }}</div>
				<div>{{ t.result }}</div>
			</li>
			<div>{{ answer }}</div>
			<div>{{ id }}</div>
		</ul>
	</div>
</template>

<script>
const getNumbers = () => {
	const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	const array = [];
	for (let i = 0; i < 4; i += 1) {
		const chosen = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
		array.push(chosen);
	}
	return array;
};

export default {
	data() {
		return {
			id: 0,
			answer: getNumbers(),
			tries: [],
			value: '',
			result: '',
		};
	},
	methods: {
		reStartGame() {
			alert('게임을 다시 시작합니다');
			this.id = 0;
			this.value = '';
			this.answer = getNumbers();
			this.tries = [];
			this.$refs.answer.focus();
		},
		onSubmitForm(e) {
			if (!this.value.trim()) return;
			if (this.value === this.answer.join('')) {
				this.tries.push({
					id: this.id++,
					try: this.value,
					result: '홈런',
				});
				this.result = '홈런';
				this.reStartGame();
			} else {
				if (this.tries.length >= 9) {
					this.result = `실패! 답은 ${this.answer.join(',')}이었습니다.`;
					this.reStartGame();
				} else {
					let strike = 0;
					let ball = 0;
					const answerArray = this.value.split('').map(v => parseInt(v));
					for (let i = 0; i < 4; i += 1) {
						if (answerArray[i] === this.answer[i]) {
							strike++;
						} else if (this.answer.includes(answerArray[i])) {
							ball++;
						}
					}
					this.tries.push({
						id: this.id++,
						try: this.value,
						result: `${strike} 스트라이크, ${ball} 볼입니다.`,
					});
					this.value = '';
					this.$refs.answer.focus();
				}
			}
		},
	},
};
</script>

<style></style>
