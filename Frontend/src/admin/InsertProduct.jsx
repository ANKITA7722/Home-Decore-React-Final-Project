import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';
const InsertProduct=()=>{
    const [input, setInput]= useState({});
    const navigate=useNavigate();

    const handleInput=(e)=>{
      let name=e.target.name;
      let value=e.target.value;
      setInput(values=>({...values, [name]:value}));
      console.log(input);
    }

    const handleSubmit=()=>{ 
        let api="http://localhost:3000/shopping";
        axios.post(api, input).then((res)=>{
          message.success("Product Succesfully save!!!");
        })

        navigate("/dashboard");
    }
    return(
        <>
          <h1> Insert New Product</h1>
          <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter name</Form.Label>
        <Form.Control type="text" name="name" value={input.name} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter price</Form.Label>
        <Form.Control type="text" name="price" value={input.price} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter description</Form.Label>
        <Form.Control type="text" name="description" value={input.description} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Select Category</Form.Label>
         <select name="category" value={input.category} onChange={handleInput}>
            <option>men</option>
            <option>women</option>
            <option>kids</option>
         </select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Image Path</Form.Label>
        <Form.Control type="text" name="image" value={input.image} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>select Product Type</Form.Label>
         <select name="type" value={input.type} onChange={handleInput}>
            <option>new</option>
            <option>old</option>
         </select>
      </Form.Group>

     
      <Button variant="primary" type="button" onClick={handleSubmit}>
        Submit
      </Button>
      </Form>


        </>
    )
}

export default InsertProduct;