import React from "react";
import ReactPlayer from "react-player";
import { useLocation } from "react-router-dom";

import "./Home.css";
const books = require("./Books.json");


const Player = ()=>{
    const location = useLocation().search;
    const bookID = new URLSearchParams(location).get("book");
    const data = books.filter((i)=> i.id === bookID);
    console.log(data);
    const BookCard = ()=>{
        return (
            <div className="bookcard-container">
                <img className="bookcard-image" src={"/Images/book"+bookID+".png"} alt="book thumbnail"></img>
                <h1 className="bookcard-title">{data[0].title}</h1>
            </div>
        )
    }
    return(
        <section className="player-section">
        <h1>Player</h1>
            <BookCard />
            <div className="player-container">
            <ReactPlayer width={"98%"} height={"3rem"} url={"/Music/book"+bookID+".mp3"} controls={true} playing={true} onError={(err)=>{console.log(err);}}/>
            </div>
        </section>
        
    );
}

export default Player;