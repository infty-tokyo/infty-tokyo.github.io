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
    <div className="bg-slate-100">
      <div className="overflow-y-scroll">{children}</div>
      <div
        style={{
          marginTop: height,
        }}
      >
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
                <a>
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
