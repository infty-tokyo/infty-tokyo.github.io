import * as React from "react";

import { IconData, IconType } from "data/Icons";

import Box from "@mui/material/Box";
import { DivProps } from "types";
import Link from "next/link";

type LayoutProps = {
  height?: number;
} & DivProps;
const Layout: React.FC<LayoutProps> = ({ children, height = 50, ...props }) => {
  return (
    <div className="bg-cream-light">
      <div
        className="overflow-y-scroll h-screen w-screen"
        style={{
          paddingBottom: height,
        }}
      >
        {children}
      </div>
      <div>
        <div
          {...props}
          className={`absolute flex items-center bottom-0 w-full z-50 text-white bg-black border-t-2  ${
            props.className || ""
          }`}
          style={{ height: height }}
        >
          <Box className="flex mr-auto ml-4 space-x-2">
            {IconData.map((e: IconType) => (
              <Link href={e.href} key={e.sns}>
                <a target="_blank" rel="noreferrer">
                  <e.Icon className={`w-8 h-8 hover:opacity-60 ${e.className}`} />
                </a>
              </Link>
            ))}
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Layout;
