import React, { useState } from "react";
import { instanceAxios } from "../instanceAxios";
import { Link, useNavigate } from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";

import { Toaster, toast } from "react-hot-toast";

const AddProduct = () => {
  const [nom, setNom] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState("");
  const [prix, setPrix] = useState("");
  const [codePromo, setCodePromo] = useState("");
  const navigate = useNavigate();

  const covertToBase64 = (e) => {
    e.preventDefault();
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);
      setImage(reader.result);
    };

    reader.onerror = (error) => {
      console.log("Error", error);
    };
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    instanceAxios
      .post("/ajouterProduit", { nom, type, image, prix, codePromo })
      .then(() => {
        setNom("");
        setType("");
        setImage("");
        setPrix("");
        toast.success("Produit Ajouter avec success");
        navigate("/dashbord");
      })

      .catch((error) => alert(error.message));
  };
  return (
    <>
      <Toaster />
      <h1 style={{ position: "relative", top: "80px" }}>Ajouter Produit</h1>

      <form
        style={{ width: "40%" }}
        className="position-absolute top-50 start-50 translate-middle"
      >
        <Link
          to={"/dashbord"}
          style={{
            textDecoration: "none",
            fontSize: "20px",
            float: "left",
            margin: "20px",
            color: "#82ae46",
          }}
        >
          {" "}
          <span>
            <FaAngleDoubleRight />
          </span>
          Tous les produits
        </Link>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Nom de produit"
            style={{ height: "50px" }}
            value={nom}
            onChange={(e) => {
              setNom(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Type de produit"
            style={{ height: "50px" }}
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Prix de produit"
            style={{ height: "50px" }}
            value={prix}
            onChange={(e) => setPrix(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Remise en %"
            style={{ height: "50px" }}
            value={codePromo}
            onChange={(e) => setCodePromo(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="file"
            className="form-control"
            placeholder="Ajouter image"
            style={{ height: "50px" }}
            accept=".jpeg, .png, .jpg"
            name="image"
            onChange={covertToBase64}
          />
        </div>

        <button
          type="submit"
          className="btn"
          style={{ fontSize: "20px", padding: "0.3em 5em" }}
          onClick={handelSubmit}
        >
          Ajouter
        </button>
      </form>
    </>
  );
};

export default AddProduct;
