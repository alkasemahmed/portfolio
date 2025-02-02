
"use client"
import React, { useState,useRef } from 'react'
import emailjs from '@emailjs/browser';
export default function ContactArea() {

  const formRef = useRef<HTMLFormElement>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm(
          'service_zurpf7u',   // Replace with your EmailJS service ID
          'template_mf0f00d',  // Replace with your EmailJS template ID
          formRef.current,
          'c9l9REkOSF1H1DTg3'    // Replace with your EmailJS public key
        )
        .then(
          (response) => {
            console.log('SUCCESS!', response.status, response.text);
            setSuccess(true);
            setError(false);
          },
          (err) => {
            console.log('FAILED...', err);
            setError(true);
            setSuccess(false);
          }
        );
    }
  };


  return (
    <>
      <section id="contact" className="contact-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="section-title section-black-title wow fadeInUp delay-0-2s">
                <h2>Contact Me</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="contact-content-part  wow fadeInUp delay-0-2s">

                <div className="single-contact wow fadeInUp" data-wow-delay=".2s">
                  <span className="circle-btn">
                    <i className="ri-map-pin-line"></i>
                  </span>
                  <h2></h2>
                  <p>Dubai, United Arab Emirates</p>
                </div>


                <div className="single-contact wow fadeInUp" data-wow-delay=".4s">
                  <span className="circle-btn">
                    <i className="ri-headphone-line"></i>
                  </span>
                  <h2>contact number:</h2>
                  <p>+971543119967</p>
                </div>


                <div className="single-contact wow fadeInUp" data-wow-delay=".6s">
                  <span className="circle-btn">
                    <i className="ri-mail-line"></i>
                  </span>
                  <h2>Email me:</h2>
                  <p>alkasem.ahmed06@gmail.com</p>
                </div>


                <div className="single-contact wow fadeInUp" data-wow-delay=".6s">
                  <h2>Socials</h2>
                  <div className="about-social">
                    <ul>
                      <li><a target='_blank' href="https://www.facebook.com/share/18gGF4ovwD/?mibextid=qi2Omg"><i className="ri-facebook-circle-fill"></i></a></li>
                      <li><a target='_blank' href="https://www.instagram.com/alkasem_ahmed1?igsh=bmxoa3JwMWg5bnZ2&utm_source=qr"><i className="ri-instagram-fill"></i></a></li>
                      <li><a target='_blank' href="https://x.com/alkasem_ah?s=21"><i className="ri-twitter-x-line"></i></a></li>
                      <li><a target='_blank' href="https://www.linkedin.com/in/alkasem-ahmed-57703a255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><i className="ri-linkedin-fill"></i></a></li>
                      {/* <li><a target='_blank' href="https://github.com/jamilrayhan10"><i className="ri-github-line"></i></a></li> */}
                    </ul>
                  </div>
                </div>

              </div>
            </div> 

            <div className="col-lg-8">
              <div className="contact-form contact-form-area wow fadeInUp delay-0-4s">
                <form id="contactForm" ref={formRef} className="contact-form" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          className="form-control"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Steve Milner"
                          required
                          data-error="Please enter your Name"
                        />
                        <label htmlFor="name" className="for-icon"><i className="far fa-user"></i></label>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="hello@websitename.com"
                          required
                          data-error="Please enter your Email"
                        />
                        <label htmlFor="email" className="for-icon"><i className="far fa-envelope"></i></label>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input
                          type="text"
                          id="subject"
                          className="form-control"
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          placeholder="Your Subject"
                          required
                          data-error="Please enter your Subject"
                        />
                        <label htmlFor="subject" className="for-icon"><i className="far fa-user"></i></label>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="message">Your Message</label>
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          rows={4}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Write Your message"
                          required
                          data-error="Please Write your Message"
                        ></textarea>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group mb-0">
                        <button type="submit" className="theme-btn">
                          Send Me Message <i className="ri-mail-line"></i>
                        </button>
                        <div id="msgSubmit" className="hidden"></div>
                      </div>
                    </div>
                    <div className="col-md-12 text-center">
                    {success && <p className="input-success">We have received your mail. We will get back to you soon!</p>}
                    {error && <p className="input-error">Sorry, the message could not be sent! Please try again.</p>}
                    </div>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

    </>
  )
}
