// function Button(props) {
//   return(
//     <button style={{color:props.color,fontSize:props.size}}>{props.title}</button>
//   )
// }


// 위와 아래 객체는 같은 내용, 다은 표현 방법이다.
// {
//   title: title, color: color, size: size
// }
// --------------------------------------
// {title, color, size}
// --------------------------------------
export default function Button({title, color, size}) {
    return(
        <button style={{color:color,fontSize:size}}>{title}</button>
    )
}