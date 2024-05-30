import React from "react";
import Transition from "../../components/transition/Transition";

import ProjectImg1 from "../../assets/images/projects/project-1.jpg";
import { MetaLogo, XLogo } from "@phosphor-icons/react";

import MagneticButton from "../../components/magneticbutton/MagneticButton";

import "./sample-blog.css";

function SampleBlog() {
  return (
    <div className="sample-blog page">
      <div className="container">
        <div className="s-blog-hero">
          <h2>Ombre & Lumière : Explorer la profondeur visuelle dans le design</h2>
        </div>

        <div className="blog-content">
          <div className="s-blog-col scroll">
            <p>
              <span>Crée le • 9 decembre 2023</span>
            </p>

            <br />
            <h4>
              Au-delà des éléments visuels classiques, une exploration des
              nuances de l'ombre et de la lumière—découvrir la profondeur
              visuelle dans le design offre une nouvelle dimension à notre
              perception esthétique.
            </h4>
            <br />
            <br />
            <p>
              Au cœur de chaque chef-d'œuvre visuel se trouve l'utilisation
              créative de l'ombre et de la lumière. Il ne s'agit pas seulement
              de créer quelque chose de plat ; il s'agit de jouer avec les
              contrastes et les nuances pour créer une profondeur et une dynamique
              visuelles. Cette compréhension forme le cœur de notre exploration
              d'Ombre & Lumière—une quête aussi captivante pour un designer que
              pour un peintre.
            </p>
            <br />
            <br />
            <h3>
              Plongez dans les techniques de l'ombre et de la lumière, des
              effets d'éclairage à la composition visuelle.
            </h3>
            <p>
              Explorer l'ombre et la lumière dans le design ne se limite pas à
              simplement ajouter de la profondeur à une image. Il s'agit d'expérimenter
              avec les textures, les formes et les couleurs pour créer des
              expériences visuelles riches et immersives. Que vous soyez un
              graphiste, un photographe ou un passionné de design, comprendre
              les nuances de l'ombre et de la lumière peut transformer votre
              approche créative.
            </p>
            <br />
            <br />
            <p>
              À travers ce blog, nous plongeons dans les techniques de l'ombre
              et de la lumière, des effets d'éclairage qui ajoutent du réalisme
              à la composition visuelle qui guide l'œil à travers une scène.
              Nous explorerons comment ces éléments peuvent être utilisés pour
              créer des designs saisissants qui capturent l'imagination et
              captivent le spectateur.
            </p>
            <br />
            <br />
            <p>
              Ombre & Lumière offrent un terrain de jeu infini pour les designers
              qui cherchent à créer des expériences visuelles mémorables. Que
              vous conceviez une affiche, une interface utilisateur ou une
              scène de film, comprendre comment manipuler l'ombre et la lumière
              peut vous aider à donner vie à vos idées de manière nouvelle et
              captivante.
            </p>
            <br />
            <br />
            <p>
              Au-delà de la théorie, nous présenterons des exemples pratiques
              de l'utilisation efficace de l'ombre et de la lumière dans divers
              projets de design. Des illustrations étonnantes qui jouent avec
              les contrastes aux sites web dynamiques qui utilisent le mouvement
              pour créer une illusion de profondeur, les possibilités sont
              infinies pour ceux qui explorent les subtilités de l'Ombre & Lumière.
            </p>
            <br />
            <br />
            <p>
              Plongez dans le monde captivant de l'Ombre & Lumière avec nous et
              découvrez comment ces concepts peuvent enrichir votre prochain projet
              de design. Que vous soyez un débutant curieux ou un professionnel
              chevronné, explorer la profondeur visuelle peut vous aider à
              créer des œuvres qui transcendent les limites de l'ordinaire.
            </p>
            <br />
            <br />
          </div>
          <div className="s-blog-col sticky">
            <p id="blog-share">
              <span>Partager</span>{" "}
              <div className="share-icon">
                <MetaLogo size={18} weight="light" color="#fff" />
              </div>
              <div className="share-icon">
                <XLogo size={18} weight="light" color="#fff" />
              </div>
            </p>

            <div className="blog-content-img">
              <img src={ProjectImg1} alt="" />
            </div>
          </div>
        </div>

        <MagneticButton />
      </div>
    </div>
  );
}

export default Transition(SampleBlog);
