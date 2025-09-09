import { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import "../css/Home.css";
import d1 from "../images/img1.avif";
import d2 from "../images/img2.avif";
import d3 from "../images/img3.avif";
import d4 from "../images/img4.avif";
import d5 from "../images/img5.avif";
import d6 from "../images/img6.avif";
import d7 from "../images/img7.avif";
import d8 from "../images/img8.avif";

import ban1 from "../images/Brown Modern Home Furniture Banner Landscape.png";
import ban2 from "../images/budget.webp";
import ban3 from "../images/Banner2_516ec488-5ffb-4069-b6cf-cb6a4b6a6490.webp";

import card1 from "../images/Leaving Room/1.png";
import card2 from "../images/Leaving Room/2.png";
import card3 from "../images/Leaving Room/3.png";
import card4 from "../images/Leaving Room/4.png";
import card5 from "../images/Leaving Room/5.png";
import card6 from "../images/Leaving Room/6.png";
import decor from "../images/Modern_Wall_Desktop.webp";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { useDispatch } from "react-redux";
import { addToCart } from "../cartSlice";
import CardSlider from "../components/Cards/CardSlider";

const Home = () => {
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

  const ans = mydata.map((key) => {
    return (
      <>
        <Card style={{ width: "280px", marginTop: "10px" }}>
          <img src={key.image} style={{ height: "300px" }} />
          <Card.Body>
            <Card.Title>
              {" "}
              {key.name} for {key.category}
            </Card.Title>
            <Card.Text>
              {key.description}
              <br />
              <span style={{ color: "red", fontWeight: "bold" }}>
                Price : {key.price}
              </span>
            </Card.Text>
            <Button
              variant="primary"
              onClick={() => {
                cartDataAdd(
                  key.id,
                  key.name,
                  key.price,
                  key.category,
                  key.description,
                  key.image
                );
              }}
            >
              add to cart
            </Button>
          </Card.Body>
        </Card>
      </>
    );
  });

  return (
    <>
      <div id="container">
        <div>
          <img
            src={d1}
            width="100px"
            height="100px"
            style={{ borderRadius: "50%" }}
          />
          <p>Lighting</p>
        </div>
        <div>
          <img
            src={d2}
            width="100px"
            height="100px"
            style={{ borderRadius: "50%" }}
          />
          <p>Best Seller</p>
        </div>
        <div>
          <img
            src={d3}
            width="100px"
            height="100px"
            style={{ borderRadius: "50%" }}
          />
          <p>Bath Decor</p>
        </div>
        <div>
          <img
            src={d4}
            width="100px"
            height="100px"
            style={{ borderRadius: "50%" }}
          />
          <p>Furniture</p>
        </div>
        <div>
          <img
            src={d5}
            width="100px"
            height="100px"
            style={{ borderRadius: "50%" }}
          />
          <p>Decor</p>
        </div>
        <div>
          <img
            src={d6}
            width="100px"
            height="100px"
            style={{ borderRadius: "50%" }}
          />
          <p>New</p>
        </div>
        <div>
          <img
            src={d7}
            width="100px"
            height="100px"
            style={{ borderRadius: "50%" }}
          />
          <p>Kitchen</p>
        </div>
        <div>
          <img
            src={d8}
            width="100px"
            height="100px"
            style={{ borderRadius: "50%" }}
          />
          <p>Wall Decor</p>
        </div>
      </div>

      {/*============================================================================================= */}
      <div>
        <Carousel>
          <Carousel.Item>
            <img src={ban1} width="100%" height="600px" />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={ban2} width="100%" height="600px" />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={ban3} width="100%" height="600px" />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      {/*============================================================================================= */}

      <div className="CardsContainer">
  <span className="CardsTop">
    <p>FOR EVERY SPACE</p>
    <h2>SHOP BY ROOM</h2>
  </span>

  <div className="CardsGrid">
    <Card className="CustomCard">
      <Card.Img variant="top" src={card1} />
    </Card>

    <Card className="CustomCard">
      <Card.Img variant="top" src={card2} />
    </Card>

    <Card className="CustomCard">
      <Card.Img variant="top" src={card3} />
    </Card>

    <Card className="CustomCard">
      <Card.Img variant="top" src={card4} />
    </Card>

    <Card className="CustomCard">
      <Card.Img variant="top" src={card5} />
    </Card>

    <Card className="CustomCard">
      <Card.Img variant="top" src={card6} />
    </Card>

    <Card className="CustomCard">
      <Card.Img variant="top" src={card5} />
    </Card>

    <Card className="CustomCard">
      <Card.Img variant="top" src={card5} />
    </Card>
  </div>
</div>


      {/*============================================================================================= */}
      <div>
        <img
          src={decor}
          style={{ width: "100%", height: "auto", maxWidth: "100%" }}
        />
      </div>

      <button className="button-container">
        <img src={d1} alt="New Arrival" />
        <span>New Arrivals</span>
      </button>

      <button className="button-container">
        <img src={d1} alt="New Arrival" />
        <span>Bestsellers</span>
      </button>

      <button className="button-container">
        <img src={d1} alt="New Arrival" />
        <span>Royal Family Collection</span>
      </button>

      <button className="button-container">
        <img src={d1} alt="New Arrival" />
        <span>Table Lamps</span>
      </button>

      <button className="button-container">
        <img src={d1} alt="New Arrival" />
        <span>Wall Sconces</span>
      </button>
      <button className="button-container">
        <img src={d1} alt="New Arrival" />
        <span>chandeliers</span>
      </button>
      <button className="button-container">
        <img src={d1} alt="New Arrival" />
        <span>floor-lamps</span>
      </button>
      <button className="button-container">
        <img src={d1} alt="New Arrival" />
        <span>wall vases</span>
      </button>
      <button className="button-container">
        <img src={d1} alt="New Arrival" />
        <span>cake & tiered Stands</span>
      </button>
      <button className="button-container">
        <img src={d1} alt="New Arrival" />
        <span>drinkware + bar</span>
      </button>
      <button className="button-container">
        <img src={d1} alt="New Arrival" />
        <span>rooster egg baskets</span>
      </button>
      <button className="button-container">
        <img src={d1} alt="New Arrival" />
        <span>all furniture</span>
      </button>
      <button className="button-container">
        <img src={d1} alt="New Arrival" />
        <span>blue & while ceramics</span>
      </button>
      <button className="button-container">
        <img src={d1} alt="New Arrival" />
        <span>handcrafted bras</span>
      </button>

      <div>
        <h1> for every space</h1>
      </div>

     {/* <h1> New Arrival</h1>
      <div id="cardData">{ans}</div> */}
      <CardSlider/>
    </>
  );
};

export default Home;
