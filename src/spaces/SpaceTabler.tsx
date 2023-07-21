import React, { useEffect } from "react";
import { gsap } from "gsap";
import LocomotiveScroll from "locomotive-scroll";
import ScrollTrigger from "gsap/ScrollTrigger";
import imageacid from '../assets/imageacid.png'
import imageastronaut from '../assets/imageastronaut.png'
import imagehippie from '../assets/imagehippie.png'
import magazine from '../assets/magazine.png'
import retro from '../assets/retro.png'
import "../style.css";
import TextParallax from "./parallax/TextParallax";

gsap.registerPlugin(ScrollTrigger);

const MyComponent: React.FC = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const pageContainer = document.querySelector(".container");
    pageContainer?.setAttribute("data-scroll-container", "");

    const scroller = new LocomotiveScroll({
      el: pageContainer,
      smooth: true,
      getDirection: true,
    });

    scroller.on("scroll", function (t) {
      document.documentElement.setAttribute("data-direction", t.direction);
    });

    scroller.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(pageContainer, {
      scrollTop(value) {
        return arguments.length
          ? scroller.scrollTo(value, 0, 0)
          : scroller.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          left: 0,
          top: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: pageContainer?.style.transform ? "transform" : "fixed",
    });

    let horizontalSections = document.querySelectorAll(".horizontal-scroll");

    horizontalSections.forEach((horizontalSection) => {
      let pinWrap = horizontalSection.querySelector(".pin-wrap");
      let pinWrapWidth = pinWrap?.offsetWidth ?? 0;
      let horizontalScrollLength = pinWrapWidth - window.innerWidth;
      gsap.to(pinWrap, {
        scrollTrigger: {
          scroller: "[data-scroll-container]",
          scrub: true,
          trigger: horizontalSection,
          pin: true,
          start: "top top",
          end: () => `+=${pinWrapWidth}`,
          invalidateOnRefresh: true,
        },
        x: -horizontalScrollLength,
        ease: "none",
      });
    });

    const scrollColorElems = document.querySelectorAll("[data-bgcolor]");
    scrollColorElems.forEach((colorSection, i) => {
      const prevBg = i === 0 ? "" : scrollColorElems[i - 1].dataset.bgcolor;
      const prevText = i === 0 ? "" : scrollColorElems[i - 1].dataset.textcolor;

      ScrollTrigger.create({
        trigger: colorSection,
        scroller: "[data-scroll-container]",
        start: "top 50%",
        onEnter: () =>
          gsap.to("body", {
            backgroundColor: colorSection.dataset.bgcolor,
            color: colorSection.dataset.textcolor,
            overwrite: "auto",
          }),
        onLeaveBack: () =>
          gsap.to("body", {
            backgroundColor: prevBg,
            color: prevText,
            overwrite: "auto",
          }),
      });
    });

    ScrollTrigger.addEventListener("refresh", () => scroller.update());

    ScrollTrigger.refresh();
  }, []);

  return (
    <>
      <div className="container">
        <TextParallax />

        {/* <div>
          <section data-textcolor="#032f35" data-bgcolor="#bcb8ad">
            <div>
              <h1>
                <span
                  data-scroll
                  data-scroll-direction="horizontal"
                  data-scroll-speed="6"
                >
                  TELESPACETELESCÓPIENS
                </span>{" "}
                <span
                  data-scroll
                  data-scroll-direction="horizontal"
                  data-scroll-speed="-6"
                >
                  TELESPACETELESCÓPIENS
                </span>
              </h1>
              <p data-scroll data-scroll-speed="3" data-scroll-delay="0.6">
                Telescópiens Group - Develop &
                  Creative Space
                </p>
            </div>
          </section>
        </div> */}
        
        <section data-textcolor="#032f35" data-bgcolor="#bcb8ad">
          <div>
            <h2 data-scroll data-scroll-speed="1">
              <span>This should be a light cream background</span>
            </h2>
          </div>
        </section>

        <section
          className="horizontal-scroll"
          data-textcolor="#032f35"
          data-bgcolor="#bcb8ad"
        >
          <div className="pin-wrap">
            <h2>This whole horizontal section should be brown</h2>
            <img
              src={imageacid}
              alt=""
            />
            <img
              src={magazine}
              alt=""
            />
            <img
              src={imagehippie}
              alt=""
            />
            <img
              src={imageastronaut}
              alt=""
            />
            <img
              src={retro}
              alt=""
            />
          </div>
        </section>


        {/* <section data-bgcolor="#e3857a" data-textcolor="#f1dba7">
          <img
            src="https://images.pexels.com/photos/4791474/pexels-photo-4791474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
          <h2 data-scroll data-scroll-speed="1">
            This should be a pink background
          </h2>
        </section> */}

        {/* <section
          className="horizontal-scroll"
          data-textcolor="#bcb8ad"
          data-bgcolor="#815946"
        >
          <div className="pin-wrap">
            <h2>This whole horizontal section should be brown</h2>
            <img
              src="https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/3371358/pexels-photo-3371358.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/3618545/pexels-photo-3618545.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900"
              alt=""
            />
          </div>
        </section> */}

        <section data-textcolor="#032f35" data-bgcolor="#000">
          <div>
            <h2 data-scroll data-scroll-speed="1">
              <span>This should be a light cream background</span>
            </h2>
          </div>
        </section>

        {/* <section data-bgcolor="#e3857a" data-textcolor="#f1dba7">
          <img
            src="https://images.pexels.com/photos/4791474/pexels-photo-4791474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
          <h2 data-scroll data-scroll-speed="1">
            This should be a pink background
          </h2>
        </section> */}
      </div>
    </>
  );
};
export default MyComponent;
