// 決まり文句だが、練習を兼ねて一から記述する
// 一般的にはテンプレートを使用する
import { StrictMode } from "react"
import { createRoot } from "react-dom/client" 
// コンポーネント名は大文字始まりの名前でないとエラーになる
import { App } from "./App"

// index.htmlのbodyのdivタグを参照する
const rootElement = document.getElementById("root")
const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)