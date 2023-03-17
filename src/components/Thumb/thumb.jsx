import "./thumb.css"

function Thumb({ id, title, cover }) {
  return (
    <div className="thumb">
      <img className="thumb-picture" src={cover} alt={title}></img>
      <div className="thumb-title">
        <p className="weight500">{title}</p>
      </div>
    </div>
  )
}

export default Thumb
