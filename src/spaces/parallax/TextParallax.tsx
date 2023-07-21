import React, { useEffect, useState } from "react";
import "./style.css";
import CoverImage from "../../assets/parallax.png";

const TextAnimationComponent: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      const scrollN = scroll - scroll * 2.5;
      setScrollPosition(scroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <div className="container">
        <div className="bg-txt-container">
          <h1
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="6"
            className="up"
            style={{ transform: `translateX(${scrollPosition}px)` }}
          >
            TELESCÓPIENS
          </h1>
          <h1
            className="down"
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="6"
            style={{
              transform: `translateX(${
                scrollPosition - scrollPosition * 2.5
              }px)`,
            }}
          >
            TELESPACE
          </h1>
        </div>
        <div className="bg-txt-container-two">
          <h1
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-6"
            className="up"
            style={{ transform: `translateX(${scrollPosition}px)` }}
          >
            TELESCÓPIENS
          </h1>
          <h1
            className="down"
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-6"
            style={{
              transform: `translateX(${
                scrollPosition - scrollPosition * 2.5
              }px)`,
            }}
          >
            TELESPACE
          </h1>
        </div>
        <div className="img-container">
          <img src={CoverImage} alt="Cover Image" />
        </div>
        <div className="front-txt-container">
          <h1
            className="up"
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="6"
            style={{ transform: `translateX(${scrollPosition}px)` }}
          >
            TELESCÓPIENS
          </h1>
          <h1
            className="down"
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="6"
            style={{
              transform: `translateX(${
                scrollPosition - scrollPosition * 2.5
              }px)`,
            }}
          >
            TELESPACE
          </h1>
        </div>
        <div className="front-txt-container-two">
          <h1
            className="up"
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-6"
            style={{ transform: `translateX(${scrollPosition}px)` }}
          >
            TELESCÓPIENS
          </h1>
          <h1
            className="down"
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-6"
            style={{
              transform: `translateX(${
                scrollPosition - scrollPosition * 2.5
              }px)`,
            }}
          >
            TELESPACE
          </h1>
        </div>
      </div>
    </div>
  );
};
export default TextAnimationComponent;
