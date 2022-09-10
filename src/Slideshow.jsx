import React, { useState } from "react";
import "./Slideshow.css";

const Slideshow = ({data}) => {

const [index, setIndex] = useState(0);

const nextSlide = () => {
    if (index === {data}.length - 1) {setIndex(0)}
    else setIndex(index + 1);
}

const prevSlide = () => {
    if (index === 0) {setIndex({data}.length - 1)}
    else setIndex(index - 1);
}


return (
<div className="slideshow-wrapper">


  <button onClick={() => prevSlide()} className="slide-arrow prev">
    &#8249;
  </button>
   
  <button onClick={() => nextSlide()} className="slide-arrow next">
    &#8250;
  </button>
<div className="slide">
    <img src= {data[index].src} alt= {data[index].alt} />
    </div>
</div> 


)};

export default Slideshow