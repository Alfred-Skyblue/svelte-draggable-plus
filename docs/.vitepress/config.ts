import { defineConfig, HeadConfig } from 'vitepress'
import { applyPlugins } from './plugins/code'

const guides = [{ text: 'Guide', link: '/guide/' }]

const sidebar = {
	'/guide': [
		{
			text: 'Developer Guide',
			items: guides
		}
	]
}

const head = [
	['meta', { property: 'og:title', content: 'svelte-draggable-plus' }],
	[
		'meta',
		{
			property: 'og:description',
			content: 'Popular, beautiful and fast UnoCSS component library'
		}
	],
	[
		'meta',
		{ property: 'og:url', content: 'https://github.com/Alfred-Skyblue/svelte-draggable-plus' }
	],
	['meta', { name: 'referrer', content: 'no-referrer' }],
	['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
	[
		'link',
		{
			href: 'https://fonts.googleapis.com/css2?family=Readex+Pro:wght@200;400;600&display=swap',
			rel: 'stylesheet'
		}
	],
	[
		'link',
		{
			href: 'https://gw.alipayobjects.com/os/k/font/lxgwwenkaiscreenr.css',
			rel: 'stylesheet'
		}
	]
] as HeadConfig[]
const nav = [
	{ text: 'Home', link: '/' },
	{ text: 'Guide', link: '/guide/' }
]
export default defineConfig({
	title: 'svelte-draggable-plus',
	description: 'Documentation site for svelte-draggable-plus',
	head,
	themeConfig: {
		logo: '/logo.svg',
		socialLinks: [
			{ icon: 'github', link: 'https://github.com/Alfred-Skyblue/svelte-draggable-plus' }
		],
		footer: {
			message: 'MIT Licensed',
			copyright: 'Copyright © 2023-present 丶远方'
		},
		nav,
		sidebar
	},
	markdown: {
		config: (md) => {
			applyPlugins(md)
		},
		theme: {
			light: 'vitesse-light',
			dark: 'vitesse-dark'
		}
	}
})
