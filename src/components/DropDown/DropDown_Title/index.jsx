import "../DropDown_Title/dropdown-title.css"
import arrow from "../../../assets/Arrow_open.png"

function DropDownTitle({ name, collapse }) {
  return (
    <div className="dropdown-title">
      <div>{name}</div>
      <div className="w-auto">
        {collapse ? (
          <img
            src={arrow}
            alt="Flèche"
            className="w-auto dropdown-arrow-up"
          ></img>
        ) : (
          <img className="w-auto" src={arrow} alt="Flèche"></img>
        )}
      </div>
    </div>
  )
}

export default DropDownTitle
