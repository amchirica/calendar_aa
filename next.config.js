// next.config.js
module.exports = {
  reactStrictMode: true,
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/login': { page: '/login' },
      '/register': { page: '/register' },
      // Adaugă aici orice alte rute statice care nu folosesc `getServerSideProps`
    };
  },
};
