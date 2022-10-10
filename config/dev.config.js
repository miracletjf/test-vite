import { defineConfig } from "vite";

export default defineConfig(({ command, mode }) => {
  console.log("dev config", command, mode)
  return {}
})
