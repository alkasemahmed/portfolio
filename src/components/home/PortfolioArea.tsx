"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ImagePopup from "@/modals/ImagePopup";

import portfolio_img_1 from "@/assets/images/projects/manjalo.jpg";
import portfolio_img_2 from "@/assets/images/projects/ekhlaa7.png";
import portfolio_img_3 from "@/assets/images/client-logos/linkmedia.png";
import portfolio_img_4 from "@/assets/images/client-logos/headline.png";
import portfolio_img_5 from "@/assets/images/projects/close-your-eyes.jpg";
import portfolio_img_6 from "@/assets/images/client-logos/aladham1.png";
import portfolio_img_7 from "@/assets/images/projects/high-people.jpg";
import portfolio_img_8 from "@/assets/images/projects/not-buried-yet.jpg";
import portfolio_img_9 from "@/assets/images/projects/ebla1.jpg";
import portfolio_img_10 from "@/assets/images/projects/wlad-albalad.jpg";
import portfolio_img_11 from "@/assets/images/projects/last.jpg";

interface DataType {
  id: number;
  col: string;
  image: StaticImageData;
  title: string;
  category: string;
  ref: string;
}

const portfolio_data: DataType[] = [
  {
    id: 1,
    col: "6",
    image: portfolio_img_1,
    title: "Manjalo gold",
    category: "Content Creator",
    ref:"/manjalo"
  },
  {
    id: 2,
    col: "6",
    image: portfolio_img_2,
    title: "Ekhlaa Zameel ",
    category: "Project Manager",
    ref:"/ekhlaa"
  },
  {
    id: 3,
    col: "4",
    image: portfolio_img_3,
    title: "Link media",
    category: "Content Creator",
    ref:"/linkmedia"
  },
  {
    id: 4,
    col: "4",
    image: portfolio_img_4,
    title: "Headline Mediahub",
    category: "Co-Founder",
    ref:"/headline"
  },
  {
    id: 5,
    col: "4",
    image: portfolio_img_5,
    title: "Close Your Eyes",
    category: "First Assistant Director",
    ref:"/close"
  },
  {
    id: 6,
    col: "6",
    image: portfolio_img_6,
    title: "Aladham Production",
    category: "Social Media Manager",
    ref:"/aladham"
  },
  {
    id: 7,
    col: "6",
    image: portfolio_img_7,
    title: "High people",
    category: "Cinematographer",
    ref:"/high"
  },
  {
    id: 8,
    col: "4",
    image: portfolio_img_8,
    title: "Not Buried Yet",
    category: "Filmmaker & Director",
    ref:"/not-buried-yet"
  },
  {
    id: 9,
    col: "4",
    image: portfolio_img_9,
    title: "With Suspension of Execution",
    category: "First Assistant Director",
    ref:"/suspension"
  },
  {
    id: 10,
    col: "4",
    image: portfolio_img_10,
    title: "Sons of the Homeland",
    category: "Second Unit Director ",
    ref:"/wlad-albalad"
  },
  {
    id: 11,
    col: "6",
    image: portfolio_img_11,
    title: "The Last Shot",
    category: "Director",
    ref:"/last-shot"
  },
];

export default function PortfolioArea() {
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
  const image = portfolio_data.slice(0, 5).map((item) => item.image.src);

  return (
    <>
      <div className="projects-area" id="portfolio">
        <div className="custom-icon">
          <img src="assets/images/custom/work-scribble.svg" alt="custom" />
        </div>
        <div className="container-fluid">
          <div className="row g-4 portfolio-grid">
            {portfolio_data.map((item, i) => (
              <div
                key={i}
                className={`col-md-6 col-xl-${item.col} portfolio-item category-1`}
              >
                <Link
                  style={{ cursor: "pointer" }}
                  //onClick={() => handleImagePopup(i)}
                  className="work-popup"
                  href={item.ref}
                >
                  <div className="portfolio-box">
                    
                    <Image
                      src={item.image}
                      alt=""
                      style={{ height: "auto" }}
                      data-rjs="2"
                    />
                    
                    
                    <span className="portfolio-category">{item.category}</span>
                    <div className="portfolio-caption">
                      <h1>{item.title}</h1>
                    </div>
                  </div>
                </Link>
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
