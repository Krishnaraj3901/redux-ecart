import React from 'react'
import {
  MDBFooter,

} from 'mdb-react-ui-kit';

function Footer() {
  return (
    <div>
      <MDBFooter>
   <div className='text-center text-dark p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a style={{textDecoration:'none'}} className='text-dark'>
          EcartApplication.com
        </a>
      </div>
      </MDBFooter>
    </div>
  )
}

export default Footer