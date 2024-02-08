import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { deleteFromWishlist } from '../Redux/slices/wishlistSlice';
import { addToCart } from '../Redux/slices/cartlistSlice';


function Wishlist() {
  const handleWishlistToCart=(item)=>{
    dispatch(addToCart(item))
    dispatch(deleteFromWishlist(item.id))
  }

  const dispatch=useDispatch()

  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  console.log(wishlistArray);
  return (
    <div>
      <Row>
        {
          wishlistArray.length>0?wishlistArray.map((item)=>(
            
                <Col sm={12} md={6} lg={4} xl={3}>
        <MDBCard className="m-4 shadow" style={{width:"100%", height:'550px'}}>
      <MDBCardImage className="shadow p-2" src={item.thumbnail}  position='top' alt='...' height={'250px'}
      width={'200px'} />
      <MDBCardBody className="text-center text-dark">
        <MDBCardTitle>{item.title}</MDBCardTitle>
        <MDBCardTitle>${item.price}</MDBCardTitle>
        <MDBCardTitle>{item.brand}</MDBCardTitle>
        <MDBCardText>
          {item.description.slice(0,70)}
        </MDBCardText>
        <div className='d-flex justify-content-between'> 
        {/* <MDBBtn onClick={()=>dispatch(addToWishlist(item))} href='#'><i  className='fa-solid fa-heart text-danger fs-3'></i></MDBBtn> */}
        <MDBBtn onClick={()=>dispatch(handleWishlistToCart(item.id))} href='#'><i className='fa-solid fa-cart-plus text-success fs-3'></i></MDBBtn>
        <MDBBtn onClick={()=>dispatch(deleteFromWishlist(item.id))} href='#'><i className='fa-solid fa-trash text-danger fs-3'></i></MDBBtn>


        </div>
      </MDBCardBody>
    </MDBCard>
        </Col>
            
          )):
          <div>
            <img className='m-2' src="https://i.gifer.com/embedded/download/XISf.gif" alt="" />
            <h2>YOUR WISHLIST IS EMPTY</h2>
            <Link to={'/'}>
            <button  className='btn m-2'>Home</button>
            </Link>
            
          </div>
        }
      </Row>
    </div>
  )
}

export default Wishlist