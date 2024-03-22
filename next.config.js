const nextConfig = {
  reactStrictMode: true,
  webpack: (cfg, { isServer }) => {
    if (!isServer) {
      cfg.resolve.fallback = {
        ...cfg.resolve.fallback,
        net: false,
        dns: false,
        tls: false,
        fs: false,
        request: false,
      };
    }
    cfg.module.rules.push({
      test: /\.md$/,
      loader: 'frontmatter-markdown-loader',
      options: { mode: ['react-component'] }
    });
    return cfg;
  },
};

module.exports = nextConfig;
