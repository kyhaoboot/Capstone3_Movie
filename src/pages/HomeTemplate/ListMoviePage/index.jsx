import React from "react";
import Movie from "./Movie";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
// import { data } from "react-router-dom";
import { fetchListMovie } from "./slice";
export default function ListMoviePage() {
  // console.log(state);
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.listMovieSlice);
  useEffect(() => {
    dispatch(fetchListMovie());
  }, []);
  if (loading) return <p>Loading</p>;

  const renderMovie = () => {
    if (data) {
      return data.map((movie) => {
        return <Movie key={movie.maPhim} movie={movie} />;
      });
    }
  };
  return (
    <div className="container mx-auto">
      <h1>List Movie Page</h1>
      <div className="grid grid-cols-4 gap-10">{renderMovie()}</div>
    </div>
  );
}
