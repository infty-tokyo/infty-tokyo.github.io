import * as React from "react";

import Image, { ImageProps } from "next/image";

import { DivProps } from "types";

type LogoProps = {
  className?: string;
  layout?: "fixed" | "fill" | "intrinsic" | "responsive" | "raw" | undefined;
  objectFit?: ImageProps["objectFit"];
} & DivProps;

const Logo: React.FC<LogoProps> = ({
  className = "",
  layout = "fill",
  objectFit = "contain",
  ...props
}) => {
  return (
    <div {...props} className={`relative ${className}`}>
      <Image src="/icon.png" alt="logo" layout={layout} objectFit={objectFit} />
    </div>
  );
};

export default Logo;
