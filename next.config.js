module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/sequencia-didatica",
        destination: "/following-teaching",
      },
      {
        source: "/ferramentas-de-checagem",
        destination: "/checking-tools",
      },
      {
        source: "/materiais-e-tutoriais",
        destination: "/materials",
      },
      {
        source: "/referencias",
        destination: "/references",
      },
    ];
  },
};
