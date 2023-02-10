import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  // activeWhen: ["/"],
  activeWhen: (location) => location.pathname === '/',
});

registerApplication({
  name: "@rg/react-single",
  app: () => System.import("@rg/react-single"),
  activeWhen: (location) => location.pathname === '/react-single',
});

registerApplication({
  name: "@rg/react-multiples",
  app: () => System.import("@rg/react-multiples"),
  activeWhen: ['/react-multiples'],
});

registerApplication({
  name: "@rg/react-parcel",
  app: () => System.import("@rg/react-parcel"),
  activeWhen: (location) => location.pathname === '/react-parcel',
});

// registerApplication({
//   name: "@rg/navbar",
//   app: () => System.import("@rg/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
