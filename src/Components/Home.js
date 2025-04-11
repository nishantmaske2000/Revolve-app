import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div>
        {/* <!-- ============Home Banner Section Start============================= --> */}
        <div className="banner">
          <div class="overlay-1">
            <h1>Wake Up</h1>
            <h3>It's Time To Improve</h3>
            <span class="banner-content">
              <p>
                Our gym is equipped with the industry’s finest strength
                <br />
                and cardio equipment you need for your fitness.{" "}
              </p>
            </span>
            <Link to="/contact" className="btnji">
              Get Started</Link>
            
          </div>
        </div>
        {/* // <!-- ============Home Banner Section End============================= --> */}

        {/* //  <!-- ============Features Section Start============================= --> */}
        <div className="features">
          <h3>Featured In</h3>
          <div class="feature12">
            <img src="/images/a-1.png" />
            <img src="/images/b-1.png" />
            <img src="/images/d-1.png" />
            <img src="/images/c-1.png" />
          </div>
        </div>
        {/* <!-- ============Features Section End============================= --> */}

        <div class="back">
          <div class="div_1">
            <img src="/images/yaro1.png" />
          </div>
          <div class="div_2">
            <h1>Why Choose Us</h1>
          </div>
          <div class="div_3">
            <img src="/images/yaro2.png" />
          </div>
        </div>
        <div class="div_4">
          {/* <center><img  src="/images/3img.jpg" style={{borderradius : 50% , height: 60%; width: 20%; margin-top: -300px;}}/> */}
          <div style={{ textAlign: "center" }}>
            <img
              src="/images/3img.jpg"
              style={{
                borderRadius: "50%",
                height: "60%",
                width: "20%",
                marginTop: "-300px",
              }}
              alt="Image"
            />
          </div>
        </div>
        <div class="pr">
          <p>
            We are a spacious gym of 4500 sq ft of area with the best life
            fitness equipment’s and also with 24*7 AC coverage. We have the best
            trainers who are all certified in their own streams. We have one of
            the best group classes sessions and yoga trainer. Our fitness
            sessions include group sessions and individualistic, personal
            training. We also have yoga, stepper workouts and HIIT besides Zumba
            and resistant training.
          </p>
          <center>
            {" "}
            <button class="cd">
              <Link to="/about">See More</Link>
            </button>
          </center>
        </div>

        {/* <!-- ============Testimonial Section Start============================= --> */}
        <div class="te">
          <h1>Testimonial</h1>
          <p>
            If you follow the right workout routine, you will get exactly what
            you need.
          </p>
        </div>
        <div class="tes">
          <div class="testimonial">
            <img src="/images/testi1.jpg" />
            <h2>Courtney Henry</h2>
            <p>
              Such a clean and welcoming environment. Equipment is always clean
              and they are so nice. I will Never go to another Gym.sprint GYm is
              the best gym l've ever been to ! They are always posting cool and
              fun things   on Facebook.
            </p>
            <div class="stars">
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star-half"></i>
            </div>
          </div>

          <div class="testimonial-1">
            <img src="/images/testi3.jpg" />
            <h2>Cameron Williamson</h2>
            <p>
              The abundant equipment selection Gym is kept clean,and in good
              working order. Sprint Gym Staff is cheerful and pleasant. I like
              the freedom to visit Sprint Gym I want when out of town. Been a
              member for 11 years.{" "}
            </p>
            <div class="stars">
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star-half"></i>
            </div>
          </div>

          <div class="testimonial" id="testu">
            <img src="/images/testi2.jpg" />
            <h2>Jane Cooper</h2>
            <p>
              Such a clean and welcoming environment. Equipment is always clean
              and they are so nice. I will Never go to another Gym.sprint GYm is
              the best gym l've ever been to ! They are always posting cool and
              fun things on Facebook.
            </p>
            <div class="stars">
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star-half"></i>
            </div>
          </div>
        </div>
        {/* <!-- ============Testimonial Section Start============================= --> */}

        {/* <!-- ============Our Trainer Section Start============================= --> */}
        <div class="train">
          <h1>Our Trainers</h1>
          <p>
            Whatever your fitness goal, our personal trainers can offer
            one-to-one sessions and classes.
          </p>
        </div>

        <div class="main">
          <div class="card-11">
            <img src="/images/om yadav.png" />
            <div class="intro">
              <h1>Om Yadav</h1>
              <p>Coach(Trainer)</p>
            </div>
          </div>

          <div class="card-11">
            <img src="/images/kumar.png" />
            <div class="intro">
              <h1>Kumar</h1>
              <p> Fitness Coach</p>
            </div>
          </div>

          <div class="card-11">
            <img src="/images/mithun.png" />
            <div class="intro">
              <h1>Mithun</h1>
              <p>Fitness Coach</p>
            </div>
          </div>

          <div class="card-11">
            <img src="/images/cameron.jpg" />
            <div class="intro">
              <h1>Cameron William</h1>
              <p>Fitness Coach</p>
            </div>
          </div>
        </div>
        {/* <!-- ============Our Trainer Section End============================= --> */}

        {/* <!-- ============Plans Section Start============================= --> */}
        <div class="mem">
          <h1>Membership Plans</h1>
          <p>Choose the membership plan that is right for your fitness.</p>
        </div>
        <div class="rita">
          <section class="pricing">
            <div class="plan">
              <h2>Montly Plan</h2>
              <br />
              <p>
                Whether you want to build muscle or completely transform your
                body.
              </p>
              <br />
              <h1>₹ 1999</h1>
              <br />
              <p>Includes:</p>
              <br />
              <ul>
                <li>24/7 Gym Access</li>
                <li>Consultation</li>
              </ul>
              <button class="contact-btn">
                <Link to="/contact">Contact Us</Link>
              </button>
            </div>
            <div class="plan">
              <h2>Quatarly Plan</h2>
              <br />
              <p>
                Whether you want to build muscle or completely transform your
                body.
              </p>
              <br />
              <h1>₹ 4999</h1>
              <br />
              <p>Includes:</p>
              <br />
              <ul>
                <li>24/7 Gym Access</li>
                <li>Consultation</li>
              </ul>
              <button class="contact-btn">
                <Link to="/contact">Contact Us</Link>
              </button>
            </div>
            <div class="plan">
              <h2>Half Yearly Plan</h2>
              <br />
              <p>
                Whether you want to build muscle or completely transform your
                body.
              </p>
              <br />
              <h1>₹6999</h1>
              <br />
              <p>Includes:</p>
              <br />
              <ul>
                <li>24/7 Gym Access</li>
                <li>Consultation</li>
              </ul>
              <button class="contact-btn">
                <Link to="/contact">Contact Us</Link>
              </button>
            </div>
            <div class="plan">
              <h2>Yearly Plan</h2>
              <br />
              <p>
                Whether you want to build muscle or completely transform your
                body.
              </p>
              <br />
              <h1>₹9999</h1>
              <br />
              <p>Includes:</p>
              <br />
              <ul>
                <li>24/7 Gym Access</li>
                <li>Consultation</li>
              </ul>
              <button class="contact-btn">
                <Link to="/contact">Contact Us</Link>
              </button>
            </div>
          </section>
          <div class="mem-1">
            <h1>Couple Membership Plans</h1>
            <p>Choose the membership plan that is right for your fitness.</p>
          </div>
          <section class="pricing">
            <div class="plan">
              <h2>Montly Plan</h2>
              <br />
              <p>
                Whether you want to build muscle or completely transform your
                body.
              </p>
              <br />
              <h1>₹3499</h1>
              <br />
              <p>Includes:</p>
              <br />
              <ul>
                <li>24/7 Gym Access</li>
                <li>Consultation</li>
              </ul>
              <button class="contact-btn">
                <Link to="/contact">Contact Us</Link>
              </button>
            </div>
            <div class="plan">
              <h2>Quatarly Plan</h2>
              <br />
              <p>
                Whether you want to build muscle or completely transform your
                body.
              </p>
              <br />
              <h1>₹8999</h1>
              <br />
              <p>Includes:</p>
              <br />
              <ul>
                <li>24/7 Gym Access</li>
                <li>Consultation</li>
              </ul>
              <button class="contact-btn">
                <Link to="/contact">Contact Us</Link>
              </button>
            </div>
            <div class="plan">
              <h2>Half Yearly Plan</h2>
              <br />
              <p>
                Whether you want to build muscle or completely transform your
                body.
              </p>
              <br />
              <h1>₹12999</h1>
              <br />
              <p>Includes:</p>
              <br />
              <ul>
                <li>24/7 Gym Access</li>
                <li>Consultation</li>
              </ul>
              <button class="contact-btn">
                <Link to="/contact">Contact Us</Link>
              </button>
            </div>
            <div class="plan">
              <h2>Yearly Plan</h2>
              <br />
              <p>
                Whether you want to build muscle or completely transform your
                body.
              </p>
              <br />
              <h1>₹17999</h1>
              <br />
              <p>Includes:</p>
              <br />
              <ul>
                <li>24/7 Gym Access</li>
                <li>Consultation</li>
              </ul>
              <button class="contact-btn">
                <Link to="/contact">Contact Us</Link>
              </button>
            </div>
          </section>
        </div>
        {/* <!-- ============Plans Section End============================= --> */}

        {/* <!-- ============come in today Section start============================= --> */}
        <div class="come-join">
          <div class="overlay1">
            <h1> Come in today!</h1>
            <span class="span2">
              <p>
                We believe in providing the best workout for the best results.
                <br />
                Feel good, feel good fast.{" "}
              </p>
            </span>
            <Link to="/contact" className="money-btn1">Contact Us</Link>
              
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
