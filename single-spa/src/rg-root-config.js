import { registerApplication, start } from "single-spa";

fetch('https://gist.githubusercontent.com/ehurafa/f1d10f354f0d6fdffe8bed85d073c891/raw/74e2987580ee851a02152e6ea1a71354c2e4fd25/microfrontend-applications')
  .then(resp => resp.json())
  .then(data => {
    data.applications.forEach(app => {
      registerApplication({
        name: app.name,
        app: () => System.import(app.package),
        activeWhen: app.exact
          ? (location) => location.pathname === app.activeWhen
          : [app.activeWhen]
      });
    })
  })
  .finally(() => {
    start({
      urlRerouteOnly: true,
    });
  })

// registerApplication({
//   name: "@rg/navbar",
//   app: () => System.import("@rg/navbar"),
//   activeWhen: ["/"]
// });


