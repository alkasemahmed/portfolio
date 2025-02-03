"use client";
import React, { useState } from "react";
import img_1 from "@/assets/images/projects/close1.jpg";
import img_2 from "@/assets/images/projects/close2.jpg";
import img_3 from "@/assets/images/projects/close5.jpg";
import img_4 from "@/assets/images/projects/close4.jpg";
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
  {
    id: 4,
    image: img_4,
  },
];

export default function ClosePage() {
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
          <img src="assets/images/projects/close-your-eyes.jpg" alt="image" />
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
                  <h3>Aladham Productions</h3>
                </div>
                <div className="single-info">
                  <p>Services</p>
                  <h3>First Assistant Director</h3>
                </div>
                <div className="single-info">
                  <p>Project</p>
                  <h3>Drama Tv Series</h3>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="single-project-page-right wow fadeInUp delay-0-4s">
                <h2>Description</h2>
                <p>
                  As the First Assistant Director, I was responsible for
                  overseeing the daily operations on set, ensuring the smooth
                  execution of the director’s vision, coordinating between
                  departments, managing the shooting schedule, and maintaining
                  efficiency during production. My role required strong
                  organizational skills, problem-solving abilities, and quick
                  decision-making to keep the production on track. In addition
                  to my on-set duties, I also managed the social media strategy
                  for the series, handling the official pages across various
                  platforms. This included creating and curating engaging
                  content, developing marketing campaigns, interacting with
                  audiences, and enhancing the show's digital presence to
                  maximize reach and engagement.
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
