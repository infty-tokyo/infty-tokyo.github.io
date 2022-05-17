import * as React from "react";

import Image, { ImageProps } from "next/image";

import { DivProps } from "types";

export type DivImageProps = {
  src: string;
  alt: string;
  className?: string;
  layout?: "fixed" | "fill" | "intrinsic" | "responsive" | "raw" | undefined;
  objectFit?: ImageProps["objectFit"];
} & DivProps;

const DivImage: React.FC<DivImageProps> = ({
  src,
  alt,
  className = "",
  layout = "fill",
  objectFit = "contain",
  ...props
}) => {
  return (
    <div {...props} className={`relative ${className}`}>
      <Image src={src} alt={alt} layout={layout} objectFit={objectFit} />
    </div>
  );
};

export default DivImage;
