// import a from "./a.css";
// import b from "./b.css";
import aModuleCss from "./a.module.css";
import bModuleCss from "./b.module.css";

console.log("a", aModuleCss)
console.log("b", bModuleCss)

const box1 = document.createElement("div")
box1.innerText = "box1"
box1.className = aModuleCss.box


const box2 = document.createElement("div")
box2.innerText = "box2"
box2.className = bModuleCss.box

document.body.appendChild(box1)
document.body.appendChild(box2)
