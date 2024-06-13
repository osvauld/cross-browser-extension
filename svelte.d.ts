// svelte.d.ts
declare module '*.svelte' {
    import { SvelteComponentDev } from 'svelte/internal';
    export default SvelteComponentDev;
}