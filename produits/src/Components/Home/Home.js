import "./Home.css";
import React from "react";
import { Link } from "react-router-dom";
import image from "../../images/bg_1.jpg";
import image_2 from "../../images/bg_2.jpg";
import NavBar from "../NavBar/NavBar";
import { FaShippingFast } from "react-icons/fa";
import { IoRibbonOutline } from "react-icons/io5";
import { GiFruitBowl } from "react-icons/gi";
import { MdSupportAgent } from "react-icons/md";
import image_3 from "../../images/bg_2.jpg";
import image_4 from "../../images/category-removebg-preview.png";
import image_5 from "../../images/category-2.jpg";
import image_6 from "../../images/category-3.jpg";
import image_7 from "../../images/category-4.jpg";
import Footer from "../Footer/Footer";
import NosProduits from "./NosProduits";
import Bienvenus from "./Bienvenus";





const Home = () => {




  return (
    <>
      <NavBar />

      <div id="carouselExample" className="carousel slide">
        <div
          className="carousel-inner"
          style={{ height: "100%", width: "100%" }}
        >
          <div className="carousel-item active">
            <img className="d-block w-100" src={image} alt="First slide" />
            <div
              className="col-md-12 ftco-animate text-center"
              style={{ position: "relative", bottom: "700px", right: "200px",color:'white' }}
            >
              <h5 className="mb">
                Nous servons des légumes frais &amp; Des fruits
              </h5>
              <br />
              <h2 className="subheading mb-4">
                Nous livrons des fruits &amp;légumes bio
              </h2>
              <br />
          
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={image_2} alt="Second slide" />
            <div
              className="col-sm-12 ftco-animate text-center"
              style={{ position: "relative", bottom: "900px", right: "50px" }}
            >
              <h1
                className="mb"
                style={{ color: "white", textTransform: "capitalize" }}
              >
                100 % d'aliments frais &amp; biologiques
              </h1>
              <br />
              <h2
                className="subheading mb-4"
                style={{ color: "white", textTransform: "capitalize" }}
              >
                Nous livrons des fruits &amp; légumes bio
              </h2>
              <br />
          
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

<Bienvenus/>


      <section
        className="ftco-section  align-item-center"
        style={{ position: "relative", bottom: "80px" }}
      >
        <div className="container">
          <div className="row no-gutters ftco-services">
            <div className="col-md-3 text-center d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services mb-md-0 mb-4">
                <div className="icon bg-color-1 active d-flex justify-content-center align-items-center mb-2">
                  <span className="flaticon-shipped">
                    <FaShippingFast className="icon" />
                  </span>
                </div>
                <div className="media-body">
                  <h3 className="heading">Livraison Gratuite</h3>
                  <span>Sur commande supérieure à 100 $</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 text-center d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services mb-md-0 mb-4">
                <div className="icon bg-color-2 d-flex justify-content-center align-items-center mb-2">
                  <span className="flaticon-diet">
                    <GiFruitBowl className="icon-1" />
                  </span>
                </div>
                <div className="media-body">
                  <h3 className="heading">Toujours Frais</h3>
                  <span>Produit bien emballé</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 text-center d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services mb-md-0 mb-4">
                <div className="icon bg-color-3 d-flex justify-content-center align-items-center mb-2">
                  <span className="flaticon-award">
                    <IoRibbonOutline className="icon-2" />
                  </span>
                </div>
                <div className="media-body">
                  <h3 className="heading">Qualité Supérieure</h3>
                  <span>Produits De Qualité</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 text-center d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services mb-md-0 mb-4">
                <div className="icon bg-color-4 d-flex justify-content-center align-items-center mb-2">
                  <span className="flaticon-customer-service">
                    <MdSupportAgent className="icon-3" />
                  </span>
                </div>
                <div className="media-body">
                  <h3 className="heading">Soutien</h3>
                  <span>24/7 Soutien</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="ftco-section ftco-category ftco-no-pt align-item-center"
        style={{ position: "relative", bottom: "130px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-6 order-md-last align-items-stretch d-flex">
                  <div className="category-wrap-2 ftco-animate img align-self-stretch d-flex">
                    <div className="text text-center">
                      <div style={{position:'relative',bottom:'160px'}}>
                      <h2>Legums</h2>
                      <p style={{ color: "gray", fontSize: "20px" }}>
                        Protégez la santé de chaque maison
                      </p>
                      <p>
                        <Link
                          href="#"
                          className="btn p-3"
                   
                          style={{ borderRadius: "30px", height:'60px',width:'200px'}}
                        >
                          Achetez maintenant
                        </Link>
                      </p>
                      </div>
                      <div
                        className="category-wrap ftco-animate img d-flex position-absolute top-50 start-50 translate-middle"
                        style={{
                          backgroundImage: ` url(${image_4})`,
                          backgroundSize: "cover",
                          height: "100%",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="category-wrap ftco-animate img d-flex align-items-end"
                    style={{
                      backgroundImage: `url(${image_3})`,
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="text px-3 py-1  position-absolute top-0 end-0">
                      <h2 className="mb-0">
                        <Link href="#" style={{ textDecoration: "none" }}>
                          Legumes
                        </Link>
                      </h2>
                    </div>
                  </div>
                  <br />
                  <div
                    className="category-wrap ftco-animate img d-flex align-items-end"
                    style={{
                      backgroundImage: ` url(${image_5} )`,
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="text px-3 py-1 position-absolute top-0 end-0">
                      <h2 className="mb-0">
                        <Link href="#" style={{ textDecoration: "none" }}>
                          Fruits
                        </Link>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="category-wrap ftco-animate img mb-4 d-flex align-items-end"
                style={{
                  backgroundImage: ` url(${image_6} )`,
                  backgroundSize: "cover",
                  position: "relative",
                  top: "100px",
                }}
              >
                <div className="text px-3 py-1 position-absolute top-0 end-0">
                  <h2 className="mb-0">
                    <Link href="#" style={{ textDecoration: "none" }}>
                      Jus
                    </Link>
                  </h2>
                </div>
              </div>
              <div
                className="category-wrap ftco-animate img d-flex align-items-end"
                style={{
                  backgroundImage: ` url(${image_7} )`,
                  backgroundSize: "cover",
                  position: "relative",
                  top: "103px",
                  right: "15px",
                }}
              >
                <div className="text px-3 py-1 position-absolute top-0 end-0">
                  <h2 className="mb-0">
                    <Link href="#" style={{ textDecoration: "none" }}>
                      Dried
                    </Link>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
<NosProduits/>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Footer />
    </>
  );
};

export default Home;
