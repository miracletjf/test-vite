import { defineConfig } from "vite";

export default defineConfig(({ command, mode }) => {
  console.log("base config", command, mode)
  return {
    envDir: './env'
  }
})
