import React from 'react'
import { Link } from 'react-router-dom'
import './about.css'

function About() {
  return (
    <div>
       {/* <!-- ============Banner Section Start=========================================== --> */}

<div className="pg_content1">
  <h1>About Us</h1>
  <p>We've got a membership option made for you no<br/> matter what you're looking for in gym.</p>
</div>

{/* <!-- ============Banner Section End=========================================== --> */}

  
      <section className="about-us">
          <div className="cards">
              <div className="card1">
                  <div className="icon12">
                      <img src="/images/3.png" alt="Years of Experience"/>
                    
                  </div>
                  <h2>10+</h2>
                  <p>Years Experience</p>
              </div>
              <div className="card1">
                  <div className="icon12">
                      <img src="/images/12.jpeg" alt="Number of Trainers"/>
                  </div>
                  <h2>15+</h2>
                  <p>Trainers</p>
              </div>
              <div className="card1">
                  <div className="icon12">
                      <img src="/images/11.jpeg" alt="Number of Members"/>
                  </div>
                  <h2>115+</h2>
                  <p>Members</p>
              </div>
              <div className="card1">
                  <div className="icon12">
                      <img src="/images/6.png" alt="Number of Awards"/>
                  </div>
                  <h2>7+</h2>
                  <p>Awards</p>
              </div>
          </div>
      </section>

      <section className="fetch" style={{ backgroundColor: 'black' }}      >
          <h2>Featured in</h2>
          <div className="img1">
              <img src="/images/a-1.png" alt="Featured brand 1"/>
              <img src="/images/b-1.png" alt="Featured brand 2"/>
              <img src="/images/c-1.png" alt="Featured brand 3"/>
              <img src="/images/d-1.png" alt="Featured brand 4"/>
          </div>
      </section>
      <section className="hero2">
          <div className="overlay2"></div>
          <div className="hero-content2">
              <h1>EXPLORE OUR GYM</h1>
              <p>Started in 2023, REVOLVE FITNESS is a top-notch fitness center and gym at CHICHBHAVAN in Nagpur. It
                  offers Cardio, Strength, Crossfit, Zumba, Yoga, Bollywood Dance, Bhangra, Meditation, Spinning, Ice
                  Bath, Steam Bath.The atmosphere is warm and pleasant with an exquisite lobby, beautifully designed Interiors and the
                  best coaches making your visit to REVOLVE FITNESS a surreal experience.
                  Our gym brings in new ideas in the fitness industry. Our members can exercise and at the same time,
                  view their heart rate levels.This way, they can know how fit they are and work hard on achieving
                  their fitness goal.</p>
              <Link to="/contact" className="btn2">JOIN US</Link>
              <div className="dots">
                  <span className="dot active"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
              </div>
          </div>
      </section>
    </div>
  )
}

export default About
