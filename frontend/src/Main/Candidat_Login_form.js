import React, { useState, useEffect } from "react";
import { useHistory, Redirect } from "react-router-dom";

import "../Assets/Main/style/Login_form.css";

function CandidatLoginform({
  isShowCandidatLogin,
  fonctioncondidat,
  cincondidat,
}) {
  const [save, setSave] = useState({});
  let history = useHistory();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!isLoaded) {
      fetch("http://localhost:8000/api/candidats")
        .then((response) => response.json())
        .then((data) => {
          setIsLoaded(true);
          setSave(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });

  const handlverificationcon = function () {
    let x = document.getElementById("usc").value;
    let y = document.getElementById("psc").value;
    let trouve = false;
    save.map((val, key) => {
      if (val.CIN === x && val.Password === y) {
        trouve = true;
      }
      return true;
    });
    if (trouve) {
      fonctioncondidat();
      cincondidat(x);
      history.push("/condidat");
    } else {
      alert(
        "The CIN or The Password entered are incorrect !"
      );
      return <Redirect to="/" />;
    }
  };

  return (
    <div className={`${isShowCandidatLogin ? "active" : ""}show`}>
      <div className="login-form">
        <div className="form_box_solid">
          <form className="form">
            <h1 className="login-text">Candidat</h1>
            <label>CIN</label>
            <br></br>
            <input
              type="text"
              name="Username"
              className="login-box"
              id="usc"
            />{" "}
            <br></br>
            <label>Password</label>
            <br></br>
            <input
              type="password"
              name="Password"
              className="login-box"
              id="psc"
            />{" "}
            <br></br>
            <input
              type="submit"
              value="Connecter"
              className="login-btn"
              onClick={handlverificationcon}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default CandidatLoginform;
