import styled from "styled-components";
import Session from "./Session";

export default function SessionList({ sessions }) {
    return (
        <Sessions>
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
        </Sessions>
    );
}

const Sessions = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 140px;
`;