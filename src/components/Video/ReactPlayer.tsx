import * as React from "react";

import { DivProps } from "types";
import ReactPlayer from "react-player";

type ReactPalyerProps = {
  src: string;
} & DivProps;

const ReactVideoPlayer: React.FC<ReactPalyerProps> = ({ src, className = "", ...props }) => {
  return (
    <div {...props} className={`relative ${className || ""}`}>
      <ReactPlayer
        className="m-auto"
        url={src}
        width="100%"
        height="450px"
        playing
        controls
        disablePictureInPicture
        config={{
          file: {
            attributes: {
              controlsList: "nodownload",
              disablePictureInPicture: true,
            },
          },
        }}
        // onProgress={(progress) => {
        //   setPlayed(progress.playedSeconds);
        // }}
      />
    </div>
  );
};

export default ReactVideoPlayer;
