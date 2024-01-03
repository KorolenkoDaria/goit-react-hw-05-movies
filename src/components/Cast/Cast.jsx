import { fetchCastById } from "../../servisce/api";

import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import CastList from "components/CastList/CastList";
import Loader from "components/Loader/Loader";

import { StyledH2 } from "./Cast.styled";

const Cast = () => {
    const { movieId } = useParams();
    const [characters, setCharacters] = useState({});
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        setLoader(true);
        const fetchCast = async () => {
            if (!movieId) return
            try {
                const castData = await fetchCastById(movieId);
                setCharacters(castData);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoader(false);
            }
        }
        fetchCast();
    }, [movieId]);
    const { cast } = characters;
    return (
        <>
            {loader && <Loader />}
            {characters.cast && characters.cast.length === 0 ? <StyledH2>Cast is not found!</StyledH2> : <CastList cast={cast} />}
        </>
    )
}
export default Cast;    