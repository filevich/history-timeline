/**
 * Import Dependency
 */
import Vue from 'vue'
import VueI18n from 'vue-i18n'

/**
 * Import Language
 */
import en from './i18n/en_US'
import es from './i18n/es_ES'
import cn from './i18n/zh_CN'

/**
 * Config
 */
Vue.use(VueI18n)

/**
 * Export
 */
export default new VueI18n({
	// locale: 'en', // <- production
	locale: 'es',		// <- development
	fallbackLocale: 'es', // <- also development
	messages: {
		en: {
			lang: en
		},
		es: {
			lang: es
		},
		cn: {
			lang: cn
		}
	}
})
