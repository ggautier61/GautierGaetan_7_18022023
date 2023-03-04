import "../Rate/rate.css"
import StarRed from "../../assets/Star_red.png"
import StarGray from "../../assets/Star_gray.png"

function Rate(props) {
  const { numberRate } = props
  const range = [1, 2, 3, 4, 5]

  console.log(numberRate)
  return (
    <div className="flex no-wrap">
      {range.map(
        (itemRange) =>
          numberRate >= itemRange ? (
            <img
              key={itemRange.toString()}
              src={StarRed}
              alt="star red"
              className="star mr-10"
            ></img>
          ) : (
            <img
              key={itemRange}
              src={StarGray}
              alt="star gray"
              className="star mr-10"
            ></img>
          )
        //   </div>
      )}
    </div>
  )
}

export default Rate
