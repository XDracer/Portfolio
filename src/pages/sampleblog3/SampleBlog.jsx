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
          <h2>Théorie des couleurs, façonnée : Le spectre mental d'un designer</h2>
        </div>

        <div className="blog-content">
          <div className="s-blog-col scroll">
            <p>
              <span>Crée le • 9 decembre 2023</span>
            </p>

            <br />
            <h4>
              Au-delà de la théorie, des identités de marque qui résonnent avec
              le public sur un niveau psychologique aux interfaces utilisateur
              qui améliorent l'utilisabilité et l'accessibilité—la couleur est
              un outil qui, lorsqu'il est maîtrisé, peut changer la donne.
            </h4>
            <br />
            <br />
            <p>
              Au cœur de chaque design mémorable se trouve l'utilisation
              stratégique de la couleur. Il ne s'agit pas seulement d'esthétique
              ; il s'agit de transmettre le bon message, de créer l'ambiance et
              même d'influencer la prise de décision. Cette compréhension forme
              le cœur de notre exploration de la théorie des couleurs—un outil
              aussi vital pour un designer qu'une boussole pour un navigateur.
            </p>
            <br />
            <br />
            <h3>
              Plongez dans les principes de la théorie des couleurs, de la roue
              chromatique et de l'harmonie des couleurs.
            </h3>
            <p>
              La théorie des couleurs n'est pas seulement un aspect fondamental
              du design ; c'est un langage parlé en teintes et en nuances. Il
              s'agit de créer de l'harmonie, d'évoquer des émotions et
              d'améliorer l'expérience utilisateur. Que vous soyez un designer
              chevronné, un marketeur ou quelqu'un désireux de comprendre les
              nuances de la narration visuelle, la théorie des couleurs offre
              des perspectives inestimables sur les raisons et les façons de
              choisir des couleurs et leur impact sur le design et le branding.
            </p>
            <br />
            <br />
            <p>
              À travers ce blog, nous plongeons dans les principes de la théorie
              des couleurs, de la roue chromatique et de l'harmonie des couleurs
              aux effets psychologiques des couleurs. Nous explorerons comment
              les couleurs peuvent être utilisées pour attirer l'attention,
              évoquer des humeurs et même influencer le comportement. Ce voyage
              n'est pas seulement destiné aux designers, mais à tous ceux qui
              souhaitent appliquer le pouvoir de la couleur dans leurs projets
              ou marques.
            </p>
            <br />
            <br />
            <p>
              L'application de la théorie des couleurs s'étend au-delà de la
              toile du design numérique ; elle est présente dans le design
              d'intérieur, la mode et le branding. Comprendre la dynamique des
              couleurs peut transformer l'ordinaire en extraordinaire,
              transformant des designs simples en expériences mémorables.
              Rejoignez-nous alors que nous découvrons les secrets de la théorie
              des couleurs et comment vous pouvez exploiter son pouvoir pour
              élever votre travail.
            </p>
            <br />
            <br />
            <p>
              Au-delà de la théorie, nous présenterons des exemples pratiques de
              l'application efficace de la théorie des couleurs dans divers
              projets de design. Des identités de marque qui résonnent avec le
              public sur un niveau psychologique aux interfaces utilisateur qui
              améliorent l'utilisabilité et l'accessibilité—la couleur est un
              outil qui, lorsqu'il est maîtrisé, peut changer la donne.
            </p>
            <br />
            <br />
            <p>
              Plongez dans le monde de la couleur avec nous et découvrez comment
              exploiter son potentiel dans votre prochain projet de design. Que
              vous construisiez une marque, conceviez un site web ou créiez une
              campagne marketing, comprendre la théorie des couleurs peut élever
              votre travail et vous aider à communiquer plus efficacement avec
              votre public.
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