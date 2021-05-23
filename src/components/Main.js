import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Homepage from "./Homepage";
import axios from "axios";

function Main() {
  // useEffect(() => {
  //   axios
  //     .get(`${process.env.REACT_APP_baseUrl}/products`, {headers: {
  //       'Access-Control-Allow-Origin': '*'
  //     }})
  //     // .then((res) => res.json())
  //     .then((res) => console.log(res))
  //     .catch((err) => console.error(err));
  // }, []);

  return (
    <div className="main-container-div">
      <Header />
      <Homepage />
      <Footer />
    </div>
  );
}

export default Main;
