import { defineConfig } from "vite";

export default defineConfig(({ command, mode }) => {
  console.log("build", command, mode)
  return {}
})
