/* @refresh reload */
import { render } from "solid-js/web";
import { Component, lazy } from "solid-js";

let App: Component;

if(
  "__TAURI_INTERNALS__" in window
  && typeof window.__TAURI_INTERNALS__.plugins === "object"
  && typeof window.__TAURI_INTERNALS__.ipc === "function"
  && typeof window.__TAURI_INTERNALS__.invoke === "function"
  && typeof window.__TAURI_INTERNALS__.convertFileSrc === "function") {
  App = lazy(() => import("./app"));
} else {
  App = lazy(() => import("./website"));
}


render(
  () => <App />,
  document.getElementById("root")!
);
