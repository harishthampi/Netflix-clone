import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Banner.css";
import requests from "./Request";

export default function Banner() {
    const[movie,setMovie] = useState([]);

    useEffect(() =>{
        async function fetchData () {
            const request =  await axios.get(requests.fetchNetflixOriginals)
            setMovie(request.data.results[Math.floor(Math.random()*(request.data.results.length-1))]);
            return request;
        }
        fetchData();
    },[])

     function truncate(string,n){
        return string.length > n ? string.substr(0,n-1)+'...':string
     }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage:`url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-content">
        <h1 className="banner-title">{movie?.title || movie?.name || movie?.original_name}</h1>
        <div>
          <button className="banner-button">Play</button>
          <button className="banner-button">My List</button>
        </div>
        <h1 className="banner-info">
            {truncate(`${movie?.overview}`,150)}
        </h1>
      </div>
      <div className="banner-fadeBottom"></div>
    </header>
  );
}
