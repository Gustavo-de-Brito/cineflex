import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import TopBar from "./TopBar";
import Sessions from "./Sessions";
import MoviesView from "./MoviesView";
import SeatsView from "./SeatsView";

export default function App() {
    const [ buyerData, setBuyerData ] = useState({});

    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <TopBar />
            <Routes>
                <Route path="/" element={<MoviesView />} />
                <Route path="/sessoes/:movieId" element={<Sessions />} />
                <Route path="/assentos/:sessionId" element={<SeatsView setBuyerData={setBuyerData} />} />
            </Routes>
            </BrowserRouter>
        </>
    );
}