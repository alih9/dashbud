/// <reference types="vite/client" />

// Vue SFC shim for TypeScript
declare module '*.vue' {
	import type { DefineComponent } from 'vue';
	const component: DefineComponent<{}, {}, any>;
	export default component;
}
