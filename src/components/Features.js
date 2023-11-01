import React from 'react'
import "../stylings/features.css"

const Features = () => {
  return (
    <div>
        <section className='Fe-bg-img'>
          <div className='container  position-relative'>
            <div className='row'>
							<h2 className='text-center mt-5'>7 Key Features of Axis</h2>
              <div className='col-md-12 d-flex justify-content-center mt-5'>
                <ul type="circle">
									<li>Special FD Interest rates when account balance exceeds Rs.10,000</li>
									<li>Full benefits of Axis Internet and Mobile banking</li>
									<li>Get Rs.150 discount on BookMyShow and offers on Airtel Wynk and Cleartrip</li>
									<li>Online Rewards Debits Card with online shopping offers</li>
									<li>Link your accounts to a branch of yours choice</li>
									<li>No minimum Balance Requried</li>
									<li>Get your Bank Account Number Instantly</li>
								</ul>
							</div>
            </div>
						<div className='row text-center mt-5'>
              <h4 className='text-white'>🎉Get Your New Account Now</h4>
							<button type="button" class="btn btn-primary btn-sm	my-4">Order now</button>
						</div>
          </div>
        </section>
    </div>
  )
}

export default Features