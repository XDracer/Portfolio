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
          <h2>Récits numériques : Raconter des histoires à travers un design une oeuvre</h2>
        </div>

        <div className="blog-content">
          <div className="s-blog-col scroll">
            <p>
              <span>Crée le • 9 decembre 2023</span>
            </p>

            <br />
            <h4>
              Au-delà du design, des récits qui captivent l'imagination et
              transportent les spectateurs dans un voyage numérique—raconter des
              histoires à travers le design est un art qui peut créer une
              expérience inoubliable.
            </h4>
            <br />
            <br />
            <p>
              Au cœur de chaque design narratif se trouve l'utilisation
              stratégique des éléments visuels pour raconter une histoire. Il
              ne s'agit pas seulement de créer quelque chose de beau ; il s'agit
              de créer une connexion émotionnelle, de susciter l'intérêt et même
              de provoquer une réflexion. Cette compréhension forme le cœur de
              notre exploration des récits numériques—une forme d'expression
              aussi puissante pour un designer qu'une plume pour un écrivain.
            </p>
            <br />
            <br />
            <h3>
              Plongez dans les principes du design narratif, de la mise en
              scène visuelle à la structure de l'histoire.
            </h3>
            <p>
              Le design narratif n'est pas seulement un aspect du design ; c'est
              une manière de donner vie aux idées et aux émotions à travers des
              pixels. Il s'agit de créer une expérience immersive, de guider le
              spectateur à travers un parcours émotionnel et intellectuel. Que
              vous soyez un designer, un cinéaste ou un écrivain, le design
              narratif offre des perspectives inestimables sur la façon de
              captiver un public et de le transporter dans un autre monde.
            </p>
            <br />
            <br />
            <p>
              À travers ce blog, nous plongeons dans les principes du design
              narratif, de la mise en scène visuelle à la structure de l'histoire,
              en passant par les techniques de narration interactive. Nous
              explorerons comment le design peut être utilisé pour raconter des
              histoires, susciter des émotions et même inspirer des actions.
              Ce voyage n'est pas seulement destiné aux designers, mais à tous
              ceux qui souhaitent utiliser le pouvoir du design pour créer des
              expériences narratives mémorables.
            </p>
            <br />
            <br />
            <p>
              L'application du design narratif s'étend au-delà du monde du design
              numérique ; elle est présente dans le cinéma, les jeux vidéo et
              même la publicité. Comprendre les principes du récit peut
              transformer un simple design en une œuvre d'art numérique, une
              expérience interactive qui reste gravée dans la mémoire. Rejoignez-nous
              alors que nous explorons les secrets du design narratif et comment
              vous pouvez utiliser cette puissante forme d'expression dans votre
              propre travail.
            </p>
            <br />
            <br />
            <p>
              Au-delà de la théorie, nous présenterons des exemples pratiques de
              l'application efficace du design narratif dans divers projets de
              design. Des sites web qui racontent des histoires captivantes aux
              applications interactives qui transportent les utilisateurs dans
              un autre monde—le design narratif est un outil puissant qui peut
              donner vie à vos idées les plus folles.
            </p>
            <br />
            <br />
            <p>
              Plongez dans le monde du récit numérique avec nous et découvrez
              comment exploiter son potentiel dans votre prochain projet de
              design. Que vous construisiez une marque, conceviez un site web
              ou créiez une campagne marketing, comprendre le design narratif
              peut transformer votre travail en une expérience immersive et
              mémorable pour votre public.
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