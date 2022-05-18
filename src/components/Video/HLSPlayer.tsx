import * as React from "react";

import Hls from "hls.js";

interface Props {
  src: string;
}

const HLSVideoPlayer: React.FC<Props> = ({ src }) => {
  const isSupportBrowser: boolean = React.useMemo(() => Hls && Hls.isSupported(), []);
  const videoRef: React.MutableRefObject<HTMLVideoElement | null> =
    React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (isSupportBrowser && videoRef.current) {
      const hls: Hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(videoRef.current);
      return () => {
        hls.removeAllListeners();
        hls.stopLoad();
      };
    }
  }, [src]);

  return (
    <>
      <div className="content">
        {isSupportBrowser ? (
          <div className="videoContainer">
            <video ref={videoRef} className="w-full h-auto align-top" controls></video>
          </div>
        ) : (
          <div className="notSupportBrowser">
            お使いのブラウザでは動画再生をサポートしていません。
          </div>
        )}
      </div>
    </>
  );
};

export default HLSVideoPlayer;
