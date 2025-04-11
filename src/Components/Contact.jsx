import React from 'react'
import './contact.css'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div>
        {/* <!-- ============Banner Section Start=========================================== --> */}

<div class="pg_content">
    <h1>Our Contact</h1>
    <p>If you have any questions,feel free to contact us.</p>
</div>

{/* <!-- ============Banner Section End=========================================== --> */}



    {/* <!-- Contact start --> */}
    <div class="maincontainer">
        <div class="cont">
            <h2>REVOLVE <span>FITNESS</span></h2>
            <div class="contact">
                <div class="left">
                    <div class="container1">
                        <div class="grid1">
                            {/* <!-- Address Column --> */}
                            <div class="column1">
                            <div class="icon1">
                                <i class="fa fa-map-marker" aria-hidden="true"></i>
                            </div>
                                <p>56,57, Chichbhavan, Near Bhavans School, Nagpur, India, Maharashtra</p>
                            </div>
                            
                            {/* <!-- Phone Column --> */}
                            <div class="column1">
                                <div class="icon1">
                                <i class="fa fa-phone" aria-hidden="true"></i></div>
                                <p>+91 80871 18714</p>
                            </div>
                            
                            {/* <!-- Email Column --> */}
                            <div class="column1">
                                <div class="icon1">
                                <i class="fa fa-envelope" aria-hidden="true"></i></div>
                                <p>info@revolvefitness.com</p>
                            </div>
                        </div>
                </div>
                   <center><div class="social">
                        <h3>Connect with us</h3>
                        <div class="contact-icons">
                            <Link to="https://www.facebook.com/people/Revolve-Fitness-Gym/100090769917976/"><i class="fab fa-facebook-f"></i></Link>
                            <Link to="https://x.com/KrunalThak71116"><i class="fab fa-twitter"></i></Link>
                            <Link to="https://www.instagram.com/revolve_fitness_/"><i class="fab fa-instagram"></i></Link>
                            <Link to="https://www.linkedin.com/in/revolve-fitness-gym-11400126a/"><i class="fab fa-linkedin"></i></Link>
                        </div>
                    </div></center> 
                </div>
                <div class="right">
                    <h3>Send Message</h3>
                    <form>
                        <input type="text" placeholder="Full Name" required/>
                        <input type="tel" placeholder="Enter mobile number" required/>
                        <input type="email" placeholder="Email" required/>
                        <textarea placeholder="Type your message..." required></textarea>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Contact End --> */}
    <div class="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7446.156159009198!2d79.0712324!3d21.0695435!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4be53f9c3ed8f%3A0x49db4753885b3b54!2sREVOLVE%20FITNESS%20GYM!5e0!3m2!1sen!2sin!4v1737960094042!5m2!1sen!2sin" width="100%" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

    </div>
    
  )
}

export default Contact
