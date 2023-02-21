import DropDownItem from './DropDown_Item'
import DropDownTitle from './DropDown_Title'
import '../DropDown/dropdown.css'

function DropDown({ name, comment }) {
  return (
    <div className="dropdown">
      <DropDownTitle name={name} onClick={() => Collapse()} />
      <div className="dropdown-comment">
        <DropDownItem comment={comment} />
      </div>
    </div>
  )
}

export default DropDown
