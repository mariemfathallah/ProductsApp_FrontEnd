import "./NosProduits.css";

import React from "react";

const NosProduits = () => {
  return (
    <div>
      <h1 className="titlee">Nos Produits </h1>
      <br />
      <br />
  
      <div className="FlipCard">
        <div className="wrapper">
          <div className="card">
            <input
              type="checkbox"
              id="card1"
              className="more"
              aria-hidden="true"
            />
            <div className="content">
              <div className="front" id="front1">
                <div className="inner">
                  <h2 className="texte">Légumes</h2>
                  <div className="rating"></div>
                  <label for="card1" className="button" aria-hidden="true">
                    Details
                  </label>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <div className="paragraph">
                    légumes peut aider à prévenir certaines maladies comme les
                    cancers, les maladies cardiovasculaires, l'obésité ou encore
                    le diabète.
                  </div>
                  <label
                    for="card1"
                    className="button return"
                    aria-hidden="true"
                  >
                    Return
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <input
              type="checkbox"
              id="card2"
              className="more"
              aria-hidden="true"
            />
            <div className="content">
              <div className="front" id="front2">
                <div className="inner">
                  <h2 className="texte">Maïs</h2>
                  <div className="rating"></div>
                  <label for="card2" className="button" aria-hidden="true">
                    Details
                  </label>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <div className="paragraph">
                    Le maïs sucré est une source de vitamine C. Le rôle que joue
                    la vitamine C dans l'organisme va au-delà de ses propriétés
                    antioxydantes; elle contribue aussi à la santé des os, des
                    cartilages, des dents et des gencives.
                  </div>
                  <label
                    for="card2"
                    className="button return"
                    aria-hidden="true"
                  >
                    Return
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <input
              type="checkbox"
              id="card3"
              className="more"
              aria-hidden="true"
            />
            <div className="content">
              <div className="front" id="front3">
                <div className="inner">
                  <h2 className="texte">Huile</h2>
                  <div className="rating"></div>
                  <label for="card3" className="button" aria-hidden="true">
                    Details
                  </label>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <div className="paragraph">
                    Une huile alimentaire est une huile végétale comestible
                    liquide, à la température de 15°C. Cette matière grasse
                    d'origine végétale, constituée à plus de 99% de lipides, est
                    donc très énergétique.
                  </div>
                  <label
                    for="card3"
                    className="button return"
                    aria-hidden="true"
                  >
                    Return
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="wrapper">
          <div className="card">
            <input
              type="checkbox"
              id="card4"
              className="more"
              aria-hidden="true"
            />
            <div className="content">
              <div className="front" id="front4">
                <div className="inner">
                <h2 className="texte" id='miel'>Miel</h2>
                  <div className="rating">     </div>
           
                  <label for="card4" className="button" aria-hidden="true">
                    Details
                  </label>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <div className="paragraph">
                    Ce produit naturel de la ruche dispose de propriétés servant
                    à inhiber la croissance des bactéries et des champignons et
                    prévient leur prolifération.
                  </div>
                  <label
                    for="card4"
                    className="button return"
                    aria-hidden="true"
                  >
                    Return
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <input
              type="checkbox"
              id="card5"
              className="more"
              aria-hidden="true"
            />
            <div className="content">
              <div className="front" id="front5">
                <div className="inner">
                  <h2 className="texte">Fruits et légumes bio</h2>
                  <div className="rating"></div>
                  <label for="card5" className="button" aria-hidden="true">
                    Details
                  </label>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <div className="paragraph">
                    l’agriculture bio utilise des alternatives plus
                    respectueuses de l’environnement.
                  </div>
                  <label
                    for="card5"
                    className="button return"
                    aria-hidden="true"
                  >
                    Return
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <input
              type="checkbox"
              id="card6"
              className="more"
              aria-hidden="true"
            />
            <div className="content">
              <div className="front" id="front6">
                <div className="inner">
                 
                  <h2 className="texte">Fruit Secs</h2>
                  <div className="rating"></div>
                  <label for="card6" className="button" aria-hidden="true">
                    Details
                  </label>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <div className="paragraph">
                  Les  fruits secs :comme la noix du Brésil, les noix, les amandes
                    et les noisettes seraient bons pour réguler l'humeur. Ils
                    préviennent les coups de fatigue et l'anxiété, et luttent
                    ainsi contre la morosité et la baisse de vitalité.
                  </div>
                  <label
                    for="card6"
                    className="button return"
                    aria-hidden="true"
                  >
                    Return
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NosProduits;
