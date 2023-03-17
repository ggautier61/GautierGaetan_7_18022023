// import { useRef } from "react"
import "../DropDown_Item/dropdown-item.css"

function DropDownItem(props) {
  const { comment, fontSize } = props
  console.log({ comment })
  return (
    <div className="dropdown-item" style={{ fontSize: fontSize + "px" }}>
      {comment}
    </div>
  )
}

export default DropDownItem
