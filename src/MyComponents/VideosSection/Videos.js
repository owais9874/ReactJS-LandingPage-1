import React from "react";
import video from "../../assist/video/video.mp4"
import "./Videos.css";

export default function Videos() {
  return (
    <div id="video" className="videomp4">
      <video autoPlay muted loop src={video} />
    </div>
  );
}
