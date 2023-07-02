import './Footer.css'
import React from 'react';
import { FaTwitter ,FaFacebookF,FaInstagram,FaMapMarkerAlt,FaPhoneAlt,FaEnvelope} from "react-icons/fa";
import { Link } from 'react-router-dom';
import TopButton from '../TopButton/TopButton';
const Footer = () => {

  return (
    <>

    <footer className="ftco-footer ftco-section">
 
      <div className="container">

      	<div className="row">
        <TopButton/>
      		<div className="mouse">

						<Link href="#" className="mouse-icon">
							<div className="mouse-wheel"><span className="ion-ios-arrow-up"></span></div>
						</Link>
					</div>
      	</div>
        <div className="row mb-5">
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Végéaliments</h2>
              <p>Loin loin, derrière le mot montagnes, loin des pays Vokalia et Consonantia.</p>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                <li className="ftco-animate"><Link href="#"><FaTwitter style={{color:'black'}}/></Link></li>
                <li className="ftco-animate"><Link href="#"><FaFacebookF style={{color:'black'}}/></Link></li>
                <li className="ftco-animate"><Link href="#"><FaInstagram style={{color:'black'}}/></Link></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4 ml-md-5">
              <h2 className="ftco-heading-2">Menu</h2>
              <ul className="list-unstyled">
                <li><Link href="#" className="py-2 d-block" style={{textDecoration:'none',color:'black'}}>Boutique</Link></li>
                <li><Link href="#" className="py-2 d-block" style={{textDecoration:'none',color:'black'}}>À propos</Link></li>
                <li><Link href="#" className="py-2 d-block" style={{textDecoration:'none',color:'black'}}>Journal</Link></li>
                <li><Link href="#" className="py-2 d-block" style={{textDecoration:'none',color:'black'}}>Contactez-nous</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
             <div className="ftco-footer-widget mb-4 ml-md-5">
              <h2 className="ftco-heading-2" style={{position:'relative',right:'80px'}}>Aider</h2>
              <div className="d-flex">
	              <ul className="list-unstyled mr-l-5 pr-l-3 mr-4">
	                <li><Link href="#" className="py-2 d-block" style={{textDecoration:'none',color:'black'}}>Informations sur la livraison</Link></li>
	                <li><Link href="#" className="py-2 d-block" style={{textDecoration:'none',color:'black'}}>Retours &amp; Échange</Link></li>
	                <li><Link href="#" className="py-2 d-block" style={{textDecoration:'none',color:'black'}}>Conditions &amp; Conditions</Link></li>
	                <li><Link href="#" className="py-2 d-block" style={{textDecoration:'none',color:'black'}}>Politique de Confidentialité</Link></li>
	              </ul>
	           
	            </div>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
            	<h2 className="ftco-heading-2">Vous avez une question ?</h2>
            	<div className="block-23 mb-3">
	              <ul className="list-unstyled mr-l-5 pr-l-3 mr-4">
	                <li><FaMapMarkerAlt style={{fontSize:'20px'}}/> <span className="text">Tunis</span></li>
	                <li><Link href="#" className="py-2 d-block" style={{textDecoration:'none',color:'black'}}><FaPhoneAlt style={{fontSize:'20px'}}/><span className="text"> +2 392 3929 210</span></Link></li>
	                <li><Link href="#"className="py-2 d-block" style={{textDecoration:'none',color:'black'}}><FaEnvelope style={{fontSize:'20px'}}/><span className="text"> info@yourdomain.com</span></Link></li>
	              </ul>
	            </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">

            <p>
		  Copyright &copy;All rights reserved 

          

			</p>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer