import { fetchCastById } from "../servisce/api";

import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import CastList from "components/CastList/CastList";
import Loader from "components/Loader/Loader";

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
            <CastList cast={cast} />
        </>
    )
}
export default Cast; 