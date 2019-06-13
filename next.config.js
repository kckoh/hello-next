const debug = process.env.NODE_ENV !== "production";

module.exports = {
  exportPathMap: function () { // /Next-React-Components
    return {
      "/": { page: "/" },
      "/about": { page: "/ap-grid-layout" }
    };
  },
  assetPrefix: !debug ? 'https://kckoh.github.io/hello-next/' : '',
}