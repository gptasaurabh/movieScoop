import React, { useState, useEffect } from "react";
import axios from "../../utils/axios"; // Assuming this is your axios instance setup
import { Link } from "react-router-dom";
import noimage from '/noimage.jpg';

const Topnav = () => {
  const [query, setquery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searches, setSearches] = useState([]);

  // Function to fetch the search results from OMDB
  const GetSearches = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=72ec8e3a7c9cdca894eca33efc30bdba`
       
      );
      setSearches(data.results);
      
    } catch (error) {
      console.log("Error:", error);
    }
  };

  // UseEffect hook to trigger the GetSearches function whenever the query changes
  useEffect(() => {
    GetSearches();
  }, [query]); // Trigger the effect when `query` changes

  return (
    <div className="  w-[80%] h-[10vh] relative flex mx-auto items-center">
      <div className="w-[50%] flex justify-start items-center border rounded-full px-4 py-2 gap-2 bg-transparent border-transparent">
        <i className="text-zinc-400 text-2xl ri-search-fill"></i>
        <input
          onChange={(e) => setquery(e.target.value)} // Set query when user types
          value={query}
          className="w-full bg-transparent outline-none border-none text-white"
          type="text"
          placeholder="Search anything"
        />
        {query.length > 0 && (
          <i
            onClick={() => setquery("")} // Clear the query on click
            className="text-zinc-400 text-2xl ri-close-fill"
          ></i>
        )}
      </div>

      {/* Dropdown to show search results */}
      {searches && (
        <div className="z-[100] absolute w-[50%]  max-h-[50vh] bg-zinc-200 top-[100%] left-[2.5%] overflow-auto">
          {searches.map((s, i) => (
            <Link
              key={i} // Fixed missing `key` prop
              className="hover:text-black hover:bg-zinc-300 font-semibold text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100"
            >
              <img className="w-[10vh] h-[10vh] object-cover rounded mr-5 shadow-lg"
              src={
                (s.backdrop_path ||
                s.profile_path)?`https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}` :noimage} alt="" />
              <span>{s.name || s.title || s.original_name||s.original_title}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Topnav;
