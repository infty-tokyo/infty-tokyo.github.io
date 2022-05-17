import * as React from "react";

import { DivProps } from "types";
import GoogleButton from "react-google-button";
import Link from "next/link";

type LoginButtonProps = {
  label?: string;
} & DivProps;

const LoginButton: React.FC<LoginButtonProps> = ({ label = "Sign in with Google", ...props }) => {
  return (
    <Link href="https://infty.tokyo/login">
      <a target="_blank" rel="noreferrer">
        <GoogleButton label={label} {...props} />
      </a>
    </Link>
  );
};

export default LoginButton;
