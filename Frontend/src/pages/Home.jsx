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

import ban1 from "../images/flat-design-interior-design-facebook-template_23-2149638858.jpg";
import ban2 from "../images/budget.webp";
import ban3 from "../images/flat-design-home-template_23-2150567224.jpg";

import card1 from "../images/Living-room_08c7c47d-5c40-49ac-a82f-4aff17a57308_400x.jpg";
import card2 from "../images/Pooja-Room_5771fbe0-798c-46dc-8c2e-dcfdd64538f8_400x.webp";
import card3 from "../images/Garden-room_924f1628-6692-45f5-8861-3b1ab22bca2f_400x.webp";
import card4 from "../images/Bedroom_8d1146d0-aeac-46fd-8f14-7408d8912582_400x.webp";
import card5 from "../images/Bathroom_890c7829-a136-46e4-89c8-2daca171dfbf_400x.webp";
import card6 from "../images/wallaart.webp";
import decor from "../images/Modern_Wall_Desktop.webp"

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { useDispatch } from "react-redux";
import { addToCart } from "../cartSlice";

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

      <Carousel>
        <Carousel.Item>
          <img src={ban1} width="100%" height="600px" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={ban2} width="100%" height="600px" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={ban3} width="100%" height="600px" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div style={{ marginTop: "40px" }}>
        <span style={{ textAlign: "center" }}>
          <p style={{ marginTop: "40px" }}>for every space</p>
          <h2>Shop by Room</h2>
        </span>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Card id="cards">
            <Card.Img variant="top" src={card1} />
            <Card.Body>
              <Card.Title>Leaving Room</Card.Title>
            </Card.Body>
          </Card>
          <Card id="cards">
            <Card.Img variant="top" src={card2} />
            <Card.Body>
              <Card.Title>Pooja Room</Card.Title>
            </Card.Body>
          </Card>
          <Card id="cards">
            <Card.Img variant="top" src={card3} />
            <Card.Body>
              <Card.Title>Garden</Card.Title>
            </Card.Body>
          </Card>
          <Card id="cards">
            <Card.Img variant="top" src={card4} />
            <Card.Body>
              <Card.Title>Bedroom</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Card id="cards">
            <Card.Img variant="top" src={card5} />
            <Card.Body>
              <Card.Title>Bathroom</Card.Title>
            </Card.Body>
          </Card>
          <Card id="cards">
            <Card.Img variant="top" src={card6} />
            <Card.Body>
              <Card.Title>Wall Aart</Card.Title>
            </Card.Body>
          </Card>
          <Card id="cards">
            <Card.Img variant="top" src={card5} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
            </Card.Body>
          </Card>
          <Card id="cards">
            <Card.Img variant="top" src={card5} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div>
  <img src={decor} style={{ width: "100%", height: "auto", maxWidth: "100%" }} />
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


      <h1> New Arrival</h1>
      <div id="cardData">{ans}</div>
    </>
  );
};

export default Home;
