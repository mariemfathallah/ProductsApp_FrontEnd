
import  './Bienvenus.css'
import React from 'react'
import image from '../../images/im15.png'
const Bienvenus = () => {
  return (
    <div class="container1">
    <div className="row">
      <div className="column1">
        <img className="im w3-animate-fading" src={image} alt='Image1'/>
      </div>
      <div className="column2">
        <h3 className="titre1">Bienvenu</h3>
        <h1>votre santé est notre priorité</h1>
        <p className="pargr1">
          Nous sommes là pour vous offrir une alimentation saine et
          équilibrée <br/>grâce à notre sélection de produits biologiques de
          qualité supérieure. <br/>Faites confiance à nous pour prendre soin de
          vous et profitez de chaque<br/> bouchée en toute tranquillité.
          Découvrez notre gamme de produits <br/>soigneusement choisis pour vous
          aider à atteindre<br/> vos objectifs de bien-être et à adopter un mode
          de vie sain.
        </p>
      </div>
    </div>
  </div>
  )
}

export default Bienvenus
