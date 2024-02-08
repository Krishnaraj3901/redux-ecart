import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MDBBadge,  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {


  const wishlist = useSelector((state)=>state.wishlistReducer)
  console.log(wishlist);

  const addToCart = useSelector((state)=>state.cartlistReducer)
  console.log(addToCart);



  return (
    <div><Navbar collapseOnSelect expand="lg" className="bg-dark">
    <Container>
        <i className='fa-solid fa-shopping-cart'></i>
      <Navbar.Brand href="/" className='text-light'>Shop N Shop</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        </Nav>
        <Nav>
        <Link to={'/wishlist'}>
        <Nav.Link href="#deets" >
            <i className='fa-solid fa-heart text-danger fs-4 m-2'></i>
            <MDBBadge color='danger' light pill className='text-danger position-absolute translate-middle'>
          {wishlist.length}
          <span class="visually-hidden">unread messages</span>
        </MDBBadge>
          </Nav.Link>
        </Link>
        
          <Link to={'/cart'}>
          <Nav.Link eventKey={2} href="#memes">
           <i className='fa-solid fa-cart-plus text-white fs-4 m-2'></i>
           <MDBBadge color='danger' light pill className='text-dark position-absolute translate-middle'>
         {addToCart.length}
          <span class="visually-hidden">unread messages</span>
        </MDBBadge>
          </Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar></div>
  )
}

export default Header