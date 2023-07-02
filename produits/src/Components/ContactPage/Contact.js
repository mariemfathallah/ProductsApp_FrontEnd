import NavBar from '../NavBar/NavBar'
import './Contact.css'
import React from 'react'
import image from '../../images/bg_1.jpg'
import { MapContainer, TileLayer } from 'react-leaflet';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';


const Contact = () => {

  return (
 
    <>
    <NavBar/>
    <div classNameName="hero-wrap hero-bread"  style={{backgroundImage:` url(${image} )`
    ,backgroundSize:'cover',height:'600px',
    width:'100%',backgroundPosition:'center center'}}>
      <div classNameName="container" style={{position:'relative',top:'270px'}} >
        <div classNameName="row no-gutters slider-text align-items-center justify-content-center" >
          <div classNameName="col-md-9 ftco-animate text-center" >
          	<p classNameName="breadcrumbs" ><span classNameName="mr-2"><a href="/home" style={{color:'white',textDecoration:'none',fontSize:'25px',fontWeight:'bold'}}>Accueil/</a></span> <span style={{color:'white'}}>Contactez-nous</span></p>
            <h1 classNameName="mb-0 bread" style={{color:'white',fontWeight:'bold'}}>Contactez-nous</h1>
          </div>
        </div>
      </div>
    </div>

    

        <section className="ftco-section contact-section bg-light">
      <div className="container">
      	<div className="row d-flex mb-5 contact-info">
          <div className="w-100"></div>
          <div className="col-md-3 d-flex">
          	<div className="info bg-white p-4">
	            <p><span>Address:</span>Tunis,Lafyet,Rue salahaziaz</p>
	          </div>
          </div>
          <div className="col-md-3 d-flex">
          	<div className="info bg-white p-4">
	            <p><span>Téléphone:</span> <Link href="tel://1234567920" style={{textDecoration:'none',color:'black'}}>+ 1235 2355 98</Link></p>
	          </div>
          </div>
          <div className="col-md-3 d-flex">
          	<div className="info bg-white p-4">
	            <p><span>Email:</span> <Link href="mailto:info@yoursite.com" style={{textDecoration:'none',color:'black'}}>info@site.com</Link></p>
	          </div>
          </div>
          <div className="col-md-3 d-flex">
          	<div className="info bg-white p-4">
	            <p><span>Website</span> <Link href="#" style={{textDecoration:'none',color:'black'}}>yoursite.com</Link></p>
	          </div>
          </div>
        </div>
        <div className="row block-9">
        <div className="col-md-6 order-md-last d-flex">
        <MapContainer center={[36.8065, 10.1815]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  {/* <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker> */}
</MapContainer>
</div>
          <div className="col-md-6 order-md-last d-flex">
            <form action="#" className="bg-white p-5 contact-form">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="votre nom"/><br/>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Votre e-mail"/><br/>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Sujet"/><br/>
              </div>
              <div className="form-group">
                <textarea name="" id="" cols="30" rows="7" className="form-control" placeholder="Message"></textarea><br/>
              </div>
              <div className="form-group">
                <input type="submit" value="Envoyer le message" className="btn py-3 px-5" id='button' style={{width:'100%'}}/>
              </div>
            </form>
 
     
    
        </div>
   
          </div>

      </div>
 
    </section>
    <br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
    <Footer/>

    
    </>
  )
}

export default Contact