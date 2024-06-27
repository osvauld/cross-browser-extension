<script lang="ts">
	import browser from "webextension-polyfill";
	export let name: string;
	const openFullscreen = () => {
		browser.tabs.create({ url: browser.runtime.getURL("dashboard.html") });
	};

	const sendMessage = async () => {
		const response = await browser.runtime.sendMessage({
			message: "Hello from popup",
		});
		console.log(response);
	};
</script>



<main class="flex flex-col justify-center items-center">
	<h1 class="bg-blue-600">Hello {name} !!</h1>
	<button
	  class="bg-blue-600 px-[6px] py-[14px] mt-6 text-white font-semibold"
	  on:click={openFullscreen}>Click me</button
	>
	
	<button
    class="bg-green-600 px-[6px] py-[14px] mt-3 text-white font-semibold"
    on:click={sendMessage}
  >
    Send Message</button
  >
  </main>