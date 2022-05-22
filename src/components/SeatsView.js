import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import SeatsList from "./SeatsList";
import SeatsSubtitle from "./SeatsSubtitle";
import FormUser from "./FormUser";
import Footer from "./Fotter";

export default function SeatsView({ setBuyerData, sessionData, setSessionData }) {
  const sessionId = useParams().sessionId;
  const [ seats, setSeats ] = useState([]);
  const [ selectedSeats, setSelectedSeats ] = useState([]);

  useEffect(() => {
    const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${ sessionId }/seats`);

    promise.catch(err => { console.log(`Problema na API com assentos, status: ${ err.response.status }`) });

    promise.then(response => {
      setSessionData(response.data);
      setSeats(response.data.seats);
    });
  }, [sessionId, setSessionData]);

  return (
    <SeatsContent>
      <h2>Selecione o(s) assento(s)</h2>

      <SeatsList seats={ seats } selectedSeats={ selectedSeats } setSelectedSeats={ setSelectedSeats } />
      <SeatsSubtitle />
      <FormUser selectedSeats={ selectedSeats } setBuyerData={ setBuyerData } />
      {
        sessionData.movie !== undefined
          ?
          <Footer>
            <img src={ sessionData.movie.posterURL } alt={ sessionData.movie.title } />
            <NameTime>
              <h3>{ sessionData.movie.title }</h3>
              <p>{`${ sessionData.name } - ${ sessionData.day.weekday }`}</p>
            </NameTime>
          </Footer>
          :
          <></>
      }
    </SeatsContent>
  );
}

const SeatsContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    margin: 60px 0 100px 0;

    h2 {
        margin: 60px 0;
        font-size: 24px;
        color: #293845;
    }
`;

const NameTime = styled.div`
    display: flex;
    flex-direction: column;

    p {
        margin-top: 10px
    }
`;