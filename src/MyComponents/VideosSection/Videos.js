import React from "react";
import "./Videos.css";

export default function Videos(props) {
  return (
    <div id="video" className="videomp4">
      <video autoPlay muted loop src={props.videoSection} />
    </div>
  );
}
