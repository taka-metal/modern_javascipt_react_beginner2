import { useState } from "react"
import { ColorfulMessage } from "./components/ColorfulMessage"

// 今は画面の要素は関数で定義する。これをタグのように記述することで利用可能
export const App = () => {
  // numを初期化する際はuseStateの引数に初期値を代入する
  const [num, setNum] = useState(0)
  // HTMLタグの中が長ったらしくなりそうだったらreturnの前に関数を定義しておく
  const onClickCountUp = () => {
    // numは現在の値。setNum()はnumに代入する値を格納
    // setNum(num + 1)
    setNum((prev) => prev + 1)
    setNum((prev) => prev + 1)

  }

  // returnで返すものは一つの要素にしないといけない
  return (
    <>
      <h1 style={{color: "red"}}>こんにちは！</h1>
      {/* <ColorfulMessage color="bule" message="お元気ですか？"/> */}
      {/* <ColorfulMessage color="green" message="元気です！"/> */}
      <ColorfulMessage color="bule">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="green">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
    </>
  )
}