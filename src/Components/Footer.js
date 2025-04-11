import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    
      <div className="footer-disti">
    <div className="footer-left">
        <Link to="index.html"/> <img src="/images/logo.png" height="100px" width="100px"/>
        <p className="footer-link">
            <Link to="/">Home</Link>
            |
            <Link to="/about">About Us</Link>
            |
            <Link to="/program">Programs</Link>
            |
            <Link to="/gallery">Gallery</Link>
            |
            <Link to="/contact">Contact</Link>
        </p>

        <p className="footer-companyname">Copyright @ 2023 <strong>Revolve Fitness Gym </strong></p>
        <p className="footer-companyname"> Designed By <strong><Link to="https://pskitservices.com/"/>PSK Technologies
                    Pvt. Ltd. </strong>
        </p>
    </div>
    <div className="footer-center"  >
        <div>
            <i className="fa fa-envelope" aria-hidden="true"></i>
            <p><span>Email:</span>
                revolvefitnessgym@gmail.com</p>
        </div>
        <div>
            <i className="fa fa-phone-square" aria-hidden="true"></i>
            <p><span>Phone:</span>+91 80871 18714</p>
        </div>
        <div>
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            <p><span>Address:</span>Chichbhavan Near Bhavans School ,Nagpur</p>
        </div>
    </div>

    <div className="footer-right">
        <h2 className="footer-company-about">
            Revolve Fitness Gym
        </h2>

        <div className="footer-icon">
            <Link to="https://www.facebook.com/people/Revolve-Fitness-Gym/100090769917976/"><span
                    className="fab fa-facebook-f"></span></Link>
            <Link to="https://x.com/KrunalThak71116"><span className="fab fa-twitter"></span></Link>
            <Link to="https://www.instagram.com/revolve_fitness_/"><span className="fab fa-instagram"></span></Link>
            <Link to="https://www.linkedin.com/in/revolve-fitness-gym-11400126a/"><span
                    className="fab fa-linkedin"></span></Link>
        </div>
    </div>
</div>
    
  )
}

export default Footer
