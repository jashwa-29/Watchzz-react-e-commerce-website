import React from 'react'
import { Link, Outlet,useLocation } from 'react-router-dom'
import "./nav.css"

// import 'bootstrap/dist/css/bootstrap.min.css';

// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const NavBar = ({cartCount}) => {

  const location = useLocation();

  return (
<header>
       {/* <div className="main-nav">
        <div className="nav-logo">
        <h3><a href="">WATCHZZ</a></h3>
        </div>
        <div className="nav-content">
            <div className="nav-content-one">
     <Link to="/">HOME</Link>
      <Link to="collection">COLLECTION</Link>
      <Link to="contact">CONTACT</Link>
            </div>
            <div className="nav-content-two">
              <Link>===</Link>
            <Link to="account">--</Link>
            <Link  to="cart">--</Link>
            </div>
        </div>
       </div>



      <Outlet></Outlet> */}

<Navbar expand="lg"  sticky="top" className="gridlayout bg-white">
      {/* <Container> */}
      {/* <div className="gridlayout">
        <div className="main-hero align-items-center"> */}
        <Navbar.Brand><a className='header-logo'><h3>WATCHZZ</h3></a></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav ms-auto me-lg-5 mb-2 mb-lg-0 mt-lg-0 mt-sm-4 mt-md-5 gap-5">
          {/* <Link to="/" className='nav-text'>HOME</Link>
          <Link to="collection" className='nav-text'>COLLECTION</Link> */}
                                  <Link to="/" className={`nav-text ${location.pathname === '/' ? 'active' : ''}`}>HOME</Link>
                        <Link to="collection" className={`nav-text ${location.pathname === '/collection' ? 'active' : ''}`}>COLLECTION</Link>
          {/* <Link to="contact" className='me-lg-5 me-sm-2 me-md-3 mb-sm-4 mb-md-4 mb-lg-0 nav-text'>CONTACT</Link> */}
          <Link to="contact" className={`me-lg-5 me-sm-2 me-md-3 mb-sm-4 mb-md-4 mb-lg-0 nav-text ${location.pathname === '/contact' ? 'active' : ''}`}>CONTACT</Link>
          </Nav>
          <Nav className="navbar-nav mb-2 mb-lg-0 gap-5 nav-icons">
          <Link className='header-icons'><i class="bi bi-search"></i></Link>
            <Link className='header-icons'><i class="bi bi-person-fill"></i></Link>
            <Link className={`header-icons cart-icon ${location.pathname === '/cart' ? 'active' : ''}`}  to="cart"><i class="bi bi-bag"></i><p>{cartCount}</p></Link>
          </Nav>
        </Navbar.Collapse>
        {/* </div>
        </div> */}
      {/* </Container> */}
    </Navbar>



   
      </header>


  )
}

export default NavBar
