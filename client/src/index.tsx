import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from 'recoil'; 
import { CookiesProvider } from "react-cookie";

// const google_id: string = process.env.REACT_APP_GOOGLE_API_KEY ?? "";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <RecoilRoot>
    <CookiesProvider>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </CookiesProvider>
  </RecoilRoot>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
