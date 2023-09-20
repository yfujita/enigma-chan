import { createApp } from "vue/dist/vue.esm-bundler";

import EnigmaChan from "@/components/EnigmaChan";

window.addEventListener("load", () => {
  console.log("[EnigmaChan] Initialize enigma-chan...");
  const app = createApp({
    components: {
      "enigma-chan": EnigmaChan,
    }
  });
  app.mount("#enigma-chan");
});
