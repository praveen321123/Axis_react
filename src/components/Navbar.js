import React from 'react'
import img1 from "../assets/AXISBANK.BO_BIG.D-d8105a87.png"
import "../stylings/home.css"
import { FaPercentage } from "react-icons/fa"
import { Link } from 'react-router-dom'
import img2 from "../assets/Card-1.jpg"
import img3 from "../assets/card-2.jpg"
import img4 from "../assets/card-3.jpg"

const Navbar = () => {
  return (
    <div>
      <section className='bg-img'>
        <div className='container-fluid'>
          <div className='row'>
              <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <div className='col-md-6 col-sm-12'>
                  <img src={img1} className='' width="100px"/>
                </div>

                <div className='col-md-6 col-sm-12'>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse justify-content-end me-4" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                      <a className="nav-link text-white mx-3" aria-current="page" href="#">Home</a>
                      <Link to={"/features"} className="nav-link text-white mx-3" href="#">Features</Link>
                      <Link to={"/products"} className="nav-link text-white mx-3" href="#">Product</Link>
                      <Link to={"/contact"} className="nav-link text-white mx-3" href="#">Contact</Link>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
					</div>
			  </div>

        <div className='container home-content position-relative'>
          <div className='row'>
            <div className='col-md-6'>
              <p className='text-white per-bg text-center'> 20<FaPercentage className='text-info'/> Discount for <span className='fw-bold'>1 Month</span> Account</p>
              <h2 className='mt-4 text-white'>The Next <span className='text-info'>Generation</span> Payment Method</h2>
              <p className='my-4 text-white'>Our team of expert uses a methodalogy to identify the credit <br/> cards most likely to fit your needs. We exmaine<br/> annual percntage rates, annual fees.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Navbar