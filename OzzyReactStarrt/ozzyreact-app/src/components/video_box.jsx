import React from "react";

const VideoBox = props => {
  return (
    <video
      className="embed-responsive-item"
      src={props.src}
      controls
      loop
      autoplay
      width="640"
      height="360"
    />
  );
};

export default VideoBox;
