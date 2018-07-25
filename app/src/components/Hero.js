import React from "react";

const Hero = props => (
  <div className={"hero " + (props.color || "is-dark")}>
    <div className="hero-body">
      <div className="container">
        <h1 className="title">{props.title}</h1>
        <h2 className="subtitle">{props.subtitle}</h2>
      </div>
    </div>
  </div>
);

export default Hero;
