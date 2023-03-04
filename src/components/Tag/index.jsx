import "../Tag/tag.css"

function Tag({ title }) {
  return (
    <div className="tag mr-10 flex justify-center align-center background-main">
      <div className="tag-title color-white weight500">{title}</div>
    </div>
  )
}

export default Tag
