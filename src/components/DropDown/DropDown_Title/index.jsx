import "../DropDown_Title/dropdown-title.css"
import vector from "../../../assets/Vector.png"
// import vector_open from '../../../assets/Vector_Open.png'

function DropDownTitle({ name, collapse }) {
  return (
    <div className="dropdown-title">
      <div>{name}</div>
      <div>
        {collapse ? (
          <img src={vector} alt="Flèche" className="dropdown-arrow-up"></img>
        ) : (
          <img src={vector} alt="Flèche"></img>
        )}
      </div>
    </div>
  )
}

export default DropDownTitle
