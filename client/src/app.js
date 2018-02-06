new Vue({
	el: '#app',
	data: {
		input: '# Make a Markup Editor using Vue.js'
	},
	computed: {
		resultantMarkdown: function () {
			return marked(this.input, { sanitize: true })
		}
	},
	methods: {
		update:function (e) {
		console.log(e)
			this.input = e.target.value
		}
	}
});