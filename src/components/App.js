import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import TopBar from "./TopBar";
import Sessions from "./Sessions";
import MoviesView from "./MoviesView";
import SeatsView from "./SeatsView";
import SucessView from "./SucessView";

export default function App() {
    const [ selectedSeats, setSelectedSeats ] = useState([]);

    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <TopBar />
            <Routes>
                <Route path="/" element={<MoviesView />} />
                <Route path="/sessoes/:movieId" element={<Sessions />} />
                <Route path="/assentos/:sessionId" element={<SeatsView selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} />} />
                <Route path="/sucesso" element={<SucessView />} />
            </Routes>
            </BrowserRouter>
        </>
    );
}