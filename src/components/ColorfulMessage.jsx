// 分割代入
export const ColorfulMessage = ({ color, children }) => {
    const contentStyle = {
        // オブジェクトの省略記法
        color,
        fontSize: "18px"
      }
    return (
        <p style={contentStyle}>{children}</p>
    )
}