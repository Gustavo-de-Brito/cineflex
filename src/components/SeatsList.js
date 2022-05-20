import styled from "styled-components";
import Seat from "./Seat";

export default function SeatsList({ seats, selectedSeats, setSelectedSeats }) {
    return (
        <Seats>
            {
                seats.length > 0
                ?
                seats.map((seat, index) => {
                    return (
                        <Seat
                            key={index}
                            name={seat.name}
                            seatId={seat.id}
                            selectedSeats={selectedSeats}
                            setSelectedSeats={setSelectedSeats}
                            isAvailable={seat.isAvailable}
                        />
                    );
                })
                :
                <></>
            }
        </Seats>
    );
}

const Seats = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    padding: 0 14px;
`;