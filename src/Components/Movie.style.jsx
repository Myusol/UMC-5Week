import styled from "styled-components";

export const MovieInfo = styled.div`
    position: relative;
    background-color: rgba(55, 59, 105, 1);
    color: rgba(255, 255, 255, 1);
    display: flex;
    height: 20px;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    padding: 10px;

    .movie-title {
        font-size: 13.5px;
        font-weight: bold;
        text-align: left;
        margin-left: 3px;
        margin-right: 3px;
    }

    .movie-rate {
        font-size: 14px;
        margin-right: 3px;
    }
`;

export const MoviePoster = styled.img`
    width: 100%;
    height: 250px;
`;

export const MovieDetail = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    height: 350px;
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 10px;
    display: none;
    z-index: 1;

    .detail-title {
        color: rgba(255, 255, 255, 0.7);
        font-size: 14px;
        font-weight: bold;
        text-align: left;
        margin-top: 8px;
        margin-bottom: 10px;
        padding: 5px;
    }

    .detail-overview {
        color: rgba(255, 255, 255, 0.7);
        font-size: 13.5px;
        padding: 5px;
        display: -webkit-box;
        overflow: hidden;
        -webkit-line-clamp: 15; /* 표시할 줄 수 */
        -webkit-box-orient: vertical;
        margin-bottom: 8px;
    }
`;

export const MovieContents = styled.div`
    position: relative;
    background-color: rgba(55, 59, 105, 1);
    margin: 10px;
    height: 370px;
    width: 200px;
      
    &:hover ${MovieDetail} {
        display: block;
    }
`;