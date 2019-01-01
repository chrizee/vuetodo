<template>
	<div class="quote">
		<h2>by - {{ quote.author }}</h2>
		<p v-text="quote.body"></p>
		<button type="button" @click="getNextQuote()">next quote</button>
	</div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
	export default {
		name: "Quote",
		mounted() {
			this.getNextQuote();
		},
		computed: mapState(['quote']),
		methods: {
			...mapActions([
				"getQuote"
			]),
			getNextQuote() {
				this.getQuote();
			}
		}
	}
</script>

<style scoped>
.quote {
	display: flex;
	flex-direction: column;
}
h2 {
	text-align: center;
}
button {
	padding: 7px;
background: orange;
border-color: transparent;
border-radius: 5px;
box-shadow: none;
outline: none;
display: inline-block;
border-width: 9px;
white-space: nowrap;
width: 100px;
align-self: flex-end;
}
</style>