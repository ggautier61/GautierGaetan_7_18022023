// import { useRef } from "react"
import "../DropDown_Item/dropdown-item.css"

function DropDownItem({ comment, arrayComment, fontSize }) {
  return (
    <div className="dropdown-item" style={{ fontSize: fontSize + "px" }}>
      {comment != null ? (
        <div>{comment}</div>
      ) : (
        <div>{arrayComment.map((c) => ({ c }))}</div>
      )}
    </div>
  )
}

export default DropDownItem
