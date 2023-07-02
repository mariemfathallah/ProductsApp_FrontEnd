import "./Dashbord.css";
import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  DashboardOutlined,
  UnorderedListOutlined,
  UserOutlined,
  PoweroffOutlined,
} from "@ant-design/icons/lib/icons";
import Produits from "../Produits/Produits";

const Dashbord = () => {
  const [connectedUser, setConnctedUser] = useState({});

  const getConectedUser = () => {
    setConnctedUser(JSON.parse(localStorage.getItem("user_data")));
  };

  useEffect(() => {
    getConectedUser();
  }, []);

  return (
    <div>
      <div
        style={{
          height: 60,
          backgroundColor: "#82ae46",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bold",
        }}
      >
        <h3>
          {connectedUser.email} {connectedUser.nom}{" "}
        </h3>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flex: 1,
          height: "750px",
        }}
      >
        <Menu
          items={[
            {
              label: "Accueil",
              key: "/home",
              icon: <HomeOutlined style={{ fontSize: "20px" }} />,
            },
            {
              label: "Tableau de bord",
              key: "/addProduits",
              icon: <DashboardOutlined style={{ fontSize: "20px" }} />,
            },
            {
              label: "Liste produits",
              key: "/produits",
              icon: <UnorderedListOutlined style={{ fontSize: "20px" }} />,
            },
            {
              label: "Profil",
              icon: <UserOutlined style={{ fontSize: "23px" }} />,
            },
            {
              label: "Se déconnecter",
              icon: <PoweroffOutlined style={{ fontSize: "20px" }} />,
              danger: true,
            },
          ]}
          style={{ fontSize: "20px", padding: "20px", margin: "10px" }}
        />
        <div>
          <Produits />
        </div>
      </div>
      <div
        style={{
          height: 60,
          backgroundColor: "lightgray",
          color: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bold",
          position: "relative",
          top: "400px",
        }}
      >
        Footer
      </div>
    </div>
  );
};

export default Dashbord;
