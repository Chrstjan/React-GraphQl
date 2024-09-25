import { useQuery } from "@tanstack/react-query"
import { request } from "graphql-request"
import { allFilms } from "../queries/allFilms"
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const LandingPage = () => {

    const {data, isLoading, error} = useQuery({
        queryKey: ["allFilms"],
        queryFn:  async () => request('https://swapi-graphql.netlify.app/.netlify/functions/index', allFilms)
    });

    useEffect(() => {
        console.log("Data:", data);
    }, [data])

    if (isLoading) {
        return (<div>Fetching data from a galaxy far far away</div>);
    }

    if (error) {
        return (<div>This is not the data you're looking for</div>);
    }
    
    return (
        <div style={{display: "flex", flexDirection: "column", gap: "1rem"}}>{data?.allFilms?.films?.map((item) => {
            return (
                <Link to={`/search/${item.id}`} key={item.title}>Star Wars: {item.title}</Link>
            )
        })}</div>
    )
}