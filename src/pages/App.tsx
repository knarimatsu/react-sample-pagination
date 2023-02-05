import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components/header";
import { pageList } from "../libs/pageList";

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    {pageList.map((page, key) => (
                        <Route
                            key={key}
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
