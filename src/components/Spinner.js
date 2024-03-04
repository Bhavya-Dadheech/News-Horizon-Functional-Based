import React from "react";
import loading from "../loading.gif";

const Spinner = () => {
  return (
    <div className="text-center">
      <img src={loading} alt="" style={{ width: "3rem", height: "3rem" }} />
    </div>
  );
};

export default Spinner;
