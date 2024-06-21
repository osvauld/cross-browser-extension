<script lang="ts">
  import browser from "webextension-polyfill";
    export let name: string;
    const openFullscreen = () => {
      browser.tabs.create({ url: browser.runtime.getURL("dashboard.html") });
    }
    
  </script>
  
  <main>
    <h1 class="bg-blue-600">Hello {name} !!</h1>
    <button class="bg-blue-600" on:click={openFullscreen}>Click me</button>
    
  </main>
  