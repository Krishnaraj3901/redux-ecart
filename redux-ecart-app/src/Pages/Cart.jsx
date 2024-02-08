import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'

import {deleteFromCart, emptyCart} from "../Redux/slices/cartlistSlice"
import { Link, useNavigate } from 'react-router-dom';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';



function Cart() {
  const dispatch=useDispatch()

  const navigate=useNavigate()

  const [total, setTotal] = useState(0)

  const addToCartArray =useSelector ((state)=>state.cartlistReducer)
  console.log(addToCartArray);


  const getCartTotal=()=>{
    if(addToCartArray.length>0){
      setTotal(addToCartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
    }
    else{
      setTotal(0)
    }
  }
  console.log(total);

  useEffect(()=>{
    getCartTotal()
  },[addToCartArray])

  const handleCheckOut=()=>{
    if(addToCartArray.length>0){
    dispatch(emptyCart())
    alert("order placed successfully")
    navigate('/')
    }
    else{
      alert('Your cart is empty')
    }
  }


 
  return (
    <div>
    <Row>
      <Col className='
      container m-5 border'>
        {
          addToCartArray.length > 0 ? 
            <MDBTable hover>
              <MDBTableHead>
                <tr>
                  <th scope='col'>#</th>
                  <th scope='col'>Product Name</th>
                  <th scope='col'>Image</th>
                  <th scope='col'>Price</th>
                  <th scope='col'>Action</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                {addToCartArray.map((item, index) => (
                  <tr key={index}>
                    <th scope='row'>{index+1}</th>
                    <td>{item.title}</td>
                    <td><img src={item.thumbnail} width={'70px'} height={'50px'} alt="" /></td>
                    <td>${item.price}</td>
                    <td><i onClick={()=>dispatch(deleteFromCart(item.id))} className="fa-solid fa-trash text-danger"></i></td>
                  </tr>
                ))}
              </MDBTableBody>
            </MDBTable>
          :
          <div className='text-center'>
            <img style={{ height: '26rem' }} src="https://cdn.dribbble.com/users/530801/screenshots/2357094/present.gif" alt="" />
            <h1 className='m-2'>Your Wishlist is Empty</h1>
            <Link to={'/'}>
              <button  className='btn btn-primary m-4'>Back to Home</button>
            </Link>
          </div>
        }
      </Col>
      <Col className='border'> 
        <div>
          <h2 className='text-center m-5'>CART SUMMERY</h2>
          <h2>Total Number of products : {addToCartArray.length}</h2>
          <h3>Total : ${total}</h3>
          <div className='m-2 p-4'>
            <button onClick={handleCheckOut} className='btn btn-success'>Check Out</button>
          </div>
        </div>
      </Col>
    </Row>
  </div>
  )
}

export default Cart