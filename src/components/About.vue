<template>
	<div class="about">
		<h1>About {{ name }}</h1>
		<p v-text="aboutText"></p>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
	export default {
		data() {
			return {
				name: this.$route.params.name
			}
		},
		computed: mapGetters(['aboutText'])
	}
</script>