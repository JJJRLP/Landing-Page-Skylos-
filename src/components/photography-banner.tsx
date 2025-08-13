"use client"

import type React from "react"
import { useState, useEffect } from "react"

const PhotographyBanner: React.FC = () => {
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const texts = ["implement", "deploy", "automate", "scale"]

  useEffect(() => {
    const typeSpeed = isDeleting ? 40 : 100
    const currentFullText = texts[currentIndex]

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentFullText.length) {
          setCurrentText(currentFullText.substring(0, currentText.length + 1))
        } else {
          // Finished typing, start deleting after delay
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1))
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false)
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
        }
      }
    }, typeSpeed)

    return () => clearTimeout(timer)
  }, [currentText, currentIndex, isDeleting, texts])

  return (
    <>
      <style>{`
        /* Font faces */
        @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@700&family=Roboto:wght@400&display=swap');



        /* Component styles */
        .photography-banner,
        .photography-banner * {
          box-sizing: border-box;
        }
        
        .photography-banner {
          margin: 0;
          background-color: #0f1419;
          
          background-image: url("https://www.yudiz.com/codepen/photography-banner/frame.png");
          background-size: cover;
          background-repeat: no-repeat;
          overflow-x: hidden;
          min-height: 100vh;
          width: 100%;
        }

        .photography-banner *::selection {
          background-color: rgba(241, 231, 40, 0.2);
          color: #ffffff;
        }

        .info-section {
          height: 100vh;
          min-height: 780px;
          padding: 0 0 0 30px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          z-index: 1;
          user-select: none;
          overflow: hidden;
        }

        .info-section::before {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.4;
          background: #7a288a;
          filter: blur(162px);
          height: 35%;
          width: 55%;
          position: absolute;
          top: -40%;
          left: -66%;
          transform: translate(50%, 50%);
          z-index: -1;
        }

        /* Left part */
        .left-part {
          padding: 20px 0 0;
          overflow: visible;
          z-index: 10;
          position: relative;
          flex: 1;
          max-width: 80%;
          min-width: 900px;
        }

        .left-part h1 {
          margin: 0;
          color: #fff;
          font-family: "Lexend", sans-serif;
          font-weight: 700;
          font-size: clamp(48px, 12vw, 160px);
          line-height: 0.85;
          font-style: normal;
          text-transform: uppercase;
          z-index: 10;
          position: relative;
        }

        .left-part h1 .text {
          color: #b39ddb;
          display: block;
          height: clamp(120px, 18vw, 160px);
          margin-top: 10px;
          width: 100%;
          min-width: 900px;
          padding-right: 200px;
          white-space: nowrap;
          overflow: visible;
        }

        .left-part h1 .d-flex {
          display: flex;
          align-items: center;
        }

        .left-part h1 .char {
          transform: translateY(0);
          transition: transform 0.5s;
          animation: slideUp 0.3s ease-out forwards;
        }

        .typed-cursor {
          display: none !important;
        }

        @keyframes slideUp {
          from {
            transform: translateY(-515px);
          }
          to {
            transform: translateY(0);
          }
        }

        .left-part p {
          width: 72%;
          margin: 20px 0 0;
          color: #fff;
          font-size: 16px;
          font-style: normal;
          font-weight: normal;
          line-height: 2;
          font-family: "Lexend";
          opacity: 0.8;
        }

        /* Button */
        .book-link {
          margin: 40px 0 0;
          padding: 0;
          border: 0;
          font-size: 56px;
          line-height: 1;
          color: #f1f1f1;
          letter-spacing: 0.25px;
          text-transform: uppercase;
          font-family: "Lexend";
          font-weight: 300;
          font-style: normal;
          display: inline-flex;
          align-items: center;
          gap: 28px;
          position: relative;
          text-decoration: none;
          cursor: pointer;
        }

        .book-link .linktext {
          position: relative;
          overflow: hidden;
          display: inline-block;
        }

        .book-link .linktext::before {
          position: absolute;
          content: "";
          left: 0;
          bottom: 6px;
          width: 100%;
          height: 3px;
          background-color: #ffffff;
          transform: scaleX(1);
          transition: transform 250ms ease-in-out;
          transform-origin: 0 0;
        }

        .book-link:hover .linktext:before {
          transform: scaleX(0);
          transform-origin: 100% 100%;
        }

        .book-link .arrow {
          height: 36px;
          width: 36px;
          top: -5px;
          display: inline-block;
          position: relative;
          overflow: hidden;
        }

        .book-link .arrow::before,
        .book-link .arrow::after {
          position: absolute;
          content: "";
          background-color: #7a288a;
          transition: all ease-in-out 0.35s;
          transform-origin: 0 0;
          border-radius: 30px;
        }

        .book-link .arrow::before {
          height: 2px;
          width: 100%;
          top: 0;
          right: 0;
        }

        .book-link .arrow::after {
          width: 2px;
          height: 100%;
          top: 0;
          right: 0;
        }

        .book-link:hover .arrow::before {
          width: 65%;
        }

        .book-link:hover .arrow::after {
          height: 65%;
        }

        .book-link .arrow span {
          background-color: #7a288a;
          height: 2px;
          width: 100%;
          display: inline-block;
          transform: rotate(-45deg) translate(-3px, -1px);
          transform-origin: right top;
          border-radius: 30px;
          position: relative;
          transition: all ease-in-out 0.35s;
          position: absolute;
          top: 0;
          left: 0;
        }

        .book-link .arrow span::before {
          background-color: #7a288a;
          content: "";
          height: 100%;
          width: 15px;
          left: -15px;
          top: 0;
          position: absolute;
        }

        /* Right part */
        .right-part {
          background-color: transparent;
          height: 588px;
          width: 588px;
          margin: 0;
          display: block;
          position: relative;
          z-index: 1;
          flex-shrink: 0;
        }

        .right-part::before {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.4;
          background: #7a288a;
          filter: blur(112px);
          height: 35%;
          width: 55%;
          position: absolute;
          top: 50%;
          right: 33%;
          transform: translate(50%, -50%);
          z-index: -1;
        }

        .particles-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
        }

        .particle {
          position: absolute;
          background: rgba(122, 40, 138, 0.6);
          border-radius: 50%;
          pointer-events: none;
          animation: float linear infinite;
        }

        .particle:nth-child(odd) {
          background: rgba(36, 27, 80, 0.4);
        }

        .particle:nth-child(3n) {
          background: rgba(255, 255, 255, 0.2);
        }

        @keyframes float {
          0% {
            transform: translateX(-100px) translateY(0px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(calc(100vw + 100px)) translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }

        .bg-line {
          position: absolute;
          top: 0;
          right: 0;
          width: 50%;
          height: 85px;
          z-index: -1;
          overflow: hidden;
          display: flex;
          display: -webkit-flex;
          white-space: nowrap;
        }

        .bg-line img {
          position: relative;
          flex-shrink: 0;
          -webkit-flex-shrink: 0;
          animation: 26s linear infinite;
        }

        .bg-line img:nth-child(1) {
          animation-name: first-text;
        }

        .bg-line img:nth-child(2) {
          animation-name: second-text;
        }

        @keyframes first-text {
          50% {
            transform: translateX(-100%);
            opacity: 1;
          }
          50.05% {
            opacity: 0;
          }
          50.1% {
            transform: translateX(100%);
            opacity: 1;
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes second-text {
          50% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(-200%);
          }
          0% {
            transform: translateX(0%);
          }
        }

        .bg-dash-circle {
          position: absolute;
          bottom: -35px;
          right: -13px;
          z-index: -1;
          width: 180px;
          aspect-ratio: 1/1;
        }

        .bg-dash-circle img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center center;
          animation: circle-rotate 18s linear infinite;
        }

        @keyframes circle-rotate {
          0% {
            transform: rotate(0);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .hero-image {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80%;
          height: auto;
          z-index: 2;
          border-radius: 12px;
          opacity: 0.9;
        }

        /* Responsive */
        @media screen and (min-width: 1500px) {
          .info-section {
            padding-left: 120px;
          }
        }

        @media screen and (min-width: 1400px) {
          .info-section {
            padding-left: 100px;
          }
        }

        @media screen and (max-width: 1199px) {
          .bg-line {
            height: 68px;
          }
          .right-part {
            height: 400px;
            width: 400px;
          }
          .right-part .d-flex {
            gap: 20px;
          }
          .bg-dash-circle {
            width: 130px;
          }
        }

        @media screen and (max-width: 767px) {
          .photography-banner {
            overflow-x: hidden;
          }
          
          .info-section {
            display: block;
            padding: 0;
            overflow: visible;
            min-height: auto;
            height: auto;
          }
          
          .bg-line {
            height: 52px;
          }
          
          .left-part {
            padding: 40px 16px 60px;
            overflow: visible;
            min-width: 350px;
            max-width: 90%;
          }
          
          .right-part {
            height: 334px;
            width: 334px;
            margin: 0 auto;
            margin-right: auto;
          }
          
          .left-part h1 .text {
            height: 100px;
            margin-top: 8px;
            min-width: 350px;
            padding-right: 50px;
            white-space: nowrap;
            overflow: visible;
          }
          
          .left-part p {
            font-size: 12px;
            width: 96%;
          }
          
          .bg-dash-circle {
            width: 80px;
          }
        }

        /* Professional Section Styles */
        .professional-section {
          padding: 120px 30px;
          position: relative;
          overflow: hidden;
        }

        .professional-section.dark {
          background-color: #0d1421;
        }

        .professional-section.darker {
          background-color: #0f1419;
        }

        .professional-section::before {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.3;
          background: #7a288a;
          filter: blur(140px);
          height: 40%;
          width: 40%;
          position: absolute;
          top: 20%;
          right: -20%;
          z-index: -1;
        }

        .section-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .section-container.reverse {
          direction: rtl;
        }

        .section-container.reverse > * {
          direction: ltr;
        }

        .section-content {
          padding: 0;
        }

        .section-title {
          color: #fff;
          font-family: "Lexend", sans-serif;
          font-weight: 700;
          font-size: clamp(48px, 6vw, 80px);
          line-height: 1.1;
          margin: 0 0 30px;
          text-transform: uppercase;
        }

        .section-title .highlight {
          color: #b39ddb;
        }

        .section-description {
          color: #ccc;
          font-family: "Lexend";
          font-size: 18px;
          line-height: 1.7;
          margin: 0 0 40px;
          font-weight: 300;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }

        .benefit-item {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 30px 25px;
          position: relative;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .benefit-item:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: #7a288a;
          transform: translateY(-5px);
        }

        .benefit-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #7a288a, #b39ddb);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          margin-bottom: 20px;
          color: #ffffff;
        }

        .benefit-title {
          color: #fff;
          font-family: "Lexend";
          font-size: 16px;
          font-weight: 600;
          margin: 0 0 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .benefit-description {
          color: #aaa;
          font-family: "Lexend";
          font-size: 14px;
          line-height: 1.6;
          margin: 0;
          font-weight: 300;
        }

        .process-steps {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .process-step {
          display: flex;
          align-items: flex-start;
          gap: 25px;
          padding: 30px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .process-step:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: #7a288a;
        }

        .step-number {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #7a288a, #b39ddb);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          font-weight: bold;
          color: #ffffff;
          flex-shrink: 0;
        }

        .step-content h3 {
          color: #fff;
          font-family: "Lexend";
          font-size: 18px;
          font-weight: 600;
          margin: 0 0 8px;
          text-transform: uppercase;
        }

        .step-content .step-duration {
          color: #b39ddb;
          font-family: "Lexend";
          font-size: 14px;
          font-weight: 500;
          margin: 0 0 12px;
        }

        .step-content p {
          color: #aaa;
          font-family: "Lexend";
          font-size: 14px;
          line-height: 1.6;
          margin: 0;
          font-weight: 300;
        }

        .advantages-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 25px;
        }

        .advantage-item {
          text-align: center;
          padding: 40px 25px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .advantage-item:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: #7a288a;
          transform: translateY(-5px);
        }

        .advantage-metric {
          font-size: 48px;
          font-weight: 700;
          color: #b39ddb;
          font-family: "Lexend";
          margin-bottom: 15px;
          display: block;
        }

        .advantage-title {
          color: #fff;
          font-family: "Lexend";
          font-size: 16px;
          font-weight: 600;
          margin: 0 0 10px;
          text-transform: uppercase;
        }

        .advantage-description {
          color: #aaa;
          font-family: "Lexend";
          font-size: 13px;
          line-height: 1.5;
          margin: 0;
          font-weight: 300;
        }

        /* Testimonials Section */
        .testimonials-section {
          padding: 100px 30px;
          background-color: #0f1419;
          position: relative;
          overflow: hidden;
        }

        .testimonials-section::before {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.4;
          background: #7a288a;
          filter: blur(120px);
          height: 50%;
          width: 30%;
          position: absolute;
          top: 50%;
          left: -15%;
          transform: translateY(-50%);
          z-index: -1;
        }

        .testimonials-container {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }

        .testimonials-title {
          color: #fff;
          font-family: "Lexend", sans-serif;
          font-weight: 700;
          font-size: clamp(60px, 8vw, 100px);
          line-height: 0.9;
          margin: 0 0 80px;
          text-transform: uppercase;
        }

        /* Replaced grid with marquee scroller */
        .testimonials-marquee {
          display: flex;
          animation: scroll 30s linear infinite;
          gap: 40px;
          width: max-content;
        }

        .testimonials-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .testimonial-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid #333;
          border-radius: 20px;
          padding: 40px 30px;
          position: relative;
          backdrop-filter: blur(10px);
          width: 400px;
          flex-shrink: 0;
        }

        .testimonial-quote {
          color: #fff;
          font-family: "Roboto", sans-serif;
          font-weight: 400;
          font-size: 16px;
          line-height: 1.8;
          margin: 0 0 30px;
          font-style: italic;
        }

        .testimonial-author {
          display: flex;
          font-family: "Roboto", sans-serif;
          align-items: center;
          gap: 15px;
        }

        .author-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #7a288a;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          color: #ffffff;
        }

        .author-info h4 {
          color: #b39ddb;
          font-family: "Roboto", sans-serif;
          font-size: 14px;
          margin: 0;
          text-transform: uppercase;
        }

        .author-info p {
          color: #aaa;
          font-family: "Roboto", sans-serif;
          font-size: 12px;
          margin: 5px 0 0;
        }

        /* CTA Section */
        .cta-section {
          padding: 120px 30px;
          background-color: #0d1421;
          position: relative;
          overflow: hidden;
        }

        .cta-section::before {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.6;
          background: #7a288a;
          filter: blur(180px);
          height: 60%;
          width: 80%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: -1;
        }

        .cta-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .cta-title {
          color: #fff;
          font-family: "Lexend", sans-serif;
          font-weight: 700;
          font-size: clamp(80px, 12vw, 160px);
          line-height: 0.8;
          margin: 0 0 30px;
          text-transform: uppercase;
        }

        .cta-subtitle {
          color: #b39ddb;
          font-family: "lexend";
          font-size: 26px;
          line-height: 1.6;
          margin: 0 0 50px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-buttons {
          display: flex;
          gap: 30px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-button {
          padding: 18px 40px;
          background: #7a288a;
          color: #ffffff;
          text-decoration: none;
          font-family: "lexend";
          font-size: 16px;
          font-weight: bold;
          text-transform: uppercase;
          border-radius: 50px;
          transition: all 0.3s ease;
          border: 2px solid #7a288a;
        }

        .cta-button:hover {
          background: transparent;
          color: #7a288a;
        }

        .cta-button.secondary {
          background: transparent;
          color: #fff;
          border: 2px solid #fff;
        }

        .cta-button.secondary:hover {
          background: transparent;
          color: #7a288a;
          border: 2px solid #7a288a;
        }

        /* Responsive adjustments for professional sections */
        @media screen and (max-width: 1199px) {
          .professional-section {
            padding: 80px 20px;
          }
          .section-container {
            gap: 60px;
          }
          .benefits-grid,
          .advantages-grid {
            gap: 20px;
          }
          .cta-buttons {
            gap: 20px;
          }
        }

        @media screen and (max-width: 767px) {
          .professional-section {
            padding: 60px 16px;
          }
          .section-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .section-container.reverse {
            direction: ltr;
          }
          .benefits-grid,
          .advantages-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .process-steps {
            gap: 25px;
          }
          .process-step {
            padding: 20px;
          }
          .step-number {
            width: 50px;
            height: 50px;
            font-size: 18px;
          }
          .benefit-item,
          .advantage-item {
            padding: 25px 20px;
          }
          .advantage-metric {
            font-size: 36px;
          }
          .cta-buttons {
            flex-direction: column;
            align-items: center;
            gap: 15px;
          }
          .cta-button {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>

      <div className="photography-banner">
        <main>
          <section className="info-section">
            <div className="left-part">
              <h1>
                <span className="d-flex">
                  {["r", "e", "a", "d", "y", " ", "t", "o"].map((char, index) => (
                    <span key={index} className="char tracking-tighter" style={{ animationDelay: `${index * 0.08}s` }}>
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </span>
                <span className="text tracking-tighter">{currentText} AI?</span>
              </h1>
              <p className="lexend tracking-widest">
                Transform your business with custom conversational AI solutions that automate operations, reduce costs, and scale without limits.
              </p>
              <a href="https://www.x.com/nocheerleader/" className="book-link">
                <span className="linktext tracking-tighter text-3xl">Schedule a Free 15 min call with our team</span>
                <span className="arrow">
                  <span></span>
                </span>
              </a>
            </div>
            <div className="right-part">
              <div className="particles-container">
                {Array.from({ length: 20 }, (_, i) => (
                  <div
                    key={i}
                    className="particle"
                    style={{
                      width: `${Math.random() * 8 + 4}px`,
                      height: `${Math.random() * 8 + 4}px`,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDuration: `${Math.random() * 20 + 15}s`,
                      animationDelay: `${Math.random() * 10}s`,
                    }}
                  />
                ))}
              </div>
              <div className="bg-line">
                <img
                  src="https://www.yudiz.com/codepen/photography-banner/wave.svg"
                  alt="Line"
                  style={{ filter: "hue-rotate(280deg) saturate(1.5)" }}
                />
                <img
                  src="https://www.yudiz.com/codepen/photography-banner/wave.svg"
                  alt="Line"
                  style={{ filter: "hue-rotate(280deg) saturate(1.5)" }}
                />
              </div>
              <div className="bg-dash-circle">
                <img
                  src="https://www.yudiz.com/codepen/photography-banner/dash-circle.svg"
                  alt="dash-circle"
                  style={{ filter: "hue-rotate(280deg) saturate(1.5)" }}
                />
              </div>
            </div>
          </section>

          {/* Problem Section */}
          <section className="professional-section dark">
            <div className="section-container">
              <div className="section-content">
                <h2 className="section-title">
                  THE PROBLEM <span className="highlight">WHY AI IS NO LONGER AN OPTION</span>
                </h2>
                <p className="section-description">
                  Your competitors are already ahead. Every day without AI automation means lost efficiency, higher costs, and falling behind. 
                  While 73% of businesses have adopted AI, those just starting face a 6-month delay and critical operational gaps.
                </p>
              </div>
              <div className="benefits-grid">
                <div className="benefit-item">
                  <div className="benefit-icon">!</div>
                  <h3 className="benefit-title">Overwhelmed Customer Service</h3>
                  <p className="benefit-description">
                    Manual responses can&apos;t keep up with customer demand, leading to frustrated clients and lost opportunities
                  </p>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">⏱</div>
                  <h3 className="benefit-title">Inconsistent Response Times</h3>
                  <p className="benefit-description">
                    Without automation, your response quality varies by staff availability and workload
                  </p>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">↗</div>
                  <h3 className="benefit-title">Scaling Bottlenecks</h3>
                  <p className="benefit-description">
                    Growth is limited by your ability to hire and train staff, creating expensive operational constraints
                  </p>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">$</div>
                  <h3 className="benefit-title">Lost Revenue</h3>
                  <p className="benefit-description">
                    Competitors offer 24/7 instant responses while you&apos;re still recruiting and training new staff
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Solution Section */}
          <section className="professional-section darker">
            <div className="section-container">
              <div className="benefits-grid">
                <div className="benefit-item">
                  <div className="benefit-icon">24/7</div>
                  <h3 className="benefit-title">24/7 INTELLIGENT INTERACTIONS</h3>
                  <p className="benefit-description">
                    Automated customer interactions without human intervention, providing consistent quality around the clock
                  </p>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">∞</div>
                  <h3 className="benefit-title">SEAMLESS INTEGRATION</h3>
                  <p className="benefit-description">
                    Connect with your existing business processes and tools without disrupting current workflows
                  </p>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">AI</div>
                  <h3 className="benefit-title">CONTEXT-AWARE RESPONSES</h3>
                  <p className="benefit-description">
                    AI that understands customer intent and history, delivering personalized experiences every time
                  </p>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">∞</div>
                  <h3 className="benefit-title">SCALABLE GROWTH</h3>
                  <p className="benefit-description">
                    Solutions that grow with your business needs without the overhead of constant hiring and training
                  </p>
                </div>
              </div>
              <div className="section-content">
                <h2 className="section-title">
                  THE SOLUTION <span className="highlight">CUSTOM CONVERSATIONAL AI</span>
                </h2>
                <p className="section-description">
                  Our conversational AI solutions help you move beyond basic automation with intelligent agents that understand context, 
                  learn from interactions, and deliver personalized experiences at scale.
                </p>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="professional-section dark">
            <div className="section-container">
              <div className="section-content">
                <h2 className="section-title">
                  OUR PROCESS <span className="highlight">FASTER, SMARTER, CUSTOM</span>
                </h2>
                <p className="section-description">
                  We get you up and running with custom conversational AI in just 3-4 weeks with our streamlined, three-step process.
                </p>
              </div>
              <div className="process-steps">
                <div className="process-step">
                  <div className="step-number">01</div>
                  <div className="step-content">
                    <h3>DISCOVERY & ANALYSIS</h3>
                    <p className="step-duration">2-3 days</p>
                    <p>We analyze your business to identify automation opportunities and create a custom solution blueprint with ROI projections.</p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="step-number">02</div>
                  <div className="step-content">
                    <h3>CUSTOM DEVELOPMENT</h3>
                    <p className="step-duration">1-2 weeks</p>
                    <p>Our team builds and integrates your custom AI agent, tailored to your specific requirements and business processes.</p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="step-number">03</div>
                  <div className="step-content">
                    <h3>DEPLOYMENT & TRAINING</h3>
                    <p className="step-duration">2-3 days</p>
                    <p>We deploy your solution and provide comprehensive training to ensure smooth adoption and maximum ROI.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Competitive Advantages Section */}
          <section className="professional-section darker">
            <div className="section-container">
              <div className="advantages-grid">
                <div className="advantage-item">
                  <span className="advantage-metric">75%</span>
                  <h3 className="advantage-title">IMPLEMENTATION COST SAVINGS</h3>
                  <p className="advantage-description">
                    Up to 75% savings on implementation costs compared to traditional enterprise AI solutions
                  </p>
                </div>
                <div className="advantage-item">
                  <span className="advantage-metric">60%</span>
                  <h3 className="advantage-title">LOWER MAINTENANCE COSTS</h3>
                  <p className="advantage-description">
                    60% lower monthly maintenance costs with our streamlined, efficient AI architecture
                  </p>
                </div>
                <div className="advantage-item">
                  <span className="advantage-metric">10x</span>
                  <h3 className="advantage-title">FASTER DEPLOYMENT</h3>
                  <p className="advantage-description">
                    10x faster deployment with a time-to-value of just 2-4 weeks instead of months
                  </p>
                </div>
                <div className="advantage-item">
                  <span className="advantage-metric">100%</span>
                  <h3 className="advantage-title">FULLY CUSTOMIZED</h3>
                  <p className="advantage-description">
                    Fully customized solutions, not limited templates - built specifically for your business needs
                  </p>
                </div>
              </div>
              <div className="section-content">
                <h2 className="section-title">
                  OUR COMPETITIVE <span className="highlight">ADVANTAGES</span>
                </h2>
                <p className="section-description">
                  Our approach offers significant competitive advantages over traditional AI implementation methods, delivering faster results at lower costs.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="cta-section">
            <div className="cta-container">
              <h2 className="cta-title text-center">Ready to Start?</h2>
              <p className="cta-subtitle">
                Join the forward-thinking businesses already using AI to reduce costs, improve efficiency, and stay ahead of the competition.
              </p>
              <div className="cta-buttons">
                <a href="https://www.x.com/nocheerleader/" className="cta-button">
                  Request Free Consultation
                </a>
                <a href="#" className="cta-button secondary">
                  Join our Whitelsit
                </a>
              </div>
              <p style={{ color: '#b39ddb', fontSize: '16px', marginTop: '30px', textAlign: 'center' }}>
                We&apos;re accepting a limited number of businesses for our fully customizable AI agents. 
                Join a select group transforming their operations with AI.
              </p>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

export default PhotographyBanner
