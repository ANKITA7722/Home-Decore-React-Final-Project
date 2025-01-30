import { useState, useEffect } from "react";

import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useDispatch } from 'react-redux';
import { addToCart } from '../cartSlice';
import { useNavigate } from 'react-router-dom';

const Search=()=>{
    const [pro, setPro]=useState("");


    
 const [mydata, setMydata]= useState([]);
 const dispatch= useDispatch();
 const navigate= useNavigate();

 const loadData=()=>{
    let api="http://localhost:3000/shopping/?type=new";
    axios.get(api).then((res)=>{
        setMydata(res.data);
    })
 }

 useEffect(()=>{
    loadData();
 }, []);



 const cartDataAdd=(id, name, price, categ, desc, myimg ,type)=>{
  dispatch(addToCart({id:id, name:name, price:price, category:categ, description:desc, image:myimg,type:type, qnty:1}))
 }


const goto_pro_detail=(id)=>{
  navigate(`/prodetail/${id}`);
}


 const ans=mydata.map((key)=>{
      let mystr=key.name.toLowerCase(); 
      console.log(mystr);
      let myPro= pro.toLowerCase();   
      let proStatus= mystr.includes(myPro);
      console.log(proStatus);
            
     if (proStatus==true)
     {


   return(
    <>
    
    <Card style={{width:"380px", marginTop:"10px"}}>
        <a href='#' onClick={()=>{goto_pro_detail(key.id)}}>
           <img src={key.image} style={{height:"300px"}}  />
        </a>  
      <Card.Body>
        <Card.Title> {key.name} for {key.category}</Card.Title>
        <Card.Text>
            {key.description} 
            <br/>
            <span style={{color:'red', fontWeight:'bold'}}>Price : Rs. {key.price}/-</span>  
        </Card.Text>
        <Button variant="primary" 
        onClick={()=>{cartDataAdd(key.id, key.name, key.price, key.category, key.description, key.image,key.type)}}>add to cart</Button>
      </Card.Body>
    </Card>

    
    </>
   )
}
 })



    return(
        <>
        <center>
           <h1> Search Products</h1>
           Enter Product Name: <input type="text" value={pro} 
           onChange={(e)=>{setPro(e.target.value)}} />
        </center>
          <hr />

         
       <div id="cardData">
         {ans}     
       </div>
        </>
    )
}
export default Search;