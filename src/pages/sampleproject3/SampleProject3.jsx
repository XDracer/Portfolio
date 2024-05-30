import React, { useEffect, useRef } from "react";
import "./sample-project3.css";

import Transition from "../../components/transition/Transition";
import { Link } from "react-router-dom";
import gsap from "gsap";

import ProjectImg5 from "../../assets/images/projects/project-5.jpg";
import ProjectImg4 from "../../assets/images/projects/project-4.jpg";
import ProjectImg3 from "../../assets/images/projects/project-3.jpg";
import ProjectImg19 from "../../assets/images/projects/project-19.jpg";
import ProjectImg24 from "../../assets/images/projects/project-24.jpg";
import ProjectImg25 from "../../assets/images/projects/project-25.jpg";

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
        <img src={ProjectImg5} alt="" />
      </section>

      <div className="nextProjectPreviewBg">
        <img src={ProjectImg4} alt="" />
      </div>

      <div className="container">
        <section className="project-title">
          <h1>Affiche Minimaliste</h1>
          <p>Design Graphique • Art</p>
        </section>

        <section className="project-brief">
          <h2>
            Une collection d'affiches minimalistes, inspirées par Bauhaus,
            visant à transmettre des messages puissants à travers une esthétique
            minimale.
          </h2>
        </section>

        <section className="project-description">
          <div className="project-row">
            <div className="project-col">
              <div className="project-sub-col">
                <p>
                  <span>Année</span>
                </p>
                <p>2024</p>
              </div>
              <div className="project-sub-col">
                <p>
                  <span>Credits</span>
                </p>
                <p>Outils: Illustrator</p>
                <p>Designer: Martin Leze</p>
              </div>
            </div>
            <div className="project-col">
              <p>
                <span>Objectifs</span>
              </p>
              <p>
                Le projet d'affiches minimalistes visait à explorer l'essence de
                la simplicité dans le design. En éliminant les éléments
                superflus, l'objectif était de communiquer des idées profondes
                avec un minimum de distractions visuelles.
              </p>
            </div>
          </div>
        </section>

        <section className="project-images">
          <div className="project-img-row">
            <div className="project-img">
              <img src={ProjectImg3} alt="" />
            </div>
            <div className="project-img">
              <img src={ProjectImg24} alt="" />
            </div>
          </div>
          <div className="project-img-row">
            <div className="project-img">
              <img src={ProjectImg19} alt="" />
            </div>
            <div className="project-img">
              <img src={ProjectImg25} alt="" />
            </div>
          </div>
        </section>

        <section className="next-project">
          <div
            className="next-project-preview"
            ref={nextProjectContainerRef}
            onMouseMove={handleMouseMove}
          >
            <img src={ProjectImg4} alt="" />
          </div>
          <div className="next-project-copy">
            <p>
              <span>Next Project</span>
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
              <Link to="/sample-project4">Herisd Project</Link>
            </h1>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Transition(SampleProject2);
