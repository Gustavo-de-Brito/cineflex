import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Movie({ imageUrl, title, movieId }) {
  return (
    <Link to={`/sessoes/${ movieId }`}>
      <MoviePost>
        <img src={ imageUrl } alt={ title } />
      </MoviePost>
    </Link>
  );
}

const MoviePost = styled.li`
  padding: 8px;
  border-radius: 4px;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  margin-bottom: 28px;

  img {
    width: 128px;
    height: auto;
  }
`;