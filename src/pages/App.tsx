import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components/header";
import { pageList } from "../libs/pageList";
import Home from "./Home";
import RefreshToken from "./RefreshToken";
import StockList from "./StockList";

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    {pageList.map((page, key) => (
                        <Route
                            path={page.path}
                            element={page.component}
                        ></Route>
                    ))}
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
