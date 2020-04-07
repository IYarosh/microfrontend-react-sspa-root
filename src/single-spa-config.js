import * as singleSpa from "single-spa";

function showWhen(prefix) {
    return function (location) {
        console.log('location:', location.pathname, prefix, location.pathname === prefix)
        return location.pathname == prefix;
    }
}
singleSpa.registerApplication(
    "microfrontend-react-sspa-app1",
    () => System.import("microfrontend-react-sspa/app1"),
    showWhen('/app1')
);

singleSpa.registerApplication(
    "microfrontend-react-sspa-app2",
    () => System.import("microfrontend-react-sspa/app2"),
    showWhen('/app2')
)
  
singleSpa.start();