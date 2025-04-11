import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import Loading from "./loading";
import Cards from "./partials/Cards";

const Tvshows = () => {

    document.title = "SCSDB | Tv shows" ;
    const navigate = useNavigate();
    const [category, setcategory] = useState("airing_today");
    const [tv, settv] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);
   
  
    const GetTv= async () => {
      try {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/tv/${category}?api_key=72ec8e3a7c9cdca894eca33efc30bdba&page=${page}`

        );
       
  
        // settv(data.results);
        if (data.results.length > 0) {
          settv((prevstate) => [...prevstate, ...data.results]);
          setpage(page + 1);
        } else {
          sethasMore(false);
        }
      } catch (error) {
        console.log("Error:", error);
      }
    };
  
    const refersHandler = async () => {
      if (tv.length === 0) {
        GetTv();
      } else {
        setpage(1);
        settv([]);
        GetTv();
      }
    };
  
    useEffect(() => {
      refersHandler();
    }, [category]);

  return tv.length > 0 ? (
    <div className=" w-screen h-screen ">
      <div className="px-[3%] w-full flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line"
          ></i>
          Tv Shows<small className='ml-2 text-sm text-zinc-600'>({category})</small>
        </h1>

        <div className="flex items-center w-[80%] ">
          <Topnav />
          <Dropdown
            title="Category"
            options={["on_the_air","popular","top_rated","airing_today"]}
            func={(e) => setcategory(e.target.value)}
          />
          <div className="w-[2%]"></div>
          
        </div>
      </div>
      <InfiniteScroll
        dataLength={tv.length}
        next={GetTv}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={tv} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Tvshows;