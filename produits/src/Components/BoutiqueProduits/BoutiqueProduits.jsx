import "./BoutiqueProduits.css";

import React, { useEffect, useState } from "react";
import { instanceAxios } from "../instanceAxios";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";

import { FaCartPlus, FaRegHeart } from "react-icons/fa";

const BoutiqueProduits = () => {
  const [produits, setProduits] = useState([]);

  /* find all users */
  const getData = async () => {
    await instanceAxios.get("/Produits").then((res) => {
      setProduits(res.data);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <NavBar />
      <br />
      <br />
      <h1 style={{ margin: "50px" }}>Boutique En Ligne</h1>
      <div className="multi-carousel  flex-wrap m-5 justify-content-center">
        {produits.map((item) => (
          <div
            key={item._id}
            className="multi-carousel-inner d-flex justify-content-center flex-row m-5"
            style={{ width: "350px" }}
          >
            <div className="">
              <div
                className="card m-2 h-100"
                style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)" }}
              >
                <div style={{zIndex:1}} className="codePromo">
                    {item.codePromo}<span>%</span>
              </div>
                <img
                  id="img-fluid"
                  src={item.image}
                  alt="Card"
                  style={{ width: "100%",zIndex:0 }}
                />
                <div className="card-body">
                  <h4 className="card-title">{item.nom}</h4>
                  <p>{item.type}</p>
                  <ul className="list-unstyled list-inline my-2">
                    <li className="list-inline-item mx-0">
                      <i className="fas fa-star"></i>
                    </li>
                    <li className="list-inline-item mx-0">
                      <i className="fas fa-star"></i>
                    </li>
                    <li className="list-inline-item mx-0">
                      <i className="fas fa-star"></i>
                    </li>
                    <li className="list-inline-item mx-0">
                      <i className="fas fa-star"></i>
                    </li>
                    <li className="list-inline-item mx-0">
                      <i className="fas fa-star-half-alt"></i>
                    </li>
                  </ul>
                  <h5>
                    {item.prix}DT<span>/kg</span>
                  </h5>
                  <Link to={`/produit/${item._id}`}>
                    <FaCartPlus
                      className="iconPlus"
                      style={{ fontSize: "10px" }}
                    />
                  </Link>
                  <FaRegHeart className="heartIcon m-2" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoutiqueProduits;
