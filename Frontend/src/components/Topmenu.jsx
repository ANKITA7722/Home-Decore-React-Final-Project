import {Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Topmenu=()=>{
    return(
        <>
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">OnlineShopping</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link  as={Link} to="shop">Shop</Nav.Link>
           
            <Nav.Link  as={Link} to="menswear">Kitchen & Dining</Nav.Link>
            <Nav.Link  as={Link} to="womenwear">Lighting</Nav.Link>
            <Nav.Link  as={Link} to="kidswear">Wall Decor</Nav.Link>
            <Nav.Link  as={Link} to="kidswear">Bath Decor</Nav.Link>
            <Nav.Link  as={Link} to="kidswear">Furniture</Nav.Link>
            <Nav.Link  as={Link} to="kidswear">Discover</Nav.Link>
            
            {/* <Nav.Link  as={Link} to="contact">Contact us</Nav.Link> */}
          </Nav>
        </Container>
     </Navbar>

    
        </>
    )
}

export default Topmenu;