import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";
// import Male from "./Male";
function Main() {
  return (
    <div>
      <div className="main">
        {/* <img
          className="ad"
          src="data:image/jpeg;base64,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"
          alt=""
        /> */}
        <div className="main1">
          <p>Select </p>
          {/* <Link to="/Diet"> */}
          <Link to={"/dietplan"}>
            <button className="main2">Diet</button>
          </Link>
          <Link to={"/workout"}>
            <button className="main3">Exercise</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Main;