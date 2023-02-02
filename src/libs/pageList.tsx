import Home from "../pages/Home";
import RefreshToken from "../pages/RefreshToken";
import StockList from "../pages/StockList";

export type PageListType = {
    name: string;
    path: string;
    component: JSX.Element;
};
export const pageList: PageListType[] = [
    {
        name: "home",
        path: "/",
        component: <Home />,
    },
    {
        name: "refresh-token",
        path: "/refresh-token",
        component: <RefreshToken />,
    },
    {
        name: "stocks",
        path: "stocks",
        component: <StockList />,
    },
];
