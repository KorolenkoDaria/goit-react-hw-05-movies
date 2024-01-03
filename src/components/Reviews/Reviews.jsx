import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import { fetchReviewsById } from "servisce/api"

import ReviewsList from "components/ReviewsList/ReviewsList";
import Container from "components/Container/Container";
import Loader from "components/Loader/Loader";

import { StyledH2 } from "./Reviews.styled";

const Reviews = () => {
    const { movieId } = useParams();
    const [reviewData, setReviewData] = useState();
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        const fetchReviews = async () => {
            if (!movieId) {
                return
            }
            try {
                const reviewsResponse = await fetchReviewsById(movieId);
                setReviewData(reviewsResponse);
            } catch (error) {
                console.log(error.message);
            } finally {
                setLoader(false);
            }
        }
        fetchReviews();
    }, [movieId]);

    return (
        <Container>
            {loader && <Loader />}
            {reviewData && reviewData.results.length === 0 ? <StyledH2>Reviews is not found!</StyledH2> : <ReviewsList review={reviewData}></ReviewsList>}
        </Container>
    )
}
export default Reviews