import App from "./lib/popup.svelte";
import "./tailwind.css";
const app = new App({
	target: document.body,
	props: {
		name: "world",
	},
});

export default app;
