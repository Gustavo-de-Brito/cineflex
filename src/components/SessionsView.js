import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import SessionList from "./SessionsList";
import Footer from "./Fotter";

export default function SessionsView() {
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
      <SessionList sessions={ sessions } />
      <Footer>
        {
          movieData.title !== undefined
          ?
          <>
            <img src={ movieData.posterURL } alt={ movieData.title } />
            <h3>{ movieData.title }</h3>
          </>
          :
          <></>
        }
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