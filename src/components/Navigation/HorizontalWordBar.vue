<template>
	<div class="horizontal-word-bar">
		<span class="word" v-for="(word, index) in words" :key="index" @click="wordClicked(word)">
			{{ word }}
		</span>
	</div>
</template>

<script>
export default {
	name: 'HorizontalWordBar',
	props: {
		words: Array
	},
	methods: {
		wordClicked(word) {
			var vm = this;
			
			// eslint-disable-next-line
			vm.$emit('wordClicked', word);
		}
	}
};
</script>

<style>
	.horizontal-word-bar {
		text-align: center;
	}

	.word {
		cursor: pointer;
		font-size: 1.5em;
	}
</style>