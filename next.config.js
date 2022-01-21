/** @type {import('next').NextConfig} */

const WithImages = require('next-images')

module.exports = {
  reactStrictMode: true,
  withImages: WithImages({
    esModule: true,
    assetPrefix: 'https://example.com',
    dynamicAssetPrefix: true,
  })
}
 