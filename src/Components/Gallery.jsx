import React, { useState, useEffect } from 'react'
import './gallery.css'

function Gallery() {
  const [activeTab, setActiveTab] = useState("Tab1")
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [currentImageList, setCurrentImageList] = useState([])

  const images = {
    Tab1: [
      "/images/1.png",
      "/images/2.png",
      "/images/3.png",
      "/images/4.png",
      "/images/5.png",
      "/images/6.png",
      "/images/7.png",
      "/images/8.png",
      "/images/9.jpeg",
      "/images/10.jpeg",
      "/images/11.jpeg",
      "/images/12.jpeg",
    ],
    Tab2: [
      "/images/1.png",
      "/images/2.png",
      "/images/3.png",
      "/images/4.png",
      "/images/5.png",
      "/images/6.png",
      "/images/7.png",
      "/images/8.png",
    ],
    Tab3: [
      "/images/9.jpeg",
      "/images/10.jpeg",
      "/images/11.jpeg",
      "/images/12.jpeg",


    ],
  }

  const changeTab = (TabId) => {
    setActiveTab(TabId)
  }

  const openLightbox = (imageList, index) => {
    setCurrentImageList(imageList)
    setCurrentImageIndex(index)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = 'auto'
  }

  const changeImage = (direction) => {
    let newIndex = currentImageIndex + direction
    const max = currentImageList.length
    if (newIndex >= max) newIndex = 0
    if (newIndex < 0) newIndex = max - 1
    setCurrentImageIndex(newIndex)
  }

  const handleKeyDown = (e) => {
    if (lightboxOpen) {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') changeImage(1)
      if (e.key === 'ArrowLeft') changeImage(-1)
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [lightboxOpen, currentImageIndex])

  return (
    <div>
      <div className="pg_content3">
        <h1>Our Gallery</h1>
        <p>Get ready to elevate your fitness game in Nagpur’s<br /> ultimate gym experience.</p>
      </div>

      <div className="gallery">
        <ul className="controls">
          <li className={`buttons ${activeTab === "Tab1" ? "active" : ""}`} onClick={() => changeTab("Tab1")}>All</li>
          <li className={`buttons ${activeTab === "Tab2" ? "active" : ""}`} onClick={() => changeTab("Tab2")}>Our Gym & Events</li>
          <li className={`buttons ${activeTab === "Tab3" ? "active" : ""}`} onClick={() => changeTab("Tab3")}>Services</li>
        </ul>

        <div className="image-container">
  {images[activeTab] && images[activeTab].length > 0 ? (
    images[activeTab].map((src, index) => (
      <div className="image" key={index}>
        <img
          src={src}
          alt={`Gallery ${index}`}
          onClick={() => openLightbox(images[activeTab], index)}
        />
      </div>
    ))
  ) : (
    <div className="image">
      <p>No images available for {activeTab === "Tab3" ? "Services" : "this tab"}.</p>
    </div>
  )}
</div>

      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="lightbox"
          style={{ display: "flex" }}
          onClick={(e) => {
            if (e.target.className === "lightbox") closeLightbox()
          }}
        >
          <span className="close" onClick={closeLightbox}>&times;</span>
          <img id="lightbox-img" src={currentImageList[currentImageIndex]} alt="Lightbox" />
          <button className="prev" onClick={() => changeImage(-1)}>&#10094;</button>
          <button className="next" onClick={() => changeImage(1)}>&#10095;</button>
        </div>
      )}
    </div>
  )
}

export default Gallery
