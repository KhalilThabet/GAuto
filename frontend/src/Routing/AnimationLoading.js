import React from "react";
import "../Assets/App.css";
import lod from "../Assets/loader.gif";
export default function Charge() {
  //REFRESH PAGE
  return (
    <div className={"Loader"}>
      <h1 id="loadtext">Please Wait ...</h1>
      <img src={lod} alt="chargement" id="loadgif"></img>
    </div>
  );
}
