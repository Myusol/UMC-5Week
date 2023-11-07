import React from "react";
import { MovieContents, MoviePoster, MovieInfo, MovieDetail } from './Movie.style'

function Movie(props) {
    return (
        <MovieContents>
            <MoviePoster src={`https://image.tmdb.org/t/p/w1280/${props.poster}`} alt={`${props.title} 포스터`} />
            <MovieInfo>
                <div className="movie-title">{props.title}</div>
                <div className="movie-rate">{props.rate}</div>
            </MovieInfo>
            <MovieDetail>
                <div className="detail-title">{props.title}</div>
                <div className="detail-overview">{props.overview}</div>
            </MovieDetail>
        </MovieContents>
    )
  }
  
  export default Movie