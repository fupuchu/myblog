import React from "react";
import Slider from "react-slick";
// import { TimeoutError } from "rxjs";

export default class Carousel extends React.Component {
  render() {
    const images = this.props.images;
    console.log(images);

    const imageList = images.map((image, index) => {
      return (
        <div key={index}>
          <img src={image} alt={image} />
        </div>
      );
    });

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      arrows: false
    };
    return (
      <div
        style={{
          maxWidth: `1200px`,
          margin: `0 auto`
        }}
      >
        <Slider {...settings}>{imageList}</Slider>
      </div>
    );
  }
}
