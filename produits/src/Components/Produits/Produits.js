import React, { useEffect, useState } from "react";
import { instanceAxios } from "../instanceAxios";
import { Link } from "react-router-dom";
import { FaTrashAlt, FaPencilAlt, FaPlus } from "react-icons/fa";

const Produits = () => {
  const [produits, setProduits] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 4;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = produits.slice(firstIndex, lastIndex);
  const npage = Math.ceil(produits.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  /* find all users */
  const getData = async () => {
    await instanceAxios.get("/Produits").then((res) => {
      setProduits(res.data);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (id) => {
    let result = instanceAxios.delete(`/supprimerProduit/${id}`);
    console.log(result);
    if (result) {
      if (window.confirm("êtes-vous sûr de supprimer cet élément?")) {
        getData();
      }
    }
  };

  return (
    <div className="row p-4">
      <div>
        <h1
          style={{
            textTransform: "uppercase",
            position: "relative",
            bottom: "90px",
            fontSize: "50px",
          }}
          className="justify-content-center"
        >
          liste des produits
        </h1>
      </div>

      <div
        className="col-12 col-lg-7 "
        style={{
          position: "relative",
          bottom: "80px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link
          to={"/addProduits"}
          style={{
            textDecoration: "none",
            fontSize: "20px",
            float: "left",
            margin: "20px",
            color: "#82ae46",
          }}
        >
          <FaPlus style={{ fontSize: "25px" }} /> Ajouter Produit
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nom</th>
              <th scope="col">Type</th>
              <th scope="col">Prix</th>
              <th scope="col">Remise</th>
              <th scope="col">Image</th>
              <th scope="col">Actions</th>
            
            </tr>
          </thead>
          <tbody>
            {records.map((produit) => {
              return (
                <tr key={produit._id}>
                  <td> {produit.nom}</td>
                  <td>{produit.type}</td>
                  <td>{produit.prix}DT<span>/kg</span></td>
                  <td>{produit.codePromo}<span>%</span></td>
                  <td>
                    {produit.image && (
                      <img
                        src={produit.image}
                        alt="ImageUp"
                        style={{ width: "40%" }}
                      />
                    )}
                  </td>
                  <td
                    style={{
                      display: "flex",
                      gap: "10px",
                      position: "relative",
                      top: "132px",
                    }}
                  >
                    <Link
                      to={`/updateProduits/${produit._id}`}
                      className="btn"
                      style={{ position: "relative", bottom: "60px" }}
                    >
                      <FaPencilAlt />
                    </Link>

                    <button
                      className="btn"
                      onClick={() => handleDelete(produit._id)}
                      style={{ position: "relative", bottom: "60px" }}
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <nav>
          <ul className="pagination">
            <li className="page-item">
              <Link
                href="#"
                className="page-link"
                onClick={prePage}
                style={{ color: "#82ae46" }}
              >
                Prev
              </Link>
            </li>
            {numbers.map((n, i) => (
              <li
                className={`page-item ${currentPage === n ? "active" : ""}`}
                key={i}
              >
                <Link
                  to={""}
                  className="page-link"
                  onClick={() => changeCPage(n)}
                  style={{
                    color: "#82ae46",
                    backgroundColor: "transparent",
                    border: "1px solid #82ae46",
                  }}
                >
                  {n}
                </Link>
              </li>
            ))}
            <li className="page-item">
              <Link
                to={""}
                className="page-link"
                onClick={nextPage}
                style={{ color: "#82ae46" }}
              >
                Next
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );

  function prePage() {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  }

  function nextPage() {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  }
  function changeCPage(id) {
    setCurrentPage(id);
  }
};

export default Produits;
