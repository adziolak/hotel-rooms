import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SSRProvider } from "@restart/ui/ssr";
import { Provider } from "react-redux";
import { store } from "./store";
import "./style.css";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <SSRProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </SSRProvider>    
  </React.StrictMode>
);