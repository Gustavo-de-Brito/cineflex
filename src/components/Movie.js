import styled from "styled-components";

export default function Movie({ imageUrl, title }) {
    return (
        <MoviePost>
            <img src={ imageUrl } alt={ title }/>
        </MoviePost>
    );
}

const MoviePost = styled.li`
    img {
        width: 128px;
        height: auto;
        margin-bottom: 28px;
    }
`;