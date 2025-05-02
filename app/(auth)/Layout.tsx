import React, { ReactNode } from "react";
import AuthLayoutServer from "./AuthLayout.server";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return <AuthLayoutServer>{children}</AuthLayoutServer>;
};

export default AuthLayout;
