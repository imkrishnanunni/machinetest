import React from 'react'
import logo from './assets/image 1.png'


function Navbar() {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container">
    <img src={logo} alt="" />
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item me-2">
          <a class="nav-link active" aria-current="page" href="#">Pricing </a>
        </li>
        <li class="nav-item me-2">
          <a class="nav-link active" aria-current="page" href="#">Contact Us  </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Features</a>
        </li>
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Pricing
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#"> Sorry i can't complete this</a></li>
            
          </ul>
        </li>
      
      </ul>
      <form class="d-flex" role="search">
      <button class="btn btn-outline-success me-4" type="submit">Get a Demo</button>
        <button class="btn btn-outline-success" type="submit">Sign in</button>
      </form>
    </div>
  </div>
</nav>
          
    </>
  )
}

export default Navbar;
