import theme from 'vitepress/theme'
import { h } from 'vue'
import DemoBlock from '../components/demo-block'
import { highlight } from '../components/highlight'
import LogoAnimate from '../components/logo-animate'
import './style.css'
import 'uno.css'

export default {
	...theme,
	enhanceApp({ app }) {
		app.component('Demo', DemoBlock)
		app.component('highlight-code', highlight)
	},
	Layout() {
		return h(theme.Layout, null, {
			'home-hero-image': () => h(LogoAnimate)
		})
	}
}
