import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
import Slider from "react-slick";
import "./slider.css";


function PreviousNextMethods() {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="slider-container disabled">
      <Slider
        ref={slider => {
          sliderRef = slider;
        }}
        {...settings}
      >
        <div key={1}>
          <h3><img src="https://www.creative-tim.com/blog/content/images/size/w960/2022/01/which-development-job-is-right-for-you.jpg"></img></h3>
        </div>
        <div key={2}>
          <h3><img src="https://miro.medium.com/v2/resize:fit:1200/0*M4bxiCIjcTK-2Xr6.jpeg"></img></h3>
        </div>
        <div key={3}>
          <h3><img src="https://www.parzlogic.com/wp-content/uploads/2017/10/web-dev.jpg"></img></h3>
        </div>
        <div key={4}>
          <h3><img src="https://blog.hubspot.com/hs-fs/hubfs/web-development.webp?width=595&height=400&name=web-development.webp"></img></h3>
        </div>
        <div key={5}>
          <h3><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3eRwSy18wj6jMYq4qB1lMk2q2A6W7RmBvjnztTDBgbQ&s"></img></h3>
        </div>
        <div key={6}>
          <h3><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP4sGaxrFTZ2H_R4oHQ6Xmj7rtthaN8Om6xdbzoKjB3Q&s"></img></h3>
        </div>
      </Slider>
      <div style={{ textAlign: "center" }}>
        <button className="button button1" onClick={previous}>
        <span class="material-symbols-outlined">
arrow_back
</span>
        </button>
        <button className="button button2" onClick={next}>
        <span class="material-symbols-outlined">
arrow_forward
</span>
        </button>
      </div>
    </div>
  );
}

export default PreviousNextMethods;
