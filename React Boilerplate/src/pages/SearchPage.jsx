import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import { singleFilm } from "../queries/singleFilm";
import { useEffect } from "react";

export const SearchPage = () => {
  const { filmID } = useParams();

  console.log(filmID);

  const {data, isLoading, error} = useQuery({
    queryKey: ["single film"],
    queryFn:  async () => request('https://swapi-graphql.netlify.app/.netlify/functions/index', singleFilm, {filmId: filmID})
  });

  if (isLoading) {
    return (<div>Fetching data from a galaxy far far away</div>);
  }

  if (error) {
    return (<div>This is not the data you're looking for</div>);
  }

useEffect(() => {
  console.log("Film Data:", data);
}, [data])
  
  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <h2>Star Wars: {data?.film.title}</h2>
      <p style={{width: "400px"}}>{data?.film?.openingCrawl}</p>
    </div>
  )
}
