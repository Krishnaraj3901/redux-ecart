import React from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Col, Row } from 'react-bootstrap';
import useFetch from '../Hooks/useFetch';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/slices/cartlistSlice';
import { addToWishlist } from '../Redux/slices/wishlistSlice';

function Home() {

  const data = useFetch('https://dummyjson.com/products')
  console.log(data);

  const dispatch = useDispatch()

  return (
    <div>
      <Row className="m-4">
        {
          data.length>0?data.map((item)=>(
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
        <MDBBtn onClick={()=>dispatch(addToWishlist(item))} href='#'><i  className='fa-solid fa-heart text-danger fs-3'></i></MDBBtn>
        <MDBBtn onClick={()=>dispatch(addToCart(item))} href='#'><i className='fa-solid fa-cart-plus text-success fs-3'></i></MDBBtn>

        </div>
      </MDBCardBody>
    </MDBCard>
        </Col>
          )):'no product available'
        }
      </Row>
    </div>
  )
}

export default Home