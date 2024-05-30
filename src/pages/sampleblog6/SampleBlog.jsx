import React from "react";
import Transition from "../../components/transition/Transition";

import ProjectImg3 from "../../assets/images/projects/project-3.jpg";
import { MetaLogo, XLogo } from "@phosphor-icons/react";

import MagneticButton from "../../components/magneticbutton/MagneticButton";

import "./sample-blog.css";

function SampleBlog() {
  return (
    <div className="sample-blog page">
      <div className="container">
        <div className="s-blog-hero">
          <h2>Tendances du design écologique : Quand la durabilité rencontre l'esthétique</h2>
        </div>

        <div className="blog-content">
          <div className="s-blog-col scroll">
            <p>
              <span>Crée le • 9 decembre 2023</span>
            </p>

            <br />
            <h4>
              Au-delà de l'esthétique traditionnelle, des designs qui intègrent
              la durabilité comme principe fondateur et redéfinissent ce que
              signifie être beau et responsable—les tendances du design écologique
              offrent un regard frais sur notre relation avec la planète.
            </h4>
            <br />
            <br />
            <p>
              Au cœur de chaque tendance en matière de design écologique se
              trouve la conviction que nous pouvons créer sans détruire, que
              la beauté et la responsabilité ne sont pas mutuellement exclusives.
              Il ne s'agit pas seulement de créer quelque chose d'esthétiquement
              agréable ; il s'agit de concevoir des solutions qui respectent la
              terre et ses habitants. Cette compréhension forme le cœur de notre
              exploration des tendances du design écologique—une perspective aussi
              inspirante pour un designer qu'un lever de soleil sur une plage
              immaculée.
            </p>
            <br />
            <br />
            <h3>
              Plongez dans les innovations du design écologique, des matériaux
              durables à la conception circulaire.
            </h3>
            <p>
              Le design écologique ne se limite pas à l'utilisation de matériaux
              recyclés ou à la réduction des déchets. Il s'agit d'adopter une
              approche holistique de la conception, en tenant compte de l'ensemble
              du cycle de vie d'un produit et de son impact sur l'environnement.
              Que vous soyez un designer industriel, un architecte ou un amateur
              de design, les tendances écologiques offrent des perspectives
              stimulantes sur la manière dont nous pouvons repenser notre relation
              avec les objets qui nous entourent.
            </p>
            <br />
            <br />
            <p>
              À travers ce blog, nous plongeons dans les innovations du design
              écologique, des matériaux durables qui réduisent notre empreinte
              carbone à la conception circulaire qui favorise la réutilisation
              et la régénération. Nous explorerons comment ces tendances transforment
              l'industrie du design et ouvrent de nouvelles voies pour les
              créateurs soucieux de l'environnement.
            </p>
            <br />
            <br />
            <p>
              Les tendances du design écologique nous rappellent que nous ne
              devons pas sacrifier notre planète pour la beauté. Au contraire,
              elles nous montrent comment la durabilité peut être intégrée dans
              chaque aspect de notre vie quotidienne, de la mode à l'architecture
              en passant par le design d'intérieur. Rejoignez-nous alors que
              nous explorons les tendances du design écologique et comment vous
              pouvez les intégrer dans votre propre pratique créative.
            </p>
            <br />
            <br />
            <p>
              Au-delà de la théorie, nous présenterons des exemples concrets
              des dernières tendances en matière de design écologique. Des
              produits innovants qui réduisent leur impact environnemental aux
              projets architecturaux qui repensent la façon dont nous habitons
              notre planète, les possibilités sont infinies pour un design
              respectueux de l'environnement et esthétiquement magnifique.
            </p>
            <br />
            <br />
            <p>
              Plongez dans les tendances du design écologique avec nous et
              découvrez comment ces approches peuvent transformer votre prochain
              projet de design. Que vous soyez un professionnel de la conception
              ou simplement un amateur soucieux de l'environnement, comprendre
              les tendances écologiques peut vous aider à créer un avenir plus
              durable et plus beau pour tous.
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
              <img src={ProjectImg3} alt="" />
            </div>
          </div>
        </div>

        <MagneticButton />
      </div>
    </div>
  );
}

export default Transition(SampleBlog);
