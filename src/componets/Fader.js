import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Home from "./Home";
import "../../src/App.css";

const Fader = ({text}) => {
  const [fadeProp, setFadeProp] = useState({
    fade: "fade-in",
  });
  
  return <h1>
    {text}
  </h1>
};

Fader.defaultProps = {
  text: "Hello There",
};

Fader.prototype = {
  text: PropTypes.string,
};
