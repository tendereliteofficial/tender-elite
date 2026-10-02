import type { NextConfig } from 'next'
import dns from 'dns'

dns.setDefaultResultOrder('ipv4first')
dns.setServers(['8.8.8.8', '8.8.4.4'])

const nextConfig: NextConfig = {
  // your existing config options here (if any)
}

export default nextConfig