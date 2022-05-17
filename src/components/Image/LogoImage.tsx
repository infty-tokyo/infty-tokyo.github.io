import * as React from "react";

import DivImage from "components/Image/DivImage";
import { DivProps } from "types";
import { ImageProps } from "next/image";
import { META_DESCRIPTION } from "data/const";

type LogoProps = {
  className?: string;
  layout?: "fixed" | "fill" | "intrinsic" | "responsive" | "raw" | undefined;
  objectFit?: ImageProps["objectFit"];
} & DivProps;

const LogoImage: React.FC<LogoProps> = ({
  className = "",
  layout = "fill",
  objectFit = "contain",
  ...props
}) => {
  return (
    <DivImage
      {...props}
      src="/logo.png"
      alt={META_DESCRIPTION}
      className={className}
      layout={layout}
      objectFit={objectFit}
    />
  );
};

export default LogoImage;
