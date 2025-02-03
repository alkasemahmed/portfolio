"use client";
import React, { useState } from "react";
import img_1 from "@/assets/images/projects/high1.jpg";
import img_2 from "@/assets/images/projects/high2.jpg";
import img_3 from "@/assets/images/projects/high3.jpg";
import Image from "next/image";
import ImagePopup from "@/modals/ImagePopup";

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
 
];

export default function HighPage() {
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
          <img src="assets/images/projects/high-people.jpg" alt="image" />
        </div>
        <div className="container pt-60 pb-40">
          <div className="row">
            <div className="col-lg-4">
              <div className="single-project-page-left wow fadeInUp delay-0-2s">
                <div className="single-info">
                  <p>Year</p>
                  <h3>2023</h3>
                </div>
                <div className="single-info">
                  <p>Client</p>
                  <h3>Stories ilm</h3>
                </div>
                <div className="single-info">
                  <p>Services</p>
                  <h3>Cinematography</h3>
                </div>
                <div className="single-info">
                  <p>Project</p>
                  <h3>Documentary Short Film</h3>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="single-project-page-right wow fadeInUp delay-0-4s">
                <h2>Description</h2>
                <p>
                  As a cinematographer for the short documentary film The People
                  Up There, I played a pivotal role in capturing the nocturnal
                  essence of Damascus. The film delves into the unseen layers of
                  the city's nightlife, shedding light on its rhythms, solitude,
                  and the stories hidden within its shadows. Through a carefully
                  crafted visual language, I sought to translate the atmosphere
                  of Damascus at night, balancing the interplay of light and
                  darkness to reflect the film’s emotional depth. The People Up
                  There garnered significant recognition, winning prestigious
                  awards at major Arab and international festivals. Among its
                  accolades, it received the Golden Tanit for Best Short
                  Documentary at the Carthage Film Festival, solidifying its
                  impact in the documentary scene. The film’s success stands as
                  a testament to the power of visual storytelling and the
                  resonance of its subject matter with audiences worldwide.
                </p>
              </div>
            </div>
          </div>

          <div className="row pt-60">
            {portfolio_images.map((item, i) => (
              <div className="col-lg-6">
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => handleImagePopup(i)}
                  className="work-popup"
                >
                  <div className="single-image wow fadeInUp delay-0-2s">
                    <Image
                      src={item.image}
                      style={{ height: "auto" }}
                      alt="gallery"
                    />
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
  );
}
