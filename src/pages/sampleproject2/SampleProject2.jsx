import React, { useEffect, useRef } from "react";
import "./sample-project2.css";

import Transition from "../../components/transition/Transition";
import { Link } from "react-router-dom";
import gsap from "gsap";

import ProjectImg2 from "../../assets/images/projects/project-2.jpg";
import ProjectImg3 from "../../assets/images/projects/project-3.jpg"; // Nouvelle image
import ProjectImg15 from "../../assets/images/projects/project-15.jpg"; // Nouvelle image
import ProjectImg16 from "../../assets/images/projects/project-16.jpg"; // Nouvelle image
import ProjectImg17 from "../../assets/images/projects/project-17.jpg"; // Nouvelle image
import ProjectImg18 from "../../assets/images/projects/project-18.jpg"; // Nouvelle image
import ProjectImg19 from "../../assets/images/projects/project-19.jpg"; // Nouvelle image
import ProjectImg20 from "../../assets/images/projects/project-20.jpg"; // Nouvelle image
import ProjectImg21 from "../../assets/images/projects/project-21.jpg"; // Nouvelle image

const SampleProject = () => {
  const nextProjectPreview = useRef();
  const nextProjectPreviewBg = useRef();

  const handleNextProjectHover = () => {
    nextProjectPreview.current.play();
    nextProjectPreviewBg.current.play();
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const nextProjectContainer = document.querySelector(
      ".next-project-preview"
    );

    gsap.to(".next-project-preview", {
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
        <img src={ProjectImg2} alt="" />
      </section>

      <div className="nextProjectPreviewBg">
        <img src={ProjectImg2} alt="" />
      </div>

      <div className="container">
        <section className="project-title">
          <h1>Poster Photo</h1>
          <p>Poster • Design</p>
        </section>

        <section className="project-brief">
          <h2>
          Une série de posters basée sur des photographies
            réelles, capturant l'essence de la vie .
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
                <p>Photographe: SAVEE</p>
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
                des affiches visuellement attrayantes et stimulantes.
              </p>
            </div>
          </div>
        </section>

        <section className="project-images">
          <div className="project-img-row">
            <div className="project-img">
              <img src={ProjectImg2} alt="" />
            </div>
          </div>
          <div className="project-img-row">
            <div className="project-img">
              <img src={ProjectImg15} alt="" />
            </div>
            <div className="project-img">
              <img src={ProjectImg16} alt="" />
            </div>
          </div>
          <div className="project-img-row">
            <div className="project-img">
              <img src={ProjectImg17} alt="" />
            </div>
            <div className="project-img">
              <img src={ProjectImg18} alt="" />
            </div>
          </div>
          <div className="project-img-row">
            <div className="project-img">
              <img src={ProjectImg19} alt="" />
            </div>
            <div className="project-img">
              <img src={ProjectImg20} alt="" />
            </div>
            <div className="project-img">
              <img src={ProjectImg21} alt="" />
            </div>
          </div>
        </section>

        <section className="next-project">
          <div className="next-project-preview">
            <img src={ProjectImg3} alt="" />
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
              <Link to="/sample-project3">Mininimalist</Link>
            </h1>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Transition(SampleProject);
