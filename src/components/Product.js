import React from 'react'
import img1 from "../assets/Card-1.jpg"
import img2 from "../assets/card-2.jpg"
import img3 from "../assets/card-3.jpg"

const Product = () => {
  return (
    <div>
			<div className='pro-img'>
			<div className='container'>
			<h2 className='text-center'>Products</h2>
        <div className='row' style={{marginLeft: "40px"}}>
				 <div className='col-md-4 pro-card'>
				  <div class="card" style={{width: "15rem", height: "21rem"}}>
            <img src={img1} class="card-img-top" alt="card-1" />
            <div class="card-body">
              <p class="card-text">Easy way to Access your ATM whenever you want!</p>
            </div>
          </div>
				 </div>
				 <div className='col-md-4 pro-card'>
				  <div class="card" style={{width: "15rem", height: "21rem"}}>
            <img src={img2} class="card-img-top" alt="card-2" height='275px'/>
            <div class="card-body">
              <p class="card-text">Zero Banking charges infinite possiblities!</p>
            </div>
          </div>
				 </div>
				 <div className='col-md-4 pro-card mb-5'>
				  <div class="card" style={{width: "15rem", height: "21rem"}}>
            <img src={img3} class="card-img-top" alt="card-3" height='265px'/>
            <div class="card-body">
              <p class="card-text">Easy EMI option by Zero percent loan!</p>
            </div>
          </div>
				 </div>
				</div>
      </div>
			</div>
    </div>
  )
}

export default Product