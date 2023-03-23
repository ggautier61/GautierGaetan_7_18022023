import "../DropDown_Item/dropdown-item.css"

function DropDownItem(props) {
  const { comment, fontSize } = props
  return (
    <div className="dropdown-item" style={{ fontSize: fontSize + "px" }}>
      {comment}
    </div>
  )
}

export default DropDownItem
