module.exports = {
  env: {
    HOST:
      process.env.API_URL === undefined
        ? "https://5gkh.kcg.gov.tw"
        : process.env.API_URL,
  },
  i18n: {
    locales: ["zh-Hant-TW"],
    defaultLocale: "zh-Hant-TW",
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Xss-Protection",
            value: "1; mode=block",
          },
          {
            key: "X-Powered-By",
            value: " ",
          },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self'; style-src 'self'; object-src 'none';",
          },
          {
            key: "Permissions-Policy",
            value: "geolocation=(self), microphone=()",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/index",
        destination: "/",
        permanent: false,
      },
    ];
  },
  publicRuntimeConfig: {
    MAINTENANCE_MODE: process.env.MAINTENANCE_MODE === "true",
  },
};
