import type { NextConfig } from 'next'
import { redirects } from "./redirects";
import dns from 'dns'

dns.setDefaultResultOrder('ipv4first')
dns.setServers(['8.8.8.8', '8.8.4.4'])

const nextConfig: NextConfig = {
  async redirects() {
    return redirects;
  },
}

export default nextConfig