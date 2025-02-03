"use client";
import React, { useState } from "react";
import img_1 from "@/assets/images/projects/suspension2.jpg";
import img_2 from "@/assets/images/projects/suspension3.jpg";
import img_3 from "@/assets/images/projects/suspension4.jpg";
import img_4 from "@/assets/images/projects/suspension1.jpg";
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

export default function suspensionPage() {
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
          <img src="assets/images/projects/suspension.jpg" alt="image" />
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
                  <h3>Ebla International for Cinema and Tv Production</h3>
                </div>
                <div className="single-info">
                  <p>Services</p>
                  <h3>First Assistant Director</h3>
                </div>
                <div className="single-info">
                  <p>Project</p>
                  <h3>Tv Series</h3>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="single-project-page-right wow fadeInUp delay-0-4s">
                <h2>Description</h2>
                <p>
                  As an Associate Director on the TV series Ma'a Waqf al-Tanfidh
                  (With Suspension of Execution), directed by Saif Sbeih and
                  produced by Ebla International Production Company, my role
                  involved taking on a leadership position behind the scenes
                  both before and during filming. I was responsible for
                  coordinating between departments, ensuring that the director’s
                  vision was executed smoothly, and managing the logistics and
                  creative aspects of the production. Before filming, I was
                  instrumental in pre-production, helping with scheduling,
                  location scouting, and organizing rehearsals. During filming,
                  I worked closely with the director and crew to oversee the
                  efficiency of the shoot, ensuring that scenes were captured on
                  time and to the highest standard. My leadership role required
                  quick decision-making, strong communication, and a deep
                  understanding of both the artistic and technical demands of
                  the project.
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
