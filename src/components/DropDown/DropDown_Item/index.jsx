// import { useRef } from "react"
import "../DropDown_Item/dropdown-item.css"

function DropDownItem({ comment, fontSize }) {
  // const contentRef = useRef()
  console.log(fontSize)
  return (
    <div className="dropdown-item" style={{ fontSize: fontSize + "px" }}>
      {comment}
    </div>
  )
}

export default DropDownItem
