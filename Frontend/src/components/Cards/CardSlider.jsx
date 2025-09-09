// import React, { useEffect, useState } from "react";
// import Slider from "react-slick";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import axios from "axios";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "../../css/Cards/CardSlider.css";


// const CardSlider = () => {
//   const [mydata, setMydata] = useState([]);

//   const loadData = () => {
//     let api = "http://localhost:3000/shopping";
//     axios.get(api).then((res) => {
//       setMydata(res.data);
//     });
//   };

//   useEffect(() => {
//     loadData();
//   }, []);

//   const cartDataAdd = (id, name, price, categ, desc, myimg) => {
//     dispatch(
//       addToCart({
//         id: id,
//         name: name,
//         price: price,
//         category: categ,
//         description: desc,
//         image: myimg,
//         qnty: 1,
//       })
//     );
//   };

//   const ans = mydata.map((key, index) => {
//     return (
//       <div key={key.id || index}>
//         <Card className="custom-card">
//           <div className="image-wrapper">
//             <img src={key.image} alt={key.name} />
//           </div>
//           <Card.Body>
//             <Card.Title className="card-title">
//               {key.name} for {key.category}
//             </Card.Title>
//             <Card.Text className="card-text">
//               {key.description}
//               <br />
//               <span className="price">₹ {key.price}</span>
//             </Card.Text>
//             <Button
//               className="add-btn"
//               variant="primary"
//               onClick={() =>
//                 cartDataAdd(
//                   key.id,
//                   key.name,
//                   key.price,
//                   key.category,
//                   key.description,
//                   key.image
//                 )
//               }
//             >
//               Add to Cart
//             </Button>
//           </Card.Body>
//         </Card>
//       </div>
//     );
//   });

//   // ✅ slider settings
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 5, // ek slide me 5 card
//     slidesToScroll: 1,
//     arrows: true, // left-right arrows
//     responsive: [
//       {
//         breakpoint: 1200,
//         settings: { slidesToShow: 4 },
//       },
//       {
//         breakpoint: 992,
//         settings: { slidesToShow: 3 },
//       },
//       {
//         breakpoint: 768,
//         settings: { slidesToShow: 2 },
//       },
//       {
//         breakpoint: 576,
//         settings: { slidesToShow: 1 },
//       },
//     ],
//   };

//   return (
//     <div style={{ padding: "40px" }}>
//       <h2 style={{ textAlign: "center", marginBottom: "20px" }}>New Arrival</h2>

//       <Slider {...settings}>{ans}</Slider>
//     </div>
//   );
// };

// export default CardSlider;


import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useDispatch } from "react-redux";
//import { addToCart } from "../../redux/cartSlice"; // <-- apne redux slice ka path adjust karo
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 import "../../css/Cards/CardSlider.css";

const CardSlider = () => {
  const [mydata, setMydata] = useState([]);
  const dispatch = useDispatch();

  const loadData = () => {
    let api = "http://localhost:3000/shopping";
    axios.get(api).then((res) => {
      setMydata(res.data);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  const cartDataAdd = (id, name, price, categ, desc, myimg) => {
    dispatch(
      addToCart({
        id: id,
        name: name,
        price: price,
        category: categ,
        description: desc,
        image: myimg,
        qnty: 1,
      })
    );
  };

  // 🔹 Custom Arrows
  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={`${className} custom-arrow prev-arrow`} onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={`${className} custom-arrow next-arrow`} onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const ans = mydata.map((key) => {
    return (
      <Card className="product-card" key={key.id}>
        <div className="image-wrapper">
          <img src={key.image} alt={key.name} className="card-image" />
        </div>
        <Card.Body>
          <Card.Title>{key.name} for {key.category}</Card.Title>
          <Card.Text>
            {key.description}
            <br />
            <span className="price">Price : ₹{key.price}</span>
          </Card.Text>
          <Button
            variant="primary"
            onClick={() =>
              cartDataAdd(
                key.id,
                key.name,
                key.price,
                key.category,
                key.description,
                key.image
              )
            }
          >
            Add to cart
          </Button>
        </Card.Body>
      </Card>
    );
  });

  return (
    <div className="slider-container">
      <h2 className="slider-title">New Arrival</h2>
      <Slider {...settings}>{ans}</Slider>
    </div>
  );
};

export default CardSlider;

