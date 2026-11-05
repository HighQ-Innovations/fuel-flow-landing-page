import { renderToString } from "react-dom/server";
import App from "./App.jsx";

// Used only at build time to write the page's HTML into dist/index.html.
export function render() {
  return renderToString(<App />);
}
