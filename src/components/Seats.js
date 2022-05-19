import styled from "styled-components";

export default function Seats() {
    return (
        <SeatsContent>
            <h2>Selecione o(s) assento(s)</h2>
            <SeatsList>
                
            </SeatsList>
        </SeatsContent>
    );
}

const SeatsContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    margin-top: 60px;

    h2 {
        margin: 60px 0;
        font-size: 24px;
        color: #293845;
    }
`;

const SeatsList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
`;