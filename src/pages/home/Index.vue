<template>
	<div class="page home">
		<div style="height:100%">
			<div id="parent">
				<time-line :initialZoom="0" />
				<side-bar />
			</div>
		</div>
	</div>
</template>

<script>
	/**
	 * Import Dependency
	 */
	import { getAlertType } from '../../helpers'
	import TimeLine from '../../components/aux/TimeLine'
	import SideBar from '../../components/aux/SideBar'

	/**
	 * Export
	 */
	export default {
		name: 'home',
		components: {
			'time-line': TimeLine,
			'side-bar': SideBar,
		},
		data() {
			let _locale = this.$i18n.locale
			let _isSwitch = _locale !== 'en'
			return {
				title: this.$t('lang.pages.home.text'),
				isSwitch: _isSwitch,
			}
		},
		head: {
			title: function() {
				return {
					inner: this.title
				}
			}
		},
		methods: {
			login() {
				console.log(this.email)
				console.log(this.password)
			},
			switchI18n() {
				this.isSwitch = !this.isSwitch
				if (this.isSwitch) {
					this.$store.dispatch('switchI18n', 'cn')
				} else {
					this.$store.dispatch('switchI18n', 'en')
				}
			},
			test() {
				let error = 'This is alert error'
				this.$bus.$emit('alertObj', error, getAlertType(4))
			}
		}
	}
</script>

<style lang="scss" scoped>
body,
html {
	margin: 0;
	padding: 0;
	height: 100%;
}

#parent {
	display: flex;
	flex-direction: row;
	height: calc(100vh - 48px - 48px);
	width: 100%;
}
</style>
