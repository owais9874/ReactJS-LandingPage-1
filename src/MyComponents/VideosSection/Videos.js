import React from "react";
import video from "../../assist/video/video.mp4";

export default function Videos() {
  return (
    <div id="video" className="videomp4">
      <video autoPlay muted loop width="100%" src={video} />
    </div>
  );
}
