import { defineConfig } from "vite";

export default defineConfig(({ command, mode }) => {
  console.log("base vite-config", command, mode)
  return {
    // env 文件路径
    envDir: './env',
    css: { // 对css的行为进行配置
      modules: { // 对css 模块化的默认行为进行配置
        localsConvention: "camelCase", // 修改生成的配置对象的key的展示形式(驼峰还是中划线形式)
        scopeBehaviour: "local", // 配置当前的模块化行为是模块化还是全局化 (有hash就是开启了模块化的一个标志, 因为他可以保证产生不同的hash值来控制我们的样式类名不被覆盖)
        // generateScopedName: "[name]_[local]_[hash:5]",
        // generateScopedName: (name, filename, css) => {
        //     // name -> 代表的是你此刻css文件中的类名
        //     // filename -> 是你当前css文件的绝对路径
        //     // css -> 给的就是你当前样式
        //     console.log("name", name, "filename", filename, "css", css); // 这一行会输出在哪？？？ 输出在node
        //     // 配置成函数以后, 返回值就决定了他最终显示的类型
        //     return `${name}_${Math.random().toString(36).substr(3, 8) }`;
        // }
        // globalModulePaths: ["./src/test-css/a.module.css"], // 代表你不想参与到css模块化的路径
      },
      preprocessorOptions: { // key + config key代表预处理器的名
        less: {
          globalVars: { // 全局变量
            mainColor: "blue",
          }
        }
      }
    }
  }
})
