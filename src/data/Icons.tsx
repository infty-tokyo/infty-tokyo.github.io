import * as React from "react";

import InstagramIcon from "@mui/icons-material/Instagram";
import Logo from "components/Logo";
import { SvgIconProps } from "@mui/material/SvgIcon";
import TwitterIcon from "@mui/icons-material/Twitter";

export type IconType = {
  sns: string;
  Icon: React.FC<React.HTMLAttributes<HTMLElement>> | React.FC<SvgIconProps>;
  href: string;
  className: string;
};

export const IconData: IconType[] = [
  { sns: "infty", Icon: Logo, href: "https://infty.tokyo", className: "" },
  {
    sns: "twitter",
    Icon: TwitterIcon,
    href: "https://twitter.com/infty_tokyo",
    className: "text-brand-twitter",
  },
  {
    sns: "instagram",
    Icon: InstagramIcon,
    href: "https://www.instagram.com/infty.tokyo",
    className: "text-brand-instagram",
  },
];
