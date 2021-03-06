import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import SucessPurchase from "./SucessPurchase";

export default function SucessView({ buyerData, sessionData, restartData }) {
  const navigate = useNavigate();

  function backHome() {
    restartData();
    navigate("/", { replace: true });
  }

  return (
    <SucessContent>
      <SucessMessage>Pedido feito com sucesso!</SucessMessage>
      <SucessPurchase buyerData={ buyerData } sessionData={ sessionData } />
      <button onClick={ backHome }>Voltar pra Home</button>
    </SucessContent>
  );
}

const SucessContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;

  button {
    margin: 50px;
    padding: 10px 20px;
    background-color: #E8833A;
    border-radius: 4px;
    border: none;
    color: #FFFFFF;
    text-align: center;
    font-size: 18px;
  }
`;

const SucessMessage = styled.h2`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: #247A6B;
  width: 40%;
`;