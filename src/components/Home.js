import React from "react";
import "./Home.css";

import { useNavigate } from "react-router-dom";
const books = require("./Books.json");


const Home = ()=>{
    const Navigate = useNavigate();
    const Book = ({image, title, id}) =>{
        return (
            <div className="book-container" onClick={()=> Navigate("/play?book="+ id)}>
                <img className="book-image" src={image} alt="book"></img>
                <p className="book-title">{title}</p>
            </div>
        )
    }

   
    const mapBooks = (i)=>{
        return(<Book image={"/Images/book"+i.id+".png"} title={i.title} id={i.id}/>)
    }
    
    return(
        <section className="home-section">
            <div className="banner-container">
                <img className="banner-image" src={"/Images/banner.jpg"} alt="banner" ></img>
            </div>
            
            <div className="catagories-container">
                <h3>catagories</h3>
                <div className="catagory-grid">
                    <p className="catagory-text">Free Summaries</p>
                    <p className="catagory-text">Business</p>
                    <p className="catagory-text">Business</p>
                    <p className="catagory-text">Business</p>
                    <p className="catagory-text">Business</p>
                    <p className="catagory-text">Business</p>
                    <p className="catagory-text">Business</p>
                    <p className="catagory-text">Business</p>
                    <p className="catagory-text">Business</p>
                </div>
                
            </div>

            <div className="books-section">
                <h3>Audio Books</h3>

                <div className="books-container">
                    {books.map((i)=>mapBooks(i))}
                </div>
                

            </div>
        </section>
    );
}

export default Home;