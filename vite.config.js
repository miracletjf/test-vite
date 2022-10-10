import { defineConfig, loadEnv } from "vite";
import baseConfig from "./vite-config/base.config"
import devConfig from "./vite-config/dev.config"
import buildConfig from "./vite-config/build.config"


// 策略模式
const envResolver = {
  serve: (configEnv) => {
    return { ...baseConfig(configEnv), ...devConfig(configEnv) }
  },
  build: (configEnv) => {
    console.log("build")
    return { ...baseConfig(configEnv), ...buildConfig(configEnv) }
  }
}

module.exports = defineConfig((configEnv) => {
  const { command, mode } = configEnv
  const path = require("path")
  const env = loadEnv(mode, path.resolve(__dirname, "./env"), "")
  console.log("================= start env ======================")
  console.log("load env", env)
  console.log("================== end env =======================")
  return envResolver[command](configEnv)
})
