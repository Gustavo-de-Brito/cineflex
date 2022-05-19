import styled from "styled-components";
import Session from "./Session";

export default function Sessions() {
    return (
        <SessionsContent>
            <h2>Selecione o horário</h2>
            <SessionsList>
                <Session />
                <Session />
            </SessionsList>
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
        margin: 50px 0;
        font-size: 24px;
        color: #293845;
    }
`;

const SessionsList = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
`;