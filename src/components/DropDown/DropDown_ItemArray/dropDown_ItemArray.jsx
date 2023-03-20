// import { useRef } from "react"
import "../DropDown_ItemArray/dropDown_ItemArray.css"

function DropDownItemArray(props) {
  const { comment, fontSize } = props
  var i = 0
  return (
    <div className="dropdown-item" style={{ fontSize: fontSize + "px" }}>
      {comment.map((c) => (
        <div key={i++}>{c}</div>
      ))}
    </div>
  )
}

export default DropDownItemArray
