import React, { useEffect, useRef } from "react";
import "./sample-project4.css";

import Transition from "../../components/transition/Transition";
import { Link } from "react-router-dom";
import gsap from "gsap";

import ProjectImg4 from "../../assets/images/projects/project-4.jpg";
import ProjectImg22 from "../../assets/images/projects/project-22.jpg";
import ProjectImg23 from "../../assets/images/projects/project-23.jpg";
import ProjectImg26 from "../../assets/images/projects/project-26.jpg";

const SampleProject2 = () => {
  const nextProjectPreview = useRef();
  const nextProjectPreviewBg = useRef();
  const nextProjectContainerRef = useRef();

  const handleNextProjectHover = () => {
    nextProjectPreview.current.play();
    nextProjectPreviewBg.current.play();
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const nextProjectContainer = nextProjectContainerRef.current;

    gsap.to(nextProjectContainer, {
      x: clientX - nextProjectContainer.offsetWidth / 2,
      y: clientY - nextProjectContainer.offsetHeight / 2,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  const handleNextProjectHoverOut = () => {
    nextProjectPreview.current.reverse();
    nextProjectPreviewBg.current.reverse();
  };

  useEffect(() => {
    nextProjectPreview.current = gsap
      .timeline({ paused: true })
      .to(".next-project-preview", {
        duration: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power4.inOut",
      });

    nextProjectPreviewBg.current = gsap
      .timeline({ paused: true })
      .to(".nextProjectPreviewBg", {
        opacity: 1,
        duration: 0.3,
      });
  }, []);

  return (
    <div className="project page">
      <section className="project-hero">
        <img src={ProjectImg4} alt="" />
      </section>

      <div className="nextProjectPreviewBg">
        <img src={ProjectImg4} alt="" />
      </div>

      <div className="container">
        <section className="project-title">
          <h1>Herisd Project</h1>
          <p>Graphic Design • Illustration</p>
        </section>

        <section className="project-brief">
          <h2>
            Une série de posters saisissante, basée sur des photographies
            réelles, capturant l'essence de la vie .
          </h2>
        </section>

        <section className="project-description">
          <div className="project-row">
            <div className="project-col">
              <div className="project-sub-col">
                <p>
                  <span>Anée</span>
                </p>
                <p>2024</p>
              </div>
              <div className="project-sub-col">
                <p>
                  <span>Credits</span>
                </p>
                <p>Photographer: SAVEE</p>
                <p>Designer: Martin Leze</p>
              </div>
            </div>
            <div className="project-col">
              <p>
                <span>Objectifs</span>
              </p>
              <p>
                Le projet d'affiches photo avait pour but de mettre en valeur la
                diversité de mes idées à travers des designs d'affiches. En
                intégrant des techniques de photographie modernes avec un design
                graphique nouveau, le projet cherchait à évoquer des émotions et
                à susciter des réflexions. L'objectif principal était de créer
                des affiches visuellement attrayantes et stimulantes qui
                capturent l'esprit unique des paysages urbains.
              </p>
            </div>
          </div>
        </section>

        <section className="project-images">
          <div className="project-img-row">
            <div className="project-img">
              <img src={ProjectImg22} alt="" />
            </div>
            <div className="project-img">
              <img src={ProjectImg23} alt="" />
            </div>
          </div>

        </section>

        <section className="next-project">
          <div
            className="next-project-preview"
            ref={nextProjectContainerRef}
            onMouseMove={handleMouseMove}
          >
            <img src={ProjectImg26} alt="" />
          </div>
          <div className="next-project-copy">
            <p>
              <span>Me suivre sur</span>
            </p>
            <h1
              onMouseOver={() => {
                handleNextProjectHover();
                document.addEventListener("mousemove", handleMouseMove);
              }}
              onMouseOut={() => {
                handleNextProjectHoverOut();
                document.removeEventListener("mousemove", handleMouseMove);
              }}
            >
              <Link to="https://bento.me/wleze">Mes reseaux</Link>
            </h1>
          </div> 
        </section>
      </div>
    </div>
  );
};

export default Transition(SampleProject2);
