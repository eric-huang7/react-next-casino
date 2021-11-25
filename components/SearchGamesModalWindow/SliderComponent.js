import Slider from "react-slick";

export const SliderComponent = ({t, itemsArr, sliderSettings}) => {

  return (
    <Slider {...sliderSettings}>
      {itemsArr}
    </Slider>
  )
}