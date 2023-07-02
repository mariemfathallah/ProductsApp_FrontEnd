import { Link, useParams } from "react-router-dom";
import { instanceAxios } from "../../instanceAxios";
import "./Cart.css";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import Popup from "reactjs-popup";

const Cart = () => {
  const [produits, setProduits] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  /* find all users */
  const getData = async () => {
    await instanceAxios.get(`/produits/${id}`).then((res) => {
      setProduits(res.data);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6">
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
        </div>
      </>
    );
  };



  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6" id="image">
          <img
            src={produits.image}
            alt={produits.nom}
            height="100%"
            width="100%"
            className="cart-image"
          />
        </div>
        <div className="col-md-6" id="details">
          <div className="remise">
            {produits.codePromo}<span>%</span><br/>
            De Réduction
          </div>
          <div style={{position:'relative',float:'left',justifyContent:'center',alignItems:'center',left:'100px',top:'50px'}}>
          <h1
            className="text-uppercase"
            style={{ color: "white", position: "relative", top: "15px" }}
          >
            {produits.nom}
          </h1>
          <h4
            className="display-5"
            style={{ color: "white", position: "relative", top: "10px" }}
          >
            {produits.type}
          </h4>
          <p className="lead fw-bolder">
            <li
              className="list-inline-item mx-0"
              style={{ color: "white", position: "relative", top: "10px" }}
            >
              <i className="fas fa-star"></i>
            </li>
            <li
              className="list-inline-item mx-0"
              style={{ color: "white", position: "relative", top: "10px" }}
            >
              <i className="fas fa-star"></i>
            </li>
            <li
              className="list-inline-item mx-0"
              style={{ color: "white", position: "relative", top: "10px" }}
            >
              <i className="fas fa-star"></i>
            </li>
          </p>
          <h3
            className="display-6 fw-bold my-4"
            style={{ color: "white", position: "relative", top: "10px" }}
          >
            {produits.prix}DT<span>/kg</span>
          </h3>
          <Link to={`/cart/${id}`}>
              <button
                className="btn-outline ms-2 px-3"
                style={{ color: "white", position: "relative", top: "10px" }}
                onClick={getData}
              >
                Aller au panier
              </button>
              </Link>
              </div>
            <div>
             
            </div>
       
        </div>
      </>
    );
  };
  return (
    <div className="container py-5">
      <div className="row py-5">{loading ? <Loading /> : <ShowProduct />}</div>
    </div>
  );
};

export default Cart;
