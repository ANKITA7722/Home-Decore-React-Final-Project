import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../css/MainHeader.css";
import { useState } from "react";
import { FaShoppingCart, FaSearch, FaBars } from "react-icons/fa";
import { Button, Offcanvas, InputGroup, FormControl } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { GrUserAdmin } from "react-icons/gr";

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);
  const [pro, setPro] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setPro(query);

    if (query) {
      axios
        .get(`http://localhost:3000/shopping/?q=${query}`)
        .then((res) => setResults(res.data))
        .catch((err) => console.error(err));
    } else {
      setResults([]);
    }
  };

  return (
    <>
      <span>
        <FaSearch className="icon-btn" onClick={handleShow} />

        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <div className="search-header">
              <Offcanvas.Title className="search-title">Search</Offcanvas.Title>

              <InputGroup className="search-input-group">
                <FormControl
                  placeholder="Type to search..."
                  aria-label="Search"
                  value={pro}
                  onChange={handleSearch}
                />
                <Button
                  variant="outline-secondary"
                  onClick={() => navigate("/search")}
                >
                  <FaSearch />
                </Button>
              </InputGroup>
            </div>
          </Offcanvas.Header>

          <Offcanvas.Body>
            {results.length > 0 ? (
              <ul className="search-results">
                {results.map((item, i) => (
                  <li key={i}>{item.name}</li>
                ))}
              </ul>
            ) : (
              <p className="no-results">No results found</p>
            )}
          </Offcanvas.Body>
        </Offcanvas>
      </span>
    </>
  );
}

