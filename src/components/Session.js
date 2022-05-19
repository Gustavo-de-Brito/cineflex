import styled from "styled-components";
import Buttons from "./Buttons";

export default function Session({ weekday, day, showTimes }) {
    return(
        <SessionItem>
            <h3>{ `${ weekday } - ${day}` }</h3>
            <Buttons showTimes={ showTimes } />
        </SessionItem>
    );
}

const SessionItem = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    padding: 0 20px;
    margin-bottom: 40px;

    h3 {
        font-size: 20px;
        color: #293845;
        margin-bottom: 40px;
    }
`;