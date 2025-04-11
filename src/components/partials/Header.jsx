import React from "react";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.7), rgba(0,0,0,.9)),url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
        
      }}
      className="w-full h-[50vh]  flex flex-col justify-end items-start p-[5%] mt-[1vh]"
    >
      <h1 className="w-[70%] text-5xl font-black text-white ">
        {data.name || data.title || data.original_name || data.original_title}
      </h1>
      <p className="w-[70%] mt-3 text-white">{data.overview.slice(0, 200)}</p>
      <p className="text-white mt-2 flex gap-x-1">
        <i className=" text-yellow-500 ri-megaphone-fill "></i>{" "}
        {data.release_date || "No Information Available"}
        <i className="ml-5 text-yellow-500 ri-album-fill"></i>{" "}
        {data.media_type.toUpperCase()}
      </p>
      <Link className="bg-[#6556CD] p-4 mt-2 rounded text-white font-semibold">
        Watch Trailer
      </Link>
    </div>
  );
};

export default Header;
