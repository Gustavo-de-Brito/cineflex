import styled from "styled-components";

export default function Buttons({ showTimes }) {
    return (
        <SessionsTime>
            { showTimes.map((time, index) => <button key={index}>{time.name}</button>) }
        </SessionsTime>
    );
}

const SessionsTime = styled.div`
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