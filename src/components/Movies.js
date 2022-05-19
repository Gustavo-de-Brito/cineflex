import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import Movie from "./Movie";

export default function Movies() {
    const [ movies, setMovies ] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

        promise.then(reponse => setMovies(reponse.data));
    }, [])

    return (
        <Content>
            <h2>Selecione o filme</h2>
            <MoviesList>
                {movies.length !== 0 
                ?
                movies.map((movie, index) => {
                    return (
                    <Movie
                        key={index}
                        imageUrl={movie.posterURL}
                        title={movie.title}
                    />)
                })
                :
                <></>
                }
            </MoviesList>
        </Content>
    );
}

const Content = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        margin: 40px 0;
        font-size: 24px;
        color: #293845;
    }
`;

const MoviesList = styled.ul`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;