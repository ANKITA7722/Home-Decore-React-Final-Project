// import { useSelector } from "react-redux";
// import { FaShoppingCart, FaSearch } from "react-icons/fa";
// import { GrUserAdmin } from "react-icons/gr";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import Modal from "react-bootstrap/Modal";
// import axios from "axios";
// import { Button, Offcanvas, InputGroup, FormControl } from "react-bootstrap";
// import "../css/Search.css";


// function OffCanvasExample({ name, ...props }) {
//   const [show, setShow] = useState(false);
//   const [pro, setPro] = useState("");
//   const [results, setResults] = useState([]);
//   const navigate = useNavigate();

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const handleSearch = (e) => {
//     const query = e.target.value.toLowerCase();
//     setPro(query);

//     if (query) {
//       // Make an API call to fetch products matching the search term
//       axios
//         .get(`http://localhost:3000/shopping/?q=${query}`)
//         .then((res) => setResults(res.data))
//         .catch((err) => console.error(err));
//     } else {
//       setResults([]); // Clear results when input is empty
//     }
//   };

//   return (
//     <>
//     <span>
//       <Button variant="secondary" onClick={handleShow} className="me-2">
//         {name || "Search"}
//       </Button>

//       <Offcanvas show={show} onHide={handleClose} {...props}>
//         <Offcanvas.Header closeButton>
//           <div className="search-header">
//             <Offcanvas.Title className="search-title">Search</Offcanvas.Title>

//             <InputGroup className="search-input-group">
//               <FormControl
//                 placeholder="Type to search..."
//                 aria-label="Search"
//                 value={pro}
//                 onChange={handleSearch}
//               />
//               <Button
//                 variant="outline-secondary"
//                 onClick={() => navigate("/search")}
//               >
//                 <FaSearch />
//               </Button>
//             </InputGroup>
//           </div>
//         </Offcanvas.Header>

//         {/* Offcanvas body yaha ayegi */}
//       </Offcanvas>
//       </span>
//     </>
//   );
// }

// const Header = () => {
//   const mycart = useSelector((state) => state.mycart.cart);
//   const navigate = useNavigate();
//   const [show, setShow] = useState(false);
//   const [adminid, setAdminid] = useState("");
//   const [password, setPassword] = useState("");

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const cartPage = () => {
//     navigate("/cart");
//   };

//   const handleSubmit = () => {
//     axios
//       .get(`http://localhost:3000/adminuser/?adminid=${adminid}`)
//       .then((res) => {
//         if (res.data.length >= 1 && res.data[0].password === password) {
//           navigate("/dashboard");
//         } else {
//           alert("Invalid Admin ID or Password");
//         }
//       });
//   };

//   const cartLen = mycart.length;

//   return (
//     <>
//       <div id="header">
//         <span id="carticon">{cartLen}</span>

//         <a href="#" onClick={cartPage}>
//           <FaShoppingCart className="space" />
//         </a>

//         <a href="#">
//           <GrUserAdmin className="space" onClick={handleShow} />
//         </a>

//         <OffCanvasExample name="Search" placement="top"  style={{heigth:"500px"}}/>

//         <Modal show={show} onHide={handleClose}>
//           <Modal.Header closeButton>
//             <Modal.Title>Admin Login</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             Enter ID:{" "}
//             <input
//               type="text"
//               value={adminid}
//               onChange={(e) => setAdminid(e.target.value)}
//             />
//             <br />
//             Enter Password:{" "}
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleClose}>
//               Close
//             </Button>
//             <Button variant="primary" onClick={handleSubmit}>
//               Login
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </div>
//     </>
//   );
// };

// export default Header;


const Header=()=>{
  return(

    <>
    <div id="header">
      <span >
    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    </p>
  </span>

    </div>
   
  </>
  )
  

}
export default Header;