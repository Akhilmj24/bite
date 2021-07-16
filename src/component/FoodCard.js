import React, { useEffect } from "react";
import arabic from "./assets/arabic.jpg";
import chinese from "./assets/chinese.jpg";
import indian from "./assets/indian.jpg";
import cake from "./assets/cake.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const foodData = [
  {
    img: indian,
    category: "indian dish",
    price: 80,
  },
  {
    img: arabic,
    category: "Arabic dish",
    price: 80,
  },
  {
    img: chinese,
    category: "chinese dish",
    price: 80,
  },

  {
    img: cake,
    category: "bakery items",
    price: 80,
  },
];
export default function FoodCard() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  const click=()=>{
    console.log("object")
  }
  return (
    <div className="foodcard_main_conatiner"  onClick={click}>
      

      {foodData.map((pick) => (
        <div
        key={pick.category}
          data-aos="zoom-in-up"
          data-aos-delay="2500"
          data-aos-duration="2500"
          className="foodcard_item"
          onClick={click}
          style={{
            background: `url(${pick.img})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          
          >
          <h2>{pick.category}</h2>
        </div>
      ))}
      </div>
    
  );
}
