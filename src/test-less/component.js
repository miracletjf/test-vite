import "./s.less"

const box = document.createElement("div")
box.className = "box"

const text = document.createElement("span")
text.innerText = "less text"
text.className = "text"

box.appendChild(text)
document.body.appendChild(box)
