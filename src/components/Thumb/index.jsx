import './thumb.css'

function Thumb({ title, cover }) {
  return (
    <div>
      <div className="thumb">
        <div className="thumb-background"></div>
        <img className="thumb-picture" src={cover} alt={title}></img>
        {/* <div className="thumb-background"></div> */}
        <div className="thumb-title">
          <p>{title}</p>
        </div>
      </div>
    </div>
  )
}

export default Thumb
