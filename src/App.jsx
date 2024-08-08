// 今は画面の要素は関数で定義する。これをタグのように記述することで利用可能
export const App = () => {
  // HTMLタグの中が長ったらしくなりそうだったらreturnの前に関数を定義しておく
  const onClickButton = () => alert()
  // スタイルを当てることもできる
  // ただしこのようなインラインスタイルは煩雑になるためあまり使われない
  const contentStyle = {
    color: "blue",
    fontSize: "18px"
  }
  // returnで返すものは一つの要素にしないといけない
  return (
    <>
      <h1 style={{color: "red"}}>こんにちは！</h1>
      <p style={contentStyle}>お元気ですか？</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  )
}