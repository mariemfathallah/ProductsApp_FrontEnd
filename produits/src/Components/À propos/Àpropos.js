import './Àpropos.css'
import React from 'react'
import image from '../../images/bg_1.jpg'

import image_3 from '../../images/345311436_245768437971563_5569843958781431114_n.jpg'
import image_4 from '../../images/person_1.jpg'
import image_5 from '../../images/person_2.jpg'
import image_6 from '../../images/person_3.jpg'
import image_7 from '../../images/person_4.jpg'

import video from '../../images/pexels-jack-sparrow-4121740-3840x2160-50fps.mp4'
import NavBar from '../NavBar/NavBar'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
const Àpropos = () => {
  return (
 
    <>
    <NavBar />

 
      <div
        className="hero-wrap hero-bread"
        style={{
          backgroundImage: ` url(${image} )`,
          backgroundSize: 'cover',
          height: '600px',
          width: '100%',
          backgroundPosition: 'center center',
        }}
      >
        <div
          className="container"
          style={{ position: 'relative', top: '270px' }}
        >
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div classNam="col-md-9 ftco-animate text-center">
              <p className="breadcrumbs">
                <span className="mr-2">
                  <a
                    href="/home"
                    style={{
                      color: 'white',
                      textDecoration: 'none',
                      fontSize: '25px',
                      fontWeight: 'bold',
                    }}
                  >
                    Accueil/
                  </a>
                </span>{' '}
                <span style={{ color: 'white' }}>À propos de nous</span>
              </p>
              <h1
                className="mb-0 bread"
                style={{ color: 'white', fontWeight: 'bold' }}
              >
                À propos de nous
              </h1>
            </div>
          </div>
        </div>
      </div>

      <section className="ftco-section-wrap bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center">
              <video src={video} autoPlay controls style={{ width: '150%' }} />
            </div>
            <div className="col-md-7 py-5 wrap-about pb-md-5 ftco-animate ">
              <div className="heading-section-bold mb-4 mt-md-5">
                <div className="ml-md-0">
                  <h2 className="mb-4" style={{ fontSize: '40px'}}>
                    Bienvenue sur Vegefoods un site de commerce électronique
                  </h2>
                </div>
              </div>
              <div className="pb-md-5">
                <p>
                  Loin loin, derrière le mot montagnes, loin des pays Vokalia et
                  Consonantia, vivent les textes aveugles. Séparés, ils vivent à
                  Bookmarksgrove, juste au bord de la sémantique, un grand océan
                  de langues.
                </p>
                <p>
                  Mais rien de ce que disait la copie ne pouvait la convaincre
                  et il ne fallut donc pas longtemps avant que quelques
                  rédacteurs insidieux ne lui tendent une embuscade, la saoulent
                  avec Longe et Parole et la traînent dans leur agence, où ils
                  l'ont maltraitée pour leur.
                </p>
                <p>
                  <Link href="#" className="btn">
                    Achetez maintenant
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <section className="ftco-section bg-light">
        <div className="container py-4">
          <div className="row d-flex justify-content-center py-5">
            <div className="col-md-6">
              <h2
                style={{
                  fontSize: '22px',
                  color: 'black',
                  fontWeight: 'normal',
                  textTransform: 'capitalize',
                }}
                className="mb-0"
              >
     Abonnez-vous à notre newsletter
              </h2>
              <span style={{ color: 'gray' }}>
			  Recevez des mises à jour par e-mail sur nos dernières <br/>boutiques et offres spéciales
              </span>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <form action="#" className="subscribe-form">
                <div className="form-group d-flex">
                  <input
                    type="text"
                  id="formControl"
                    placeholder="Enter email address"
            
                  />
                  <button className="btn" style={{ borderRadius: '0%' }}>
               
				  S'abonner
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      </section>

     
	  <section style= {{ backgroundImage: ` url(${image_3} )`,
	  backgroundSize:'cover',backgroundPosition:'center center',height:'800px'}} >

		
		        
    </section>


    {/* avis clients */ }
<br/>
<br/>
<br/>
<br/>
<br/>
    <div className="multi-carousel" >

    <div className="multi-carousel-inner d-flex justify-content-center m-5">
        <div className="multi-carousel-item">
            <div className="card m-3">
                <img id="img-fluid" src={image_4} alt="Card" style={{width:'400px',height:'300px'}}/>
                <div className="card-body">
                    <h5 className="card-title">Mohamed</h5>
                    <p>Service trés rapide je suit bien satisfaite,merci!</p>
                    <ul className="list-unstyled list-inline my-2">
                    <li className="list-inline-item mx-0"><i className="far fa-star"></i></li>
                        <li className="list-inline-item mx-0"><i className="fas fa-star"></i></li>
                        <li className="list-inline-item mx-0"><i className="fas fa-star"></i></li>
                        <li className="list-inline-item mx-0"><i className="fas fa-star"></i></li>
                        <li className="list-inline-item mx-0"><i className="fas fa-star-half-alt"></i></li>
                    </ul>
              
                
                </div>
            </div>
        </div>
        <div className="multi-carousel-item" style={{width:'420px'}}>
            <div className="card m-2">
                <img id="img-fluid" src={image_5} alt="Card" style={{width:'400px',height:'300px'}} />
                <div className="card-body">
                    <h5 className="card-title">Walid</h5>
                    <p>Des fruits et legums frais et service trés rapide comme toujours,<br/>merci beaucoup!</p>
                    <ul className="list-unstyled list-inline my-2">
                        <li className="list-inline-item mx-0"><i className="fas fa-star"></i></li>
                        <li className="list-inline-item mx-0"><i className="fas fa-star"></i></li>
                        <li className="list-inline-item mx-0"><i className="fas fa-star"></i></li>
                        <li className="list-inline-item mx-0"><i className="fas fa-star"></i></li>
                        <li className="list-inline-item mx-0"><i className="far fa-star"></i></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="multi-carousel-item" style={{width:'420px'}}>
            <div className="card m-2">
                <img id="img-fluid" src={image_6} alt="Card" style={{width:'400px',height:'300px'}}/>
                <div className="card-body">
                    <h5 className="card-title">Morade</h5>
                    <p>j&rsquo;ai pas de temp pour aller a la supermarche cette site aider moi beaucoup</p>
                    <ul className="list-unstyled list-inline my-2">
                        <li className="list-inline-item mx-0"><i className="fas fa-star"></i></li>
                        <li className="list-inline-item mx-0"><i className="fas fa-star"></i></li>
                        <li className="list-inline-item mx-0"><i className="fas fa-star"></i></li>
                        <li className="list-inline-item mx-0"><i className="far fa-star"></i></li>
                        <li className="list-inline-item mx-0"><i className="far fa-star"></i></li>
                    </ul>
                  
                </div>
            </div>
        </div>
        <div className="multi-carousel-item" style={{width:'200px'}}>
            <div className="card m-2">
                <img id="img-fluid" src={image_7} alt="Card" style={{width:'397px',height:'300px'}}/>
                <div className="card-body">
                    <h5 className="card-title">Ali</h5>
                    <p>Service trés rapide je suis bien satisfaite,merci!</p>
                    <ul className="list-unstyled list-inline my-2">
                        <li className="list-inline-item mx-0"><i className="fas fa-star"></i></li>
                        <li className="list-inline-item mx-0"><i className="fas fa-star"></i></li>
                        <li className="list-inline-item mx-0"><i className="fas fa-star"></i></li>
                        <li className="list-inline-item mx-0"><i className="fas fa-star"></i></li>
                        <li className="list-inline-item mx-0"><i className="far fa-star"></i></li>
                    </ul>
                    
                </div>
            </div>
        </div>

 
    </div>
</div>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<Footer style={{position:'relative',bottom:'200px'}}/>
    </>
  )
}

export default Àpropos
