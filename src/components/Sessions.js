import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Session from "./Session";
import Footer from "./Fotter";

export default function Sessions() {
    const movieId = useParams().movieId;
    const [ movieData, setMovieData ] = useState({});
    const [ sessions, setSessions ] = useState([]);
    
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${ movieId }/showtimes`);

        promise.then(response => {
            setMovieData(response.data);
            setSessions(response.data.days);
        });
    }, [movieId])

    return (
        <SessionsContent>
            <h2>Selecione o horário</h2>
            <SessionsList>
                { 
                    sessions.length > 0 
                    ?
                    sessions.map((session, index) => {
                        return (
                            <Session
                            key={index}
                            weekday={ session.weekday }
                            day={ session.date }
                            showTimes={ session.showtimes }
                        />)
                    })
                    :
                    <></>
                }
            </SessionsList>
            <Footer>
                <img src={ movieData.posterURL } alt={ movieData.title }/>
                <h3>{ movieData.title }</h3>
            </Footer>
        </SessionsContent>
    );
}

const SessionsContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
    width: 100vw;

    h2 {
        margin: 60px 0;
        font-size: 24px;
        color: #293845;
    }
`;

const SessionsList = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 140px;
`;