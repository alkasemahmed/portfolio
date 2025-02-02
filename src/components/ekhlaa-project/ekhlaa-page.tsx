"use client";
import React, { useState } from 'react'
import img_1 from "@/assets/images/projects/work1.jpg";
import img_2 from "@/assets/images/projects/work2.jpg";
import img_3 from "@/assets/images/projects/work3.jpg";
import img_4 from "@/assets/images/projects/work4.jpg";
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

export default function EkhlaaPage() {

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
          <img src="assets/images/projects/ekhlaa.jpg" alt="image" />
        </div>
        <div className="container pt-60 pb-40">
          <div className="row">
            <div className="col-lg-4">

              <div className="single-project-page-left wow fadeInUp delay-0-2s">
                <div className="single-info">
                  <p>Year</p>
                  <h3>2024</h3>
                </div>
                <div className="single-info">
                  <p>Client</p>
                  <h3>Bassem Yakhour</h3>
                </div>
                <div className="single-info">
                  <p>Services</p>
                  <h3>Production</h3>
                </div>
                <div className="single-info">
                  <p>Project</p>
                  <h3>Entertaining Show</h3>
                </div>
              </div>

            </div>

            <div className="col-lg-8">
              <div className="single-project-page-right wow fadeInUp delay-0-4s">
                <h2>
                  Description
                </h2>
                <p>As a Project Manager and Social Media Manager for the comedy show Ikhlaa Zameel, I oversaw the production workflow and digital strategy, ensuring seamless execution from concept to audience engagement. Collaborating with renowned actor and producer Bassam Yakhour, I played a key role in content development, marketing, and audience outreach, contributing to the show's success across various platforms.</p>
                
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
