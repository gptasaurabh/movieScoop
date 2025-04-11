import React from 'react'

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import Loading from "./Loading";
import Cards from "./partials/Cards";


const movie = () => {
    document.title = "SCSDB | movies" ;
    const navigate = useNavigate();
    const [category, setcategory] = useState("now_playing");
    const [movie, setmovie] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);
   
  
    const GetMovie= async () => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${category}?api_key=72ec8e3a7c9cdca894eca33efc30bdba&page=${page}`
        );
       
  
        // setmovie(data.results);
        if (data.results.length > 0) {
          setmovie((prevstate) => [...prevstate, ...data.results]);
          setpage(page + 1);
        } else {
          sethasMore(false);
        }
      } catch (error) {
        console.log("Error:", error);
      }
    };
  
    const refersHandler = async () => {
      if (movie.length === 0) {
        GetMovie();
      } else {
        setpage(1);
        setmovie([]);
        GetMovie();
      }
    };
  
    useEffect(() => {
      refersHandler();
    }, [category]);
  
    return movie.length > 0 ? (
        <div className=" w-screen h-screen ">
          <div className="px-[3%] w-full flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-zinc-400">
              <i
                onClick={() => navigate(-1)}
                className="hover:text-[#6556CD] ri-arrow-left-line"
              ></i>
              Movie<small className='ml-2 text-sm text-zinc-600'>({category})</small>
            </h1>
    
            <div className="flex items-center w-[80%] ">
              <Topnav />
              <Dropdown
                title="Category"
                options={["popular","top_rated","upcoming","now_playing"]}
                func={(e) => setcategory(e.target.value)}
              />
              <div className="w-[2%]"></div>
              
            </div>
          </div>
          <InfiniteScroll
            dataLength={movie.length}
            next={GetMovie}
            hasMore={hasMore}
            loader={<h1>Loading...</h1>}
          >
            <Cards data={movie} title={category} />
          </InfiniteScroll>
        </div>
      ) : (
        <Loading />
      );
    };
    
    export default movie;