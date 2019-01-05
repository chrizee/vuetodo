<template>
	<div class="quote">
		<div v-if="!showSpinner">
			<h2>by - {{ quote.author }}</h2>
			<transition name="quote" enter-active-class="animated slideInDown" leave-active-class="animated slideOutUp">
				<p v-text="quote.body"></p>
			</transition>
			<button type="button" @click="getNextQuote()" :disabled="offline">next quote</button>
		</div>
		<div v-else>
			<h1 class="spinner spinner-5"><span></span><span></span><span></span></h1>
		</div>
	</div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
	export default {
		name: "Quote",
		mounted() {
			this.getNextQuote();
		},
		computed:{ 
			...mapState(['quote', 'showSpinner']),
			offline: !window.navigator.onLine
		},
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
	justify-content: center;
	min-height: 200px;
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
.spinner {
	width: 100px;
	height: 100px;
	background: orange;
	border-radius: 50%;
	position: relative;
	display: inline-block;
	margin-right: 20px;
}
.spinner:before, .spinner:after {
	content: '';
	display: block;
	width: 100px;
	height: 100px;
	border-radius: 50%;
}
.spinner-5 {
	height: 0px;
	width: 0px;
}
.spinner-5 span {
	display: block;
	height: 20px;
	width: 20px;
	background: orange;
	border-radius: 50%;
	position: absolute;
	top: 0px;
}
.spinner-5 span:nth-child(1) {
	left: -40px;
	background: red;
	animation: bounce 1s ease-in-out infinite;
}
.spinner-5 span:nth-child(2) {
	animation: bounce 1s ease-in-out 0.33s infinite;
}
.spinner-5 span:nth-child(3) {
	left: 40px;
	background: green;
	animation: bounce 1s ease-in-out 0.66s infinite;
}
@keyframes bounce{
	0%, 75%, 100% {
		transform: translateY(0);
	}
	25% {
		transform: translateY(-30px);
	}
}
div {
	text-align: center;
}
</style>