import React from "react";
import Transition from "../../components/transition/Transition";

import "./contact.css";

import MagneticButton from "../../components/magneticbutton/MagneticButton";

const Contact = () => {
  return (
    <div className="contact page">
      <div className="container">
        <section className="contact-hero">
          <div className="contact-row">
            <div className="contact-col"></div>
            <div className="contact-col">
              <h1>
                N'hésitez pas à m'écrire un message{" "}
                
              </h1>
            </div>
          </div>
        </section>

        <section className="section contact-form">
          <div className="contact-row">
            <div className="contact-col">
              <p>
                <span>Contact</span>
              </p>
            </div>
            <div className="contact-col">
              <form action="">
                <div className="input">
                  <input type="text" placeholder="Nom" />
                </div>
                <div className="input">
                  <textarea type="text" placeholder="Message" rows={6} />
                </div>
                <div className="input">
                  <input type="text" placeholder="Email" />
                  <button>Envoyer</button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <section className="contact-subscribe">
          <div className="contact-row">
            <div className="contact-col">
              <p>
                <span>Newsletter</span>
              </p>
            </div>
            <div className="contact-col">
              <h3>
                Abonnez-vous à ma Newsletter pour recevoir des informations et
                des conseils sur la conception numérique. numérique
              </h3>
              <p>
                Je tiens à vous informer que pour le moment, Ma newsletter
                n'existe pas encore. Je suis en train de travailler sur de
                passionnants projets, et une newsletter pourrait bien être l'une
                des prochaines étapes !
              </p>

              <div className="input">
                <input type="text" placeholder="Email" />
                <button>Envoyer</button>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-socials">
          <div className="contact-row">
            <div className="contact-col">
              <p>
                <span>Socials</span>
              </p>
            </div>
            <div className="contact-col">
              <div className="contact-social-link">
                <p>
                  <a href="https://bento.me/wleze">Mes réseaux sociaux</a>
                </p>
              </div>
              <div className="contact-social-link">
                <p>
                  <a href="#"></a>
                </p>
              </div>
              <div className="contact-social-link">
                <p>
                  <a href="#"></a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Transition(Contact);
