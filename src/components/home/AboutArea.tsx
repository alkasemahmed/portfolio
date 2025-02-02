
import React from 'react'
import Count from '../common/Count'

const counter_data = [
  {
    id: 1,
    title: 'Years Of Experience',
    count: 10,
    cls: "plus",
  },
  {
    id: 2,
    title: 'Completed Projects',
    count: 100,
    cls: "plus",
  },
  {
    id: 3,
    title: 'Client Satisfactions',
    count: 90,
    cls: "percent",
  },
]

export default function AboutArea() {
  return (
    <>
      <section id="about" className="about-area">
        <div className="container">
          <div className="row">

            <div className="col-lg-3 col-sm-3">
              <h2 className="about-pre-title">About Me</h2>
            </div>
            <div className="col-lg-9 col-sm-9">
              <div className="about-content-part wow fadeInUp delay-0-2s">
                <p>I am a passionate filmmaker, content creator, director, and cinematographer with over ten years of experience in the industry. As a graduate of the Higher Institute of Dramatic Arts, specializing in audiovisual arts, I have honed my skills in storytelling, visual aesthetics, and cinematic techniques. With a deep understanding of both the artistic and technical aspects of filmmaking, I strive to bring compelling narratives to life, creating engaging and high-quality content across various media platforms.</p>
              </div>
              <div className="hero-counter-area d-flex justify-content-between wow fadeInUp delay-0-4s">
                {counter_data.map((item, i) => (
                  <div key={i} className="counter-item counter-text-wrap">
                    <span className={`count-text ${item.cls}`}>
                      <Count number={item.count} />
                    </span>
                    <span className="counter-title">{item.title}</span>
                  </div>
                ))} 
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
