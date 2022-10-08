const { defineConfig, loadEnv } = require("vite")
const path = require("path")

module.exports = defineConfig(({ command, mode }) => {
  console.log("command", command)
  console.log("mode", mode)

  const env = loadEnv(mode, path.resolve(__dirname, "./env"), "")
  console.log("load env", env)
  return {
    envDir: path.resolve(__dirname, "./env")
  }
})
