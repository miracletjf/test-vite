import { defineConfig } from "vite";

export default defineConfig(({ command, mode }) => {
  console.log("dev vite-config", command, mode)
  return {}
})
