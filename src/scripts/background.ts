import browser from "webextension-polyfill";
import init, { greet } from "./wasm";

browser.runtime.onInstalled.addListener(() => {
	console.log("Extension installed successfully!");
});

browser.runtime.onMessage.addListener(async () => {
	await init();
	const response = await greet();
	return response;
});
