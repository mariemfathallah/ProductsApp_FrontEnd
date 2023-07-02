import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { instanceAxios } from "../instanceAxios";
import Popup from "reactjs-popup";

const AddCart = () => {
  const [produits, setProduits] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [quantite, setQuantite] = useState(1);

  /* find all users */
  const getData = async () => {
    await instanceAxios.get(`/produits/${id}`).then((res) => {
      setProduits(res.data);
    });
  };
  useEffect(() => {
    getData();
  }, []);
  const plusQuantite = () => {
    setQuantite(quantite + 1);
  };

  const moinQuantite = () => {
    setQuantite(quantite - 1);
  };
  return (
    <div>
      <table
        className="table justify-content-center"
        style={{
          position: "relative",
          top: "200px",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "white",
        }}
        position="center center"
      >
        <thead className="table-dark">
          <tr table-active>
            <th>Image</th>
            <th>Nom</th>
            <th>Type</th>
            <th>Prix</th>
            <th>Quantité</th>
            <th>Prix Totale</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {produits.image && (
                <img
                  src={produits.image}
                  alt="ImageUp"
                  style={{ width: "50%" }}
                />
              )}
            </td>
            <td id="td">{produits.nom}</td>
            <td id="td">{produits.type}</td>
            <td id="td">
              {produits.prix}DT<span>/kg</span>
            </td>
            <td
              style={{
                display: "flex",
                padding: "120px",
                position: "relative",
              }}
            >
              {quantite === 1 ? (
                <button
                  className="btn disabled"
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "10px",
                  }}
                  onClick={moinQuantite}
                >
                  -
                </button>
              ) : (
                <button
                  className="btn "
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "10px",
                  }}
                  onClick={moinQuantite}
                >
                  -
                </button>
              )}

              <span style={{ position: "relative", top: "20px" }}>
                {quantite}
              </span>
              <button
                className="btn"
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "10px",
                }}
                onClick={plusQuantite}
              >
                +
              </button>
            </td>
            <td id="td" style={{ margin: "20px" }}>
              {produits.prix * quantite}
              <Popup
                trigger={
                  <button className="btn m-2">
                    Acheter
                  </button>
                }
                style={{ position: "relative", bottom: "500px" }}
                position="left center"
              >
                <div>
                  <div class="container bg-white">
                    <div class="row m-0">
                      <div class="col-lg-7 pb-5 pe-lg-5">
                        <div class="row">
                          <div class="col-12 p-5">
                            <img src={produits.image} alt="" className="imgg" />
                          </div>
                     
                        </div>
                      </div>
                      <div class="col-lg-5 p-0 ps-lg-4">
                        <div class="row m-0">
                          <div class="col-12 px-4">
                            <div class="d-flex align-items-end mt-4 mb-2">
                              <p class="h4 m-0">
                                <span class="pe-1">{produits.nom}</span>
                              
                              </p>
                              <p class="ps-3 textmuted">{produits.type}</p>
                            </div>
                            <div class="d-flex justify-content-between mb-2">
                              <p class="textmuted">Qty</p>
                              <p class="fs-14 fw-bold">{quantite}</p>
                            </div>
                            <div class="d-flex justify-content-between mb-2">
                              <p class="textmuted">Prix Unitaire</p>
                              <p class="fs-14 fw-bold">{produits.prix}</p>
                            </div>
                            <div class="d-flex justify-content-between mb-2">
                              <p class="textmuted">Subtotal</p>
                              <p class="fs-14 fw-bold">
                              {produits.prix * quantite}
                              </p>
                            </div>
                            <div class="d-flex justify-content-between mb-2">
                              <p class="textmuted">Livraison</p>
                              <p class="fs-14 fw-bold">Gratuit</p>
                            </div>
                            <div class="d-flex justify-content-between mb-2">
                              <p class="textmuted">Promo code</p>
                              <p class="fs-14 fw-bold">
                                -<span ></span>
                               {produits.codePromo}
                              </p>
                            </div>
                            <div class="d-flex justify-content-between mb-3">
                              <p class="textmuted fw-bold">Total</p>
                              <div class="d-flex align-text-top ">
                                
                                <span class="h4"> {produits.prix * quantite- produits.codePromo}</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-12 px-0">
                            <div class="row bg-light m-0">
                              <div class="col-12 px-4 my-4">
                                <p class="fw-bold">Détail du paiement</p>
                              </div>
                              <div class="col-12 px-4">
                                <div class="d-flex  mb-4">
                                  <span class="">
                                    <p class="text-muted">Numéro de carte</p>
                                    <input
                                      class="form-control"
                                      type="text"
                                 
                                      placeholder="1234 5678 9012 3456"
                                    />
                                  </span>
                                  <div class=" w-100 d-flex flex-column align-items-end">
                                    <p class="text-muted">Expire</p>
                                    <input
                                      class="form-control2"
                                      type="text"
                                     
                                      placeholder="MM/YYYY"
                                    />
                                  </div>
                                </div>
                                <div class="d-flex mb-5">
                                  <span class="me-5">
                                    <p class="text-muted"> Nom du titulaire</p>
                                    <input
                                      class="form-control"
                                      type="text"
                                   
                                      placeholder="Name"
                                    />
                                  </span>
                                  <div class="w-100 d-flex flex-column align-items-end">
                                    <p class="text-muted">CVC</p>
                                    <input
                                      class="form-control3"
                                      type="text"
                                   
                                      placeholder="XXX"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="row m-0">
                              <div class="col-12  mb-4 p-0">
                                <div class="btn btn-primary">
                                Achat
                                  <span class="fas fa-arrow-right ps-2"></span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Popup>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AddCart;
