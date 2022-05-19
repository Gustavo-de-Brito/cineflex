import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Movie({ imageUrl, title, movieId }) {
    return (
        <Link to={ `/sessoes/${movieId}` }>
            <MoviePost>
                <img src={ imageUrl } alt={ title }/>
            </MoviePost>
        </Link>
    );
}

const MoviePost = styled.li`
    img {
        width: 128px;
        height: auto;
        margin-bottom: 28px;
    }
`;