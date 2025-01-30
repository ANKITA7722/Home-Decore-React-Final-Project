import { useState, useEffect } from 'react';
import axios from "axios";
import Carousel from 'react-bootstrap/Carousel';

// import ban1 from "../images/b1.jpg";


import d1 from "../images/img1.avif";
import d2 from "../images/img2.avif";
import d3 from "../images/img3.avif";
import d4 from "../images/img4.avif";
import d5 from "../images/img5.avif";
import d6 from "../images/img6.avif";
import d7 from "../images/img7.avif";
import d8 from "../images/img8.avif";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useDispatch } from 'react-redux';
import { addToCart } from '../cartSlice';

const KitchenAndDining=()=>{
 const [mydata, setMydata]= useState([]);
 const dispatch= useDispatch();

 const loadData=()=>{
   
    let api="http://localhost:3000/shopping/?category=men";
    axios.get(api).then((res)=>{
        setMydata(res.data);
    })
 }

 useEffect(()=>{
    loadData();
 }, []);


 const cartDataAdd=(id, name, price, categ, desc, myimg)=>{
  dispatch(addToCart({id:id, name:name, price:price, category:categ, description:desc, image:myimg, qnty:1}))
 }



 const ans=mydata.map((key)=>{
   return(
    <>
    
    <Card style={{width:"380px", marginTop:"10px"}}>
        <img src={key.image} style={{height:"300px"}}  />
      <Card.Body>
        <Card.Title> {key.name} for {key.category}</Card.Title>
        <Card.Text>
            {key.description} 
            <br/>
            <span style={{color:'red', fontWeight:'bold'}}>Price : Rs. {key.price}/-</span>  
        </Card.Text>
        <Button variant="primary" 
        onClick={()=>{cartDataAdd(key.id, key.name, key.price, key.category, key.description, key.image)}}>add to cart</Button>
      </Card.Body>
    </Card>

    
    </>
   )

 })

    return(
        <>
 <div id='container'>
       
        <div>
          <img src={d1} width="100px" height="100px" style={{borderRadius:"50%"}} />
          <p>Lighting</p>
        </div>
        <div>
          <img src={d2} width="100px" height="100px" style={{borderRadius:"50%"}}/>
          <p>Best Seller</p>
        </div>
        <div>
          <img src={d3} width="100px" height="100px" style={{borderRadius:"50%"}}/>
          <p>Bath Decor</p>
        </div>
        <div>
          <img src={d4} width="100px" height="100px" style={{borderRadius:"50%"}}/>
          <p>Furniture</p>
        </div>
        <div>
          <img src= {d5} width="100px" height="100px" style={{borderRadius:"50%"}}/>
          <p>Decor</p>
        </div>
        <div>
          <img src={d6} width="100px" height="100px" style={{borderRadius:"50%"}}/>
          <p>New</p>
        </div>
        <div>
          <img src={d7} width="100px" height="100px" style={{borderRadius:"50%"}}/>
          <p>Kitchen</p>
        </div>
        <div>
          <img src={d8} width="100px" height="100px" style={{borderRadius:"50%"}}/>
          <p>Wall Decor</p>
        </div>

      </div>

       <h1>Men Collection</h1>
       <div id="cardData">
         {ans}     
      
       </div>

        </>
    )
}

export default KitchenAndDining;