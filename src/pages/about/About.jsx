import React from "react";
import "./about.css";

import Transition from "../../components/transition/Transition";

import Faq from "react-faq-component";
import Marquee from "react-fast-marquee";
import MagneticButton from "../../components/magneticbutton/MagneticButton";

import PortraitImg from "../../assets/images/home/portrait.jpg";

const About = () => {
  const data = {
    title: "",
    rows: [
      {
        title: "Quels types de travaux j'accepte ?",
        content:
          "Je me spécialise dans la conception de poster et d'identité graphique, en me concentrant sur la création de posters engageants et dynamiques pour les Entreprise. Mon travail comprend une gamme de projets, notamment la conception d'affiches et de branding, la création de logo graphiques et le développement d'éléments d'identité visuelle personnalisés pour la narration de marque. Je suis passionné par le fait de donner vie aux marques à travers des identité visuelle unique.",
      },
      {
        title: "Comment je facture les projets ?",
        content:
          "Ma tarification des projets est adaptée aux besoins et à la portée spécifiques de chaque projet. J'offre généralement des honoraires basés sur le projet après une discussion approfondie sur les exigences, les délais et les livrables attendus du projet. Cette approche permet une compréhension claire des coûts du projet dès le départ. Pour les projets plus importants ou plus complexes, je peux également travailler avec un calendrier de paiement par étapes, assurant ainsi la transparence et l'alignement avec les jalons du projet.",
      },
      {
        title: "Quel est mon taux horaire ?",
        content:
          "Bien que je travaille principalement avec une tarification basée sur les projets, je comprends que certains projets peuvent nécessiter un taux horaire ou journalier, surtout lors des phases initiales ou pour un soutien continu. Mon taux horaire est de XXX €, reflétant mon expertise et la valeur que j'apporte à chaque projet. Pour les engagements à long terme ou les projets plus importants, je suis ouvert à la discussion d'un taux personnalisé ou d'un modèle de retainer qui s'aligne avec les besoins du client et les objectifs du projet.",
      },
    ],
  };

  return (
    <div className="about page">
      <div className="container">
        <section className="about-marquee">
          <Marquee>
            <h1>
              Animez votre présence en ligne avec des créations graphiques
              inoubliables.
            </h1>
          </Marquee>
        </section>

        <section className="about-intro">
          <h2>
            Bonjour et bienvenue ! Je m'appelle Martin et je suis un artiste et
            un graphiste indépendant. Actuellement, je suis également étudiant a
            l'Iut de Dijon .
          </h2>
        </section>

        <section className="about-intro-copy">
          <div className="about-row">
            <div className="about-col">
              <p>
                <span>Est. 2004</span>
              </p>
            </div>
            <div className="about-col">
              <h3>
                Mon parcours dans le monde de l'art a commencé par une
                fascination pour les couleurs, les formes et les possibilités
                illimitées de l'expression créative. Au fil des ans, j'ai
                perfectionné mes compétences dans divers domaines, de la photo
                et du croquis traditionnels à l'illustration numérique et à la
                conception graphique. Chaque œuvre que je crée est imprégnée de
                ma perspective unique et de ma passion pour la narration, dans
                le but d'évoquer l'émotion et d'inspirer l'imagination.
              </h3>
              <br />
            </div>
          </div>
        </section>

        <section className="about-portrait">
          <div className="about-row">
            <div className="about-col">
              <p>
                <span>Contact</span>
              </p>
              <br />
              <br />
              <p>
                <span>Email: </span> <span>martinleze8@gmail.com</span>
              </p>
              <br />
              <p>
                <span>Address: </span> <span>Dijon, France</span>
              </p>

              <br />
              <br />
              <br />
            </div>
            <div className="about-col">
              <div className="about-portrait-img">
                <img src={PortraitImg} alt="" />
              </div>

              <div className="faqs">
                <Faq data={data} />
              </div>
            </div>
          </div>
        </section>

        <section className="about-contact">
          <div className="about-contact-copy">
            <h2>Animez votre présence en ligne avec des créations graphiques
              inoubliables.</h2>
            <p>
              <span>
                Pour un logo, Poster ou des questions, veuillez me contacter à
                martinleze8@gmail.com pour discuter de votre avenir créatif.
              </span>
            </p>

            <br />
            <p>
              <span></span>
            </p>
            <p>
              <span></span>
            </p>
          </div>
        </section>

        <MagneticButton />
      </div>
    </div>
  );
};

export default Transition(About);
