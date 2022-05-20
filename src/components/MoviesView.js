import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import MoviesList from "./MoviesList";

export default function MoviesView() {
    const [ movies, setMovies ] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

        promise.then(reponse => setMovies(reponse.data));
    }, [])

    return (
        <Content>
            <h2>Selecione o filme</h2>
            <MoviesList movies={ movies }/>
        </Content>
    );
}

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
    width: 100vw;

    h2 {
        margin: 50px 0;
        font-size: 24px;
        color: #293845;
    }
`;