import DropDownItem from "./DropDown_Item"
import DropDownTitle from "./DropDown_Title"
import "../DropDown/dropdown.css"
import { useRef, useState } from "react"
import DropDownItemArray from "./DropDown_ItemArray"

function DropDown({ name, comment, fontSize }) {
  const [collapse, setOPen] = useState(false)

  const toggle = () => {
    setOPen(!collapse)
  }

  const contentRef = useRef()

  return (
    <div className="dropdown">
      <div onClick={toggle}>
        <DropDownTitle name={name} collapse={collapse} />
      </div>
      <div
        className="content-hidde"
        ref={contentRef}
        style={
          collapse
            ? { height: contentRef.current.scrollHeight + "px" }
            : { height: "0px" }
        }
      >
        <div className="dropdown-comment">
          {name === "Equipements" ? (
            <DropDownItemArray comment={comment} fontSize={fontSize} />
          ) : (
            <DropDownItem comment={comment} fontSize={fontSize} />
          )}
        </div>
      </div>
    </div>
  )
}

export default DropDown
