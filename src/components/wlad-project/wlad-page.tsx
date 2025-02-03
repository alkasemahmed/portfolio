"use client";
import React, { useState } from 'react'
import img_1 from "@/assets/images/projects/wlad4.jpg";
import img_2 from "@/assets/images/projects/wlad2.jpg";
import img_3 from "@/assets/images/projects/wlad3.jpg";
import img_4 from "@/assets/images/projects/wlad1.jpg";
import Image from 'next/image';
import ImagePopup from '@/modals/ImagePopup';

const portfolio_images = [
  {
    id: 1,
    image: img_1,
  },
  {
    id: 2,
    image: img_2,
  },
  {
    id: 3,
    image: img_3,
  },
  {
    id: 4,
    image: img_4,
  },

]

export default function WladPage() {

  // photoIndex
  const [photoIndex, setPhotoIndex] = useState(null);
  // image open state
  const [isOpen, setIsOpen] = useState(false);
  // handleImagePopup
  const handleImagePopup = (i: any) => {
    setPhotoIndex(i);
    setIsOpen(true);
  };
  //  images
  const image = portfolio_images.slice(0, 5).map((item) => item.image.src);


  return (
    <>
      <div className="single-project-page-design">
        <div className="single-project-image">
          <img src="assets/images/projects/wlad-albalad.jpg" alt="image" />
        </div>
        <div className="container pt-60 pb-40">
          <div className="row">
            <div className="col-lg-4">

              <div className="single-project-page-left wow fadeInUp delay-0-2s">
                <div className="single-info">
                  <p>Year</p>
                  <h3>2022</h3>
                </div>
                <div className="single-info">
                  <p>Client</p>
                  <h3>Bassem Yakhour</h3>
                </div>
                <div className="single-info">
                  <p>Services</p>
                  <h3>Tod Originals</h3>
                </div>
                <div className="single-info">
                  <p>Project</p>
                  <h3>Sons of The Homeland</h3>
                </div>
              </div>

            </div>

            <div className="col-lg-8">
              <div className="single-project-page-right wow fadeInUp delay-0-4s">
                <h2>
                  Description
                </h2>
                <p>As an Assistant Director and Director of the second unit for the series "Awlad Al-Balad" produced by Tod platform, I played a significant role in shaping the final outcome. My contributions were praised by producers, actors, and the director for enhancing the overall production value. I was responsible for ensuring the smooth execution of scenes, directing the second unit, and collaborating closely with the team to maintain the artistic vision. My attention to detail and ability to manage multiple tasks helped elevate the series and contributed to its success.</p>
                
              </div>
            </div>

          </div>

          <div className="row pt-60">
            {portfolio_images.map((item, i) => (
              <div className="col-lg-6">
                <a style={{ cursor: "pointer" }}
                  onClick={() => handleImagePopup(i)} className="work-popup">
                  <div className="single-image wow fadeInUp delay-0-2s">
                    <Image src={item.image} style={{ height: "auto" }} alt="gallery" />
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* image light box start */}
      {isOpen && (
        <ImagePopup
          images={image}
          setIsOpen={setIsOpen}
          photoIndex={photoIndex}
          setPhotoIndex={setPhotoIndex}
        />
      )}
      {/* image light box end */}

    </>
  )
}
