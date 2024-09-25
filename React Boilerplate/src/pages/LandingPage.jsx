import { useQuery } from "@tanstack/react-query"
import { request } from "graphql-request"
import { allFilms } from "../queries/allFilms"
import { useEffect } from "react";

export const LandingPage = () => {

    const {data, isLoading, error} = useQuery({
        queryKey: ["allFilms"],
        queryFn:  async () => request('https://swapi-graphql.netlify.app/.netlify/functions/index', allFilms)
    });

    useEffect(() => {
        console.log("Data:", data);
    }, [data])

    return (
        <div>{data?.allFilms?.films?.map((item) => {
            return (
                <p key={item.title}>{item.title}</p>
            )
        })}</div>
    )
}