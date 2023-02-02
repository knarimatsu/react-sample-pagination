import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import "./index.css";
import "./i18n/config";
import {
    BrowserRouter,
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import RefreshToken from "./pages/RefreshToken";
import StockList from "./pages/StockList";
import { Header } from "./components/header";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/refresh-token",
        element: <RefreshToken />,
    },
    {
        path: "/stocks",
        element: <StockList />,
    },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
