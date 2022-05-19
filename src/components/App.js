import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Movies from "./Movies";
import TopBar from "./TopBar";

export default function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <TopBar />
            <Routes>
                <Route path="/" element={<Movies />} />
            </Routes>
            </BrowserRouter>
        </>
    );
}