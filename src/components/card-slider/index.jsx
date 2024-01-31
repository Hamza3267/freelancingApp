import React,{useState} from "react";
import style from "./cardslide.module.scss";
import pic from "../../assets/images/comma.png";
import logo from '../../assets/images/logotext.webp'
 import Rightarrow from "../../assets/images/arrowright.png";
 import Leftarrow from "../../assets/images/arrowleft.png";
import PicText from "../pic-text-card";
import TextMap from "../text-mapping";
const carditems=[
  {
    title:"Excellent aesthetic design",
    paragraph:"I really can recommend this theme, because it’s coded very well and with the Elementor page builder it’s really easy to build your own website!",
    pictext:"cristofer george",
    para:"designer at shopify"
  },
  {
    title:"Excellent aesthetic design",
    paragraph:"I really can recommend this theme, because it’s coded very well and with the Elementor page builder it’s really easy to build your own website!",
    pictext:"cristofer george",
    para:"designer at shopify"
  },
  {
    title:"Excellent aesthetic design",
    paragraph:"I really can recommend this theme, because it’s coded very well and with the Elementor page builder it’s really easy to build your own website!",
    pictext:"cristofer george",
    para:"designer at shopify"
  },
  {
    title:"Excellent aesthetic design",
    paragraph:"I really can recommend this theme, because it’s coded very well and with the Elementor page builder it’s really easy to build your own website!",
    pictext:"cristofer george",
    para:"designer at shopify"
  },
  {
    title:"Excellent aesthetic design",
    paragraph:"I really can recommend this theme, because it’s coded very well and with the Elementor page builder it’s really easy to build your own website!",
    pictext:"cristofer george",
    para:"designer at shopify"
  },
];
const CardSlider = ({arrowst}) => {
 const [currentIndex, setCurrentIndex] = useState(0);
const [isMouseOver, setIsMouseOver] = useState(false);

const handlePrevClick = () => {
  setCurrentIndex((prevIndex) => (prevIndex === 0 ? carditems.length - 1 : prevIndex - 1));
};

const handleNextClick = () => {
  setCurrentIndex((prevIndex) => (prevIndex + 1) % carditems.length);
};

return (
  <div
    className={style.carousel}
    onMouseEnter={() => setIsMouseOver(true)}
    onMouseLeave={() => setIsMouseOver(false)}
  >
     <div className={style.maindiv} style={{ transform: `translateX(-${currentIndex * 610}px)` }}>
    {carditems.map((e,index)=>(
    <div className={style.carouselItems} key={index}>
      <TextMap
      title={e.title}
       paragraph={e.paragraph}
       paragraphclass={style.paragra}
       titleclass={style.textedit}
       />
      <div className={style.flexx}>
      <PicText
        title={e.pictext}
        paragraph={e.para}
        paraedit={style.paraedit}
        logo={pic}
      />
      <img src={logo} alt="" className={style.image}/>
      </div>
    </div>
 ))}
</div>
    {isMouseOver && (
      <div className={`${style.arrows} ${arrowst}`}>
        <img
          src={Leftarrow}
          alt=""
          className={`${style.carouselButton} ${style.left}`}
          onClick={handlePrevClick}
        />

        <img
          src={Rightarrow}
          alt=""
          className={`${style.carouselButton} ${style.next}`}
          onClick={handleNextClick}
        />
      </div>
    )}
  </div>
);
};

export default CardSlider;

