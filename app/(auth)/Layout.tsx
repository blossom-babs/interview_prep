import React, { ReactNode } from "react";
import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/actions/auth.action";

const AuthLayout = async ({ children }: { children: ReactNode }) => {

  const isUserAuthenticated = await isAuthenticated()

  if(isUserAuthenticated) redirect('/')

  return <div>{children}</div>;
};

export default AuthLayout;
