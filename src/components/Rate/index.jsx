import "../Rate/rate.css"
import StarRed from "../../assets/Star_red.png"
import StarGray from "../../assets/Star_gray.png"

function Rate(props) {
  const { numberRate } = props
  const range = [1, 2, 3, 4, 5]
  //   const starType = numberRate >= "light" ? "☀️" : "💧"

  console.log(numberRate)
  return (
    <div className="flex no-wrap">
      {range.map(
        (itemRange) =>
          numberRate >= itemRange ? (
            // <div key={itemRange.toString()}>
            <img
              key={itemRange.toString()}
              src={StarRed}
              alt="star red"
              className="star mr-10"
            ></img>
          ) : (
            // <div>{number</div>
            // </div>
            //   </div>
            //   <div>
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
