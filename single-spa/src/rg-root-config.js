import { registerApplication, start } from "single-spa";

fetch('https://gist.githubusercontent.com/ehurafa/f1d10f354f0d6fdffe8bed85d073c891/raw/7f1d55416b035a939e2da850839edf9ba729450b/microfrontend-applications')
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