const MainHeader = () => {
  // const mycart = useSelector((state) => state.mycart.cart);
  // const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [adminid, setAdminid] = useState("");
  const [password, setPassword] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const cartPage = () => {
    navigate("/cart");
  };

  const handleSubmit = () => {
    axios
      .get(`http://localhost:3000/adminuser/?adminid=${adminid}`)
      .then((res) => {
        if (res.data.length >= 1 && res.data[0].password === password) {
          navigate("/dashboard");
        } else {
          alert("Invalid Admin ID or Password");
        }
      });
  };

  // const cartLen = mycart.length;
  return (
    <>
      <Navbar expand="lg" variant="dark" className="navbar">
        <Container>
          <Navbar.Brand as={Link} to="/" className="nav-logo"> OnlineShopping </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
            <Nav>
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/shop">Shop</Nav.Link>

              <li className="nav-item dropdown">
                <Nav.Link as={Link} to="/menswear">Kitchen</Nav.Link>
                <ul className="dropdown-menu">
                  <li>
                    <Nav.Link as={Link} to="/kitchen/utensils" className="dropdown-item">Utensils</Nav.Link>
                  </li>

                  <li>
                    <Nav.Link
                      as={Link}
                      to="/kitchen/appliances"
                      className="dropdown-item"
                    >
                      Appliances
                    </Nav.Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Nav.Link as={Link} to="/womenwear"> Lighting </Nav.Link>
                <ul className="dropdown-menu">
                  <li>
                    <Nav.Link
                      as={Link}
                      to="#"
                      className="dropdown-item"
                    >
                      Utensils
                    </Nav.Link>
                  </li>
                  <li>
                    <Nav.Link
                      as={Link}
                      to="/kitchen/appliances"
                      className="dropdown-item"
                    >
                      Appliances
                    </Nav.Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Nav.Link as={Link} to="/kidswear">
                  Wall Decor
                </Nav.Link>
                <ul className="dropdown-menu">
                  <li>
                    <Nav.Link
                      as={Link}
                      to="/kitchen/utensils"
                      className="dropdown-item"
                    >
                      Utensils
                    </Nav.Link>
                  </li>
                  <li>
                    <Nav.Link
                      as={Link}
                      to="/kitchen/appliances"
                      className="dropdown-item"
                    >
                      Appliances
                    </Nav.Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Nav.Link as={Link} to="#">
                  Bath Decor
                </Nav.Link>
                <ul className="dropdown-menu">
                  <li>
                    <Nav.Link
                      as={Link}
                      to="/kitchen/utensils"
                      className="dropdown-item"
                    >
                      Utensils
                    </Nav.Link>
                  </li>
                  <li>
                    <Nav.Link
                      as={Link}
                      to="/kitchen/appliances"
                      className="dropdown-item"
                    >
                      Appliances
                    </Nav.Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Nav.Link as={Link} to="kidswear">
                  Furniture
                </Nav.Link>
                <ul className="dropdown-menu">
                  <li>
                    <Nav.Link
                      as={Link}
                      to="/kitchen/utensils"
                      className="dropdown-item"
                    >
                      Utensils
                    </Nav.Link>
                  </li>
                  <li>
                    <Nav.Link
                      as={Link}
                      to="/kitchen/appliances"
                      className="dropdown-item"
                    >
                      Appliances
                    </Nav.Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Nav.Link as={Link} to="kidswear">
                  Discover
                </Nav.Link>
                <ul className="dropdown-menu">
                  <li>
                    <Nav.Link
                      as={Link}
                      to="/kitchen/utensils"
                      className="dropdown-item"
                    >
                      Utensils
                    </Nav.Link>
                  </li>
                  <li>
                    <Nav.Link
                      as={Link}
                      to="/kitchen/appliances"
                      className="dropdown-item"
                    >
                      Appliances
                    </Nav.Link>
                  </li>
                </ul>
              </li>

              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

          {/* Right - Icons + Toggle */}
          <div className="d-flex align-items-center gap-3">
            <OffCanvasExample name="Search" placement="top" />
            <GrUserAdmin className="icon-btn" onClick={handleShow}/>
            <FaShoppingCart className="icon-btn"  onClick={cartPage} />
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </div>
        </Container>
      </Navbar>

      {/* Admin Login Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Admin Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Enter ID:{" "}
          <input
            type="text"
            value={adminid}
            onChange={(e) => setAdminid(e.target.value)}
          />
          <br />
          Enter Password:{" "}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MainHeader;

// import { useSelector } from "react-redux";
// import { FaShoppingCart, FaSearch, FaBars } from "react-icons/fa";
// import { GrUserAdmin } from "react-icons/gr";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import Modal from "react-bootstrap/Modal";
// import axios from "axios";
// import { Button, Offcanvas, InputGroup, FormControl } from "react-bootstrap";
// import "../css/MainHeader.css"; // 👈 new css file import
// // import "../css/Search.css";

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
//       axios
//         .get(`http://localhost:3000/shopping/?q=${query}`)
//         .then((res) => setResults(res.data))
//         .catch((err) => console.error(err));
//     } else {
//       setResults([]);
//     }
//   };

//   return (
//     <>
//       <span>
//         <FaSearch className="icon-btn" onClick={handleShow} />

//         <Offcanvas show={show} onHide={handleClose} {...props}>
//           <Offcanvas.Header closeButton>
//             <div className="search-header">
//               <Offcanvas.Title className="search-title">Search</Offcanvas.Title>

//               <InputGroup className="search-input-group">
//                 <FormControl
//                   placeholder="Type to search..."
//                   aria-label="Search"
//                   value={pro}
//                   onChange={handleSearch}
//                 />
//                 <Button
//                   variant="outline-secondary"
//                   onClick={() => navigate("/search")}
//                 >
//                   <FaSearch />
//                 </Button>
//               </InputGroup>
//             </div>
//           </Offcanvas.Header>

//           <Offcanvas.Body>
//             {results.length > 0 ? (
//               <ul className="search-results">
//                 {results.map((item, i) => (
//                   <li key={i}>{item.name}</li>
//                 ))}
//               </ul>
//             ) : (
//               <p className="no-results">No results found</p>
//             )}
//           </Offcanvas.Body>
//         </Offcanvas>
//       </span>
//     </>
//   );
// }

// const MainHeader = () => {
//   const mycart = useSelector((state) => state.mycart.cart);
//   const navigate = useNavigate();
//   const [show, setShow] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
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
//       <nav className="navbar">
//         {/* Left side - Logo */}
//         <div className="nav-logo" onClick={() => navigate("/")}>
//           MyWebsite
//         </div>

//         {/* Middle - Menu Items */}
//         <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
//           <li onClick={() => navigate("/")}>Home</li>
//           <li onClick={() => navigate("/shop")}>Shop</li>
//           <li onClick={() => navigate("/about")}>About</li>
//           <li onClick={() => navigate("/contact")}>Contact</li>
//         </ul>

//         {/* Right side - Icons */}
//         <div className="nav-icons">
//           <OffCanvasExample name="Search" placement="top" />

//           <GrUserAdmin className="icon-btn" onClick={handleShow} />

//           <div className="cart-wrapper" onClick={cartPage}>
//             <FaShoppingCart className="icon-btn" />
//             <span className="cart-count">{cartLen}</span>
//           </div>

//           {/* Hamburger menu (only for mobile) */}
//           <FaBars
//             className="hamburger"
//             onClick={() => setMenuOpen(!menuOpen)}
//           />
//         </div>
//       </nav>

//       {/* Admin Login Modal */}
//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Admin Login</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           Enter ID:{" "}
//           <input
//             type="text"
//             value={adminid}
//             onChange={(e) => setAdminid(e.target.value)}
//           />
//           <br />
//           Enter Password:{" "}
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleSubmit}>
//             Login
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// };

// export default MainHeader;
