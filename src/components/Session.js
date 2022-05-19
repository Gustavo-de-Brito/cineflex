import styled from "styled-components";

export default function Session() {
    return(
        <SessionItem>
            <h3>dia - horário</h3>
            <Buttons>
                <button>horário</button>
                <button>horário</button>
            </Buttons>
        </SessionItem>
    );
}

const SessionItem = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    padding: 0 20px;
    margin-bottom: 20px;

    h3 {
        font-size: 20px;
        color: #293845;
        margin-bottom: 22px;
    }
`;

const Buttons = styled.div`
    display: flex;
    align-items: center;
    width: 100%;

    button {
        padding: 10px 20px;
        background-color: #E8833A;
        border-radius: 4px;
        border: none;
        color: #FFFFFF;
        text-align: center;
        font-size: 18px;
        margin-right: 8px;
    }
`;