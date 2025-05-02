import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* TBD | remove ignoreDuringBuilds flag*/
  eslint:{
    ignoreDuringBuilds: true
  },
  typescript:{
    ignoreBuildErrors: true
  }
};

export default nextConfig;
