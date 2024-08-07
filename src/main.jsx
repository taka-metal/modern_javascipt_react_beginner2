// 決まり文句だが、練習を兼ねて一から記述する
// 一般的にはテンプレートを使用する
import { StrictMode } from "react"
import { createRoot } from "react-dom/client" 

// index.htmlのbodyのdivタグを参照する
const rootElement = document.getElementById("root")
const root = createRoot(rootElement)

// 今は画面の要素は関数で定義する。これをタグのように記述することで利用可能
const App = () => {
  // returnで返すものは一つの要素にしないといけない
  return (
    <>
      <h1>こんにちは！</h1>
      <p>お元気ですか？</p>
    </>
  )
}

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)