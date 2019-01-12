<template>
	<div id="app">
		<loading :loadingStatus="loadingStatus"></loading>
		<alert :alertStatus="alertStatus"></alert>
		<div class="nav-bar">
			<div id="app-logo">History Inspector</div>
			<div class="language-panel" style="display: inline-block;">
				<span>{{ $t('lang.components.checkbox.label[0].langSwitch') }}</span>
				<span class="language-btn" @click="switchI18n('es')">ES</span>
				<span class="language-btn" @click="switchI18n('en')">EN</span>
				<span class="language-btn" @click="switchI18n('cn')">簡</span>
			</div>
		</div>
		<!-- <img src="./assets/img/logo.png"> -->
		<router-view></router-view>
	</div>
</template>

<script>
	/**
	 * Import Dependency
	 */
	import { mapGetters } from 'vuex'
	// import { getTokenExpiredBox, setTimer, clearTimer } from './helpers'

	/**
	 * Import Component
	 */
	import Loading from './components/notices/Loading.vue'
	import Alert from './components/notices/Alert.vue'

	export default {
		name: 'app',
		components: {
			'loading': Loading,
			'alert': Alert
		},
		data() {
			return {
				loadingStatus: '',
				alertStatus: '',
				intervalId: ''
			}
		},
		computed: {
			...mapGetters([
				'getIsAuthorize',
				'getAccessToken'
			])
		},
		created() {
			this.$bus.$on('isLoading', (event) => {
				this.loadingStatus = event
			})
			this.$bus.$on('alertObj', (event, type) => {
				console.log(event + type)
				this.alertStatus = {
					'obj': event,
					'type': type
				}
			})
		},
		methods: {
			switchI18n(lang) {
				this.$store.dispatch('switchI18n', lang)
			},
		}
	}
</script>

<style lang="scss">
	body {
		margin: 0px;
	}
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		// margin-top: 60px;
		// background: $bg-white-light;
		// background: url('./assets/img/bg.jpg') no-repeat top center;
		// @include grid(true);
	}
	.expire-box {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
		.el-message-box__header {
			.el-message-box__title {
				text-transform: uppercase;
				letter-spacing: 1.5px;
			}
			.el-message-box__headerbtn {
				display: none;
			}
		}
		.el-message-box__content {
			.el-message-box__message {
				p {
					font-size: 16px;
				}
			}
		}
		.el-message-box__btns {
			.el-button {
				text-transform: uppercase;
			}
		}
	}
	.nav-bar {
		width: 100%;
		background: black;
		color: white;
		padding: 10px 0;
		// margin-bottom: 20px;
		display: flex;
    align-items: center;
    justify-content: center;
	
		#app-logo {
			display: inline-block;
			font-family: monospace;
			font-size: 18pt;
			font-weight: bold;
			/* margin: 0 20px; */
			flex: 1;
		}
	}
	
	.language-panel {
		padding-right: 20px;
	}
</style>
