import React from 'react'
import img1 from './assets/Link → partner1.png.png'
import img2 from './assets/Link → partner2.png.png'
import img3 from './assets/Link → partner3.png.png'
import img4 from './assets/Link → Refund-Advantage-g-1.png.png'

function Footer() {
  return (
    <>

    <div className="container">
        <div className="row">
            <div className="col-3 col-lg-3 col-md-12 col-sm-12">
                <img src={img1} alt="" />

            </div>
            <div className="col-3  col-lg-3 col-md-12 col-sm-12">
                <img src={img2} alt="" />

            </div>
            <div className="col-3  col-lg-3 col-md-12 col-sm-12">
                <img src={img3} alt="" />

            </div>
            <div className="col-3  col-lg-3 col-md-12 col-sm-12">
                <img src={img4} alt="" />

            </div>
        </div>
    </div>
      
    </>
  )
}

export default Footer
