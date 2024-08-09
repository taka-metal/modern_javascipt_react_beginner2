import { ColorfulMessage } from "./components/ColorfulMessage"

// 今は画面の要素は関数で定義する。これをタグのように記述することで利用可能
export const App = () => {
  // HTMLタグの中が長ったらしくなりそうだったらreturnの前に関数を定義しておく
  const onClickButton = () => alert()

  // returnで返すものは一つの要素にしないといけない
  return (
    <>
      <h1 style={{color: "red"}}>こんにちは！</h1>
      {/* <ColorfulMessage color="bule" message="お元気ですか？"/> */}
      {/* <ColorfulMessage color="green" message="元気です！"/> */}
      <ColorfulMessage color="bule">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="green">元気です！</ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  )
}