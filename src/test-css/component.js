// import a from "./a.css";
// import b from "./b.css";
import aModuleCss from "./a.module.css";
import bModuleCss from "./b.module.css";

console.log("a", aModuleCss)
console.log("b", bModuleCss)

const box1 = document.createElement("div")
box1.innerText = "a module css"
box1.className = aModuleCss.box


const box2 = document.createElement("div")
box2.innerText = "b module css"
box2.className = bModuleCss.box

const textBox = document.createElement("div")
textBox.innerText = "这是一段文字！"
textBox.className = bModuleCss.textBox

document.body.appendChild(box1)
document.body.appendChild(box2)
document.body.appendChild(textBox)
