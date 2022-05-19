import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import TopBar from "./TopBar";
import Movies from "./Movies";
import Sessions from "./Sessions";

export default function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <TopBar />
            <Routes>
                <Route path="/" element={<Movies />} />
                <Route path="/sessoes/:movieId" element={<Sessions />} />
            </Routes>
            </BrowserRouter>
        </>
    );
}